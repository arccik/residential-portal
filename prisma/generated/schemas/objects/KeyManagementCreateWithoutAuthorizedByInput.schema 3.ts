import { z } from "zod";
import { CollectorTypeSchema } from "../enums/CollectorType.schema";
import { KeyOutForPeriodsSchema } from "../enums/KeyOutForPeriods.schema";
import { PropertyCreateNestedOneWithoutKeyManagementIdInputObjectSchema } from "./PropertyCreateNestedOneWithoutKeyManagementIdInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementCreateWithoutAuthorizedByInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    company: z.string().optional().nullable(),
    phoneNumber: z.string().optional().nullable(),
    type: z
      .lazy(() => CollectorTypeSchema)
      .optional()
      .nullable(),
    outDays: z.number().optional().nullable(),
    periodic: z
      .lazy(() => KeyOutForPeriodsSchema)
      .optional()
      .nullable(),
    expireDate: z.date().optional().nullable(),
    notes: z.string().optional().nullable(),
    emailKeyActivity: z.boolean().optional(),
    signature: z.string().optional().nullable(),
    property: z.lazy(
      () => PropertyCreateNestedOneWithoutKeyManagementIdInputObjectSchema
    ),
  })
  .strict();

export const KeyManagementCreateWithoutAuthorizedByInputObjectSchema = Schema;
