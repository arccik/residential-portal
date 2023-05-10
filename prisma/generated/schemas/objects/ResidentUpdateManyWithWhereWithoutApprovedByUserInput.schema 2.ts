import { z } from "zod";
import { ResidentScalarWhereInputObjectSchema } from "./ResidentScalarWhereInput.schema";
import { ResidentUpdateManyMutationInputObjectSchema } from "./ResidentUpdateManyMutationInput.schema";
import { ResidentUncheckedUpdateManyWithoutAprovedResidentsInputObjectSchema } from "./ResidentUncheckedUpdateManyWithoutAprovedResidentsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentUpdateManyWithWhereWithoutApprovedByUserInput> =
  z
    .object({
      where: z.lazy(() => ResidentScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ResidentUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ResidentUncheckedUpdateManyWithoutAprovedResidentsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ResidentUpdateManyWithWhereWithoutApprovedByUserInputObjectSchema =
  Schema;
