import { z } from "zod";
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from "./AccountCreateNestedManyWithoutUserInput.schema";
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema";
import { AnnouncementCreateNestedManyWithoutUserInputObjectSchema } from "./AnnouncementCreateNestedManyWithoutUserInput.schema";
import { KeyManagementCreateNestedManyWithoutAuthorizedByInputObjectSchema } from "./KeyManagementCreateNestedManyWithoutAuthorizedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateWithoutAprovedResidentsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Announcement: z
      .lazy(() => AnnouncementCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    KeyManagement: z
      .lazy(
        () => KeyManagementCreateNestedManyWithoutAuthorizedByInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserCreateWithoutAprovedResidentsInputObjectSchema = Schema;
