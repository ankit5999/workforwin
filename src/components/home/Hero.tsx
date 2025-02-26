"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "../layout/header";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            },
            delay: 0.3
        }
    };

    const itemVariants = {
        // hidden: { opacity: 0, y: -20 },
        // visible: { opacity: 1, y: 0 }
        initial :{ opacity: 0, y: -20 },
        animate:{ opacity: 1, y: 0 },
        transition:{ duration: 0.6, delay: 0.3 }
    }; 
    
    const headerClass = {
        header: "bg-transparent",
        list: "text-gray-300 transition-colors"
    }

    const teamMembers = [
        { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80" },
        { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80" },
        { url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&q=80" },
        // { url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80" },
        { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80" },
    ];
    

    return (
        <div className="relative z-20">
            <Header className={headerClass} />
            {/* Background div */}
            <div className="absolute top-0 left-0 right-0 h-[63%] bg-appDark-900" />
            {/* Bottom half - white background */}
            {/* <div className="absolute  bottom-0 left-0 right-0 h-[37%] bg-white" /> */}

            <div className="max-w-7xl relative mx-auto px-4 pt-24 md:pt-16">
                {/* <div className="max-w-7xl relative mx-auto px-4 pt-24 md:pt-32"> */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left column - Text content */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-appOrange-900/10 text-appOrange-900 text-sm font-medium">
                            <Sparkles className="w-4 h-4" />
                            <span className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-appOrange-800 via-appOrange-800 to-appOrange-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                Bring learning on track
                            </span>
                        </span>

                        <h1
                            className="text-4xl leading-[1.2] md:text-6xl font-bold"
                        >
                            <span className="text-gray-100">Everything you need to</span>{" "}
                            <span className="bg-[linear-gradient(to_right,#FF007F,#008080,#b28f72)] bg-clip-text text-transparent">
                                ace
                            </span>
                            {/* <span className="bg-gradient-to-r from-pink-800 via-rose-700 via-green-700 to-teal-800 bg-clip-text text-transparent">ace</span>{" "} */}
                            {/* <span className="bg-gradient-to-r from-appSkyBlue-800 to-appPurple-800 bg-clip-text text-transparent">ace</span>{" "} */}
                            <span className="text-gray-100">your interviews</span>
                        </h1>

                        <p
                            className={`lg:text-gray-900 text-gray-100 text-lg max-w-xl`}
                        >
                            Get the skills, cultural understanding and confidence to open up your world with Workforwin.
                        </p>

                        {/* Stats section */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center space-x-4"
                        >
                            <div className="flex -space-x-2">
                                {[1,2,3,4,5].map((img, i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-appPurple-900/10 bg-gray-200 overflow-hidden"
                                    >
                                        <Image
                                            // src={img.url}
                                            src={`https://i.pravatar.cc/100?img=${i+10}`}
                                            alt={`Mentor ${i}`}
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-appPurple-900 flex items-center justify-center">
                                    <span className="text-white text-xs">10k+</span>
                                </div>
                            </div>
                            <span className="text-gray-500 hidden md:inline-block">active learner's</span>
                        </motion.div>

                        {/* CTA Button */}
                        {/* <motion.div variants={itemVariants}>
                            <Link
                                href="#get-started"
                                className="inline-flex items-center px-6 py-3 bg-appPurple-900 hover:bg-appPurple-900/90 text-white rounded-lg font-semibold transition-colors"
                            >
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </motion.div> */}
                    </motion.div>

                    {/* Right column - Image and stats */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative md:mt-16"
                    >
                        <div className="relative">
                            <Image
                                src="/assets/images/home/banner.svg"
                                alt="Mentor"
                                width={700}
                                height={700}
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};