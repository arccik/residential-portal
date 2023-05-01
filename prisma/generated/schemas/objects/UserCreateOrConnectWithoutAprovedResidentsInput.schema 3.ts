import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutAprovedResidentsInputObjectSchema } from "./UserCreateWithoutAprovedResidentsInput.schema";
import { UserUncheckedCreateWithoutAprovedResidentsInputObjectSchema } from "./UserUncheckedCreateWithoutAprovedResidentsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAprovedResidentsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutAprovedResidentsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutAprovedResidentsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutAprovedResidentsInputObjectSchema =
  Schema;
