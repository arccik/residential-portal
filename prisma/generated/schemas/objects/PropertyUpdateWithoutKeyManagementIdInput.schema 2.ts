import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { ResidentUpdateManyWithoutPropertyNestedInputObjectSchema } from "./ResidentUpdateManyWithoutPropertyNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyUpdateWithoutKeyManagementIdInput> = z
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
      .lazy(() => ResidentUpdateManyWithoutPropertyNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyUpdateWithoutKeyManagementIdInputObjectSchema = Schema;
