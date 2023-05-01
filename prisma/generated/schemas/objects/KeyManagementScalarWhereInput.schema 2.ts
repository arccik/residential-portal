import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => KeyManagementScalarWhereInputObjectSchema),
        z.lazy(() => KeyManagementScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => KeyManagementScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => KeyManagementScalarWhereInputObjectSchema),
        z.lazy(() => KeyManagementScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const KeyManagementScalarWhereInputObjectSchema = Schema;
