"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Upload,
    Loader2,
    Plus,
    Trash2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { applicationSchema } from "@/lib/validations/jobs";
import { useToast } from "@/hooks/use-toast";

type ApplicationFormData = z.infer<typeof applicationSchema>;

export default function JobForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [resumeError, setResumeError] = useState<string | null>(null);
    const { toast } = useToast();

    const form = useForm<ApplicationFormData>({
        resolver: zodResolver(applicationSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            location: "",
            skills: "",
            coverLetter: "",
            whyFitForRole: "",
            agreeToTerms: false,
            workExperience: [{
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                isCurrentRole: false,
                description: ""
            }],
            education: [{
                institution: "",
                degree: "",
                field: "",
                graduationYear: ""
            }],
            certifications: [],
            portfolioLinks: [],
        },
    });

    const { fields: workFields, append: appendWork, remove: removeWork } = useFieldArray({
        control: form.control,
        name: "workExperience"
    });

    const { fields: educationFields, append: appendEducation, remove: removeEducation } = useFieldArray({
        control: form.control,
        name: "education"
    });

    const { fields: certFields, append: appendCert, remove: removeCert } = useFieldArray({
        control: form.control,
        name: "certifications"
    });

    const { fields: portfolioFields, append: appendPortfolio, remove: removePortfolio } = useFieldArray({
        control: form.control,
        name: "portfolioLinks"
    });

    const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setResumeError(null);

        if (!file) return;

        // Check file type
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(file.type)) {
            setResumeError('Please upload a PDF or Word document');
            return;
        }

        // Check file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
            setResumeError('File size must be less than 5MB');
            return;
        }

        setResumeFile(file);
    };


    const onSubmit = async (data: ApplicationFormData) => {
        // console.log("Form data:", data);

        if (!resumeFile) {
            setResumeError('Please upload your resume');
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            toast({
                title: "We got you!",
                description: "Application submitted successfully.",
            });

            // Reset form
            form.reset();
            setResumeFile(null);
            setResumeError(null);
        } catch (error) {
            toast({
                title: "Error!",
                description: "Failed to submit application. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg py-8 px-4 md:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Apply for this Position
            </h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Resume Upload */}
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Upload Resume (PDF or Word, max 5MB)
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-lg">
                            <div className="space-y-2 text-center">
                                <div className="mx-auto h-12 w-12 text-gray-400">
                                    <Upload className="mx-auto h-12 w-12" />
                                </div>
                                <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor="resume"
                                        className="relative cursor-pointer rounded-md font-medium text-violet-600 hover:text-violet-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-violet-500"
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            id="resume"
                                            name="resume"
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            className="sr-only"
                                            onChange={handleResumeUpload}
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                    PDF or Word up to 5MB
                                </p>
                                {resumeFile && !resumeError && (
                                    <p className="text-sm text-green-600">
                                        {resumeFile.name}
                                    </p>
                                )}
                                {resumeError && (
                                    <p className="text-sm text-red-600">{resumeError}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="john@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+1 (555) 000-0000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Input placeholder="City, Country" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Skills */}
                    <FormField
                        control={form.control}
                        name="skills"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Skills</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g., React, TypeScript, Node.js"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Work Experience */}
                    <div className="space-y-4">
                        <div className="flex items-center flex-wrap gap-4 justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">Work Experience</h3>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => appendWork({
                                    company: "",
                                    position: "",
                                    startDate: "",
                                    endDate: "",
                                    isCurrentRole: false,
                                    description: ""
                                })}
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Add Experience
                            </Button>
                        </div>

                        {workFields.map((field, index) => (
                            <div key={field.id} className="space-y-4 p-4 bg-gray-50 rounded-lg">
                                <div className="flex flex-wrap gap-4 justify-between items-center">
                                    <h4 className="font-medium text-gray-900">Experience {index + 1}</h4>
                                    {index > 0 && (
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => removeWork(index)}
                                        >
                                            <Trash2 className="w-4 h-4 text-red-500" />
                                        </Button>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name={`workExperience.${index}.company`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Company</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name={`workExperience.${index}.position`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Position</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name={`workExperience.${index}.startDate`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Start Date</FormLabel>
                                                <FormControl>
                                                    <Input type="date" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="space-y-4">

                                        {!form.watch(`workExperience.${index}.isCurrentRole`) && (
                                            <FormField
                                                control={form.control}
                                                name={`workExperience.${index}.endDate`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>End Date</FormLabel>
                                                        <FormControl>
                                                            <Input type="date" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        )}

                                        <FormField
                                            control={form.control}
                                            name={`workExperience.${index}.isCurrentRole`}
                                            render={({ field }) => (
                                                <FormItem className="">
                                                    {field.value ? <FormLabel>End Date</FormLabel> : ""}
                                                    
                                                    <FormItem className="flex items-center space-x-2">
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                                className="mt-2"
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="text-sm font-normal">
                                                            I currently work here
                                                        </FormLabel>
                                                    </FormItem>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="lg:col-span-2">
                                        <FormField
                                            control={form.control}
                                            name={`workExperience.${index}.description`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Description (Optional)</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Describe your responsibilities and achievements..."
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Education */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => appendEducation({
                                    institution: "",
                                    degree: "",
                                    field: "",
                                    graduationYear: ""
                                })}
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Add Education
                            </Button>
                        </div>

                        {educationFields.map((field, index) => (
                            <div key={index} className="space-y-4 p-4 bg-gray-50 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-medium text-gray-900">Education {index + 1}</h4>
                                    {index > 0 && (
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => removeEducation(index)}
                                        >
                                            <Trash2 className="w-4 h-4 text-red-500" />
                                        </Button>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name={`education.${index}.institution`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Institution</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name={`education.${index}.degree`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Degree</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name={`education.${index}.field`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Field of Study</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name={`education.${index}.graduationYear`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Graduation Year</FormLabel>
                                                <FormControl>
                                                    <Input type="date" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-4 items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">Certifications (Optional)</h3>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => appendCert({
                                    title: "",
                                    link: "",
                                    referenceLink: "",
                                    dateObtained: ""
                                })}
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Add Certification
                            </Button>
                        </div>

                        {certFields.map((field, index) => (
                            <div key={field.id} className="space-y-4 p-4 bg-gray-50 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-medium text-gray-900">Certification {index + 1}</h4>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeCert(index)}
                                    >
                                        <Trash2 className="w-4 h-4 text-red-500" />
                                    </Button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name={`certifications.${index}.title`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Certification Title</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name={`certifications.${index}.dateObtained`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Date Obtained</FormLabel>
                                                <FormControl>
                                                    <Input type="date" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name={`certifications.${index}.link`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Certificate Link</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://..."
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name={`certifications.${index}.referenceLink`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Reference Link (Optional)</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://..."
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Portfolio Links */}
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-4 items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">Portfolio Links (Optional)</h3>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => appendPortfolio({ title: "", url: "" })}
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Add Link
                            </Button>
                        </div>

                        {portfolioFields.map((field, index) => (
                            <div key={field.id} className="space-y-4 p-4 bg-gray-50 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-medium text-gray-900">Link {index + 1}</h4>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removePortfolio(index)}
                                    >
                                        <Trash2 className="w-4 h-4 text-red-500" />
                                    </Button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name={`portfolioLinks.${index}.title`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Link Title</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name={`portfolioLinks.${index}.url`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>URL</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://..."
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cover Letter */}
                    <FormField
                        control={form.control}
                        name="coverLetter"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cover Letter (Optional)</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us why you're interested in this position..."
                                        className="min-h-[200px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Why You're a Good Fit */}
                    <FormField
                        control={form.control}
                        name="whyFitForRole"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Why are you a good fit for this role?</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Explain why your skills and experience make you the perfect candidate..."
                                        className="min-h-[200px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Terms Agreement */}
                    <FormField
                        control={form.control}
                        name="agreeToTerms"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>
                                        I agree to the{" "}
                                        <Link href="/terms" className="text-violet-600 hover:underline">
                                            job application policies
                                        </Link>
                                    </FormLabel>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Submitting Application...
                            </>
                        ) : (
                            "Submit Application"
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
}