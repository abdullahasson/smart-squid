import { z } from "zod";

export const bookMeetingSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  store: z.string().min(2, "Store must be at least 2 characters"),
  service: z.string().min(2, "Service must be at least 2 characters"),
  note: z.string().min(2, "Note must be at least 2 characters"),
  date: z.date({
    required_error: "Please select a date for your meeting",
  }),
});

export type TBookMeetingSchema = z.infer<typeof bookMeetingSchema>;