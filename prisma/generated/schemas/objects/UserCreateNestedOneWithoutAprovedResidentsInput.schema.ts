import { z } from "zod";
import { UserCreateWithoutAprovedResidentsInputObjectSchema } from "./UserCreateWithoutAprovedResidentsInput.schema";
import { UserUncheckedCreateWithoutAprovedResidentsInputObjectSchema } from "./UserUncheckedCreateWithoutAprovedResidentsInput.schema";
import { UserCreateOrConnectWithoutAprovedResidentsInputObjectSchema } from "./UserCreateOrConnectWithoutAprovedResidentsInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutAprovedResidentsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutAprovedResidentsInputObjectSchema =
  Schema;
