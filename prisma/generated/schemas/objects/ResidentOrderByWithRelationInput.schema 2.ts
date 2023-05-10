import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { PropertyOrderByWithRelationInputObjectSchema } from "./PropertyOrderByWithRelationInput.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    altPhoneNumer: z.lazy(() => SortOrderSchema).optional(),
    group: z.lazy(() => SortOrderSchema).optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    property: z
      .lazy(() => PropertyOrderByWithRelationInputObjectSchema)
      .optional(),
    approvedByUser: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ResidentOrderByWithRelationInputObjectSchema = Schema;
