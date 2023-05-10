import { z } from "zod";
import { AnnouncementWhereUniqueInputObjectSchema } from "./AnnouncementWhereUniqueInput.schema";
import { AnnouncementUpdateWithoutUserInputObjectSchema } from "./AnnouncementUpdateWithoutUserInput.schema";
import { AnnouncementUncheckedUpdateWithoutUserInputObjectSchema } from "./AnnouncementUncheckedUpdateWithoutUserInput.schema";
import { AnnouncementCreateWithoutUserInputObjectSchema } from "./AnnouncementCreateWithoutUserInput.schema";
import { AnnouncementUncheckedCreateWithoutUserInputObjectSchema } from "./AnnouncementUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AnnouncementUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AnnouncementUpdateWithoutUserInputObjectSchema),
        z.lazy(() => AnnouncementUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AnnouncementCreateWithoutUserInputObjectSchema),
        z.lazy(() => AnnouncementUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const AnnouncementUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
