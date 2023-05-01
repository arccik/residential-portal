import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { KeyManagementOrderByRelationAggregateInputObjectSchema } from "./KeyManagementOrderByRelationAggregateInput.schema";
import { ResidentOrderByRelationAggregateInputObjectSchema } from "./ResidentOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    KeyManagement: z
      .lazy(() => KeyManagementOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Resident: z
      .lazy(() => ResidentOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyOrderByWithRelationInputObjectSchema = Schema;
