"use client";

import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/lib/validations/auth";
import { useRouter } from "next/navigation";

type FormData = z.infer<typeof signInSchema>;

export default function SignInForm({ onSuccess }: { onSuccess: (value: number) => void }) {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, // To reset form fields
    } = useForm<FormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call

        // onSuccess(1);
        reset(); // Reset form fields after submission
        setIsLoading(false);

        router.push("/dashboard");
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-appPurple-900 focus:ring-appPurple-900"
                    />
                    <span className="text-sm text-gray-600">Keep me logged in</span>
                </label>
                <button
                    onClick={() => onSuccess(1)}
                    className="text-sm font-medium text-appPurple-900 hover:text-appPurple-900"
                >
                    Forgot password?
                </button>
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
                        Signing in...
                    </>
                ) : (
                    "Sign in"
                )}
            </Button>
        </form>
    );
}
