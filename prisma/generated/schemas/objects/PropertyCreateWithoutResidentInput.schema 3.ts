import { z } from "zod";
import { KeyManagementCreateNestedManyWithoutPropertyInputObjectSchema } from "./KeyManagementCreateNestedManyWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyCreateWithoutResidentInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    KeyManagementId: z
      .lazy(() => KeyManagementCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyCreateWithoutResidentInputObjectSchema = Schema;
