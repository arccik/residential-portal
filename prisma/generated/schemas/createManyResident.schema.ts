import { z } from "zod";
import { ResidentCreateManyInputObjectSchema } from "./objects/ResidentCreateManyInput.schema";

export const ResidentCreateManySchema = z.object({
  data: z.union([
    ResidentCreateManyInputObjectSchema,
    z.array(ResidentCreateManyInputObjectSchema),
  ]),
});
