"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, PcCase as CaseStudy, CreditCard, HelpCircle, Briefcase, Building2, GraduationCap, Mail, Search } from "lucide-react";

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
    const [activeTab, setActiveTab] = useState("courses");

    const filteredQuestions = faqSections.find(section => section.id === activeTab)?.questions.filter(
        q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-violet-600 py-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-violet-600 opacity-90" />
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1600&auto=format&fit=crop&q=80')"
                        }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-pink-500 text-white mb-6">
                            Help Center
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-violet-100 text-lg max-w-2xl mx-auto mb-8">
                            Find answers to common questions about our platform, courses, and services
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search your question..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-4 pl-12 rounded-full bg-white/10 border border-violet-400 text-white placeholder-violet-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                                />
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-200 w-5 h-5" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
                        {/* Tab List */}
                        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
                            <TabsList className="h-auto p-1 w-full md:w-auto inline-flex">
                                {faqSections.map((section) => (
                                    <TabsTrigger
                                        key={section.id}
                                        value={section.id}
                                        className="flex items-center gap-2 py-2.5 px-4"
                                    >
                                        <section.icon className="w-4 h-4" />
                                        <span className="hidden sm:inline">{section.label}</span>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {/* Tab Content */}
                        {faqSections.map((section) => (
                            <TabsContent key={section.id} value={section.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-xl shadow-lg p-6"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 rounded-lg bg-violet-100">
                                            <section.icon className="w-6 h-6 text-violet-600" />
                                        </div>
                                        <h2 className="text-2xl font-semibold text-gray-900">
                                            {section.label}
                                        </h2>
                                    </div>

                                    {filteredQuestions && filteredQuestions.length > 0 ? (
                                        <Accordion type="single" collapsible className="space-y-4">
                                            {filteredQuestions.map((faq, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                >
                                                    <AccordionItem
                                                        value={`item-${index}`}
                                                        className="border border-gray-200 rounded-lg"
                                                    >
                                                        <AccordionTrigger className="px-6 text-left hover:no-underline">
                                                            <div className="flex items-center gap-3">
                                                                <HelpCircle className="w-5 h-5 text-violet-600 flex-shrink-0" />
                                                                <span className="text-lg font-semibold text-gray-900">
                                                                    {faq.question}
                                                                </span>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-6 pb-6">
                                                            <p className="text-gray-600 leading-relaxed ml-8">
                                                                {faq.answer}
                                                            </p>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </motion.div>
                                            ))}
                                        </Accordion>
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
                                </motion.div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* Contact Support Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Still have questions?
                        </h2>
                        <p className="text-gray-600">
                            Can't find the answer you're looking for? Please chat with our friendly team.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors"
                        >
                            Contact Support
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}