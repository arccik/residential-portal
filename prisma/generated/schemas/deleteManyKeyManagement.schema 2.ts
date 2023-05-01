import { z } from "zod";
import { KeyManagementWhereInputObjectSchema } from "./objects/KeyManagementWhereInput.schema";

export const KeyManagementDeleteManySchema = z.object({
  where: KeyManagementWhereInputObjectSchema.optional(),
});
