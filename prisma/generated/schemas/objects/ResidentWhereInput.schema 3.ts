import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { EnumResidentsGroupNullableFilterObjectSchema } from "./EnumResidentsGroupNullableFilter.schema";
import { ResidentsGroupSchema } from "../enums/ResidentsGroup.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { PropertyRelationFilterObjectSchema } from "./PropertyRelationFilter.schema";
import { PropertyWhereInputObjectSchema } from "./PropertyWhereInput.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ResidentWhereInputObjectSchema),
        z.lazy(() => ResidentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ResidentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ResidentWhereInputObjectSchema),
        z.lazy(() => ResidentWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    firstName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    phoneNumber: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    altPhoneNumer: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    group: z
      .union([
        z.lazy(() => EnumResidentsGroupNullableFilterObjectSchema),
        z.lazy(() => ResidentsGroupSchema),
      ])
      .optional()
      .nullable(),
    propertyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    property: z
      .union([
        z.lazy(() => PropertyRelationFilterObjectSchema),
        z.lazy(() => PropertyWhereInputObjectSchema),
      ])
      .optional(),
    approvedByUser: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ResidentWhereInputObjectSchema = Schema;
