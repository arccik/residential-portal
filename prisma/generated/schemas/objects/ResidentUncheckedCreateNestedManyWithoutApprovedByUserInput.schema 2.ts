import { z } from "zod";
import { ResidentCreateWithoutApprovedByUserInputObjectSchema } from "./ResidentCreateWithoutApprovedByUserInput.schema";
import { ResidentUncheckedCreateWithoutApprovedByUserInputObjectSchema } from "./ResidentUncheckedCreateWithoutApprovedByUserInput.schema";
import { ResidentCreateOrConnectWithoutApprovedByUserInputObjectSchema } from "./ResidentCreateOrConnectWithoutApprovedByUserInput.schema";
import { ResidentCreateManyApprovedByUserInputEnvelopeObjectSchema } from "./ResidentCreateManyApprovedByUserInputEnvelope.schema";
import { ResidentWhereUniqueInputObjectSchema } from "./ResidentWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentUncheckedCreateNestedManyWithoutApprovedByUserInput> =
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
      createMany: z
        .lazy(() => ResidentCreateManyApprovedByUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ResidentWhereUniqueInputObjectSchema),
          z.lazy(() => ResidentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ResidentUncheckedCreateNestedManyWithoutApprovedByUserInputObjectSchema =
  Schema;
