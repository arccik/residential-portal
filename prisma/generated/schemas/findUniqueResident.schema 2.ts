import { z } from "zod";
import { ResidentWhereUniqueInputObjectSchema } from "./objects/ResidentWhereUniqueInput.schema";

export const ResidentFindUniqueSchema = z.object({
  where: ResidentWhereUniqueInputObjectSchema,
});
