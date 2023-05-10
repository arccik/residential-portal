import { z } from "zod";
import { UserCreateWithoutAnnouncementInputObjectSchema } from "./UserCreateWithoutAnnouncementInput.schema";
import { UserUncheckedCreateWithoutAnnouncementInputObjectSchema } from "./UserUncheckedCreateWithoutAnnouncementInput.schema";
import { UserCreateOrConnectWithoutAnnouncementInputObjectSchema } from "./UserCreateOrConnectWithoutAnnouncementInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutAnnouncementInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutAnnouncementInputObjectSchema = Schema;
