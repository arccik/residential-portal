import { z } from "zod";
import { ResidentWhereUniqueInputObjectSchema } from "./ResidentWhereUniqueInput.schema";
import { ResidentUpdateWithoutPropertyInputObjectSchema } from "./ResidentUpdateWithoutPropertyInput.schema";
import { ResidentUncheckedUpdateWithoutPropertyInputObjectSchema } from "./ResidentUncheckedUpdateWithoutPropertyInput.schema";
import { ResidentCreateWithoutPropertyInputObjectSchema } from "./ResidentCreateWithoutPropertyInput.schema";
import { ResidentUncheckedCreateWithoutPropertyInputObjectSchema } from "./ResidentUncheckedCreateWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentUpsertWithWhereUniqueWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => ResidentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ResidentUpdateWithoutPropertyInputObjectSchema),
        z.lazy(() => ResidentUncheckedUpdateWithoutPropertyInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ResidentCreateWithoutPropertyInputObjectSchema),
        z.lazy(() => ResidentUncheckedCreateWithoutPropertyInputObjectSchema),
      ]),
    })
    .strict();

export const ResidentUpsertWithWhereUniqueWithoutPropertyInputObjectSchema =
  Schema;
