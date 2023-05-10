import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { BoolFilterObjectSchema } from "./BoolFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AnnouncementWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AnnouncementWhereInputObjectSchema),
        z.lazy(() => AnnouncementWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AnnouncementWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AnnouncementWhereInputObjectSchema),
        z.lazy(() => AnnouncementWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    subject: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    text: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    startDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    endDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    sendingEmail: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    archived: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    filter: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const AnnouncementWhereInputObjectSchema = Schema;
