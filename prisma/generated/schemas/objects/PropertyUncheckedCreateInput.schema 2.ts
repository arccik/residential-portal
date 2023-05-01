import { z } from "zod";
import { KeyManagementUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from "./KeyManagementUncheckedCreateNestedManyWithoutPropertyInput.schema";
import { ResidentUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from "./ResidentUncheckedCreateNestedManyWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    KeyManagement: z
      .lazy(
        () =>
          KeyManagementUncheckedCreateNestedManyWithoutPropertyInputObjectSchema
      )
      .optional(),
    Resident: z
      .lazy(
        () => ResidentUncheckedCreateNestedManyWithoutPropertyInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const PropertyUncheckedCreateInputObjectSchema = Schema;
