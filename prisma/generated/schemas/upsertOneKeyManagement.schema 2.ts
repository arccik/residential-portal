import { z } from "zod";
import { KeyManagementWhereUniqueInputObjectSchema } from "./objects/KeyManagementWhereUniqueInput.schema";
import { KeyManagementCreateInputObjectSchema } from "./objects/KeyManagementCreateInput.schema";
import { KeyManagementUncheckedCreateInputObjectSchema } from "./objects/KeyManagementUncheckedCreateInput.schema";
import { KeyManagementUpdateInputObjectSchema } from "./objects/KeyManagementUpdateInput.schema";
import { KeyManagementUncheckedUpdateInputObjectSchema } from "./objects/KeyManagementUncheckedUpdateInput.schema";

export const KeyManagementUpsertSchema = z.object({
  where: KeyManagementWhereUniqueInputObjectSchema,
  create: z.union([
    KeyManagementCreateInputObjectSchema,
    KeyManagementUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    KeyManagementUpdateInputObjectSchema,
    KeyManagementUncheckedUpdateInputObjectSchema,
  ]),
});
