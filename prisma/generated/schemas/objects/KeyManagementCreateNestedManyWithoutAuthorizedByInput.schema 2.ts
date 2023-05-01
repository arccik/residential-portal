import { z } from "zod";
import { KeyManagementCreateWithoutAuthorizedByInputObjectSchema } from "./KeyManagementCreateWithoutAuthorizedByInput.schema";
import { KeyManagementUncheckedCreateWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUncheckedCreateWithoutAuthorizedByInput.schema";
import { KeyManagementCreateOrConnectWithoutAuthorizedByInputObjectSchema } from "./KeyManagementCreateOrConnectWithoutAuthorizedByInput.schema";
import { KeyManagementCreateManyAuthorizedByInputEnvelopeObjectSchema } from "./KeyManagementCreateManyAuthorizedByInputEnvelope.schema";
import { KeyManagementWhereUniqueInputObjectSchema } from "./KeyManagementWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementCreateNestedManyWithoutAuthorizedByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => KeyManagementCreateWithoutAuthorizedByInputObjectSchema),
          z
            .lazy(() => KeyManagementCreateWithoutAuthorizedByInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              KeyManagementUncheckedCreateWithoutAuthorizedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                KeyManagementUncheckedCreateWithoutAuthorizedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              KeyManagementCreateOrConnectWithoutAuthorizedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                KeyManagementCreateOrConnectWithoutAuthorizedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => KeyManagementCreateManyAuthorizedByInputEnvelopeObjectSchema
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => KeyManagementWhereUniqueInputObjectSchema),
          z.lazy(() => KeyManagementWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const KeyManagementCreateNestedManyWithoutAuthorizedByInputObjectSchema =
  Schema;
