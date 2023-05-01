import { z } from "zod";

export const KeyManagementScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "userId",
  "propertyId",
  "company",
  "phoneNumber",
  "type",
  "outDays",
  "periodic",
  "expireDate",
  "notes",
  "emailKeyActivity",
  "signature",
]);
