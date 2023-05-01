import { z } from "zod";
import { KeyManagementWhereUniqueInputObjectSchema } from "./objects/KeyManagementWhereUniqueInput.schema";

export const KeyManagementFindUniqueSchema = z.object({
  where: KeyManagementWhereUniqueInputObjectSchema,
});
