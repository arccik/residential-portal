import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutKeyManagementInputObjectSchema } from "./UserCreateWithoutKeyManagementInput.schema";
import { UserUncheckedCreateWithoutKeyManagementInputObjectSchema } from "./UserUncheckedCreateWithoutKeyManagementInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutKeyManagementInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutKeyManagementInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutKeyManagementInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutKeyManagementInputObjectSchema = Schema;
