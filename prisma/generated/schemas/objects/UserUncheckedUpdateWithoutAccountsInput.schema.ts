import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUncheckedUpdateManyWithoutUserNestedInput.schema";
import { AnnouncementUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./AnnouncementUncheckedUpdateManyWithoutUserNestedInput.schema";
import { ResidentUncheckedUpdateManyWithoutApprovedByUserNestedInputObjectSchema } from "./ResidentUncheckedUpdateManyWithoutApprovedByUserNestedInput.schema";
import { KeyManagementUncheckedUpdateManyWithoutAuthorizedByNestedInputObjectSchema } from "./KeyManagementUncheckedUpdateManyWithoutAuthorizedByNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z
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
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Announcement: z
      .lazy(
        () => AnnouncementUncheckedUpdateManyWithoutUserNestedInputObjectSchema
      )
      .optional(),
    AprovedResidents: z
      .lazy(
        () =>
          ResidentUncheckedUpdateManyWithoutApprovedByUserNestedInputObjectSchema
      )
      .optional(),
    KeyManagement: z
      .lazy(
        () =>
          KeyManagementUncheckedUpdateManyWithoutAuthorizedByNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutAccountsInputObjectSchema = Schema;
