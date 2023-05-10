import { z } from "zod";
import { KeyManagementWhereUniqueInputObjectSchema } from "./KeyManagementWhereUniqueInput.schema";
import { KeyManagementCreateWithoutPropertyInputObjectSchema } from "./KeyManagementCreateWithoutPropertyInput.schema";
import { KeyManagementUncheckedCreateWithoutPropertyInputObjectSchema } from "./KeyManagementUncheckedCreateWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementCreateOrConnectWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => KeyManagementWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => KeyManagementCreateWithoutPropertyInputObjectSchema),
        z.lazy(
          () => KeyManagementUncheckedCreateWithoutPropertyInputObjectSchema
        ),
      ]),
    })
    .strict();

export const KeyManagementCreateOrConnectWithoutPropertyInputObjectSchema =
  Schema;
