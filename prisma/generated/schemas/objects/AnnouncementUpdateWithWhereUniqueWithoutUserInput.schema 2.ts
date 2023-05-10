import { z } from "zod";
import { AnnouncementWhereUniqueInputObjectSchema } from "./AnnouncementWhereUniqueInput.schema";
import { AnnouncementUpdateWithoutUserInputObjectSchema } from "./AnnouncementUpdateWithoutUserInput.schema";
import { AnnouncementUncheckedUpdateWithoutUserInputObjectSchema } from "./AnnouncementUncheckedUpdateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AnnouncementUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AnnouncementUpdateWithoutUserInputObjectSchema),
        z.lazy(() => AnnouncementUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const AnnouncementUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
