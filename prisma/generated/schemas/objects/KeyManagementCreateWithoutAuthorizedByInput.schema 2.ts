import { z } from "zod";
import { PropertyCreateNestedOneWithoutKeyManagementInputObjectSchema } from "./PropertyCreateNestedOneWithoutKeyManagementInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementCreateWithoutAuthorizedByInput> = z
  .object({
    id: z.string().optional(),
    collectorName: z.string(),
    collectorCompany: z.string().optional().nullable(),
    collectorPhoneNumber: z.string(),
    property: z.lazy(
      () => PropertyCreateNestedOneWithoutKeyManagementInputObjectSchema
    ),
  })
  .strict();

export const KeyManagementCreateWithoutAuthorizedByInputObjectSchema = Schema;
