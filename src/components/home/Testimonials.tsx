"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "Masum Billah",
        role: "CEO @ Themesvila",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80",
        content: "The quality of the courses and instructors exceeded my expectations. The platform's interface is intuitive, making learning a breeze. I've gained valuable skills that have directly impacted my career.",
        rating: 5
    },
    {
        id: 2,
        name: "Monaym Billah",
        role: "Executive @ Themesvila",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&q=80",
        content: "An exceptional learning experience! The structured curriculum and hands-on projects helped me master complex concepts. The support from instructors and the community is outstanding.",
        rating: 5
    },
    {
        id: 3,
        name: "Sarah Johnson",
        role: "Senior Developer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
        content: "The platform offers an incredible variety of courses. The practical assignments and real-world projects have helped me apply what I've learned immediately in my work.",
        rating: 5
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
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
                            Testimonials
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-3xl leading-[1.2] md:text-4xl font-medium"
                    >
                        What Our Students Have To Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Discover how our platform has transformed the learning journey of students worldwide
                    </motion.p>
                </div>

                {/* Testimonials Slider */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center"
                    >
                        {/* Current Testimonial */}
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto relative"
                        >
                            {/* Quote mark */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-appPurple-900 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                </svg>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-shrink-0">
                                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                                        <Image
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="flex-grow text-center md:text-left">
                                    <p className="text-gray-700 text-lg md:text-xl mb-6">
                                        {testimonials[currentIndex].content}
                                    </p>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {testimonials[currentIndex].name}
                                        </h3>
                                        <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                                        <div className="flex items-center justify-center md:justify-start gap-1">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center mt-8 gap-4">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-appPurple-900/10 text-appPurple-900 hover:bg-appPurple-900 hover:text-white transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-appPurple-900/10 text-appPurple-900 hover:bg-appPurple-900 hover:text-white transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots */}
                    {/* <div className="flex justify-center mt-6 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-violet-600' : 'bg-violet-200'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;