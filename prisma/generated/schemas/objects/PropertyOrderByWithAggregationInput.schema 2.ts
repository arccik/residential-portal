import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { PropertyCountOrderByAggregateInputObjectSchema } from "./PropertyCountOrderByAggregateInput.schema";
import { PropertyMaxOrderByAggregateInputObjectSchema } from "./PropertyMaxOrderByAggregateInput.schema";
import { PropertyMinOrderByAggregateInputObjectSchema } from "./PropertyMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PropertyCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => PropertyMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PropertyMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PropertyOrderByWithAggregationInputObjectSchema = Schema;
