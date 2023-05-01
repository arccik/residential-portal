import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { AnnouncementCountOrderByAggregateInputObjectSchema } from "./AnnouncementCountOrderByAggregateInput.schema";
import { AnnouncementMaxOrderByAggregateInputObjectSchema } from "./AnnouncementMaxOrderByAggregateInput.schema";
import { AnnouncementMinOrderByAggregateInputObjectSchema } from "./AnnouncementMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AnnouncementOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    subject: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    sendingEmail: z.lazy(() => SortOrderSchema).optional(),
    archived: z.lazy(() => SortOrderSchema).optional(),
    filter: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AnnouncementCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AnnouncementMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AnnouncementMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnnouncementOrderByWithAggregationInputObjectSchema = Schema;
