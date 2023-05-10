import { z } from "zod";
import { PropertyWhereUniqueInputObjectSchema } from "./PropertyWhereUniqueInput.schema";
import { PropertyCreateWithoutKeyManagementIdInputObjectSchema } from "./PropertyCreateWithoutKeyManagementIdInput.schema";
import { PropertyUncheckedCreateWithoutKeyManagementIdInputObjectSchema } from "./PropertyUncheckedCreateWithoutKeyManagementIdInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PropertyCreateOrConnectWithoutKeyManagementIdInput> =
  z
    .object({
      where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PropertyCreateWithoutKeyManagementIdInputObjectSchema),
        z.lazy(
          () => PropertyUncheckedCreateWithoutKeyManagementIdInputObjectSchema
        ),
      ]),
    })
    .strict();

export const PropertyCreateOrConnectWithoutKeyManagementIdInputObjectSchema =
  Schema;
