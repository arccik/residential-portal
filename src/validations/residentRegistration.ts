import { z } from "zod";

export const residentRegistrationValidation = z.object({
  title: z.string().email("An email is required."),
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string(),
  phoneNumber: z.string(),
  altPhoneNumer: z.string().optional(),
  group: z.string(),
  propertyId: z.string(),
  userId: z.string(),
  password: z.string(),
});
