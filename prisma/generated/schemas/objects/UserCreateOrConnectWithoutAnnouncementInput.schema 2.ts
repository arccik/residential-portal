import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutAnnouncementInputObjectSchema } from "./UserCreateWithoutAnnouncementInput.schema";
import { UserUncheckedCreateWithoutAnnouncementInputObjectSchema } from "./UserUncheckedCreateWithoutAnnouncementInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAnnouncementInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutAnnouncementInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAnnouncementInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutAnnouncementInputObjectSchema = Schema;
