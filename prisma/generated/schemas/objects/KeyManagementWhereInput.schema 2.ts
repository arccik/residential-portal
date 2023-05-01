import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { PropertyRelationFilterObjectSchema } from "./PropertyRelationFilter.schema";
import { PropertyWhereInputObjectSchema } from "./PropertyWhereInput.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => KeyManagementWhereInputObjectSchema),
        z.lazy(() => KeyManagementWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => KeyManagementWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => KeyManagementWhereInputObjectSchema),
        z.lazy(() => KeyManagementWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    propertyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    collectorName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    collectorCompany: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    collectorPhoneNumber: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    property: z
      .union([
        z.lazy(() => PropertyRelationFilterObjectSchema),
        z.lazy(() => PropertyWhereInputObjectSchema),
      ])
      .optional(),
    authorizedBy: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const KeyManagementWhereInputObjectSchema = Schema;
