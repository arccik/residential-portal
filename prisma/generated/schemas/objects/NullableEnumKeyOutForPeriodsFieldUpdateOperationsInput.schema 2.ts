import { z } from "zod";
import { KeyOutForPeriodsSchema } from "../enums/KeyOutForPeriods.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumKeyOutForPeriodsFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => KeyOutForPeriodsSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumKeyOutForPeriodsFieldUpdateOperationsInputObjectSchema =
  Schema;
