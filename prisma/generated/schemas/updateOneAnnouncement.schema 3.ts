import { z } from "zod";
import { AnnouncementUpdateInputObjectSchema } from "./objects/AnnouncementUpdateInput.schema";
import { AnnouncementUncheckedUpdateInputObjectSchema } from "./objects/AnnouncementUncheckedUpdateInput.schema";
import { AnnouncementWhereUniqueInputObjectSchema } from "./objects/AnnouncementWhereUniqueInput.schema";

export const AnnouncementUpdateOneSchema = z.object({
  data: z.union([
    AnnouncementUpdateInputObjectSchema,
    AnnouncementUncheckedUpdateInputObjectSchema,
  ]),
  where: AnnouncementWhereUniqueInputObjectSchema,
});
