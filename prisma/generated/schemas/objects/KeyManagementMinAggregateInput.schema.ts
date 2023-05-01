import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    propertyId: z.literal(true).optional(),
    company: z.literal(true).optional(),
    phoneNumber: z.literal(true).optional(),
    type: z.literal(true).optional(),
    outDays: z.literal(true).optional(),
    periodic: z.literal(true).optional(),
    expireDate: z.literal(true).optional(),
    notes: z.literal(true).optional(),
    emailKeyActivity: z.literal(true).optional(),
    signature: z.literal(true).optional(),
  })
  .strict();

export const KeyManagementMinAggregateInputObjectSchema = Schema;
