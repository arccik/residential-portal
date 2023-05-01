import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { PropertyOrderByWithRelationInputObjectSchema } from "./PropertyOrderByWithRelationInput.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    collectorName: z.lazy(() => SortOrderSchema).optional(),
    collectorCompany: z.lazy(() => SortOrderSchema).optional(),
    collectorPhoneNumber: z.lazy(() => SortOrderSchema).optional(),
    property: z
      .lazy(() => PropertyOrderByWithRelationInputObjectSchema)
      .optional(),
    authorizedBy: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const KeyManagementOrderByWithRelationInputObjectSchema = Schema;
