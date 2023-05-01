import { z } from "zod";
import { KeyManagementCreateManyPropertyInputObjectSchema } from "./KeyManagementCreateManyPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementCreateManyPropertyInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => KeyManagementCreateManyPropertyInputObjectSchema),
      z.lazy(() => KeyManagementCreateManyPropertyInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const KeyManagementCreateManyPropertyInputEnvelopeObjectSchema = Schema;
