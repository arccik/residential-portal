import { z } from "zod";
import { UserCreateWithoutAprovedResidentsInputObjectSchema } from "./UserCreateWithoutAprovedResidentsInput.schema";
import { UserUncheckedCreateWithoutAprovedResidentsInputObjectSchema } from "./UserUncheckedCreateWithoutAprovedResidentsInput.schema";
import { UserCreateOrConnectWithoutAprovedResidentsInputObjectSchema } from "./UserCreateOrConnectWithoutAprovedResidentsInput.schema";
import { UserUpsertWithoutAprovedResidentsInputObjectSchema } from "./UserUpsertWithoutAprovedResidentsInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutAprovedResidentsInputObjectSchema } from "./UserUpdateWithoutAprovedResidentsInput.schema";
import { UserUncheckedUpdateWithoutAprovedResidentsInputObjectSchema } from "./UserUncheckedUpdateWithoutAprovedResidentsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAprovedResidentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAprovedResidentsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutAprovedResidentsInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAprovedResidentsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutAprovedResidentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutAprovedResidentsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutAprovedResidentsInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutAprovedResidentsNestedInputObjectSchema =
  Schema;
