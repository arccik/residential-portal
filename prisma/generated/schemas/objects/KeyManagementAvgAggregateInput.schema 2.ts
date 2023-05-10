import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementAvgAggregateInputType> = z
  .object({
    outDays: z.literal(true).optional(),
  })
  .strict();

export const KeyManagementAvgAggregateInputObjectSchema = Schema;
