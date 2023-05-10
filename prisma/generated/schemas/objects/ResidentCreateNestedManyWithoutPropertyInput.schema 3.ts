import { z } from "zod";
import { ResidentCreateWithoutPropertyInputObjectSchema } from "./ResidentCreateWithoutPropertyInput.schema";
import { ResidentUncheckedCreateWithoutPropertyInputObjectSchema } from "./ResidentUncheckedCreateWithoutPropertyInput.schema";
import { ResidentCreateOrConnectWithoutPropertyInputObjectSchema } from "./ResidentCreateOrConnectWithoutPropertyInput.schema";
import { ResidentCreateManyPropertyInputEnvelopeObjectSchema } from "./ResidentCreateManyPropertyInputEnvelope.schema";
import { ResidentWhereUniqueInputObjectSchema } from "./ResidentWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentCreateNestedManyWithoutPropertyInput> = z
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
    createMany: z
      .lazy(() => ResidentCreateManyPropertyInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ResidentWhereUniqueInputObjectSchema),
        z.lazy(() => ResidentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ResidentCreateNestedManyWithoutPropertyInputObjectSchema = Schema;
