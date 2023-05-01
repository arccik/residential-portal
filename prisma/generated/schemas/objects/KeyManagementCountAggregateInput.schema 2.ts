import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    propertyId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    collectorName: z.literal(true).optional(),
    collectorCompany: z.literal(true).optional(),
    collectorPhoneNumber: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const KeyManagementCountAggregateInputObjectSchema = Schema;
