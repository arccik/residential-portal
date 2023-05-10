import { z } from "zod";
import { KeyManagementCreateWithoutAuthorizedByInputObjectSchema } from "./KeyManagementCreateWithoutAuthorizedByInput.schema";
import { KeyManagementUncheckedCreateWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUncheckedCreateWithoutAuthorizedByInput.schema";
import { KeyManagementCreateOrConnectWithoutAuthorizedByInputObjectSchema } from "./KeyManagementCreateOrConnectWithoutAuthorizedByInput.schema";
import { KeyManagementUpsertWithWhereUniqueWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUpsertWithWhereUniqueWithoutAuthorizedByInput.schema";
import { KeyManagementCreateManyAuthorizedByInputEnvelopeObjectSchema } from "./KeyManagementCreateManyAuthorizedByInputEnvelope.schema";
import { KeyManagementWhereUniqueInputObjectSchema } from "./KeyManagementWhereUniqueInput.schema";
import { KeyManagementUpdateWithWhereUniqueWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUpdateWithWhereUniqueWithoutAuthorizedByInput.schema";
import { KeyManagementUpdateManyWithWhereWithoutAuthorizedByInputObjectSchema } from "./KeyManagementUpdateManyWithWhereWithoutAuthorizedByInput.schema";
import { KeyManagementScalarWhereInputObjectSchema } from "./KeyManagementScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementUpdateManyWithoutAuthorizedByNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              KeyManagementUpsertWithWhereUniqueWithoutAuthorizedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                KeyManagementUpsertWithWhereUniqueWithoutAuthorizedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => KeyManagementCreateManyAuthorizedByInputEnvelopeObjectSchema
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => KeyManagementWhereUniqueInputObjectSchema),
          z.lazy(() => KeyManagementWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => KeyManagementWhereUniqueInputObjectSchema),
          z.lazy(() => KeyManagementWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => KeyManagementWhereUniqueInputObjectSchema),
          z.lazy(() => KeyManagementWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => KeyManagementWhereUniqueInputObjectSchema),
          z.lazy(() => KeyManagementWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              KeyManagementUpdateWithWhereUniqueWithoutAuthorizedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                KeyManagementUpdateWithWhereUniqueWithoutAuthorizedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              KeyManagementUpdateManyWithWhereWithoutAuthorizedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                KeyManagementUpdateManyWithWhereWithoutAuthorizedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => KeyManagementScalarWhereInputObjectSchema),
          z.lazy(() => KeyManagementScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const KeyManagementUpdateManyWithoutAuthorizedByNestedInputObjectSchema =
  Schema;
