import { z } from "zod";
import { UserUpdateWithoutKeyManagementInputObjectSchema } from "./UserUpdateWithoutKeyManagementInput.schema";
import { UserUncheckedUpdateWithoutKeyManagementInputObjectSchema } from "./UserUncheckedUpdateWithoutKeyManagementInput.schema";
import { UserCreateWithoutKeyManagementInputObjectSchema } from "./UserCreateWithoutKeyManagementInput.schema";
import { UserUncheckedCreateWithoutKeyManagementInputObjectSchema } from "./UserUncheckedCreateWithoutKeyManagementInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutKeyManagementInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutKeyManagementInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutKeyManagementInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutKeyManagementInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutKeyManagementInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutKeyManagementInputObjectSchema = Schema;
