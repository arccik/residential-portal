import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    firstName: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    email: z.literal(true).optional(),
    phoneNumber: z.literal(true).optional(),
    altPhoneNumer: z.literal(true).optional(),
    group: z.literal(true).optional(),
    propertyId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    password: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ResidentCountAggregateInputObjectSchema = Schema;
