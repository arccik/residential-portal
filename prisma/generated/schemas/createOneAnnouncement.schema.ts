import { z } from "zod";
import { AnnouncementCreateInputObjectSchema } from "./objects/AnnouncementCreateInput.schema";
import { AnnouncementUncheckedCreateInputObjectSchema } from "./objects/AnnouncementUncheckedCreateInput.schema";

export const AnnouncementCreateOneSchema = z.object({
  data: z.union([
    AnnouncementCreateInputObjectSchema,
    AnnouncementUncheckedCreateInputObjectSchema,
  ]),
});
