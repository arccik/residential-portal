import {
  ResidentCreateOneSchema,
  ResidentCreateInputObjectSchema,
} from "prisma/generated/schemas";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

ResidentCreateOneSchema;
export const residentsRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.resident.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  create: protectedProcedure
    .input(ResidentCreateInputObjectSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.resident.create({ data: input });
    }),
});
