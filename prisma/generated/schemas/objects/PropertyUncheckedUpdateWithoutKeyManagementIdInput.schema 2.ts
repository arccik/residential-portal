import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { ResidentUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema } from "./ResidentUncheckedUpdateManyWithoutPropertyNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyUncheckedUpdateWithoutKeyManagementIdInput> =
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
      Resident: z
        .lazy(
          () =>
            ResidentUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const PropertyUncheckedUpdateWithoutKeyManagementIdInputObjectSchema =
  Schema;
