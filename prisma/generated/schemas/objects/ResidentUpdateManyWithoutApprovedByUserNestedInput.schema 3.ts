import { z } from "zod";
import { ResidentCreateWithoutApprovedByUserInputObjectSchema } from "./ResidentCreateWithoutApprovedByUserInput.schema";
import { ResidentUncheckedCreateWithoutApprovedByUserInputObjectSchema } from "./ResidentUncheckedCreateWithoutApprovedByUserInput.schema";
import { ResidentCreateOrConnectWithoutApprovedByUserInputObjectSchema } from "./ResidentCreateOrConnectWithoutApprovedByUserInput.schema";
import { ResidentUpsertWithWhereUniqueWithoutApprovedByUserInputObjectSchema } from "./ResidentUpsertWithWhereUniqueWithoutApprovedByUserInput.schema";
import { ResidentCreateManyApprovedByUserInputEnvelopeObjectSchema } from "./ResidentCreateManyApprovedByUserInputEnvelope.schema";
import { ResidentWhereUniqueInputObjectSchema } from "./ResidentWhereUniqueInput.schema";
import { ResidentUpdateWithWhereUniqueWithoutApprovedByUserInputObjectSchema } from "./ResidentUpdateWithWhereUniqueWithoutApprovedByUserInput.schema";
import { ResidentUpdateManyWithWhereWithoutApprovedByUserInputObjectSchema } from "./ResidentUpdateManyWithWhereWithoutApprovedByUserInput.schema";
import { ResidentScalarWhereInputObjectSchema } from "./ResidentScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentUpdateManyWithoutApprovedByUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ResidentCreateWithoutApprovedByUserInputObjectSchema),
          z
            .lazy(() => ResidentCreateWithoutApprovedByUserInputObjectSchema)
            .array(),
          z.lazy(
            () => ResidentUncheckedCreateWithoutApprovedByUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ResidentUncheckedCreateWithoutApprovedByUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ResidentCreateOrConnectWithoutApprovedByUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ResidentCreateOrConnectWithoutApprovedByUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ResidentUpsertWithWhereUniqueWithoutApprovedByUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ResidentUpsertWithWhereUniqueWithoutApprovedByUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ResidentCreateManyApprovedByUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ResidentWhereUniqueInputObjectSchema),
          z.lazy(() => ResidentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ResidentWhereUniqueInputObjectSchema),
          z.lazy(() => ResidentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ResidentWhereUniqueInputObjectSchema),
          z.lazy(() => ResidentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ResidentWhereUniqueInputObjectSchema),
          z.lazy(() => ResidentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ResidentUpdateWithWhereUniqueWithoutApprovedByUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ResidentUpdateWithWhereUniqueWithoutApprovedByUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ResidentUpdateManyWithWhereWithoutApprovedByUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ResidentUpdateManyWithWhereWithoutApprovedByUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ResidentScalarWhereInputObjectSchema),
          z.lazy(() => ResidentScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ResidentUpdateManyWithoutApprovedByUserNestedInputObjectSchema =
  Schema;
