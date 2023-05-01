import { z } from "zod";
import { KeyManagementUpdateInputObjectSchema } from "./objects/KeyManagementUpdateInput.schema";
import { KeyManagementUncheckedUpdateInputObjectSchema } from "./objects/KeyManagementUncheckedUpdateInput.schema";
import { KeyManagementWhereUniqueInputObjectSchema } from "./objects/KeyManagementWhereUniqueInput.schema";

export const KeyManagementUpdateOneSchema = z.object({
  data: z.union([
    KeyManagementUpdateInputObjectSchema,
    KeyManagementUncheckedUpdateInputObjectSchema,
  ]),
  where: KeyManagementWhereUniqueInputObjectSchema,
});
