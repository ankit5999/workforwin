"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Product Designer",
        company: "Design Co",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80",
        content: "Working with this team has been an absolute game-changer for our projects. Their attention to detail and creative solutions are unmatched.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Tech Lead",
        company: "InnovateTech",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80",
        content: "The level of professionalism and technical expertise demonstrated has exceeded our expectations. Truly a remarkable partnership.",
        rating: 5
    },
    {
        id: 3,
        name: "Emma Davis",
        role: "Marketing Director",
        company: "GrowthLabs",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=80",
        content: "Their innovative approach to problem-solving and dedication to delivering quality results has made them an invaluable partner.",
        rating: 5
    }
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export default function TestimonialsSlide() {
    const [[page, direction], setPage] = useState([0, 0]);
    const testimonialIndex = Math.abs(page % testimonials.length);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(interval);
    }, [page]);

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl" /> */}
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-appPurple-900 rounded-full opacity-20 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl leading-[1.2] md:text-4xl font-medium mb-4"
                    >
                        What Our Clients Say
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl text-lg mx-auto" >
                        Discover why clients choose us for their digital needs
                    </p>
                </div>

                <div className="relative h-[400px] md:h-[300px] overflow-hidden">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full"
                        >
                            <div className="bg-gray-100/80 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
                                <Quote className="w-10 h-10 text-appPurple-900 mb-4" />

                                <p className="text-lg mb-6">{testimonials[testimonialIndex].content}</p>

                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image
                                            src={testimonials[testimonialIndex].image}
                                            alt={testimonials[testimonialIndex].name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800">{testimonials[testimonialIndex].name}</h4>
                                        <p className="text-sm text-gray-600">
                                            {testimonials[testimonialIndex].role} at {testimonials[testimonialIndex].company}
                                        </p>
                                    </div>

                                    <div className="ml-auto flex gap-1">
                                        {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-appPurple-900/90 text-appPurple-900" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 md:mt-4">
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => {
                                const newDirection = index > testimonialIndex ? 1 : -1;
                                setPage([index, newDirection]);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === testimonialIndex ? 'w-6 bg-appPurple-900' : 'bg-gray-200/90'
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};