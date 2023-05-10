import { z } from "zod";
import { ResidentCreateWithoutPropertyInputObjectSchema } from "./ResidentCreateWithoutPropertyInput.schema";
import { ResidentUncheckedCreateWithoutPropertyInputObjectSchema } from "./ResidentUncheckedCreateWithoutPropertyInput.schema";
import { ResidentCreateOrConnectWithoutPropertyInputObjectSchema } from "./ResidentCreateOrConnectWithoutPropertyInput.schema";
import { ResidentUpsertWithWhereUniqueWithoutPropertyInputObjectSchema } from "./ResidentUpsertWithWhereUniqueWithoutPropertyInput.schema";
import { ResidentCreateManyPropertyInputEnvelopeObjectSchema } from "./ResidentCreateManyPropertyInputEnvelope.schema";
import { ResidentWhereUniqueInputObjectSchema } from "./ResidentWhereUniqueInput.schema";
import { ResidentUpdateWithWhereUniqueWithoutPropertyInputObjectSchema } from "./ResidentUpdateWithWhereUniqueWithoutPropertyInput.schema";
import { ResidentUpdateManyWithWhereWithoutPropertyInputObjectSchema } from "./ResidentUpdateManyWithWhereWithoutPropertyInput.schema";
import { ResidentScalarWhereInputObjectSchema } from "./ResidentScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentUpdateManyWithoutPropertyNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ResidentCreateWithoutPropertyInputObjectSchema),
        z.lazy(() => ResidentCreateWithoutPropertyInputObjectSchema).array(),
        z.lazy(() => ResidentUncheckedCreateWithoutPropertyInputObjectSchema),
        z
          .lazy(() => ResidentUncheckedCreateWithoutPropertyInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ResidentCreateOrConnectWithoutPropertyInputObjectSchema),
        z
          .lazy(() => ResidentCreateOrConnectWithoutPropertyInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ResidentUpsertWithWhereUniqueWithoutPropertyInputObjectSchema
        ),
        z
          .lazy(
            () => ResidentUpsertWithWhereUniqueWithoutPropertyInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ResidentCreateManyPropertyInputEnvelopeObjectSchema)
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
          () => ResidentUpdateWithWhereUniqueWithoutPropertyInputObjectSchema
        ),
        z
          .lazy(
            () => ResidentUpdateWithWhereUniqueWithoutPropertyInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ResidentUpdateManyWithWhereWithoutPropertyInputObjectSchema
        ),
        z
          .lazy(
            () => ResidentUpdateManyWithWhereWithoutPropertyInputObjectSchema
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

export const ResidentUpdateManyWithoutPropertyNestedInputObjectSchema = Schema;
