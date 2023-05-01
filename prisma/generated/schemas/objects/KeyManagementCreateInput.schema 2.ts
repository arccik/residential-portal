import { z } from "zod";
import { PropertyCreateNestedOneWithoutKeyManagementInputObjectSchema } from "./PropertyCreateNestedOneWithoutKeyManagementInput.schema";
import { UserCreateNestedOneWithoutKeyManagementInputObjectSchema } from "./UserCreateNestedOneWithoutKeyManagementInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementCreateInput> = z
  .object({
    id: z.string().optional(),
    collectorName: z.string(),
    collectorCompany: z.string().optional().nullable(),
    collectorPhoneNumber: z.string(),
    property: z.lazy(
      () => PropertyCreateNestedOneWithoutKeyManagementInputObjectSchema
    ),
    authorizedBy: z.lazy(
      () => UserCreateNestedOneWithoutKeyManagementInputObjectSchema
    ),
  })
  .strict();

export const KeyManagementCreateInputObjectSchema = Schema;
