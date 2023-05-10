import { z } from "zod";
import { ResidentWhereUniqueInputObjectSchema } from "./ResidentWhereUniqueInput.schema";
import { ResidentCreateWithoutPropertyInputObjectSchema } from "./ResidentCreateWithoutPropertyInput.schema";
import { ResidentUncheckedCreateWithoutPropertyInputObjectSchema } from "./ResidentUncheckedCreateWithoutPropertyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ResidentCreateOrConnectWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => ResidentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ResidentCreateWithoutPropertyInputObjectSchema),
      z.lazy(() => ResidentUncheckedCreateWithoutPropertyInputObjectSchema),
    ]),
  })
  .strict();

export const ResidentCreateOrConnectWithoutPropertyInputObjectSchema = Schema;
