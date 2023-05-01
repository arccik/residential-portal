import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AnnouncementMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    subject: z.literal(true).optional(),
    text: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    image: z.literal(true).optional(),
    sendingEmail: z.literal(true).optional(),
    archived: z.literal(true).optional(),
    filter: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const AnnouncementMinAggregateInputObjectSchema = Schema;
