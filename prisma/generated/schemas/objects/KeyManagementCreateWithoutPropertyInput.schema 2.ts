import { z } from "zod";
import { UserCreateNestedOneWithoutKeyManagementInputObjectSchema } from "./UserCreateNestedOneWithoutKeyManagementInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementCreateWithoutPropertyInput> = z
  .object({
    id: z.string().optional(),
    collectorName: z.string(),
    collectorCompany: z.string().optional().nullable(),
    collectorPhoneNumber: z.string(),
    authorizedBy: z.lazy(
      () => UserCreateNestedOneWithoutKeyManagementInputObjectSchema
    ),
  })
  .strict();

export const KeyManagementCreateWithoutPropertyInputObjectSchema = Schema;
