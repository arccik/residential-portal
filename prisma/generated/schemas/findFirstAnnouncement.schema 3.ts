import { z } from "zod";
import { AnnouncementOrderByWithRelationInputObjectSchema } from "./objects/AnnouncementOrderByWithRelationInput.schema";
import { AnnouncementWhereInputObjectSchema } from "./objects/AnnouncementWhereInput.schema";
import { AnnouncementWhereUniqueInputObjectSchema } from "./objects/AnnouncementWhereUniqueInput.schema";
import { AnnouncementScalarFieldEnumSchema } from "./enums/AnnouncementScalarFieldEnum.schema";

export const AnnouncementFindFirstSchema = z.object({
  orderBy: z
    .union([
      AnnouncementOrderByWithRelationInputObjectSchema,
      AnnouncementOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AnnouncementWhereInputObjectSchema.optional(),
  cursor: AnnouncementWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AnnouncementScalarFieldEnumSchema).optional(),
});
