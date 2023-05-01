import { z } from "zod";
import { ResidentWhereUniqueInputObjectSchema } from "./ResidentWhereUniqueInput.schema";
import { ResidentCreateWithoutApprovedByUserInputObjectSchema } from "./ResidentCreateWithoutApprovedByUserInput.schema";
import { ResidentUncheckedCreateWithoutApprovedByUserInputObjectSchema } from "./ResidentUncheckedCreateWithoutApprovedByUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentCreateOrConnectWithoutApprovedByUserInput> =
  z
    .object({
      where: z.lazy(() => ResidentWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ResidentCreateWithoutApprovedByUserInputObjectSchema),
        z.lazy(
          () => ResidentUncheckedCreateWithoutApprovedByUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ResidentCreateOrConnectWithoutApprovedByUserInputObjectSchema =
  Schema;
