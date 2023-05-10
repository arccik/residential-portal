import { z } from "zod";
import { AnnouncementWhereUniqueInputObjectSchema } from "./objects/AnnouncementWhereUniqueInput.schema";

export const AnnouncementFindUniqueSchema = z.object({
  where: AnnouncementWhereUniqueInputObjectSchema,
});
