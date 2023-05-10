import { z } from "zod";

export const residentRegistrationValidation = z
  .object({
    title: z.string().min(3, "Title is required."),
    firstName: z.string().min(1, "First name is required."),
    lastName: z.string().min(1, "Last name is required."),
    email: z.string().email("An email is required."),
    phoneNumber: z.string().min(5, "Phone number is required."),
    altPhoneNumer: z.string().optional(),
    group: z.enum(["OwnerAbsents", "OwnerOccupier", "Tenant"]),
    propertyId: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password dont match",
  });
