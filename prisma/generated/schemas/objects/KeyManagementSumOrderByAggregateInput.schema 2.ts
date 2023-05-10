import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementSumOrderByAggregateInput> = z
  .object({
    outDays: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const KeyManagementSumOrderByAggregateInputObjectSchema = Schema;
