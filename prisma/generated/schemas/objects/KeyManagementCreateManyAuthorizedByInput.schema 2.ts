import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementCreateManyAuthorizedByInput> = z
  .object({
    id: z.string().optional(),
    propertyId: z.string(),
    collectorName: z.string(),
    collectorCompany: z.string().optional().nullable(),
    collectorPhoneNumber: z.string(),
  })
  .strict();

export const KeyManagementCreateManyAuthorizedByInputObjectSchema = Schema;
