import { z } from "zod";
import { ResidentCreateNestedManyWithoutPropertyInputObjectSchema } from "./ResidentCreateNestedManyWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyCreateWithoutKeyManagementIdInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    Resident: z
      .lazy(() => ResidentCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyCreateWithoutKeyManagementIdInputObjectSchema = Schema;
