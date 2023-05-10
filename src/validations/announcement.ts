import { z } from "zod";
import { AnnouncementCreateOneSchema } from "prisma/generated/schemas";

export const AnnouncementValidation = z
  .object({
    subject: z.string().min(1, "Subject Required"),
    text: z.string().min(1, "Please provide body of announcement"),
    startDate: z.date().optional().nullable(),
    endDate: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    sendingEmail: z.boolean().optional(),
    archived: z.boolean().optional(),
    filter: z.string().optional().nullable(),
  })
  .strict();
