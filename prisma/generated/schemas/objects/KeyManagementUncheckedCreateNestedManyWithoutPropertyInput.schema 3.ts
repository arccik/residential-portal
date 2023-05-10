import { z } from "zod";
import { KeyManagementCreateWithoutPropertyInputObjectSchema } from "./KeyManagementCreateWithoutPropertyInput.schema";
import { KeyManagementUncheckedCreateWithoutPropertyInputObjectSchema } from "./KeyManagementUncheckedCreateWithoutPropertyInput.schema";
import { KeyManagementCreateOrConnectWithoutPropertyInputObjectSchema } from "./KeyManagementCreateOrConnectWithoutPropertyInput.schema";
import { KeyManagementCreateManyPropertyInputEnvelopeObjectSchema } from "./KeyManagementCreateManyPropertyInputEnvelope.schema";
import { KeyManagementWhereUniqueInputObjectSchema } from "./KeyManagementWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementUncheckedCreateNestedManyWithoutPropertyInput> =
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
      createMany: z
        .lazy(() => KeyManagementCreateManyPropertyInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => KeyManagementWhereUniqueInputObjectSchema),
          z.lazy(() => KeyManagementWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const KeyManagementUncheckedCreateNestedManyWithoutPropertyInputObjectSchema =
  Schema;
