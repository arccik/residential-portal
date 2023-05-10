import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { AccountOrderByRelationAggregateInputObjectSchema } from "./AccountOrderByRelationAggregateInput.schema";
import { SessionOrderByRelationAggregateInputObjectSchema } from "./SessionOrderByRelationAggregateInput.schema";
import { AnnouncementOrderByRelationAggregateInputObjectSchema } from "./AnnouncementOrderByRelationAggregateInput.schema";
import { ResidentOrderByRelationAggregateInputObjectSchema } from "./ResidentOrderByRelationAggregateInput.schema";
import { KeyManagementOrderByRelationAggregateInputObjectSchema } from "./KeyManagementOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Announcement: z
      .lazy(() => AnnouncementOrderByRelationAggregateInputObjectSchema)
      .optional(),
    AprovedResidents: z
      .lazy(() => ResidentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    KeyManagement: z
      .lazy(() => KeyManagementOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
