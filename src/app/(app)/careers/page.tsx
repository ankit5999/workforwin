"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Briefcase, Code, Palette, Search, TestTube, ArrowRight } from "lucide-react";

// This would typically come from your API/database
const jobCategories = [
    {
        id: "engineering",
        title: "Engineering",
        icon: Code,
        color: "text-violet-600",
        bgColor: "bg-violet-100",
        jobs: [
            {
                id: 1,
                title: "Senior Frontend Developer",
                location: "Remote",
                type: "Full-time",
                experience: "5+ years",
                postedDate: "2024-03-15",
            },
            {
                id: 2,
                title: "Backend Engineer",
                location: "New York, USA",
                type: "Full-time",
                experience: "3+ years",
                postedDate: "2024-03-14",
            }
        ]
    },
    {
        id: "design",
        title: "UI/UX Design",
        icon: Palette,
        color: "text-pink-600",
        bgColor: "bg-pink-100",
        jobs: [
            {
                id: 3,
                title: "Senior Product Designer",
                location: "San Francisco, USA",
                type: "Full-time",
                experience: "4+ years",
                postedDate: "2024-03-13",
            }
        ]
    },
    {
        id: "product",
        title: "Product",
        icon: Briefcase,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        jobs: []
    },
    {
        id: "testing",
        title: "Testing",
        icon: TestTube,
        color: "text-green-600",
        bgColor: "bg-green-100",
        jobs: [
            {
                id: 4,
                title: "QA Engineer",
                location: "London, UK",
                type: "Full-time",
                experience: "2+ years",
                postedDate: "2024-03-12",
            }
        ]
    }
];

export default function CareersPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCategories = jobCategories.map(category => ({
        ...category,
        jobs: category.jobs.filter(job =>
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.location.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }));

    const totalJobs = jobCategories.reduce((acc, category) => acc + category.jobs.length, 0);

    return (
        <main className="bg-gray-50 relative">
            {/* Background div */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-appDark-900" />

            {/* Hero Section */}
            <div className="max-w-7xl relative mx-auto px-4 pt-24 md:pt-32 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl leading-[1.2] md:text-4xl font-medium text-white mb-6"
                >
                    Join Our Team
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-violet-100 text-lg max-w-2xl mx-auto mb-8"
                >
                    Be part of our mission to transform education and empower learners worldwide
                </motion.p>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search jobs by title or location..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 pl-12 rounded-full bg-white/10 border border-gray-900/70 text-white placeholder-violet-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-200 w-5 h-5" />
                    </div>
                </motion.div>
            </div>

            {/* Stats Section */}
            <section className="my-12 relative px-4">
                <div className="max-w-7xl py-12 rounded-lg mx-auto shadow-sm px-4 bg-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Open Positions", value: totalJobs },
                            { label: "Team Members", value: "150+" },
                            { label: "Countries", value: "5+" },
                            { label: "Employee Rating", value: "4.8/5" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Categories Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {filteredCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`p-3 rounded-xl ${category.bgColor}`}>
                                        <category.icon className={`w-6 h-6 ${category.color}`} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {category.title}
                                    </h2>
                                    <div className="h-px flex-grow bg-gray-200" />
                                </div>

                                {/* Jobs List */}
                                {category.jobs.length > 0 ? (
                                    <div className="grid gap-6">
                                        {category.jobs.map((job, jobIndex) => (
                                            <motion.div
                                                key={job.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (jobIndex * 0.05) }}
                                            >
                                                <Link
                                                    href={`/careers/${job.id}`}
                                                    className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                                                >
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                        <div>
                                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                                {job.title}
                                                            </h3>
                                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                                <span>{job.location}</span>
                                                                <span>•</span>
                                                                <span>{job.type}</span>
                                                                <span>•</span>
                                                                <span>{job.experience}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-appPurple-900 font-medium">
                                                            View Position
                                                            <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-white rounded-xl border border-gray-200 p-8 text-center"
                                    >
                                        <div className="max-w-md mx-auto">
                                            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                                                <category.icon className="w-8 h-8 text-gray-400" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                No Open Positions
                                            </h3>
                                            <p className="text-gray-600">
                                                We're not currently hiring for {category.title.toLowerCase()} roles. Check back later or explore other opportunities.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}