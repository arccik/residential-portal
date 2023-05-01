import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const propertyRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.property.findMany({});
  }),
  getOne: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.property.findFirst({
      where: {
        id: input,
      },
    });
  }),
  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.property.delete({
      where: {
        id: input,
      },
    });
  }),
});
