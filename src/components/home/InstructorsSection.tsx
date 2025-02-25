"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Share2 } from "lucide-react";

const instructors = [
    {
        name: "Jenny Wilson",
        role: "Digital Marketer",
        image: "/assets/images/instructors/1.svg",
        background: "bg-sky-100",
    },
    {
        name: "Darrell Steward",
        role: "Designer",
        image: "/assets/images/instructors/2.svg",
        background: "bg-red-100",
    },
    {
        name: "Ronald Richards",
        role: "WordPress Developer",
        image: "/assets/images/instructors/3.svg",
        background: "bg-purple-100",
    },
    {
        name: "Albert Flores",
        role: "Fitness Trainer",
        image: "/assets/images/instructors/4.svg",
        background: "bg-sky-100",
    },
];

const InstructorsSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-appPurple-900 text-white mb-4"
                    >
                        Instructors
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl leading-[1.2] md:text-4xl font-medium"
                    >
                        Our Expert Instructors
                    </motion.h2>
                </div>

                {/* Instructors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {instructors.map((instructor, index) => (
                        <motion.div
                            key={instructor.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-lg overflow-hidden ${instructor.background} group`}
                        >
                           <motion.div whileHover={{ y:-10 }}>
                                {/* Image */}
                                <div className="aspect-[4/5] relative">
                                    <Image
                                        src={instructor.image}
                                        alt={instructor.name}
                                        fill
                                        className="object-cover rounded-lg"
                                    />

                                    {/* Share Button */}
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-appPurple-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <Share2 className="w-4 h-4" />
                                    </motion.button>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-2 left-2 right-2 p-6 bg-white rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {instructor.name}
                                    </h3>
                                    <p className="text-gray-600">{instructor.role}</p>
                                </div>
                           </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstructorsSection;