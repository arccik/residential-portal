import { z } from "zod";
import { ResidentOrderByWithRelationInputObjectSchema } from "./objects/ResidentOrderByWithRelationInput.schema";
import { ResidentWhereInputObjectSchema } from "./objects/ResidentWhereInput.schema";
import { ResidentWhereUniqueInputObjectSchema } from "./objects/ResidentWhereUniqueInput.schema";
import { ResidentCountAggregateInputObjectSchema } from "./objects/ResidentCountAggregateInput.schema";
import { ResidentMinAggregateInputObjectSchema } from "./objects/ResidentMinAggregateInput.schema";
import { ResidentMaxAggregateInputObjectSchema } from "./objects/ResidentMaxAggregateInput.schema";

export const ResidentAggregateSchema = z.object({
  orderBy: z
    .union([
      ResidentOrderByWithRelationInputObjectSchema,
      ResidentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ResidentWhereInputObjectSchema.optional(),
  cursor: ResidentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ResidentCountAggregateInputObjectSchema])
    .optional(),
  _min: ResidentMinAggregateInputObjectSchema.optional(),
  _max: ResidentMaxAggregateInputObjectSchema.optional(),
});
