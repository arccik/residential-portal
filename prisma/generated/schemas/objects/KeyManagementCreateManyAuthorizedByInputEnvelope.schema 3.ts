import { z } from "zod";
import { KeyManagementCreateManyAuthorizedByInputObjectSchema } from "./KeyManagementCreateManyAuthorizedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementCreateManyAuthorizedByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => KeyManagementCreateManyAuthorizedByInputObjectSchema),
        z
          .lazy(() => KeyManagementCreateManyAuthorizedByInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const KeyManagementCreateManyAuthorizedByInputEnvelopeObjectSchema =
  Schema;
