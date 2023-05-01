import { z } from "zod";
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInput.schema";
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema";
import { AnnouncementUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AnnouncementUncheckedCreateNestedManyWithoutUserInput.schema";
import { KeyManagementUncheckedCreateNestedManyWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUncheckedCreateNestedManyWithoutAuthorizedByInput.schema";
import { KeyCollectorUncheckedCreateNestedManyWithoutAuthorizedByInputObjectSchema } from "./KeyCollectorUncheckedCreateNestedManyWithoutAuthorizedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutAprovedResidentsInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      emailVerified: z.date().optional().nullable(),
      image: z.string().optional().nullable(),
      accounts: z
        .lazy(
          () => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema
        )
        .optional(),
      sessions: z
        .lazy(
          () => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema
        )
        .optional(),
      Announcement: z
        .lazy(
          () =>
            AnnouncementUncheckedCreateNestedManyWithoutUserInputObjectSchema
        )
        .optional(),
      KeyManagement: z
        .lazy(
          () =>
            KeyManagementUncheckedCreateNestedManyWithoutAuthorizedByInputObjectSchema
        )
        .optional(),
      KeyCollector: z
        .lazy(
          () =>
            KeyCollectorUncheckedCreateNestedManyWithoutAuthorizedByInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutAprovedResidentsInputObjectSchema =
  Schema;
