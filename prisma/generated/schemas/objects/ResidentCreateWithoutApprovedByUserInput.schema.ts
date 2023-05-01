import { z } from "zod";
import { ResidentsGroupSchema } from "../enums/ResidentsGroup.schema";
import { PropertyCreateNestedOneWithoutResidentInputObjectSchema } from "./PropertyCreateNestedOneWithoutResidentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentCreateWithoutApprovedByUserInput> = z
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
    property: z.lazy(
      () => PropertyCreateNestedOneWithoutResidentInputObjectSchema
    ),
  })
  .strict();

export const ResidentCreateWithoutApprovedByUserInputObjectSchema = Schema;
