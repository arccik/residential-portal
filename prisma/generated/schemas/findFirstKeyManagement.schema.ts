import { z } from "zod";
import { KeyManagementOrderByWithRelationInputObjectSchema } from "./objects/KeyManagementOrderByWithRelationInput.schema";
import { KeyManagementWhereInputObjectSchema } from "./objects/KeyManagementWhereInput.schema";
import { KeyManagementWhereUniqueInputObjectSchema } from "./objects/KeyManagementWhereUniqueInput.schema";
import { KeyManagementScalarFieldEnumSchema } from "./enums/KeyManagementScalarFieldEnum.schema";

export const KeyManagementFindFirstSchema = z.object({
  orderBy: z
    .union([
      KeyManagementOrderByWithRelationInputObjectSchema,
      KeyManagementOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: KeyManagementWhereInputObjectSchema.optional(),
  cursor: KeyManagementWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(KeyManagementScalarFieldEnumSchema).optional(),
});
