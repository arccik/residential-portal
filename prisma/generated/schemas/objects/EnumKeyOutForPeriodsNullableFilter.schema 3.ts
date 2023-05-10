import { z } from "zod";
import { KeyOutForPeriodsSchema } from "../enums/KeyOutForPeriods.schema";
import { NestedEnumKeyOutForPeriodsNullableFilterObjectSchema } from "./NestedEnumKeyOutForPeriodsNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumKeyOutForPeriodsNullableFilter> = z
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
        z.lazy(() => NestedEnumKeyOutForPeriodsNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const EnumKeyOutForPeriodsNullableFilterObjectSchema = Schema;
