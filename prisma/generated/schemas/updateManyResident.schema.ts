import { z } from "zod";
import { ResidentUpdateManyMutationInputObjectSchema } from "./objects/ResidentUpdateManyMutationInput.schema";
import { ResidentWhereInputObjectSchema } from "./objects/ResidentWhereInput.schema";

export const ResidentUpdateManySchema = z.object({
  data: ResidentUpdateManyMutationInputObjectSchema,
  where: ResidentWhereInputObjectSchema.optional(),
});
