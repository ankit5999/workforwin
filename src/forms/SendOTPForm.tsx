"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "@/lib/validations/auth";

type FormData = z.infer<typeof forgotPasswordSchema>;

export default function SendOTPForm({ onSuccess }: { onSuccess: (value: number) => void }) {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: { email: "" },
    });

    const onSubmit = async (data: FormData) => {
        try {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call

            onSuccess(2);
            reset(); // Reset form after successful submission
        } finally {
            setIsLoading(false); // Ensure state resets even if an error occurs
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Input */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                </label>
                <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-transparent transition-all"
                    placeholder="name@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-appPurple-900 hover:bg-appPurple-900 text-white py-2.5 rounded-lg font-medium transition-colors ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending OTP...
                    </>
                ) : (
                    "Send OTP"
                )}
            </Button>
        </form>
    );
}
