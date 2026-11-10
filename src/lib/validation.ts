import { z } from "zod";

/** Indian mobile: optional +91 / 0 prefix, then 10 digits starting 6–9. */
export const indianPhone = z
  .string()
  .trim()
  .transform((v) => v.replace(/[\s-]/g, ""))
  .refine((v) => /^(\+91|0)?[6-9]\d{9}$/.test(v), {
    message: "Enter a valid 10-digit Indian mobile number",
  });

export const personName = z
  .string()
  .trim()
  .min(2, "Please enter at least 2 characters")
  .max(80, "Keep this under 80 characters");

export const bookingSchema = z.object({
  ownerName: personName,
  phone: indianPhone,
  petName: z.string().trim().min(1, "Tell us your pet's name").max(40),
  petType: z.string().min(1, "Choose a pet type"),
  date: z
    .string()
    .min(1, "Pick a preferred date")
    .refine((v) => {
      const d = new Date(v + "T00:00:00");
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !Number.isNaN(d.getTime()) && d >= today;
    }, "Choose today or a future date"),
  reason: z.string().trim().min(5, "Briefly describe the reason (min 5 characters)").max(500),
});
export type BookingValues = z.infer<typeof bookingSchema>;

export const businessSchema = z.object({
  businessName: z.string().trim().min(2, "Enter your business name").max(100),
  category: z.string().min(1, "Choose a category"),
  city: z.string().trim().min(2, "Enter your city").max(60),
  address: z.string().trim().min(10, "Enter the full address (min 10 characters)").max(250),
  contactName: personName,
  phone: indianPhone,
  email: z.string().trim().email("Enter a valid email address").max(120),
  registration: z.string().trim().max(60).optional(),
  consent: z.boolean().refine((v) => v, "Please confirm the details are accurate"),
});
export type BusinessValues = z.infer<typeof businessSchema>;

export const correctionSchema = z.object({
  provider: z.string().min(1, "Choose the listing"),
  issue: z.string().min(1, "Choose what needs correcting"),
  details: z.string().trim().min(10, "Describe the correction (min 10 characters)").max(1000),
  email: z
    .string()
    .trim()
    .max(120)
    .refine((v) => v === "" || z.string().email().safeParse(v).success, "Enter a valid email"),
});
export type CorrectionValues = z.infer<typeof correctionSchema>;
