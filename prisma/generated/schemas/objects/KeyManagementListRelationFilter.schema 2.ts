import { z } from "zod";
import { KeyManagementWhereInputObjectSchema } from "./KeyManagementWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementListRelationFilter> = z
  .object({
    every: z.lazy(() => KeyManagementWhereInputObjectSchema).optional(),
    some: z.lazy(() => KeyManagementWhereInputObjectSchema).optional(),
    none: z.lazy(() => KeyManagementWhereInputObjectSchema).optional(),
  })
  .strict();

export const KeyManagementListRelationFilterObjectSchema = Schema;
