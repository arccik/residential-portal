import { z } from "zod";
import { PropertyCreateWithoutResidentInputObjectSchema } from "./PropertyCreateWithoutResidentInput.schema";
import { PropertyUncheckedCreateWithoutResidentInputObjectSchema } from "./PropertyUncheckedCreateWithoutResidentInput.schema";
import { PropertyCreateOrConnectWithoutResidentInputObjectSchema } from "./PropertyCreateOrConnectWithoutResidentInput.schema";
import { PropertyWhereUniqueInputObjectSchema } from "./PropertyWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyCreateNestedOneWithoutResidentInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PropertyCreateWithoutResidentInputObjectSchema),
        z.lazy(() => PropertyUncheckedCreateWithoutResidentInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PropertyCreateOrConnectWithoutResidentInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PropertyCreateNestedOneWithoutResidentInputObjectSchema = Schema;
