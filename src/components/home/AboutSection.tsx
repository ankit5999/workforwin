"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, FileText, Users2, Clock } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: FileText,
        title: "Flexible Course Plan",
        color: "text-violet-600",
        bgColor: "bg-violet-50",
    },
    {
        icon: Users2,
        title: "Expert Mentors",
        color: "text-violet-600",
        bgColor: "bg-violet-50",
    },
    {
        icon: Clock,
        title: "Support Expert",
        color: "text-violet-600",
        bgColor: "bg-violet-50",
    },
    {
        icon: Clock,
        title: "Lifetime Access",
        color: "text-violet-600",
        bgColor: "bg-violet-50",
    },
];

const AboutSection = () => {
    return (
        <section className="py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        {/* Background Pattern */}
                        <div className="absolute -left-8 -bottom-8 w-72 h-72 opacity-10">
                            <svg width="100%" height="100%" viewBox="0 0 100 100">
                                <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1" fill="currentColor" />
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#dots)" />
                            </svg>
                        </div>

                        {/* Main Image */}
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/assets/images/home/why.svg"
                                alt="Students studying"
                                width={600}
                                height={400}
                                className="w-full h-[400px] object-cover"
                            />

                            {/* Awards Badge */}
                            <div className="absolute bottom-8 -right-2 bg-appPurple-900 text-white px-4 py-4 rounded-l-xl shadow-lg">
                                <div className="flex items-center gap-2">
                                    <Award className="w-6 h-6" />
                                    <div>
                                        <span className="block text-2xl font-bold">280+</span>
                                        <span className="text-sm">Wonderful Awards</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        {/* Header */}
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-appPurple-900 text-white mb-4"
                            >
                                Why our Courses
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-3xl leading-[1.2] md:text-4xl font-medium mb-6"
                            >
                                Learn and Grow your Skills From Workforwin
                            </motion.h2>
                        </div>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className={`p-3 rounded-lg ${feature.bgColor}`}>
                                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                    </div>
                                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;