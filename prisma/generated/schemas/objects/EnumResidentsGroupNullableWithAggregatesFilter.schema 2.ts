import { z } from "zod";
import { ResidentsGroupSchema } from "../enums/ResidentsGroup.schema";
import { NestedEnumResidentsGroupNullableWithAggregatesFilterObjectSchema } from "./NestedEnumResidentsGroupNullableWithAggregatesFilter.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumResidentsGroupNullableFilterObjectSchema } from "./NestedEnumResidentsGroupNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumResidentsGroupNullableWithAggregatesFilter> =
  z
    .object({
      equals: z
        .lazy(() => ResidentsGroupSchema)
        .optional()
        .nullable(),
      in: z
        .lazy(() => ResidentsGroupSchema)
        .array()
        .optional()
        .nullable(),
      notIn: z
        .lazy(() => ResidentsGroupSchema)
        .array()
        .optional()
        .nullable(),
      not: z
        .union([
          z.lazy(() => ResidentsGroupSchema),
          z.lazy(
            () =>
              NestedEnumResidentsGroupNullableWithAggregatesFilterObjectSchema
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumResidentsGroupNullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumResidentsGroupNullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const EnumResidentsGroupNullableWithAggregatesFilterObjectSchema =
  Schema;
