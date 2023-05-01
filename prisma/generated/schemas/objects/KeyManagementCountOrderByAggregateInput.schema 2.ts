import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    collectorName: z.lazy(() => SortOrderSchema).optional(),
    collectorCompany: z.lazy(() => SortOrderSchema).optional(),
    collectorPhoneNumber: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const KeyManagementCountOrderByAggregateInputObjectSchema = Schema;
