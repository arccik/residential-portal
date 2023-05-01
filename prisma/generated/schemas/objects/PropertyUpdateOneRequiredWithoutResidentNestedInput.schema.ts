import { z } from "zod";
import { PropertyCreateWithoutResidentInputObjectSchema } from "./PropertyCreateWithoutResidentInput.schema";
import { PropertyUncheckedCreateWithoutResidentInputObjectSchema } from "./PropertyUncheckedCreateWithoutResidentInput.schema";
import { PropertyCreateOrConnectWithoutResidentInputObjectSchema } from "./PropertyCreateOrConnectWithoutResidentInput.schema";
import { PropertyUpsertWithoutResidentInputObjectSchema } from "./PropertyUpsertWithoutResidentInput.schema";
import { PropertyWhereUniqueInputObjectSchema } from "./PropertyWhereUniqueInput.schema";
import { PropertyUpdateWithoutResidentInputObjectSchema } from "./PropertyUpdateWithoutResidentInput.schema";
import { PropertyUncheckedUpdateWithoutResidentInputObjectSchema } from "./PropertyUncheckedUpdateWithoutResidentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyUpdateOneRequiredWithoutResidentNestedInput> =
  z
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
      upsert: z
        .lazy(() => PropertyUpsertWithoutResidentInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PropertyUpdateWithoutResidentInputObjectSchema),
          z.lazy(() => PropertyUncheckedUpdateWithoutResidentInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const PropertyUpdateOneRequiredWithoutResidentNestedInputObjectSchema =
  Schema;
