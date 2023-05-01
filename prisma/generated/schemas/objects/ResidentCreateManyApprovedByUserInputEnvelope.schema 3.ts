import { z } from "zod";
import { ResidentCreateManyApprovedByUserInputObjectSchema } from "./ResidentCreateManyApprovedByUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentCreateManyApprovedByUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ResidentCreateManyApprovedByUserInputObjectSchema),
        z.lazy(() => ResidentCreateManyApprovedByUserInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ResidentCreateManyApprovedByUserInputEnvelopeObjectSchema = Schema;
