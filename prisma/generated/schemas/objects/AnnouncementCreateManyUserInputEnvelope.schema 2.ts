import { z } from "zod";
import { AnnouncementCreateManyUserInputObjectSchema } from "./AnnouncementCreateManyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AnnouncementCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => AnnouncementCreateManyUserInputObjectSchema),
      z.lazy(() => AnnouncementCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const AnnouncementCreateManyUserInputEnvelopeObjectSchema = Schema;
