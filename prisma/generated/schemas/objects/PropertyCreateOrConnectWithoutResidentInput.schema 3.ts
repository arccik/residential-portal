import { z } from "zod";
import { PropertyWhereUniqueInputObjectSchema } from "./PropertyWhereUniqueInput.schema";
import { PropertyCreateWithoutResidentInputObjectSchema } from "./PropertyCreateWithoutResidentInput.schema";
import { PropertyUncheckedCreateWithoutResidentInputObjectSchema } from "./PropertyUncheckedCreateWithoutResidentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyCreateOrConnectWithoutResidentInput> = z
  .object({
    where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutResidentInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutResidentInputObjectSchema),
    ]),
  })
  .strict();

export const PropertyCreateOrConnectWithoutResidentInputObjectSchema = Schema;
