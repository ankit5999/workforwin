"use client";

import { motion } from "framer-motion";
import { Users2, PlaySquare, Laptop, HeadphonesIcon, Phone, Info } from "lucide-react";
import Image from "next/image";

const features = [
    {
        number: "1",
        icon: Users2,
        title: "World Class Instructors",
        description: "We are passionate about education and dedicated",
        iconBg: "group-hover:bg-appPurple-900/90 transition-colors",
        iconColor: "text-violet-600 group-hover:text-white transition-colors",
        numberBg: "bg-violet-500"
    },
    {
        number: "2",
        icon: PlaySquare,
        title: "Video Classes",
        description: "We are passionate about education and dedicated",
        iconBg: "group-hover:bg-appPurple-900/90 transition-colors",
        iconColor: "text-violet-600 group-hover:text-white transition-colors",
        numberBg: "bg-violet-500"
    },
    {
        number: "3",
        icon: Laptop,
        title: "Online Courses",
        description: "We are passionate about education and dedicated",
        iconBg: "group-hover:bg-appPurple-900/90 transition-colors",
        iconColor: "text-violet-600 group-hover:text-white transition-colors",
        numberBg: "bg-violet-500"
    },
    {
        number: "4",
        icon: HeadphonesIcon,
        title: "24/7 Support",
        description: "We are passionate about education and dedicated",
        iconBg: "group-hover:bg-appPurple-900/90 transition-colors",
        iconColor: "text-violet-600 group-hover:text-white transition-colors",
        numberBg: "bg-violet-500"
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        {/* Header */}
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-block"
                            >
                                <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-appPurple-900 text-white">
                                    Why Choose Us
                                </span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-3xl leading-[1.2] md:text-4xl font-medium"
                            >
                                Transform education your Life,{" "}
                                <span className="block">Change the World</span>
                            </motion.h2>
                        </div>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative group p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="flex items-center space-x-4 mb-4 border rounded-full w-fit border-gray-200 p-1">
                                        <div className={`p-3 rounded-full ${feature.iconBg} delay-75 bg-gray-100/90`}>
                                            <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                                        </div>
                                        <div className={`w-6 h-6 absolute top-4 left-0 rounded-full ${feature.numberBg} flex items-center justify-center text-white text-sm font-medium`}>
                                            {feature.number}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image
                                src="/assets/images/home/event_host.svg"
                                alt="Student studying"
                                width={600}
                                height={400}
                                className="w-full h-[600px] object-cover"
                            />

                            {/* Contact Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3"
                            >
                                <div className="p-2 bg-orange-100 rounded-lg">
                                    <Info className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Events :</p>
                                    <p className="font-semibold text-gray-900">100+ live events</p>
                                </div>
                                {/* <div className="p-2 bg-orange-100 rounded-lg">
                                    <Phone className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Call :</p>
                                    <p className="font-semibold text-gray-900">+990214 57 89 54</p>
                                </div> */}
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24">
                                <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#FF4D8D" fillOpacity="0.1" />
                                    <path d="M76 0L96 20L76 40L56 20L76 0Z" fill="#FF4D8D" fillOpacity="0.1" />
                                    <path d="M20 56L40 76L20 96L0 76L20 56Z" fill="#FF4D8D" fillOpacity="0.1" />
                                    <path d="M76 56L96 76L76 96L56 76L76 56Z" fill="#FF4D8D" fillOpacity="0.1" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};