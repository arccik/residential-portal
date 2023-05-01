import { z } from "zod";
import { KeyManagementWhereUniqueInputObjectSchema } from "./KeyManagementWhereUniqueInput.schema";
import { KeyManagementCreateWithoutAuthorizedByInputObjectSchema } from "./KeyManagementCreateWithoutAuthorizedByInput.schema";
import { KeyManagementUncheckedCreateWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUncheckedCreateWithoutAuthorizedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementCreateOrConnectWithoutAuthorizedByInput> =
  z
    .object({
      where: z.lazy(() => KeyManagementWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => KeyManagementCreateWithoutAuthorizedByInputObjectSchema),
        z.lazy(
          () => KeyManagementUncheckedCreateWithoutAuthorizedByInputObjectSchema
        ),
      ]),
    })
    .strict();

export const KeyManagementCreateOrConnectWithoutAuthorizedByInputObjectSchema =
  Schema;
