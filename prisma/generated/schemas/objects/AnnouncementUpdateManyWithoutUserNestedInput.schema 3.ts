import { z } from "zod";
import { AnnouncementCreateWithoutUserInputObjectSchema } from "./AnnouncementCreateWithoutUserInput.schema";
import { AnnouncementUncheckedCreateWithoutUserInputObjectSchema } from "./AnnouncementUncheckedCreateWithoutUserInput.schema";
import { AnnouncementCreateOrConnectWithoutUserInputObjectSchema } from "./AnnouncementCreateOrConnectWithoutUserInput.schema";
import { AnnouncementUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./AnnouncementUpsertWithWhereUniqueWithoutUserInput.schema";
import { AnnouncementCreateManyUserInputEnvelopeObjectSchema } from "./AnnouncementCreateManyUserInputEnvelope.schema";
import { AnnouncementWhereUniqueInputObjectSchema } from "./AnnouncementWhereUniqueInput.schema";
import { AnnouncementUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./AnnouncementUpdateWithWhereUniqueWithoutUserInput.schema";
import { AnnouncementUpdateManyWithWhereWithoutUserInputObjectSchema } from "./AnnouncementUpdateManyWithWhereWithoutUserInput.schema";
import { AnnouncementScalarWhereInputObjectSchema } from "./AnnouncementScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AnnouncementUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AnnouncementCreateWithoutUserInputObjectSchema),
        z.lazy(() => AnnouncementCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => AnnouncementUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => AnnouncementUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => AnnouncementCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => AnnouncementCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => AnnouncementUpsertWithWhereUniqueWithoutUserInputObjectSchema
        ),
        z
          .lazy(
            () => AnnouncementUpsertWithWhereUniqueWithoutUserInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => AnnouncementCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
        z.lazy(() => AnnouncementWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
        z.lazy(() => AnnouncementWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
        z.lazy(() => AnnouncementWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
        z.lazy(() => AnnouncementWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => AnnouncementUpdateWithWhereUniqueWithoutUserInputObjectSchema
        ),
        z
          .lazy(
            () => AnnouncementUpdateWithWhereUniqueWithoutUserInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => AnnouncementUpdateManyWithWhereWithoutUserInputObjectSchema
        ),
        z
          .lazy(
            () => AnnouncementUpdateManyWithWhereWithoutUserInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => AnnouncementScalarWhereInputObjectSchema),
        z.lazy(() => AnnouncementScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const AnnouncementUpdateManyWithoutUserNestedInputObjectSchema = Schema;
