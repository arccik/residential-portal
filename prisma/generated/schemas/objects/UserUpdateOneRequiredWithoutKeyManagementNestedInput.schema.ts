import { z } from "zod";
import { UserCreateWithoutKeyManagementInputObjectSchema } from "./UserCreateWithoutKeyManagementInput.schema";
import { UserUncheckedCreateWithoutKeyManagementInputObjectSchema } from "./UserUncheckedCreateWithoutKeyManagementInput.schema";
import { UserCreateOrConnectWithoutKeyManagementInputObjectSchema } from "./UserCreateOrConnectWithoutKeyManagementInput.schema";
import { UserUpsertWithoutKeyManagementInputObjectSchema } from "./UserUpsertWithoutKeyManagementInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutKeyManagementInputObjectSchema } from "./UserUpdateWithoutKeyManagementInput.schema";
import { UserUncheckedUpdateWithoutKeyManagementInputObjectSchema } from "./UserUncheckedUpdateWithoutKeyManagementInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutKeyManagementNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutKeyManagementInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutKeyManagementInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutKeyManagementInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutKeyManagementInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutKeyManagementInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutKeyManagementInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutKeyManagementNestedInputObjectSchema =
  Schema;
