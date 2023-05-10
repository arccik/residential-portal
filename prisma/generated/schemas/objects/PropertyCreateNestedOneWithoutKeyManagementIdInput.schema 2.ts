import { z } from "zod";
import { PropertyCreateWithoutKeyManagementIdInputObjectSchema } from "./PropertyCreateWithoutKeyManagementIdInput.schema";
import { PropertyUncheckedCreateWithoutKeyManagementIdInputObjectSchema } from "./PropertyUncheckedCreateWithoutKeyManagementIdInput.schema";
import { PropertyCreateOrConnectWithoutKeyManagementIdInputObjectSchema } from "./PropertyCreateOrConnectWithoutKeyManagementIdInput.schema";
import { PropertyWhereUniqueInputObjectSchema } from "./PropertyWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyCreateNestedOneWithoutKeyManagementIdInput> =
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
      connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const PropertyCreateNestedOneWithoutKeyManagementIdInputObjectSchema =
  Schema;
