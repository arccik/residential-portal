import { z } from "zod";
import { UserUpdateWithoutAprovedResidentsInputObjectSchema } from "./UserUpdateWithoutAprovedResidentsInput.schema";
import { UserUncheckedUpdateWithoutAprovedResidentsInputObjectSchema } from "./UserUncheckedUpdateWithoutAprovedResidentsInput.schema";
import { UserCreateWithoutAprovedResidentsInputObjectSchema } from "./UserCreateWithoutAprovedResidentsInput.schema";
import { UserUncheckedCreateWithoutAprovedResidentsInputObjectSchema } from "./UserUncheckedCreateWithoutAprovedResidentsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutAprovedResidentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAprovedResidentsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAprovedResidentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAprovedResidentsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAprovedResidentsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutAprovedResidentsInputObjectSchema = Schema;
