import { z } from "zod";
import { AnnouncementWhereUniqueInputObjectSchema } from "./objects/AnnouncementWhereUniqueInput.schema";

export const AnnouncementDeleteOneSchema = z.object({
  where: AnnouncementWhereUniqueInputObjectSchema,
});
