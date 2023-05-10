import { z } from "zod";
import { AnnouncementWhereUniqueInputObjectSchema } from "./AnnouncementWhereUniqueInput.schema";
import { AnnouncementCreateWithoutUserInputObjectSchema } from "./AnnouncementCreateWithoutUserInput.schema";
import { AnnouncementUncheckedCreateWithoutUserInputObjectSchema } from "./AnnouncementUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AnnouncementCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AnnouncementCreateWithoutUserInputObjectSchema),
      z.lazy(() => AnnouncementUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AnnouncementCreateOrConnectWithoutUserInputObjectSchema = Schema;
