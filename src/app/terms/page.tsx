"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Scale, FileText, AlertCircle, BookOpen, Users } from "lucide-react";
import Link from "next/link";

const sections = [
    {
        icon: Shield,
        title: "Acceptance of Terms",
        content: [
            "Agreement to be bound by these terms",
            "Must be of legal age to use services",
            "Responsibility for account security",
            "Compliance with all applicable laws",
            "Acceptance of privacy policy"
        ]
    },
    {
        icon: Scale,
        title: "User Responsibilities",
        content: [
            "Maintain accurate account information",
            "Protect account credentials",
            "Responsible for all account activity",
            "No unauthorized access attempts",
            "Report security breaches immediately"
        ]
    },
    {
        icon: FileText,
        title: "Content & Intellectual Property",
        content: [
            "Ownership of course materials",
            "Limited license for personal use",
            "No unauthorized distribution",
            "Respect intellectual property rights",
            "User-generated content guidelines"
        ]
    },
    {
        icon: AlertCircle,
        title: "Prohibited Activities",
        content: [
            "No harmful or malicious content",
            "No spamming or harassment",
            "No intellectual property violations",
            "No unauthorized commercial use",
            "No impersonation or misrepresentation"
        ]
    },
    {
        icon: BookOpen,
        title: "Course Policies",
        content: [
            "Enrollment and cancellation",
            "Refund eligibility",
            "Course completion requirements",
            "Certificate issuance terms",
            "Content availability period"
        ]
    },
    {
        icon: Users,
        title: "Community Guidelines",
        content: [
            "Respectful communication",
            "Academic integrity",
            "Collaborative learning rules",
            "Discussion forum etiquette",
            "Reporting violations"
        ]
    }
];

export default function TermsAndConditions() {
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
                            Terms and Conditions
                        </h1>
                        <p className="text-violet-100 text-lg max-w-2xl mx-auto">
                            Please read these terms and conditions carefully before using our platform or services.
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
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="prose prose-lg"
                    >
                        <p className="text-gray-600 leading-relaxed">
                            By accessing or using our platform, you agree to be bound by these Terms and Conditions.
                            If you disagree with any part of these terms, you may not access our services.
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
                                animate={{ opacity: 1, y: 0 }}
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
                            Questions About Our Terms?
                        </h2>
                        <p className="text-gray-600">
                            If you have any questions or concerns about our Terms and Conditions, please contact our support team.
                        </p>
                        <div className="flex justify-center flex-wrap w-full gap-4">
                            <Link href="/contact">
                                <Button>Contact Us</Button>
                            </Link>
                            <Link href="/privacy">
                                <Button className="bg-gray-100 border border-gray-200 hover:bg-gray-200 text-appDark-900">Privacy Policy</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}