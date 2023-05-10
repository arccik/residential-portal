import { z } from "zod";
import { ResidentWhereInputObjectSchema } from "./ResidentWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentListRelationFilter> = z
  .object({
    every: z.lazy(() => ResidentWhereInputObjectSchema).optional(),
    some: z.lazy(() => ResidentWhereInputObjectSchema).optional(),
    none: z.lazy(() => ResidentWhereInputObjectSchema).optional(),
  })
  .strict();

export const ResidentListRelationFilterObjectSchema = Schema;
