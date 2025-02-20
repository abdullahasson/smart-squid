import { z } from "zod";

export const bookMeetingSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  date: z.date({
    required_error: "Please select a date for your meeting",
  }),
  subject: z.string().min(10, "Subject must be at least 10 characters"),
});

export type TBookMeetingSchema = z.infer<typeof bookMeetingSchema>;