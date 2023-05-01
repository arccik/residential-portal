import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { PropertyOrderByWithRelationInputObjectSchema } from "./PropertyOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    company: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    outDays: z.lazy(() => SortOrderSchema).optional(),
    periodic: z.lazy(() => SortOrderSchema).optional(),
    expireDate: z.lazy(() => SortOrderSchema).optional(),
    notes: z.lazy(() => SortOrderSchema).optional(),
    emailKeyActivity: z.lazy(() => SortOrderSchema).optional(),
    signature: z.lazy(() => SortOrderSchema).optional(),
    authorizedBy: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    property: z
      .lazy(() => PropertyOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const KeyManagementOrderByWithRelationInputObjectSchema = Schema;
