import { z } from "zod";
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema";
import { AnnouncementCreateNestedManyWithoutUserInputObjectSchema } from "./AnnouncementCreateNestedManyWithoutUserInput.schema";
import { ResidentCreateNestedManyWithoutApprovedByUserInputObjectSchema } from "./ResidentCreateNestedManyWithoutApprovedByUserInput.schema";
import { KeyManagementCreateNestedManyWithoutAuthorizedByInputObjectSchema } from "./KeyManagementCreateNestedManyWithoutAuthorizedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Announcement: z
      .lazy(() => AnnouncementCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    AprovedResidents: z
      .lazy(
        () => ResidentCreateNestedManyWithoutApprovedByUserInputObjectSchema
      )
      .optional(),
    KeyManagement: z
      .lazy(
        () => KeyManagementCreateNestedManyWithoutAuthorizedByInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserCreateWithoutAccountsInputObjectSchema = Schema;
