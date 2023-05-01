import { z } from "zod";
import { CollectorTypeSchema } from "../enums/CollectorType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumCollectorTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => CollectorTypeSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumCollectorTypeFieldUpdateOperationsInputObjectSchema =
  Schema;
