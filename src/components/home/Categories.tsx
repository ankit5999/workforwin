"use client";

import { motion } from "framer-motion";
import {
    Briefcase,
    Palette,
    UserCheck,
    Code,
    Dumbbell,
    DollarSign,
    Video,
    Printer
} from "lucide-react";

const categories = [
    {
        title: "Management",
        icon: Briefcase,
        courses: "20 Courses",
        color: "border-violet-50 bg-violet-500",
        border: "border-violet-500",
        lightBg: "bg-violet-50",
        textColor: "text-violet-500"
    },
    {
        title: "Art & Design",
        icon: Palette,
        courses: "20 Courses",
        color: "border-pink-50 bg-pink-500",
        border: "border-pink-500",
        lightBg: "bg-pink-50",
        textColor: "text-pink-500"
    },
    {
        title: "Personal Development",
        icon: UserCheck,
        courses: "15 Courses",
        color: "border-green-50 bg-green-500",
        border: "border-green-500",
        lightBg: "bg-green-50",
        textColor: "text-green-500"
    },
    {
        title: "IT & Software",
        icon: Code,
        courses: "13 Courses",
        color: "border-orange-50 bg-orange-500",
        border: "border-orange-500",
        lightBg: "bg-orange-50",
        textColor: "text-orange-500"
    },
    {
        title: "Health & Fitness",
        icon: Dumbbell,
        courses: "16 Courses",
        color: "border-red-50 bg-red-500",
        border: "border-red-500",
        lightBg: "bg-red-50",
        textColor: "text-red-500"
    },
    {
        title: "Business & Finance",
        icon: DollarSign,
        courses: "12 Courses",
        color: "border-violet-50 bg-violet-500",
        border: "border-violet-500",
        lightBg: "bg-violet-50",
        textColor: "text-violet-500"
    },
    {
        title: "Video & Photography",
        icon: Video,
        courses: "14 Courses",
        color: "border-orange-50 bg-orange-500",
        border: "border-orange-500",
        lightBg: "bg-orange-50",
        textColor: "text-orange-500"
    },
    {
        title: "Digital Printing",
        icon: Printer,
        courses: "17 Courses",
        color: "border-pink-50 bg-pink-500",
        border: "border-pink-500",
        lightBg: "bg-pink-50",
        textColor: "text-pink-500"
    }
];

export default function Categories(){
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-appPurple-900 text-white">
                            Top Category
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-3xl leading-[1.2] md:text-4xl font-medium"
                    >
                        Browse Our Top Categories
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group rounded-lg p-8 border border-gray-200 ${category.lightBg} transition-all duration-300 hover:shadow-lg cursor-pointer`}
                        >

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                <div className={`p-1.5 rounded-full ${category.border} text-white border-dashed border`}>
                                    <div className={`p-2 ${category.color} rounded-full`}>
                                        <category.icon className="w-10 h-10" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {category.title}
                                </h3>
                                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${category.textColor} bg-white`}>
                                    {category.courses}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};