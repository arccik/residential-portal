import { z } from "zod";
import { UserCreateWithoutAnnouncementInputObjectSchema } from "./UserCreateWithoutAnnouncementInput.schema";
import { UserUncheckedCreateWithoutAnnouncementInputObjectSchema } from "./UserUncheckedCreateWithoutAnnouncementInput.schema";
import { UserCreateOrConnectWithoutAnnouncementInputObjectSchema } from "./UserCreateOrConnectWithoutAnnouncementInput.schema";
import { UserUpsertWithoutAnnouncementInputObjectSchema } from "./UserUpsertWithoutAnnouncementInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutAnnouncementInputObjectSchema } from "./UserUpdateWithoutAnnouncementInput.schema";
import { UserUncheckedUpdateWithoutAnnouncementInputObjectSchema } from "./UserUncheckedUpdateWithoutAnnouncementInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAnnouncementNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAnnouncementInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutAnnouncementInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAnnouncementInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutAnnouncementInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutAnnouncementInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutAnnouncementInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutAnnouncementNestedInputObjectSchema =
  Schema;
