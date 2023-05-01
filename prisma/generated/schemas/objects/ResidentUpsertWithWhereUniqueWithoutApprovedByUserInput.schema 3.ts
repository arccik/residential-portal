import { z } from "zod";
import { ResidentWhereUniqueInputObjectSchema } from "./ResidentWhereUniqueInput.schema";
import { ResidentUpdateWithoutApprovedByUserInputObjectSchema } from "./ResidentUpdateWithoutApprovedByUserInput.schema";
import { ResidentUncheckedUpdateWithoutApprovedByUserInputObjectSchema } from "./ResidentUncheckedUpdateWithoutApprovedByUserInput.schema";
import { ResidentCreateWithoutApprovedByUserInputObjectSchema } from "./ResidentCreateWithoutApprovedByUserInput.schema";
import { ResidentUncheckedCreateWithoutApprovedByUserInputObjectSchema } from "./ResidentUncheckedCreateWithoutApprovedByUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentUpsertWithWhereUniqueWithoutApprovedByUserInput> =
  z
    .object({
      where: z.lazy(() => ResidentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ResidentUpdateWithoutApprovedByUserInputObjectSchema),
        z.lazy(
          () => ResidentUncheckedUpdateWithoutApprovedByUserInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => ResidentCreateWithoutApprovedByUserInputObjectSchema),
        z.lazy(
          () => ResidentUncheckedCreateWithoutApprovedByUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ResidentUpsertWithWhereUniqueWithoutApprovedByUserInputObjectSchema =
  Schema;
