import { z } from "zod";
import { KeyManagementCreateNestedManyWithoutPropertyInputObjectSchema } from "./KeyManagementCreateNestedManyWithoutPropertyInput.schema";
import { ResidentCreateNestedManyWithoutPropertyInputObjectSchema } from "./ResidentCreateNestedManyWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    KeyManagement: z
      .lazy(() => KeyManagementCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
    Resident: z
      .lazy(() => ResidentCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyCreateInputObjectSchema = Schema;
