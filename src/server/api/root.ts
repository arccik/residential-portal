import { createTRPCRouter } from "~/server/api/trpc";
import { announceRouter } from "./routers/annoucement";
import { residentsRouter } from "./routers/residentsDatabase";
import { keyManagementRouter } from "./routers/keyManagement";
import { propertyRouter } from "./routers/property";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  announce: announceRouter,
  residents: residentsRouter,
  keyManagement: keyManagementRouter,
  property: propertyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
