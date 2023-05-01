import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const keyManagementRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.keyManagement.findMany({
      include: { property: true, authorizedBy: true },
    });
  }),
  getOne: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.keyManagement.findFirst({
      where: {
        id: input,
      },
    });
  }),
  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.keyManagement.delete({
      where: {
        id: input,
      },
    });
  }),
});
