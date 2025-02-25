import * as z from "zod";

// Form Schema
const workExperienceSchema = z.object({
    company: z.string().min(1, "Company name is required"),
    position: z.string().min(1, "Position is required"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().optional(),
    isCurrentRole: z.boolean().default(false),
    description: z.string().optional(),
}).refine((data) => {
    if (data.isCurrentRole) return true;
    if (!data.endDate) return false;

    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    const minEndDate = new Date(start);
    minEndDate.setMonth(minEndDate.getMonth() + 1);

    return end >= minEndDate;
}, {
    message: "End date must be at least 1 month after start date",
    path: ["endDate"],
});

const certificationSchema = z.object({
    title: z.string().min(1, "Certification title is required"),
    link: z.string().url("Please enter a valid URL"),
    referenceLink: z.string().optional(),
    // referenceLink: z.string().url("Please enter a valid URL").optional(),
    dateObtained: z.string().min(1, "Date obtained is required"),
});

export const applicationSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    location: z.string().min(2, "Location is required"),
    skills: z.string().min(1, "Please list your relevant skills"),
    workExperience: z.array(workExperienceSchema).min(1, "At least one work experience is required"),
    education: z.array(z.object({
        institution: z.string().min(1, "Institution name is required"),
        degree: z.string().min(1, "Degree is required"),
        field: z.string().min(1, "Field of study is required"),
        graduationYear: z.string().min(1, "Graduation year is required"),
    })).min(1, "At least one education entry is required"),
    certifications: z.array(certificationSchema).optional().default([]),
    portfolioLinks: z.array(z.object({
        title: z.string().min(1, "Link title is required"),
        url: z.string().url("Please enter a valid URL"),
    })).optional().default([]),
    coverLetter: z.string().optional(),
    whyFitForRole: z.string().min(100, "Please explain in at least 100 characters why you're a good fit for this role"),
    agreeToTerms: z.boolean().refine(val => val === true, {
        message: "You must agree to the job application policies",
    }),
});