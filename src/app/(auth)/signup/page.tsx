"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import SignUpForm from "@/forms/SignUpForm";
import VerifyOTPPage from "../../../components/auth/verify-otp/page";
import AuthSocial from "@/components/auth/social";

export default function SignUpPage() {
  const [stateValue, setStateValue] = useState(0);

  switch (stateValue) {
    case 0: return (<div className="flex flex-col px-4 sm:px-6 lg:px-8 py-12">
      {/* Logo */}
      <div className="mb-12 flex justify-around lg:justify-normal">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-appPurple-900 flex items-center justify-center">
            <span className="text-white font-bold">W</span>
          </div>
          <span className="text-xl font-semibold">Workforwin</span>
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
            Sign up to your account
          </h1>
          <p className="text-gray-600">
            Enter your details to sign up
          </p>
        </div>

        {/* Social Sign In */}
        <AuthSocial />

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        <SignUpForm onSuccess={(value) => setStateValue(value)} />


        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-medium text-appPurple-900 hover:text-appPurple-900"
          >
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>)

    case 1: return <VerifyOTPPage />;
  }
}