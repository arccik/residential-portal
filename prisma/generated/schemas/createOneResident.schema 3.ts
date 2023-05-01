import { z } from "zod";
import { ResidentCreateInputObjectSchema } from "./objects/ResidentCreateInput.schema";
import { ResidentUncheckedCreateInputObjectSchema } from "./objects/ResidentUncheckedCreateInput.schema";

export const ResidentCreateOneSchema = z.object({
  data: z.union([
    ResidentCreateInputObjectSchema,
    ResidentUncheckedCreateInputObjectSchema,
  ]),
});
