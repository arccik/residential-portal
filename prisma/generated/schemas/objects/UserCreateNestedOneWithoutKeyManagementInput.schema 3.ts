import { z } from "zod";
import { UserCreateWithoutKeyManagementInputObjectSchema } from "./UserCreateWithoutKeyManagementInput.schema";
import { UserUncheckedCreateWithoutKeyManagementInputObjectSchema } from "./UserUncheckedCreateWithoutKeyManagementInput.schema";
import { UserCreateOrConnectWithoutKeyManagementInputObjectSchema } from "./UserCreateOrConnectWithoutKeyManagementInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutKeyManagementInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutKeyManagementInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutKeyManagementInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutKeyManagementInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutKeyManagementInputObjectSchema = Schema;
