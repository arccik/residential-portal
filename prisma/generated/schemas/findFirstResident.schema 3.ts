import { z } from "zod";
import { ResidentOrderByWithRelationInputObjectSchema } from "./objects/ResidentOrderByWithRelationInput.schema";
import { ResidentWhereInputObjectSchema } from "./objects/ResidentWhereInput.schema";
import { ResidentWhereUniqueInputObjectSchema } from "./objects/ResidentWhereUniqueInput.schema";
import { ResidentScalarFieldEnumSchema } from "./enums/ResidentScalarFieldEnum.schema";

export const ResidentFindFirstSchema = z.object({
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
  distinct: z.array(ResidentScalarFieldEnumSchema).optional(),
});
