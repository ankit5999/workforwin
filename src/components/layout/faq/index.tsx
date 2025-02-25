"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What courses do you offer?",
        answer: "We offer a wide range of courses including web development, digital marketing, design, business, and more. Our courses are designed for both beginners and advanced learners.",
    },
    {
        question: "How long do I have access to the course?",
        answer: "Once you purchase a course, you have lifetime access to the course material. You can learn at your own pace and revisit the content whenever you need to refresh your knowledge.",
    },
    {
        question: "Are there any prerequisites for taking courses?",
        answer: "Prerequisites vary by course. While some beginner courses have no prerequisites, advanced courses might require basic knowledge in the subject area. Check individual course descriptions for specific requirements.",
    },
    {
        question: "Do you offer certificates upon completion?",
        answer: "Yes, you'll receive a certificate of completion for each course you finish. Our certificates are recognized by industry leaders and can be shared on platforms like LinkedIn.",
    },
    {
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the course, you can request a full refund within 30 days of purchase, no questions asked.",
    },
    {
        question: "Can I access the courses on mobile devices?",
        answer: "Yes, our platform is fully responsive. You can access all course content on any device - desktop, tablet, or mobile phone. We also offer offline viewing for premium members.",
    },
];

const Faq = () => {
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
                            FAQ
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-3xl leading-[1.2] md:text-4xl font-medium"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Find answers to common questions about our platform, courses, and learning experience
                    </motion.p>
                </div>

                {/* FAQ Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="bg-white rounded-xl border border-gray-200"
                                >
                                    <AccordionTrigger className="px-6 text-left hover:no-underline">
                                        <span className="lg:text-base font-medium text-gray-900">
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6">
                                        <p className="text-gray-600 leading-relaxed md:text-base">
                                            {faq.answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>

                {/* Contact Support Link */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600">
                        Still have questions?{" "}
                        <a
                            href="/contact"
                            className="text-violet-600 font-medium hover:text-violet-700 transition-colors"
                        >
                            Contact our support team
                        </a>
                    </p>
                </motion.div> */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600">
                        Still have questions?{" "}
                        <a
                            href="/faq"
                            className="text-violet-600 font-medium hover:text-violet-700 transition-colors"
                        >
                            Read more FAQ
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Faq;