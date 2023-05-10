import { z } from "zod";
import { ResidentsGroupSchema } from "../enums/ResidentsGroup.schema";
import { NestedEnumResidentsGroupNullableFilterObjectSchema } from "./NestedEnumResidentsGroupNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumResidentsGroupNullableFilter> = z
  .object({
    equals: z
      .lazy(() => ResidentsGroupSchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => ResidentsGroupSchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => ResidentsGroupSchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => ResidentsGroupSchema),
        z.lazy(() => NestedEnumResidentsGroupNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const EnumResidentsGroupNullableFilterObjectSchema = Schema;
