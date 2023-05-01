import { z } from "zod";
import { AnnouncementWhereInputObjectSchema } from "./AnnouncementWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AnnouncementListRelationFilter> = z
  .object({
    every: z.lazy(() => AnnouncementWhereInputObjectSchema).optional(),
    some: z.lazy(() => AnnouncementWhereInputObjectSchema).optional(),
    none: z.lazy(() => AnnouncementWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnnouncementListRelationFilterObjectSchema = Schema;
