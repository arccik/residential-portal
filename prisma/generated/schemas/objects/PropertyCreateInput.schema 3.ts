import { z } from "zod";
import { ResidentCreateNestedManyWithoutPropertyInputObjectSchema } from "./ResidentCreateNestedManyWithoutPropertyInput.schema";
import { KeyManagementCreateNestedManyWithoutPropertyInputObjectSchema } from "./KeyManagementCreateNestedManyWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    Resident: z
      .lazy(() => ResidentCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
    KeyManagementId: z
      .lazy(() => KeyManagementCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyCreateInputObjectSchema = Schema;
