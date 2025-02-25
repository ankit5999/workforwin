"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Mic,
    Clock,
    Upload,
    Loader2,
    Link as LinkIcon,
    Globe,
    User,
    Mail,
    Phone,
    Building2,
    ChevronDown,
    Check,
} from "lucide-react";
import { toast } from "sonner";
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
import { SpeakerFormSchema } from "@/lib/validations/speaker";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectItemIndicator, SelectViewport } from "@radix-ui/react-select";

type FormData = z.infer<typeof SpeakerFormSchema>;

export default function SpeakerForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [photoError, setPhotoError] = useState<string | null>(null);
    const { toast } = useToast();

    const form = useForm<FormData>({
        resolver: zodResolver(SpeakerFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            role: "",
            talkTitle: "",
            talkDescription: "",
            talkDuration: "",
            previousExperience: "",
            portfolioUrl: "",
            linkedinUrl: "",
            additionalNotes: "",
        },
    });

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setPhotoError(null);

        if (!file) return;

        // Check file type
        const allowedTypes = ['image/jpeg', 'image/png'];
        if (!allowedTypes.includes(file.type)) {
            setPhotoError('Please upload a JPG or PNG image');
            return;
        }

        // Check file size (2MB)
        if (file.size > 2 * 1024 * 1024) {
            setPhotoError('File size must be less than 2MB');
            return;
        }

        setPhotoFile(file);
    };

    const onSubmit = async (data: FormData) => {
        if (!photoFile) {
            setPhotoError('Please upload your photo');
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log("Form data:", data);
            toast({
                title: "Success!",
                description: "Application submitted successfully! We'll be in touch soon.",
            });

            // Reset form
            form.reset();
            setPhotoFile(null);
            setPhotoError(null);
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to submit application. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        Personal Information
                    </h2>
                    <div className="grid gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <Input className="pl-10" placeholder="John Doe" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid sm:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                <Input className="pl-10" placeholder="john@example.com" {...field} />
                                            </div>
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
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                <Input className="pl-10" placeholder="+1 (555) 000-0000" {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                <Input className="pl-10" placeholder="Company Name" {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Mic className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                <Input className="pl-10" placeholder="Job Title" {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </div>

                {/* Photo Upload */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        Profile Photo
                    </h2>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-lg">
                        <div className="space-y-2 text-center">
                            <div className="mx-auto h-12 w-12 text-gray-400">
                                <Upload className="mx-auto h-12 w-12" />
                            </div>
                            <div className="flex text-sm text-gray-600">
                                <label className="relative cursor-pointer rounded-md font-medium text-violet-600 hover:text-violet-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-violet-500">
                                    <span>Upload a file</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="sr-only"
                                        onChange={handlePhotoUpload}
                                    />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                                PNG, JPG up to 2MB
                            </p>
                            {photoFile && !photoError && (
                                <p className="text-sm text-green-600">
                                    {photoFile.name}
                                </p>
                            )}
                            {photoError && (
                                <p className="text-sm text-red-600">{photoError}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Talk Details */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        Talk Details
                    </h2>
                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="talkTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Talk Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your talk title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="talkDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Talk Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Describe your talk and what attendees will learn..."
                                            className="min-h-[150px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

            

                        <FormField
                            control={form.control}
                            name="talkDuration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Talk Duration</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent flex justify-between items-center">
                                                    <SelectValue placeholder="Select duration" />
                                                    {/* <ChevronDown className="w-4 h-4 text-gray-400" /> */}
                                                </SelectTrigger>

                                                <SelectContent className="bg-white border border-gray-300 shadow-md rounded-lg">
                                                    <SelectViewport className="p-1">
                                                        {[
                                                            { label: "30 minutes", value: "30" },
                                                            { label: "45 minutes", value: "45" },
                                                            { label: "60 minutes", value: "60" },
                                                        ].map((item) => (
                                                            <SelectItem
                                                                key={item.value}
                                                                value={item.value}
                                                                className="px-3 py-2 text-gray-900 cursor-pointer hover:bg-violet-100 rounded-md flex items-center gap-2"
                                                            >
                                                                <span>{item.label}</span>
                                                            </SelectItem>
                                                        ))}
                                                    </SelectViewport>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        {/* <FormField
                            control={form.control}
                            name="talkDuration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Talk Duration</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <select
                                                className="w-full pl-10 pr-4 hover:bg-appPurple-900 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                                                {...field}
                                            >
                                                <option className="hover:bg-appPurple-900" value="">Select duration</option>
                                                <option className="hover:bg-appPurple-900" value="30">30 minutes</option>
                                                <option className="hover:bg-appPurple-900" value="45">45 minutes</option>
                                                <option className="hover:bg-appPurple-900" value="60">60 minutes</option>
                                            </select>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                    </div>
                </div>

                {/* Additional Information */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        Additional Information
                    </h2>
                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="previousExperience"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Previous Speaking Experience</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us about your previous speaking experience..."
                                            className="min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid sm:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="portfolioUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Portfolio URL</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                <Input className="pl-10" placeholder="https://..." {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="linkedinUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>LinkedIn Profile</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                <Input className="pl-10" placeholder="https://linkedin.com/in/..." {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="additionalNotes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Additional Notes</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Any additional information you'd like to share..."
                                            className="min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

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
    );
}