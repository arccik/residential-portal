import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from "./AccountUpdateManyWithoutUserNestedInput.schema";
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUpdateManyWithoutUserNestedInput.schema";
import { ResidentUpdateManyWithoutApprovedByUserNestedInputObjectSchema } from "./ResidentUpdateManyWithoutApprovedByUserNestedInput.schema";
import { KeyManagementUpdateManyWithoutAuthorizedByNestedInputObjectSchema } from "./KeyManagementUpdateManyWithoutAuthorizedByNestedInput.schema";
import { KeyCollectorUpdateManyWithoutAuthorizedByNestedInputObjectSchema } from "./KeyCollectorUpdateManyWithoutAuthorizedByNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateWithoutAnnouncementInput> = z
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
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    emailVerified: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    accounts: z
      .lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    AprovedResidents: z
      .lazy(
        () => ResidentUpdateManyWithoutApprovedByUserNestedInputObjectSchema
      )
      .optional(),
    KeyManagement: z
      .lazy(
        () => KeyManagementUpdateManyWithoutAuthorizedByNestedInputObjectSchema
      )
      .optional(),
    KeyCollector: z
      .lazy(
        () => KeyCollectorUpdateManyWithoutAuthorizedByNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserUpdateWithoutAnnouncementInputObjectSchema = Schema;
