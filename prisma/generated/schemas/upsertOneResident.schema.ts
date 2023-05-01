import { z } from "zod";
import { ResidentWhereUniqueInputObjectSchema } from "./objects/ResidentWhereUniqueInput.schema";
import { ResidentCreateInputObjectSchema } from "./objects/ResidentCreateInput.schema";
import { ResidentUncheckedCreateInputObjectSchema } from "./objects/ResidentUncheckedCreateInput.schema";
import { ResidentUpdateInputObjectSchema } from "./objects/ResidentUpdateInput.schema";
import { ResidentUncheckedUpdateInputObjectSchema } from "./objects/ResidentUncheckedUpdateInput.schema";

export const ResidentUpsertSchema = z.object({
  where: ResidentWhereUniqueInputObjectSchema,
  create: z.union([
    ResidentCreateInputObjectSchema,
    ResidentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ResidentUpdateInputObjectSchema,
    ResidentUncheckedUpdateInputObjectSchema,
  ]),
});
