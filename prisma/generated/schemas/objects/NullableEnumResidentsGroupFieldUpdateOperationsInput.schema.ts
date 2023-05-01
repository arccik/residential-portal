import { z } from "zod";
import { ResidentsGroupSchema } from "../enums/ResidentsGroup.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumResidentsGroupFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => ResidentsGroupSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumResidentsGroupFieldUpdateOperationsInputObjectSchema =
  Schema;
