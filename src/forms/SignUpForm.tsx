"use client";

import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signUpSchema } from "@/lib/validations/auth";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = z.infer<typeof signUpSchema>;

export default function SignUpForm({ onSuccess }: { onSuccess: (value: number) => void }) {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset, // Add reset function
    } = useForm<FormData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            checkbox: false,
        },
    });

    const acceptPrivacy = watch("checkbox");

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call

        // Notify parent & reset form
        onSuccess(1);
        reset();
        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                </label>
                <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 transition-all"
                    placeholder="name@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                </label>
                <div className="relative">
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        {...register("password")}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 transition-all"
                        placeholder="Enter your password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {/* Checkbox */}
            <div>
                <label className="flex items-center gap-2">
                    <input
                        id="checkbox"
                        type="checkbox"
                        {...register("checkbox")}
                        className="w-4 h-4 rounded border-gray-300 focus:ring-blue-500 checked:bg-blue-500 checked:border-blue-500"
                    />
                    <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        Accept Terms & Privacy
                    </Link>
                </label>
                {errors.checkbox && <p className="text-red-500 text-sm mt-1">{errors.checkbox.message}</p>}
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-appPurple-900 hover:bg-appPurple-900 text-white py-2.5 rounded-lg font-medium transition-colors"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Signing up...
                    </>
                ) : (
                    "Sign up"
                )}
            </Button>
        </form>
    );
}
