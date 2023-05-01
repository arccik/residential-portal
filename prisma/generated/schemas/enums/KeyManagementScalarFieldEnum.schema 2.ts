import { z } from "zod";

export const KeyManagementScalarFieldEnumSchema = z.enum([
  "id",
  "propertyId",
  "userId",
  "collectorName",
  "collectorCompany",
  "collectorPhoneNumber",
]);
