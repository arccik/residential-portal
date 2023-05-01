import { z } from "zod";
import { KeyManagementWhereUniqueInputObjectSchema } from "./KeyManagementWhereUniqueInput.schema";
import { KeyManagementUpdateWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUpdateWithoutAuthorizedByInput.schema";
import { KeyManagementUncheckedUpdateWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUncheckedUpdateWithoutAuthorizedByInput.schema";
import { KeyManagementCreateWithoutAuthorizedByInputObjectSchema } from "./KeyManagementCreateWithoutAuthorizedByInput.schema";
import { KeyManagementUncheckedCreateWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUncheckedCreateWithoutAuthorizedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementUpsertWithWhereUniqueWithoutAuthorizedByInput> =
  z
    .object({
      where: z.lazy(() => KeyManagementWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => KeyManagementUpdateWithoutAuthorizedByInputObjectSchema),
        z.lazy(
          () => KeyManagementUncheckedUpdateWithoutAuthorizedByInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => KeyManagementCreateWithoutAuthorizedByInputObjectSchema),
        z.lazy(
          () => KeyManagementUncheckedCreateWithoutAuthorizedByInputObjectSchema
        ),
      ]),
    })
    .strict();

export const KeyManagementUpsertWithWhereUniqueWithoutAuthorizedByInputObjectSchema =
  Schema;
