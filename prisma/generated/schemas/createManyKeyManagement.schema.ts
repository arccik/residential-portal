import { z } from "zod";
import { KeyManagementCreateManyInputObjectSchema } from "./objects/KeyManagementCreateManyInput.schema";

export const KeyManagementCreateManySchema = z.object({
  data: z.union([
    KeyManagementCreateManyInputObjectSchema,
    z.array(KeyManagementCreateManyInputObjectSchema),
  ]),
});
