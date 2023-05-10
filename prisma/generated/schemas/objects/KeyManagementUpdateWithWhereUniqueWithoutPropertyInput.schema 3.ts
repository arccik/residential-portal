import { z } from "zod";
import { KeyManagementWhereUniqueInputObjectSchema } from "./KeyManagementWhereUniqueInput.schema";
import { KeyManagementUpdateWithoutPropertyInputObjectSchema } from "./KeyManagementUpdateWithoutPropertyInput.schema";
import { KeyManagementUncheckedUpdateWithoutPropertyInputObjectSchema } from "./KeyManagementUncheckedUpdateWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementUpdateWithWhereUniqueWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => KeyManagementWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => KeyManagementUpdateWithoutPropertyInputObjectSchema),
        z.lazy(
          () => KeyManagementUncheckedUpdateWithoutPropertyInputObjectSchema
        ),
      ]),
    })
    .strict();

export const KeyManagementUpdateWithWhereUniqueWithoutPropertyInputObjectSchema =
  Schema;
