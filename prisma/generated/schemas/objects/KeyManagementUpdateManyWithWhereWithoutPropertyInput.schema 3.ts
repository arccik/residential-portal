import { z } from "zod";
import { KeyManagementScalarWhereInputObjectSchema } from "./KeyManagementScalarWhereInput.schema";
import { KeyManagementUpdateManyMutationInputObjectSchema } from "./KeyManagementUpdateManyMutationInput.schema";
import { KeyManagementUncheckedUpdateManyWithoutKeyManagementIdInputObjectSchema } from "./KeyManagementUncheckedUpdateManyWithoutKeyManagementIdInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementUpdateManyWithWhereWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => KeyManagementScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => KeyManagementUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            KeyManagementUncheckedUpdateManyWithoutKeyManagementIdInputObjectSchema
        ),
      ]),
    })
    .strict();

export const KeyManagementUpdateManyWithWhereWithoutPropertyInputObjectSchema =
  Schema;
