import { z } from "zod";
import { AnnouncementCreateWithoutUserInputObjectSchema } from "./AnnouncementCreateWithoutUserInput.schema";
import { AnnouncementUncheckedCreateWithoutUserInputObjectSchema } from "./AnnouncementUncheckedCreateWithoutUserInput.schema";
import { AnnouncementCreateOrConnectWithoutUserInputObjectSchema } from "./AnnouncementCreateOrConnectWithoutUserInput.schema";
import { AnnouncementCreateManyUserInputEnvelopeObjectSchema } from "./AnnouncementCreateManyUserInputEnvelope.schema";
import { AnnouncementWhereUniqueInputObjectSchema } from "./AnnouncementWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AnnouncementCreateNestedManyWithoutUserInput> = z
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
    createMany: z
      .lazy(() => AnnouncementCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
        z.lazy(() => AnnouncementWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const AnnouncementCreateNestedManyWithoutUserInputObjectSchema = Schema;
