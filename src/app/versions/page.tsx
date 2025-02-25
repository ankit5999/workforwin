"use client";

import { motion } from "framer-motion";
import { GitBranch, GitCommit, GitPullRequest, Star, Zap, Shield, Sparkles, Rocket, Bug, Workflow } from "lucide-react";

const versions = [
    {
        version: "2.0.0",
        date: "March 15, 2024",
        type: "major",
        title: "The Evolution Update",
        description: "A complete platform overhaul with groundbreaking features and improvements",
        icon: Rocket,
        changes: [
            {
                type: "feature",
                title: "AI-Powered Learning Paths",
                description: "Personalized learning journeys adapted to each student's pace and style",
                icon: Sparkles
            },
            {
                type: "feature",
                title: "Real-time Collaboration",
                description: "Interactive study rooms and group project spaces",
                icon: GitPullRequest
            },
            {
                type: "improvement",
                title: "Enhanced Security",
                description: "Advanced encryption and two-factor authentication",
                icon: Shield
            }
        ]
    },
    {
        version: "1.5.0",
        date: "February 1, 2024",
        type: "minor",
        title: "The Performance Update",
        description: "Significant performance improvements and new features",
        icon: Zap,
        changes: [
            {
                type: "feature",
                title: "Interactive Assessments",
                description: "New quiz formats and immediate feedback system",
                icon: Star
            },
            {
                type: "improvement",
                title: "Optimized Video Delivery",
                description: "50% faster video loading and adaptive quality",
                icon: Workflow
            }
        ]
    },
    {
        version: "1.4.2",
        date: "January 15, 2024",
        type: "patch",
        title: "Bug Fix Release",
        description: "Critical fixes and minor improvements",
        icon: Bug,
        changes: [
            {
                type: "fix",
                title: "Mobile Responsiveness",
                description: "Fixed layout issues on smaller screens",
                icon: GitCommit
            }
        ]
    },
    {
        version: "1.4.0",
        date: "December 1, 2023",
        type: "minor",
        title: "The Collaboration Update",
        description: "New features focusing on team collaboration",
        icon: GitBranch,
        changes: [
            {
                type: "feature",
                title: "Group Projects",
                description: "Dedicated spaces for team collaboration",
                icon: GitPullRequest
            },
            {
                type: "improvement",
                title: "Enhanced Chat",
                description: "Rich text formatting and file sharing in chat",
                icon: Workflow
            }
        ]
    }
];

export default function VersionsPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-5xl mx-auto pr-2">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl leading-[1.2] md:text-4xl font-medium text-gray-900 mb-4"
                    >
                        Version History
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Track our journey of continuous improvement and innovation
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 ml-0.5" />

                    {/* Version Blocks */}
                    <div className="space-y-12">
                        {versions.map((version, versionIndex) => (
                            <motion.div
                                key={version.version}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: versionIndex * 0.1 }}
                                className="relative"
                            >
                                {/* Version Icon */}
                                <div className="absolute left-8 -translate-x-1/2 flex items-center justify-center">
                                    <div className={`w-4 h-4 rounded-full border-4 border-white ${version.type === 'major' ? 'bg-violet-500' :
                                            version.type === 'minor' ? 'bg-blue-500' :
                                                'bg-gray-500'
                                        }`} />
                                </div>

                                {/* Version Content */}
                                <div className="ml-20">
                                    <div className="flex items-center gap-4 mb-4">
                                        <version.icon className={`w-8 h-8 ${version.type === 'major' ? 'text-violet-500' :
                                                version.type === 'minor' ? 'text-blue-500' :
                                                    'text-gray-500'
                                            }`} />
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <h2 className="text-xl font-semibold text-gray-900">
                                                    v{version.version}
                                                </h2>
                                                <span className={`px-2 py-0.5 text-sm font-medium rounded-full ${version.type === 'major' ? 'bg-violet-100 text-violet-700' :
                                                        version.type === 'minor' ? 'bg-blue-100 text-blue-700' :
                                                            'bg-gray-100 text-gray-700'
                                                    }`}>
                                                    {version.type}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500">{version.date}</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                        <div className="p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                {version.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6">
                                                {version.description}
                                            </p>

                                            <div className="space-y-4">
                                                {version.changes.map((change, changeIndex) => (
                                                    <motion.div
                                                        key={change.title}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.3, delay: changeIndex * 0.1 }}
                                                        className="flex gap-4 p-4 rounded-lg bg-gray-50"
                                                    >
                                                        <div className={`p-2 rounded-lg h-9 w-9 ${change.type === 'feature' ? 'bg-green-100 text-green-600' :
                                                                change.type === 'improvement' ? 'bg-blue-100 text-blue-600' :
                                                                    'bg-orange-100 text-orange-600'
                                                            }`}>
                                                            <change.icon className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900">
                                                                {change.title}
                                                            </h4>
                                                            <p className="text-sm text-gray-600">
                                                                {change.description}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Future Updates Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-20 text-center pl-4 pr-4"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-appPurple-900/10 text-appPurple-900 mb-6">
                        <Sparkles className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl leading-[1.2] font-medium text-gray-900 mb-4">
                        More Updates Coming Soon
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We're constantly working on new features and improvements. Stay tuned for more exciting updates!
                    </p>
                </motion.div>
            </div>
        </main>
    );
}