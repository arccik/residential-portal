import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementAvgOrderByAggregateInput> = z
  .object({
    outDays: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const KeyManagementAvgOrderByAggregateInputObjectSchema = Schema;
