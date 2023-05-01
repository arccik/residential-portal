import { z } from "zod";

export const AnnouncementScalarFieldEnumSchema = z.enum([
  "id",
  "subject",
  "text",
  "startDate",
  "endDate",
  "image",
  "sendingEmail",
  "archived",
  "filter",
  "userId",
  "createdAt",
  "updatedAt",
]);
