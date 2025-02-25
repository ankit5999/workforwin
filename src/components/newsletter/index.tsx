"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setEmail("");
        setIsSubmitting(false);
    };

    return (
        <section className="relative bg-appDark-900 py-20 overflow-hidden ">
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 800 800">
                    <defs>
                        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <circle cx="25" cy="25" r="1" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div> */}

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left side - Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className="text-3xl leading-[1.2] md:text-4xl font-medium text-white mb-4">
                            Join our Newsletter
                        </h2>
                        <p className="text-gray-400 text max-w-xl">
                            Subscribe to our Newsletter to get our Latest News and exclusive updates about our courses and special offers.
                        </p>
                    </motion.div>

                    {/* Right side - Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 w-full lg:w-auto"
                    >
                        <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-grow">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        required
                                        className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/20 transition-all"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center justify-center px-5 py-3 bg-white text-black rounded-lg hover:bg-gray-200 whitespace-nowrap transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-violet-900 border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Subscribe
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            {/* <div className="absolute bottom-0 left-0 w-64 h-64 transform translate-y-1/2 -translate-x-1/2">
                <div className="absolute inset-0 bg-violet-600 rounded-full opacity-20 blur-3xl" />
            </div> */}
            {/* <div className="absolute top-0 right-0 w-96 h-96 transform -translate-y-1/2 translate-x-1/2">
                <div className="absolute inset-0 bg-violet-400 rounded-full opacity-20 blur-3xl" />
            </div> */}
        </section>
    );
};

export default Newsletter;