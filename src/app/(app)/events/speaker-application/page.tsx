"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Mic,
    Calendar,
    Clock,
    Upload,
    Loader2,
    CheckCircle2,
    Link as LinkIcon,
    Globe,
    User,
    Mail,
    Phone,
    Building2,
    FileText,
    Sparkles
} from "lucide-react";
import Image from "next/image";
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
import SpeakerForm from "@/forms/SpeakerForm";

const formSchema = z.object({
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

type FormData = z.infer<typeof formSchema>;

const upcomingEvents = [
    {
        id: 1,
        title: "Web Development Summit 2024",
        date: "June 15-17, 2024",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
    },
    {
        id: 2,
        title: "UX Design Conference",
        date: "July 5-6, 2024",
        image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=400&fit=crop",
    },
];

export default function SpeakerApplicationPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [photoError, setPhotoError] = useState<string | null>(null);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
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
            toast.success("Application submitted successfully! We'll be in touch soon.");

            // Reset form
            form.reset();
            setPhotoFile(null);
            setPhotoError(null);
        } catch (error) {
            toast.error("Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="relative bg-gray-50 py-20">
            {/* Background div */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-appDark-900" />

            {/* Hero Section */}
            <div className="relative max-w-7xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-3xl leading-[1.2] md:text-4xl font-medium text-white mb-6">
                        Become a Speaker
                    </h1>
                    <p className="text-violet-100 text-lg max-w-2xl mx-auto">
                        Share your knowledge and experience with our community. Apply to become a speaker at our upcoming events.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto md:px-4 relative py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Form */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg border border-gray-200 p-8"
                        >
                            <SpeakerForm />
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8 px-4 md:px-0">
                        {/* Upcoming Events */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg border border-gray-200 p-6"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">
                                Upcoming Events
                            </h2>
                            <div className="space-y-4">
                                {upcomingEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className="flex gap-4 p-4 rounded-lg bg-gray-50"
                                    >
                                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">
                                                {event.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{event.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-lg border border-gray-200 p-6"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">
                                Why Speak at Our Events?
                            </h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        icon: Globe,
                                        title: "Global Reach",
                                        description: "Connect with an international audience"
                                    },
                                    {
                                        icon: Sparkles,
                                        title: "Professional Growth",
                                        description: "Enhance your speaking portfolio"
                                    },
                                    {
                                        icon: FileText,
                                        title: "Content Creation",
                                        description: "Get help with presentation materials"
                                    }
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={benefit.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                                        className="flex gap-4 p-4 rounded-lg bg-gray-50"
                                    >
                                        <div className="p-2 w-9 h-9 rounded-lg bg-violet-100 text-violet-600">
                                            <benefit.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Success Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-gradient-to-br from-violet-600 to-pink-500 rounded-lg border border-gray-200 p-6 text-white"
                        >
                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold">500+</div>
                                    <div className="text-violet-200">Speakers Featured</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold">50k+</div>
                                    <div className="text-violet-200">Attendees Reached</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold">100+</div>
                                    <div className="text-violet-200">Events Hosted</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}