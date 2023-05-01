import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { KeyManagementUpdateManyWithoutPropertyNestedInputObjectSchema } from "./KeyManagementUpdateManyWithoutPropertyNestedInput.schema";
import { ResidentUpdateManyWithoutPropertyNestedInputObjectSchema } from "./ResidentUpdateManyWithoutPropertyNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyUpdateInput> = z
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
    KeyManagement: z
      .lazy(() => KeyManagementUpdateManyWithoutPropertyNestedInputObjectSchema)
      .optional(),
    Resident: z
      .lazy(() => ResidentUpdateManyWithoutPropertyNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyUpdateInputObjectSchema = Schema;
