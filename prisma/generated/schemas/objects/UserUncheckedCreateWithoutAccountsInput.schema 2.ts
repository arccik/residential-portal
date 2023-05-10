import { z } from "zod";
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema";
import { AnnouncementUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AnnouncementUncheckedCreateNestedManyWithoutUserInput.schema";
import { ResidentUncheckedCreateNestedManyWithoutApprovedByUserInputObjectSchema } from "./ResidentUncheckedCreateNestedManyWithoutApprovedByUserInput.schema";
import { KeyManagementUncheckedCreateNestedManyWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUncheckedCreateNestedManyWithoutAuthorizedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Announcement: z
      .lazy(
        () => AnnouncementUncheckedCreateNestedManyWithoutUserInputObjectSchema
      )
      .optional(),
    AprovedResidents: z
      .lazy(
        () =>
          ResidentUncheckedCreateNestedManyWithoutApprovedByUserInputObjectSchema
      )
      .optional(),
    KeyManagement: z
      .lazy(
        () =>
          KeyManagementUncheckedCreateNestedManyWithoutAuthorizedByInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutAccountsInputObjectSchema = Schema;
