import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExampleCreateManyInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const ExampleCreateManyInputObjectSchema = Schema;
