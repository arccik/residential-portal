import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { CollectorTypeSchema } from "../enums/CollectorType.schema";
import { NullableEnumCollectorTypeFieldUpdateOperationsInputObjectSchema } from "./NullableEnumCollectorTypeFieldUpdateOperationsInput.schema";
import { NullableIntFieldUpdateOperationsInputObjectSchema } from "./NullableIntFieldUpdateOperationsInput.schema";
import { KeyOutForPeriodsSchema } from "../enums/KeyOutForPeriods.schema";
import { NullableEnumKeyOutForPeriodsFieldUpdateOperationsInputObjectSchema } from "./NullableEnumKeyOutForPeriodsFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementUncheckedUpdateWithoutAuthorizedByInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      propertyId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      company: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      phoneNumber: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      type: z
        .union([
          z.lazy(() => CollectorTypeSchema),
          z.lazy(
            () =>
              NullableEnumCollectorTypeFieldUpdateOperationsInputObjectSchema
          ),
        ])
        .optional()
        .nullable(),
      outDays: z
        .union([
          z.number(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      periodic: z
        .union([
          z.lazy(() => KeyOutForPeriodsSchema),
          z.lazy(
            () =>
              NullableEnumKeyOutForPeriodsFieldUpdateOperationsInputObjectSchema
          ),
        ])
        .optional()
        .nullable(),
      expireDate: z
        .union([
          z.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      notes: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      emailKeyActivity: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      signature: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const KeyManagementUncheckedUpdateWithoutAuthorizedByInputObjectSchema =
  Schema;
