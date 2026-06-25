import { z } from "zod";

export const registrationSchema = z.object({
    fullName: z
    .string()
    .min(2, "Please enter minimum 2 characters")
    .max(50, "Name is too long"),
    
  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required")
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Please enter a valid date",
    }),

  grade: z
    .string()
    .min(1, "Grade is required")
    .toUpperCase() // Automatically handles lowercase inputs gracefully
    .regex(/^[ABCDF][+-]?$/, "Enter a valid letter grade (e.g., A, B+, C-, F)"),
});