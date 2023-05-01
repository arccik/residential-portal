import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { KeyManagementCountOrderByAggregateInputObjectSchema } from "./KeyManagementCountOrderByAggregateInput.schema";
import { KeyManagementAvgOrderByAggregateInputObjectSchema } from "./KeyManagementAvgOrderByAggregateInput.schema";
import { KeyManagementMaxOrderByAggregateInputObjectSchema } from "./KeyManagementMaxOrderByAggregateInput.schema";
import { KeyManagementMinOrderByAggregateInputObjectSchema } from "./KeyManagementMinOrderByAggregateInput.schema";
import { KeyManagementSumOrderByAggregateInputObjectSchema } from "./KeyManagementSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    company: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    outDays: z.lazy(() => SortOrderSchema).optional(),
    periodic: z.lazy(() => SortOrderSchema).optional(),
    expireDate: z.lazy(() => SortOrderSchema).optional(),
    notes: z.lazy(() => SortOrderSchema).optional(),
    emailKeyActivity: z.lazy(() => SortOrderSchema).optional(),
    signature: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => KeyManagementCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => KeyManagementAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => KeyManagementMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => KeyManagementMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => KeyManagementSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const KeyManagementOrderByWithAggregationInputObjectSchema = Schema;
