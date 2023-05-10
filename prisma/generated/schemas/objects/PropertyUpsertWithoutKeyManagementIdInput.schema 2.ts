import { z } from "zod";
import { PropertyUpdateWithoutKeyManagementIdInputObjectSchema } from "./PropertyUpdateWithoutKeyManagementIdInput.schema";
import { PropertyUncheckedUpdateWithoutKeyManagementIdInputObjectSchema } from "./PropertyUncheckedUpdateWithoutKeyManagementIdInput.schema";
import { PropertyCreateWithoutKeyManagementIdInputObjectSchema } from "./PropertyCreateWithoutKeyManagementIdInput.schema";
import { PropertyUncheckedCreateWithoutKeyManagementIdInputObjectSchema } from "./PropertyUncheckedCreateWithoutKeyManagementIdInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyUpsertWithoutKeyManagementIdInput> = z
  .object({
    update: z.union([
      z.lazy(() => PropertyUpdateWithoutKeyManagementIdInputObjectSchema),
      z.lazy(
        () => PropertyUncheckedUpdateWithoutKeyManagementIdInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutKeyManagementIdInputObjectSchema),
      z.lazy(
        () => PropertyUncheckedCreateWithoutKeyManagementIdInputObjectSchema
      ),
    ]),
  })
  .strict();

export const PropertyUpsertWithoutKeyManagementIdInputObjectSchema = Schema;
