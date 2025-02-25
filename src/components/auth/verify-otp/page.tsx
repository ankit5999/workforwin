"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import VerifyOTPForm from "@/forms/VerifyOTPForm";

interface VerifyOTPPageProps {
  onSuccess?: (value: number) => void;
}

export default function VerifyOTPPage({ onSuccess }: VerifyOTPPageProps) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [stateValue, setStateValue] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    if (onSuccess && stateValue) {
      onSuccess(3);
      return
    }

    if (stateValue) {
      router.push("/dashboard");
    }


    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdown, setStateValue]);


  const handleResendOTP = async () => {
    if (!canResend) return;

    setCountdown(30);
    setCanResend(false);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Form */}
      <div className="flex-1 flex flex-col px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-xl font-semibold">Academic</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-sm mx-auto w-full"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Verify your email
            </h1>
            <p className="text-gray-600">
              We sent a verification code to{" "}
              <span className="font-medium text-gray-900">john@example.com</span>
            </p>
          </div>

          <div className="space-y-6">
            <VerifyOTPForm onSuccess={(value) => setStateValue(value)} />

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Didn't receive the code?
              </p>
              {countdown > 0 ? (
                <p className="text-sm text-gray-500">
                  Resend code in {countdown}s
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResendOTP}
                  className="text-sm font-medium text-violet-600 hover:text-violet-700"
                >
                  Resend Code
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
