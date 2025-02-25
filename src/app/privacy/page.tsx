"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Bell, Users } from "lucide-react";
import Link from "next/link";

const sections = [
    {
        icon: Shield,
        title: "Information We Collect",
        content: [
            "Personal information (name, email, contact details)",
            "Profile information and preferences",
            "Course progress and completion data",
            "Payment information",
            "Device and usage information",
            "Communications with us"
        ]
    },
    {
        icon: Lock,
        title: "How We Use Your Information",
        content: [
            "Providing and improving our services",
            "Processing payments and transactions",
            "Personalizing your learning experience",
            "Communicating updates and offers",
            "Analyzing platform usage",
            "Ensuring platform security"
        ]
    },
    {
        icon: Eye,
        title: "Information Sharing",
        content: [
            "With your consent",
            "With service providers",
            "For legal requirements",
            "In business transfers",
            "To protect rights and safety"
        ]
    },
    {
        icon: FileText,
        title: "Your Rights",
        content: [
            "Access your personal data",
            "Correct inaccurate data",
            "Request data deletion",
            "Object to processing",
            "Data portability",
            "Withdraw consent"
        ]
    },
    {
        icon: Bell,
        title: "Communications",
        content: [
            "Service-related notifications",
            "Marketing communications",
            "Email preferences",
            "Push notifications",
            "Course updates"
        ]
    },
    {
        icon: Users,
        title: "Children's Privacy",
        content: [
            "Age restrictions",
            "Parental consent requirements",
            "Information collection limitations",
            "Special protections",
            "Parental rights"
        ]
    }
];

export default function PrivacyPolicy() {
    const lastUpdated = "March 15, 2024";

    return (
        <main className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="bg-appPurple-900 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-violet-100 text-lg max-w-2xl mx-auto">
                            We are committed to protecting your privacy and ensuring the security of your personal information.
                        </p>
                        <p className="text-violet-200 mt-4">
                            Last Updated: {lastUpdated}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="prose prose-lg"
                    >
                        <p className="text-gray-600 leading-relaxed">
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-lg bg-violet-100 text-appPurple-900">
                                        <section.icon className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {section.title}
                                    </h2>
                                </div>
                                <ul className="space-y-3">
                                    {section.content.map((item, itemIndex) => (
                                        <motion.li
                                            key={itemIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: (index * 0.1) + (itemIndex * 0.05) }}
                                            className="text-gray-600 flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-appPurple-900 flex-shrink-0" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Questions About Our Privacy Policy?
                        </h2>
                        <p className="text-gray-600">
                            If you have any questions or concerns about our Privacy Policy, please contact our Data Protection Officer.
                        </p>
                        <div className="flex justify-center flex-wrap w-full gap-4">
                            <Link href="/contact">
                                <Button>Contact Us</Button>
                            </Link>
                            <Link href="/terms">
                                <Button className="bg-gray-100 border border-gray-200 hover:bg-gray-200 text-appDark-900">Terms & condition</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}