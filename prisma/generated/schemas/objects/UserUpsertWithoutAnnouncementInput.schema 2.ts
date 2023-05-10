import { z } from "zod";
import { UserUpdateWithoutAnnouncementInputObjectSchema } from "./UserUpdateWithoutAnnouncementInput.schema";
import { UserUncheckedUpdateWithoutAnnouncementInputObjectSchema } from "./UserUncheckedUpdateWithoutAnnouncementInput.schema";
import { UserCreateWithoutAnnouncementInputObjectSchema } from "./UserCreateWithoutAnnouncementInput.schema";
import { UserUncheckedCreateWithoutAnnouncementInputObjectSchema } from "./UserUncheckedCreateWithoutAnnouncementInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutAnnouncementInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAnnouncementInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAnnouncementInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAnnouncementInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAnnouncementInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutAnnouncementInputObjectSchema = Schema;
