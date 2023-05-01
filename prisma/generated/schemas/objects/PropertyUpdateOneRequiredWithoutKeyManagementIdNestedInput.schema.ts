import { z } from "zod";
import { PropertyCreateWithoutKeyManagementIdInputObjectSchema } from "./PropertyCreateWithoutKeyManagementIdInput.schema";
import { PropertyUncheckedCreateWithoutKeyManagementIdInputObjectSchema } from "./PropertyUncheckedCreateWithoutKeyManagementIdInput.schema";
import { PropertyCreateOrConnectWithoutKeyManagementIdInputObjectSchema } from "./PropertyCreateOrConnectWithoutKeyManagementIdInput.schema";
import { PropertyUpsertWithoutKeyManagementIdInputObjectSchema } from "./PropertyUpsertWithoutKeyManagementIdInput.schema";
import { PropertyWhereUniqueInputObjectSchema } from "./PropertyWhereUniqueInput.schema";
import { PropertyUpdateWithoutKeyManagementIdInputObjectSchema } from "./PropertyUpdateWithoutKeyManagementIdInput.schema";
import { PropertyUncheckedUpdateWithoutKeyManagementIdInputObjectSchema } from "./PropertyUncheckedUpdateWithoutKeyManagementIdInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyUpdateOneRequiredWithoutKeyManagementIdNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PropertyCreateWithoutKeyManagementIdInputObjectSchema),
          z.lazy(
            () => PropertyUncheckedCreateWithoutKeyManagementIdInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => PropertyCreateOrConnectWithoutKeyManagementIdInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(() => PropertyUpsertWithoutKeyManagementIdInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PropertyUpdateWithoutKeyManagementIdInputObjectSchema),
          z.lazy(
            () => PropertyUncheckedUpdateWithoutKeyManagementIdInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const PropertyUpdateOneRequiredWithoutKeyManagementIdNestedInputObjectSchema =
  Schema;
