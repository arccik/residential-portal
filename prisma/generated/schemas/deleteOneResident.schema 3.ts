import { z } from "zod";
import { ResidentWhereUniqueInputObjectSchema } from "./objects/ResidentWhereUniqueInput.schema";

export const ResidentDeleteOneSchema = z.object({
  where: ResidentWhereUniqueInputObjectSchema,
});
