import { z } from "zod";
import { ResidentUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from "./ResidentUncheckedCreateNestedManyWithoutPropertyInput.schema";
import { KeyManagementUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from "./KeyManagementUncheckedCreateNestedManyWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    Resident: z
      .lazy(
        () => ResidentUncheckedCreateNestedManyWithoutPropertyInputObjectSchema
      )
      .optional(),
    KeyManagementId: z
      .lazy(
        () =>
          KeyManagementUncheckedCreateNestedManyWithoutPropertyInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const PropertyUncheckedCreateInputObjectSchema = Schema;
