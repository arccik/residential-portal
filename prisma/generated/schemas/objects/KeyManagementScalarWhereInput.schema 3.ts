import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { EnumCollectorTypeNullableFilterObjectSchema } from "./EnumCollectorTypeNullableFilter.schema";
import { CollectorTypeSchema } from "../enums/CollectorType.schema";
import { IntNullableFilterObjectSchema } from "./IntNullableFilter.schema";
import { EnumKeyOutForPeriodsNullableFilterObjectSchema } from "./EnumKeyOutForPeriodsNullableFilter.schema";
import { KeyOutForPeriodsSchema } from "../enums/KeyOutForPeriods.schema";
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";
import { BoolFilterObjectSchema } from "./BoolFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => KeyManagementScalarWhereInputObjectSchema),
        z.lazy(() => KeyManagementScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => KeyManagementScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => KeyManagementScalarWhereInputObjectSchema),
        z.lazy(() => KeyManagementScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    propertyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    company: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    phoneNumber: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    type: z
      .union([
        z.lazy(() => EnumCollectorTypeNullableFilterObjectSchema),
        z.lazy(() => CollectorTypeSchema),
      ])
      .optional()
      .nullable(),
    outDays: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    periodic: z
      .union([
        z.lazy(() => EnumKeyOutForPeriodsNullableFilterObjectSchema),
        z.lazy(() => KeyOutForPeriodsSchema),
      ])
      .optional()
      .nullable(),
    expireDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    notes: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailKeyActivity: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    signature: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const KeyManagementScalarWhereInputObjectSchema = Schema;
