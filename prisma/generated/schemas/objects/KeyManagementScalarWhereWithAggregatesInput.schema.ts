import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema";
import { EnumCollectorTypeNullableWithAggregatesFilterObjectSchema } from "./EnumCollectorTypeNullableWithAggregatesFilter.schema";
import { CollectorTypeSchema } from "../enums/CollectorType.schema";
import { IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema";
import { EnumKeyOutForPeriodsNullableWithAggregatesFilterObjectSchema } from "./EnumKeyOutForPeriodsNullableWithAggregatesFilter.schema";
import { KeyOutForPeriodsSchema } from "../enums/KeyOutForPeriods.schema";
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema";
import { BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => KeyManagementScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => KeyManagementScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => KeyManagementScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => KeyManagementScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => KeyManagementScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    propertyId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    company: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    phoneNumber: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    type: z
      .union([
        z.lazy(() => EnumCollectorTypeNullableWithAggregatesFilterObjectSchema),
        z.lazy(() => CollectorTypeSchema),
      ])
      .optional()
      .nullable(),
    outDays: z
      .union([
        z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    periodic: z
      .union([
        z.lazy(
          () => EnumKeyOutForPeriodsNullableWithAggregatesFilterObjectSchema
        ),
        z.lazy(() => KeyOutForPeriodsSchema),
      ])
      .optional()
      .nullable(),
    expireDate: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.date(),
      ])
      .optional()
      .nullable(),
    notes: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    emailKeyActivity: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    signature: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const KeyManagementScalarWhereWithAggregatesInputObjectSchema = Schema;
