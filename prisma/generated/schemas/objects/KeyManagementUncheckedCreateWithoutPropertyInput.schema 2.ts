import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementUncheckedCreateWithoutPropertyInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      collectorName: z.string(),
      collectorCompany: z.string().optional().nullable(),
      collectorPhoneNumber: z.string(),
    })
    .strict();

export const KeyManagementUncheckedCreateWithoutPropertyInputObjectSchema =
  Schema;
