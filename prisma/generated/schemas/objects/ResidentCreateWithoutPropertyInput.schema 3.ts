import { z } from "zod";
import { ResidentsGroupSchema } from "../enums/ResidentsGroup.schema";
import { UserCreateNestedOneWithoutAprovedResidentsInputObjectSchema } from "./UserCreateNestedOneWithoutAprovedResidentsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentCreateWithoutPropertyInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    altPhoneNumer: z.string().optional().nullable(),
    group: z
      .lazy(() => ResidentsGroupSchema)
      .optional()
      .nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    password: z.string(),
    approvedByUser: z.lazy(
      () => UserCreateNestedOneWithoutAprovedResidentsInputObjectSchema
    ),
  })
  .strict();

export const ResidentCreateWithoutPropertyInputObjectSchema = Schema;
