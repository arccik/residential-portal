import { z } from "zod";
import { CollectorTypeSchema } from "../enums/CollectorType.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumCollectorTypeNullableFilterObjectSchema } from "./NestedEnumCollectorTypeNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumCollectorTypeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z
        .lazy(() => CollectorTypeSchema)
        .optional()
        .nullable(),
      in: z
        .lazy(() => CollectorTypeSchema)
        .array()
        .optional()
        .nullable(),
      notIn: z
        .lazy(() => CollectorTypeSchema)
        .array()
        .optional()
        .nullable(),
      not: z
        .union([
          z.lazy(() => CollectorTypeSchema),
          z.lazy(
            () =>
              NestedEnumCollectorTypeNullableWithAggregatesFilterObjectSchema
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumCollectorTypeNullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumCollectorTypeNullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumCollectorTypeNullableWithAggregatesFilterObjectSchema =
  Schema;
