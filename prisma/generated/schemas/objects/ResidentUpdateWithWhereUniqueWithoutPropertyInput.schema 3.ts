import { z } from "zod";
import { ResidentWhereUniqueInputObjectSchema } from "./ResidentWhereUniqueInput.schema";
import { ResidentUpdateWithoutPropertyInputObjectSchema } from "./ResidentUpdateWithoutPropertyInput.schema";
import { ResidentUncheckedUpdateWithoutPropertyInputObjectSchema } from "./ResidentUncheckedUpdateWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentUpdateWithWhereUniqueWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => ResidentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ResidentUpdateWithoutPropertyInputObjectSchema),
        z.lazy(() => ResidentUncheckedUpdateWithoutPropertyInputObjectSchema),
      ]),
    })
    .strict();

export const ResidentUpdateWithWhereUniqueWithoutPropertyInputObjectSchema =
  Schema;
