import { z } from "zod";
import { KeyManagementUpdateManyMutationInputObjectSchema } from "./objects/KeyManagementUpdateManyMutationInput.schema";
import { KeyManagementWhereInputObjectSchema } from "./objects/KeyManagementWhereInput.schema";

export const KeyManagementUpdateManySchema = z.object({
  data: KeyManagementUpdateManyMutationInputObjectSchema,
  where: KeyManagementWhereInputObjectSchema.optional(),
});
