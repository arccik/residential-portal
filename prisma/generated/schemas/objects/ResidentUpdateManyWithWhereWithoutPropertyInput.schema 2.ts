import { z } from "zod";
import { ResidentScalarWhereInputObjectSchema } from "./ResidentScalarWhereInput.schema";
import { ResidentUpdateManyMutationInputObjectSchema } from "./ResidentUpdateManyMutationInput.schema";
import { ResidentUncheckedUpdateManyWithoutResidentInputObjectSchema } from "./ResidentUncheckedUpdateManyWithoutResidentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentUpdateManyWithWhereWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => ResidentScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ResidentUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ResidentUncheckedUpdateManyWithoutResidentInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ResidentUpdateManyWithWhereWithoutPropertyInputObjectSchema =
  Schema;
