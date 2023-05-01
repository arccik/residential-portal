import { z } from "zod";
import { AnnouncementWhereInputObjectSchema } from "./objects/AnnouncementWhereInput.schema";
import { AnnouncementOrderByWithAggregationInputObjectSchema } from "./objects/AnnouncementOrderByWithAggregationInput.schema";
import { AnnouncementScalarWhereWithAggregatesInputObjectSchema } from "./objects/AnnouncementScalarWhereWithAggregatesInput.schema";
import { AnnouncementScalarFieldEnumSchema } from "./enums/AnnouncementScalarFieldEnum.schema";

export const AnnouncementGroupBySchema = z.object({
  where: AnnouncementWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AnnouncementOrderByWithAggregationInputObjectSchema,
      AnnouncementOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: AnnouncementScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AnnouncementScalarFieldEnumSchema),
});
