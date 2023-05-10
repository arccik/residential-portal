import { z } from "zod";
import { CollectorTypeSchema } from "../enums/CollectorType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumCollectorTypeNullableFilter> = z
  .object({
    equals: z
      .lazy(() => CollectorTypeSchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => CollectorTypeSchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => CollectorTypeSchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => CollectorTypeSchema),
        z.lazy(() => NestedEnumCollectorTypeNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumCollectorTypeNullableFilterObjectSchema = Schema;
