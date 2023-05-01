import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { PropertyUpdateOneRequiredWithoutKeyManagementNestedInputObjectSchema } from "./PropertyUpdateOneRequiredWithoutKeyManagementNestedInput.schema";
import { UserUpdateOneRequiredWithoutKeyManagementNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutKeyManagementNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    collectorName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    collectorCompany: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    collectorPhoneNumber: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    property: z
      .lazy(
        () =>
          PropertyUpdateOneRequiredWithoutKeyManagementNestedInputObjectSchema
      )
      .optional(),
    authorizedBy: z
      .lazy(
        () => UserUpdateOneRequiredWithoutKeyManagementNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const KeyManagementUpdateInputObjectSchema = Schema;
