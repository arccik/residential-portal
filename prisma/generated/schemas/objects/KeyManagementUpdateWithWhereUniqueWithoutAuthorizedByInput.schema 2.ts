import { z } from "zod";
import { KeyManagementWhereUniqueInputObjectSchema } from "./KeyManagementWhereUniqueInput.schema";
import { KeyManagementUpdateWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUpdateWithoutAuthorizedByInput.schema";
import { KeyManagementUncheckedUpdateWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUncheckedUpdateWithoutAuthorizedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementUpdateWithWhereUniqueWithoutAuthorizedByInput> =
  z
    .object({
      where: z.lazy(() => KeyManagementWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => KeyManagementUpdateWithoutAuthorizedByInputObjectSchema),
        z.lazy(
          () => KeyManagementUncheckedUpdateWithoutAuthorizedByInputObjectSchema
        ),
      ]),
    })
    .strict();

export const KeyManagementUpdateWithWhereUniqueWithoutAuthorizedByInputObjectSchema =
  Schema;
