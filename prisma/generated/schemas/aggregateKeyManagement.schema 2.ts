import { z } from "zod";
import { KeyManagementOrderByWithRelationInputObjectSchema } from "./objects/KeyManagementOrderByWithRelationInput.schema";
import { KeyManagementWhereInputObjectSchema } from "./objects/KeyManagementWhereInput.schema";
import { KeyManagementWhereUniqueInputObjectSchema } from "./objects/KeyManagementWhereUniqueInput.schema";
import { KeyManagementCountAggregateInputObjectSchema } from "./objects/KeyManagementCountAggregateInput.schema";
import { KeyManagementMinAggregateInputObjectSchema } from "./objects/KeyManagementMinAggregateInput.schema";
import { KeyManagementMaxAggregateInputObjectSchema } from "./objects/KeyManagementMaxAggregateInput.schema";

export const KeyManagementAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), KeyManagementCountAggregateInputObjectSchema])
    .optional(),
  _min: KeyManagementMinAggregateInputObjectSchema.optional(),
  _max: KeyManagementMaxAggregateInputObjectSchema.optional(),
});
