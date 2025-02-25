"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Book, PcCase as CaseStudy, CreditCard, Briefcase, Building2, GraduationCap, Mail, Search, Menu, X, ArrowLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const faqSections = [
    {
        id: "courses",
        icon: Book,
        label: "Course FAQs",
        questions: [
            {
                question: "What types of courses do you offer?",
                answer: "We offer a wide range of courses including web development, digital marketing, design, business, and more. Our courses are designed for both beginners and advanced learners."
            },
            {
                question: "How long do I have access to a course?",
                answer: "Once you purchase a course, you have lifetime access to the course material. You can learn at your own pace and revisit the content whenever you need."
            },
            {
                question: "Are there any prerequisites for taking courses?",
                answer: "Prerequisites vary by course. While some beginner courses have no prerequisites, advanced courses might require basic knowledge in the subject area."
            },
            {
                question: "Do you offer certificates upon completion?",
                answer: "Yes, you'll receive a certificate of completion for each course you finish. Our certificates are recognized by industry leaders."
            }
        ]
    },
    {
        id: "diary",
        icon: CaseStudy,
        label: "Case Study FAQs",
        questions: [
            {
                question: "How are diary structured?",
                answer: "Our diary follow a comprehensive structure including background, challenge, solution, and results. Each case study is designed to provide practical insights."
            },
            {
                question: "Can I download diary?",
                answer: "Yes, premium members can download diary for offline viewing. They are available in PDF format."
            }
        ]
    },
    {
        id: "payment",
        icon: CreditCard,
        label: "Payment FAQs",
        questions: [
            {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners."
            },
            {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your purchase, you can request a full refund within 30 days."
            }
        ]
    },
    {
        id: "contact",
        icon: Mail,
        label: "Contact FAQs",
        questions: [
            {
                question: "How can I contact support?",
                answer: "You can reach our support team through email, live chat, or by submitting a ticket through our help center. We typically respond within 24 hours."
            },
            {
                question: "What are your support hours?",
                answer: "Our support team is available 24/7 to assist you with any questions or concerns you may have."
            }
        ]
    },
    {
        id: "jobs",
        icon: Briefcase,
        label: "Job FAQs",
        questions: [
            {
                question: "Do you offer job placement assistance?",
                answer: "Yes, we provide job placement assistance to students who complete our career-track programs. This includes resume reviews and interview preparation."
            },
            {
                question: "How can I apply for jobs through your platform?",
                answer: "You can browse and apply for jobs through our career portal. Make sure your profile is complete and up-to-date."
            }
        ]
    },
    {
        id: "company",
        icon: Building2,
        label: "Company FAQs",
        questions: [
            {
                question: "How long has your company been operating?",
                answer: "We've been in operation since 2015, helping thousands of students achieve their learning goals and advance their careers."
            },
            {
                question: "Do you offer corporate training?",
                answer: "Yes, we provide customized corporate training solutions. Contact our enterprise team for more information."
            }
        ]
    },
    {
        id: "education",
        icon: GraduationCap,
        label: "Education FAQs",
        questions: [
            {
                question: "What is your teaching methodology?",
                answer: "Our methodology combines theoretical knowledge with practical applications. We focus on project-based learning and real-world scenarios."
            },
            {
                question: "How are the instructors selected?",
                answer: "Our instructors are industry experts with extensive experience in their fields. They go through a rigorous selection process."
            }
        ]
    }
];

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeSection, setActiveSection] = useState("courses");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const currentSection = faqSections.find(section => section.id === activeSection);
    const filteredQuestions = currentSection?.questions.filter(
        q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="">
            <div className="mx-auto">
                <div className="lg:grid lg:grid-cols-4 min-h-screen">
                    {/* Header */}
                    {/* Mobile Sidebar Toggle */}
                    <motion.button
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-appPurple-900 text-white rounded-lg"
                    >
                        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>


                    {/* Sidebar */}
                    <div
                        className={`
        fixed inset-0 lg:relative bg-white transform transition-transform duration-300 ease-in-out md:max-w-[350px]
        ${isSidebarOpen ? 'translate-x-0 z-40 py-4' : '-translate-x-full lg:translate-x-0'}
        lg:col-span-1 border-r border-gray-200 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] lg:overflow-y-auto
    `}
                    >

                        <div className="relative max-w-md flex-1 mx-4 mt-3">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            />
                        </div>

                        <ScrollArea className="flex-1 py-4">
                            <div className="divide-y divide-gray-200">
                                {faqSections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => {
                                            setActiveSection(section.id);
                                            setIsSidebarOpen(false);
                                        }}
                                        className={cn(
                                            "w-full flex items-center gap-2 p-4 text-sm font-medium transition-colors",
                                            activeSection === section.id
                                                ? "bg-violet-100 text-violet-900"
                                                : "text-gray-600 hover:bg-gray-100"
                                        )}
                                    >
                                        <section.icon className="w-5 h-5 flex-shrink-0" />
                                        {section.label}
                                    </button>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 py-24 px-4">
                        {currentSection && (
                            <div className="space-y-12">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-violet-100">
                                        <currentSection.icon className="w-6 h-6 text-violet-600" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-gray-900">
                                        {currentSection.label}
                                    </h2>
                                </div>

                                {filteredQuestions && filteredQuestions.length > 0 ? (
                                    <div className="space-y-8">
                                        {filteredQuestions.map((faq, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                // animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="prose prose-gray max-w-none"
                                            >
                                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Search className="w-8 h-8 text-violet-600" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            No results found
                                        </h3>
                                        <p className="text-gray-600">
                                            Try adjusting your search to find what you're looking for.
                                        </p>
                                    </motion.div>
                                )}

                                {/* Contact Support */}
                                <div className="border-t border-gray-200 pt-8">
                                    <p className="text-gray-600 text-center">
                                        Can't find what you're looking for?{" "}
                                        <a
                                            href="/contact"
                                            className="text-violet-600 hover:text-violet-700 font-medium"
                                        >
                                            Contact our support team
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}