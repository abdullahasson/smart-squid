import { z } from "zod";

export const bookMeetingSchema = z.object({
  fullName: z
    .string()
    .min(2, "الاسم يجب ان لا يقل عن حرفين"),

  email: z
    .string()
    .email("أدخل البريد الألكتروني"),

  phone: z
    .string()
    .min(10, "رقم الهاتف يجب ان لايقل عن 10 أرقام"),

  store: z
    .string()
    .min(2, "اخر المتجر الألكتروني"),

  service: z
    .string()
    .min(2, "وصف الخدمة مطلوب"),

  note: z
    .string()
    .min(2, "ادخل ملاحظة"),

  date: z.date({
    required_error: "رجاءا , ادخل موعد الأجتماع",
  }),
});

export type TBookMeetingSchema = z.infer<typeof bookMeetingSchema>;