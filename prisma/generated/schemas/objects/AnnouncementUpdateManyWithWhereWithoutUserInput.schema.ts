import { z } from "zod";
import { AnnouncementScalarWhereInputObjectSchema } from "./AnnouncementScalarWhereInput.schema";
import { AnnouncementUpdateManyMutationInputObjectSchema } from "./AnnouncementUpdateManyMutationInput.schema";
import { AnnouncementUncheckedUpdateManyWithoutAnnouncementInputObjectSchema } from "./AnnouncementUncheckedUpdateManyWithoutAnnouncementInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AnnouncementUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AnnouncementScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AnnouncementUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            AnnouncementUncheckedUpdateManyWithoutAnnouncementInputObjectSchema
        ),
      ]),
    })
    .strict();

export const AnnouncementUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
