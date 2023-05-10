import { z } from "zod";
import { KeyManagementWhereInputObjectSchema } from "./objects/KeyManagementWhereInput.schema";
import { KeyManagementOrderByWithAggregationInputObjectSchema } from "./objects/KeyManagementOrderByWithAggregationInput.schema";
import { KeyManagementScalarWhereWithAggregatesInputObjectSchema } from "./objects/KeyManagementScalarWhereWithAggregatesInput.schema";
import { KeyManagementScalarFieldEnumSchema } from "./enums/KeyManagementScalarFieldEnum.schema";

export const KeyManagementGroupBySchema = z.object({
  where: KeyManagementWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      KeyManagementOrderByWithAggregationInputObjectSchema,
      KeyManagementOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: KeyManagementScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(KeyManagementScalarFieldEnumSchema),
});
