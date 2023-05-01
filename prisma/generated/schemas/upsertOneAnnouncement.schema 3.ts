import { z } from "zod";
import { AnnouncementWhereUniqueInputObjectSchema } from "./objects/AnnouncementWhereUniqueInput.schema";
import { AnnouncementCreateInputObjectSchema } from "./objects/AnnouncementCreateInput.schema";
import { AnnouncementUncheckedCreateInputObjectSchema } from "./objects/AnnouncementUncheckedCreateInput.schema";
import { AnnouncementUpdateInputObjectSchema } from "./objects/AnnouncementUpdateInput.schema";
import { AnnouncementUncheckedUpdateInputObjectSchema } from "./objects/AnnouncementUncheckedUpdateInput.schema";

export const AnnouncementUpsertSchema = z.object({
  where: AnnouncementWhereUniqueInputObjectSchema,
  create: z.union([
    AnnouncementCreateInputObjectSchema,
    AnnouncementUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AnnouncementUpdateInputObjectSchema,
    AnnouncementUncheckedUpdateInputObjectSchema,
  ]),
});
