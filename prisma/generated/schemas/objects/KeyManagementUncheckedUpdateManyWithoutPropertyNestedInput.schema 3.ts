import { z } from "zod";
import { KeyManagementCreateWithoutPropertyInputObjectSchema } from "./KeyManagementCreateWithoutPropertyInput.schema";
import { KeyManagementUncheckedCreateWithoutPropertyInputObjectSchema } from "./KeyManagementUncheckedCreateWithoutPropertyInput.schema";
import { KeyManagementCreateOrConnectWithoutPropertyInputObjectSchema } from "./KeyManagementCreateOrConnectWithoutPropertyInput.schema";
import { KeyManagementUpsertWithWhereUniqueWithoutPropertyInputObjectSchema } from "./KeyManagementUpsertWithWhereUniqueWithoutPropertyInput.schema";
import { KeyManagementCreateManyPropertyInputEnvelopeObjectSchema } from "./KeyManagementCreateManyPropertyInputEnvelope.schema";
import { KeyManagementWhereUniqueInputObjectSchema } from "./KeyManagementWhereUniqueInput.schema";
import { KeyManagementUpdateWithWhereUniqueWithoutPropertyInputObjectSchema } from "./KeyManagementUpdateWithWhereUniqueWithoutPropertyInput.schema";
import { KeyManagementUpdateManyWithWhereWithoutPropertyInputObjectSchema } from "./KeyManagementUpdateManyWithWhereWithoutPropertyInput.schema";
import { KeyManagementScalarWhereInputObjectSchema } from "./KeyManagementScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementUncheckedUpdateManyWithoutPropertyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => KeyManagementCreateWithoutPropertyInputObjectSchema),
          z
            .lazy(() => KeyManagementCreateWithoutPropertyInputObjectSchema)
            .array(),
          z.lazy(
            () => KeyManagementUncheckedCreateWithoutPropertyInputObjectSchema
          ),
          z
            .lazy(
              () => KeyManagementUncheckedCreateWithoutPropertyInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => KeyManagementCreateOrConnectWithoutPropertyInputObjectSchema
          ),
          z
            .lazy(
              () => KeyManagementCreateOrConnectWithoutPropertyInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              KeyManagementUpsertWithWhereUniqueWithoutPropertyInputObjectSchema
          ),
          z
            .lazy(
              () =>
                KeyManagementUpsertWithWhereUniqueWithoutPropertyInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => KeyManagementCreateManyPropertyInputEnvelopeObjectSchema)
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
              KeyManagementUpdateWithWhereUniqueWithoutPropertyInputObjectSchema
          ),
          z
            .lazy(
              () =>
                KeyManagementUpdateWithWhereUniqueWithoutPropertyInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              KeyManagementUpdateManyWithWhereWithoutPropertyInputObjectSchema
          ),
          z
            .lazy(
              () =>
                KeyManagementUpdateManyWithWhereWithoutPropertyInputObjectSchema
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

export const KeyManagementUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema =
  Schema;
