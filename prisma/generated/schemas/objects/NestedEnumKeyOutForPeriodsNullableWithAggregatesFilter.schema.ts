import { z } from "zod";
import { KeyOutForPeriodsSchema } from "../enums/KeyOutForPeriods.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumKeyOutForPeriodsNullableFilterObjectSchema } from "./NestedEnumKeyOutForPeriodsNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumKeyOutForPeriodsNullableWithAggregatesFilter> =
  z
    .object({
      equals: z
        .lazy(() => KeyOutForPeriodsSchema)
        .optional()
        .nullable(),
      in: z
        .lazy(() => KeyOutForPeriodsSchema)
        .array()
        .optional()
        .nullable(),
      notIn: z
        .lazy(() => KeyOutForPeriodsSchema)
        .array()
        .optional()
        .nullable(),
      not: z
        .union([
          z.lazy(() => KeyOutForPeriodsSchema),
          z.lazy(
            () =>
              NestedEnumKeyOutForPeriodsNullableWithAggregatesFilterObjectSchema
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumKeyOutForPeriodsNullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumKeyOutForPeriodsNullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumKeyOutForPeriodsNullableWithAggregatesFilterObjectSchema =
  Schema;
