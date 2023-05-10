import { z } from "zod";
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInput.schema";
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema";
import { ResidentUncheckedCreateNestedManyWithoutApprovedByUserInputObjectSchema } from "./ResidentUncheckedCreateNestedManyWithoutApprovedByUserInput.schema";
import { KeyManagementUncheckedCreateNestedManyWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUncheckedCreateNestedManyWithoutAuthorizedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutAnnouncementInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
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

export const UserUncheckedCreateWithoutAnnouncementInputObjectSchema = Schema;
