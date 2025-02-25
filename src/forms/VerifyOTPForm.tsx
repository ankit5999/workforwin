"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { otpSchema } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Loader2 } from "lucide-react";

type FormData = z.infer<typeof otpSchema>;

interface VerifyOTPPageForm {
    onSuccess?: (value: number) => void;
}

export default function VerifyOTPForm({ onSuccess }: VerifyOTPPageForm) {
    const [isVerifying, setIsVerifying] = useState(false);
    const [error, setError] = useState("");

    const form = useForm<FormData>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
            otp: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsVerifying(true);
        setError("");

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (onSuccess) {
            onSuccess(1);
        } 
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="otp"
                    render={({ field }) => (
                        <FormItem className="text-center">
                            <FormControl>
                                <div className="flex justify-center gap-2">
                                    {[...Array(6)].map((_, i) => (
                                        <input
                                            key={i}
                                            type="text"
                                            maxLength={1}
                                            className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-appPurple-900"
                                            onChange={(e) => {
                                                const value = field.value || "";
                                                const newValue = value.slice(0, i) + e.target.value + value.slice(i + 1);

                                                field.onChange(newValue); // Update react-hook-form

                                                // Auto-focus next input
                                                if (e.target.value && i < 5) {
                                                    const nextInput = e.target.parentElement?.querySelector(
                                                        `input:nth-child(${i + 2})`
                                                    ) as HTMLInputElement;
                                                    if (nextInput) nextInput.focus();
                                                }
                                            }}
                                            onKeyDown={(e) => {
                                                // Handle backspace
                                                if (e.key === "Backspace" && !field.value[i] && i > 0) {
                                                    const prevInput = e.currentTarget.parentElement?.querySelector(
                                                        `input:nth-child(${i})`
                                                    ) as HTMLInputElement;
                                                    if (prevInput) prevInput.focus();
                                                }
                                            }}
                                            value={field.value?.[i] || ""}
                                        />
                                    ))}
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    disabled={isVerifying}
                    className="w-full"
                >
                    {isVerifying ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Verifying...
                        </>
                    ) : (
                        "Verify Email"
                    )}
                </Button>
            </form>
        </Form>
    );
}