import { z } from "zod";
import { KeyManagementScalarWhereInputObjectSchema } from "./KeyManagementScalarWhereInput.schema";
import { KeyManagementUpdateManyMutationInputObjectSchema } from "./KeyManagementUpdateManyMutationInput.schema";
import { KeyManagementUncheckedUpdateManyWithoutKeyManagementInputObjectSchema } from "./KeyManagementUncheckedUpdateManyWithoutKeyManagementInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.KeyManagementUpdateManyWithWhereWithoutAuthorizedByInput> =
  z
    .object({
      where: z.lazy(() => KeyManagementScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => KeyManagementUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            KeyManagementUncheckedUpdateManyWithoutKeyManagementInputObjectSchema
        ),
      ]),
    })
    .strict();

export const KeyManagementUpdateManyWithWhereWithoutAuthorizedByInputObjectSchema =
  Schema;
