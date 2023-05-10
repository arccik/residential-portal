import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AnnouncementCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    subject: z.string(),
    text: z.string(),
    startDate: z.date().optional().nullable(),
    endDate: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    sendingEmail: z.boolean().optional(),
    archived: z.boolean().optional(),
    filter: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const AnnouncementCreateWithoutUserInputObjectSchema = Schema;
