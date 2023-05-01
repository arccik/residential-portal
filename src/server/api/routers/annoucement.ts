import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

import {
  CopyObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";
import { s3Client, s3Server } from "../../s3";
import { env } from "~/env.mjs";

export const announceRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        subject: z.string(),
        text: z.string(),
        startDate: z.date().optional(),
        endDate: z.date().optional(),
        image: z.string(),
        sendingEmail: z.boolean().optional().default(false),
        archived: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const createdAnnoucement = await ctx.prisma.announcement.create({
        data: {
          subject: input.subject,
          text: input.text,
          startDate: input.startDate,
          endDate: input.endDate,
          image: input.image,
          sendingEmail: input.sendingEmail,
          archived: input.archived,
          userId: ctx.session.user.id,
        },
      });
      console.log("createdAnnoucement", createdAnnoucement);
      return {
        cretaed: true,
      };
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.announcement.findMany({ include: { user: true } });
  }),
  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.announcement.findFirst({
        where: {
          id: input.id,
        },
        include: { user: true },
      });
    }),
  createPresignedUrls: protectedProcedure
    .input(z.object({ count: z.number().gte(1).lte(4) }))
    .query(async ({ input }) => {
      const urls = [];

      for (let i = 0; i < input.count; i++) {
        const key = uuidv4();

        const url = await getSignedUrl(
          s3Client,
          new PutObjectCommand({
            Bucket: env.AWS_BACKET_NAME,
            Key: key,
          })
        );

        urls.push({
          url,
          key,
        });
      }

      return urls;
    }),
});

export type AnnounceRouter = typeof announceRouter;
