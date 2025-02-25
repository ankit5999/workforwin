"use client";

import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        toast({
            title: "Message sent successfully!",
            description: "Our team will contact you as soon as possible.",
        });
        reset();
        setIsSubmitting(false);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="John Doe"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="john@example.com"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-1">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    {...register("subject")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="How can we help?"
                />
                {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="Your message here..."
                />
                {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-appPurple-900 text-white rounded-lg font-semibold hover:bg-appPurple-900/80 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                    </>
                )}
            </button>
        </form>
    );
};