import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { KeyManagementCountOrderByAggregateInputObjectSchema } from "./KeyManagementCountOrderByAggregateInput.schema";
import { KeyManagementMaxOrderByAggregateInputObjectSchema } from "./KeyManagementMaxOrderByAggregateInput.schema";
import { KeyManagementMinOrderByAggregateInputObjectSchema } from "./KeyManagementMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    collectorName: z.lazy(() => SortOrderSchema).optional(),
    collectorCompany: z.lazy(() => SortOrderSchema).optional(),
    collectorPhoneNumber: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => KeyManagementCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => KeyManagementMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => KeyManagementMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const KeyManagementOrderByWithAggregationInputObjectSchema = Schema;
