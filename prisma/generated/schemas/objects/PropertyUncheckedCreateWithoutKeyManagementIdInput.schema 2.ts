import { z } from "zod";
import { ResidentUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from "./ResidentUncheckedCreateNestedManyWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyUncheckedCreateWithoutKeyManagementIdInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      Resident: z
        .lazy(
          () =>
            ResidentUncheckedCreateNestedManyWithoutPropertyInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const PropertyUncheckedCreateWithoutKeyManagementIdInputObjectSchema =
  Schema;
