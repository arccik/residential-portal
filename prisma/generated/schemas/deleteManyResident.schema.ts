import { z } from "zod";
import { ResidentWhereInputObjectSchema } from "./objects/ResidentWhereInput.schema";

export const ResidentDeleteManySchema = z.object({
  where: ResidentWhereInputObjectSchema.optional(),
});
