import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { KeyManagementListRelationFilterObjectSchema } from "./KeyManagementListRelationFilter.schema";
import { ResidentListRelationFilterObjectSchema } from "./ResidentListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PropertyWhereInputObjectSchema),
        z.lazy(() => PropertyWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PropertyWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PropertyWhereInputObjectSchema),
        z.lazy(() => PropertyWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    KeyManagement: z
      .lazy(() => KeyManagementListRelationFilterObjectSchema)
      .optional(),
    Resident: z.lazy(() => ResidentListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const PropertyWhereInputObjectSchema = Schema;
