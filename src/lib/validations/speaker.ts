
import * as z from "zod";

export const SpeakerFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    company: z.string().min(2, "Company name must be at least 2 characters"),
    role: z.string().min(2, "Role must be at least 2 characters"),
    talkTitle: z.string().min(5, "Talk title must be at least 5 characters"),
    talkDescription: z.string().min(100, "Please provide a detailed description (at least 100 characters)"),
    talkDuration: z.string().min(1, "Please select a duration"),
    previousExperience: z.string().optional(),
    portfolioUrl: z.string().url("Please enter a valid URL").optional(),
    linkedinUrl: z.string().url("Please enter a valid URL").optional(),
    additionalNotes: z.string().optional(),
});