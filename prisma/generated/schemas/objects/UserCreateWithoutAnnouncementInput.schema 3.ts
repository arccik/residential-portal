import { z } from "zod";
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from "./AccountCreateNestedManyWithoutUserInput.schema";
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema";
import { ResidentCreateNestedManyWithoutApprovedByUserInputObjectSchema } from "./ResidentCreateNestedManyWithoutApprovedByUserInput.schema";
import { KeyManagementCreateNestedManyWithoutAuthorizedByInputObjectSchema } from "./KeyManagementCreateNestedManyWithoutAuthorizedByInput.schema";
import { KeyCollectorCreateNestedManyWithoutAuthorizedByInputObjectSchema } from "./KeyCollectorCreateNestedManyWithoutAuthorizedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateWithoutAnnouncementInput> = z
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
    KeyCollector: z
      .lazy(
        () => KeyCollectorCreateNestedManyWithoutAuthorizedByInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserCreateWithoutAnnouncementInputObjectSchema = Schema;
