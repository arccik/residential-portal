import { z } from "zod";
import { KeyManagementUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from "./KeyManagementUncheckedCreateNestedManyWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyUncheckedCreateWithoutResidentInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    KeyManagementId: z
      .lazy(
        () =>
          KeyManagementUncheckedCreateNestedManyWithoutPropertyInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const PropertyUncheckedCreateWithoutResidentInputObjectSchema = Schema;
