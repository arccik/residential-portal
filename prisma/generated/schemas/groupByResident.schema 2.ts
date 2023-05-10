import { z } from "zod";
import { ResidentWhereInputObjectSchema } from "./objects/ResidentWhereInput.schema";
import { ResidentOrderByWithAggregationInputObjectSchema } from "./objects/ResidentOrderByWithAggregationInput.schema";
import { ResidentScalarWhereWithAggregatesInputObjectSchema } from "./objects/ResidentScalarWhereWithAggregatesInput.schema";
import { ResidentScalarFieldEnumSchema } from "./enums/ResidentScalarFieldEnum.schema";

export const ResidentGroupBySchema = z.object({
  where: ResidentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ResidentOrderByWithAggregationInputObjectSchema,
      ResidentOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ResidentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ResidentScalarFieldEnumSchema),
});
