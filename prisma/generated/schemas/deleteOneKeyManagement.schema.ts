import { z } from "zod";
import { KeyManagementWhereUniqueInputObjectSchema } from "./objects/KeyManagementWhereUniqueInput.schema";

export const KeyManagementDeleteOneSchema = z.object({
  where: KeyManagementWhereUniqueInputObjectSchema,
});
