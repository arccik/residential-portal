import { z } from "zod";
import { ResidentUpdateInputObjectSchema } from "./objects/ResidentUpdateInput.schema";
import { ResidentUncheckedUpdateInputObjectSchema } from "./objects/ResidentUncheckedUpdateInput.schema";
import { ResidentWhereUniqueInputObjectSchema } from "./objects/ResidentWhereUniqueInput.schema";

export const ResidentUpdateOneSchema = z.object({
  data: z.union([
    ResidentUpdateInputObjectSchema,
    ResidentUncheckedUpdateInputObjectSchema,
  ]),
  where: ResidentWhereUniqueInputObjectSchema,
});
