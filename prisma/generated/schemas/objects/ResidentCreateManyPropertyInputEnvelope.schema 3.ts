import { z } from "zod";
import { ResidentCreateManyPropertyInputObjectSchema } from "./ResidentCreateManyPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentCreateManyPropertyInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ResidentCreateManyPropertyInputObjectSchema),
      z.lazy(() => ResidentCreateManyPropertyInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ResidentCreateManyPropertyInputEnvelopeObjectSchema = Schema;
