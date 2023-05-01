import { z } from "zod";

export const ResidentsGroupSchema = z.enum([
  "OwnerAbsents",
  "OwnerOccupier",
  "Tenant",
]);
