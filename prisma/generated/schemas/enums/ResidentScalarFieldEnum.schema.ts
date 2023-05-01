import { z } from "zod";

export const ResidentScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "firstName",
  "lastName",
  "email",
  "phoneNumber",
  "altPhoneNumer",
  "group",
  "propertyId",
  "userId",
  "createdAt",
  "updatedAt",
  "password",
]);
