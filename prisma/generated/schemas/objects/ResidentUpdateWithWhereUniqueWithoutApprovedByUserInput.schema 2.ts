import { z } from "zod";
import { ResidentWhereUniqueInputObjectSchema } from "./ResidentWhereUniqueInput.schema";
import { ResidentUpdateWithoutApprovedByUserInputObjectSchema } from "./ResidentUpdateWithoutApprovedByUserInput.schema";
import { ResidentUncheckedUpdateWithoutApprovedByUserInputObjectSchema } from "./ResidentUncheckedUpdateWithoutApprovedByUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentUpdateWithWhereUniqueWithoutApprovedByUserInput> =
  z
    .object({
      where: z.lazy(() => ResidentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ResidentUpdateWithoutApprovedByUserInputObjectSchema),
        z.lazy(
          () => ResidentUncheckedUpdateWithoutApprovedByUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ResidentUpdateWithWhereUniqueWithoutApprovedByUserInputObjectSchema =
  Schema;
