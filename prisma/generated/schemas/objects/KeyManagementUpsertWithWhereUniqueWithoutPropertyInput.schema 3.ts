import { z } from "zod";
import { KeyManagementWhereUniqueInputObjectSchema } from "./KeyManagementWhereUniqueInput.schema";
import { KeyManagementUpdateWithoutPropertyInputObjectSchema } from "./KeyManagementUpdateWithoutPropertyInput.schema";
import { KeyManagementUncheckedUpdateWithoutPropertyInputObjectSchema } from "./KeyManagementUncheckedUpdateWithoutPropertyInput.schema";
import { KeyManagementCreateWithoutPropertyInputObjectSchema } from "./KeyManagementCreateWithoutPropertyInput.schema";
import { KeyManagementUncheckedCreateWithoutPropertyInputObjectSchema } from "./KeyManagementUncheckedCreateWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementUpsertWithWhereUniqueWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => KeyManagementWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => KeyManagementUpdateWithoutPropertyInputObjectSchema),
        z.lazy(
          () => KeyManagementUncheckedUpdateWithoutPropertyInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => KeyManagementCreateWithoutPropertyInputObjectSchema),
        z.lazy(
          () => KeyManagementUncheckedCreateWithoutPropertyInputObjectSchema
        ),
      ]),
    })
    .strict();

export const KeyManagementUpsertWithWhereUniqueWithoutPropertyInputObjectSchema =
  Schema;
