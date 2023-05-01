import { z } from "zod";
import { PropertyUpdateWithoutResidentInputObjectSchema } from "./PropertyUpdateWithoutResidentInput.schema";
import { PropertyUncheckedUpdateWithoutResidentInputObjectSchema } from "./PropertyUncheckedUpdateWithoutResidentInput.schema";
import { PropertyCreateWithoutResidentInputObjectSchema } from "./PropertyCreateWithoutResidentInput.schema";
import { PropertyUncheckedCreateWithoutResidentInputObjectSchema } from "./PropertyUncheckedCreateWithoutResidentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyUpsertWithoutResidentInput> = z
  .object({
    update: z.union([
      z.lazy(() => PropertyUpdateWithoutResidentInputObjectSchema),
      z.lazy(() => PropertyUncheckedUpdateWithoutResidentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutResidentInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutResidentInputObjectSchema),
    ]),
  })
  .strict();

export const PropertyUpsertWithoutResidentInputObjectSchema = Schema;
