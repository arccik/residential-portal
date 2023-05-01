import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { ResidentUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema } from "./ResidentUncheckedUpdateManyWithoutPropertyNestedInput.schema";
import { KeyManagementUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema } from "./KeyManagementUncheckedUpdateManyWithoutPropertyNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyUncheckedUpdateInput> = z
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
        () => ResidentUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema
      )
      .optional(),
    KeyManagementId: z
      .lazy(
        () =>
          KeyManagementUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const PropertyUncheckedUpdateInputObjectSchema = Schema;
