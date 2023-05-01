import { z } from "zod";
import { KeyManagementCreateInputObjectSchema } from "./objects/KeyManagementCreateInput.schema";
import { KeyManagementUncheckedCreateInputObjectSchema } from "./objects/KeyManagementUncheckedCreateInput.schema";

export const KeyManagementCreateOneSchema = z.object({
  data: z.union([
    KeyManagementCreateInputObjectSchema,
    KeyManagementUncheckedCreateInputObjectSchema,
  ]),
});
