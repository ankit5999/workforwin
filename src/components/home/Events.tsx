"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Play, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { VideoPlayer } from "../ui/video-player";
import { Button } from "../ui/button";

const events = [
    {
        date: { day: "25", month: "May", year: "2025" },
        title: "Coding Challenge Championship",
        time: "05:30 am to 8:25 pm",
        location: "Jeddah"
    },
    {
        date: { day: "45", month: "Aprill", year: "2025" },
        title: "Electrical Engineering new event",
        time: "05:30 am to 8:25 pm",
        location: "Jeddah"
    },
    {
        date: { day: "27", month: "June", year: "2025" },
        title: "World Famous Talented Teachers",
        time: "05:30 am to 8:25 pm",
        location: "Jeddah"
    }
];

const Events = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header with buttons */}
                <div className="flex justify-between items-center flex-wrap gap-6 mb-12">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block"
                        >
                            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-appPurple-900 text-white">
                                Events
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl leading-[1.2] md:text-4xl font-medium"
                        >
                            Join our Upcoming Events
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/events"
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-appPurple-900 text-white font-medium hover:bg-appPurple-900/90 transition-colors"
                        >
                            See All Events
                        </Link>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {/* Left Column - Events List */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-wrap items-center gap-6 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Date Circle */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full border-4 border-gray-100 bg-appPurple-900 flex flex-col items-center justify-center text-center">
                                        <span className="text-lg font-bold text-white">{event.date.day}</span>
                                        <span className="text-sm text-white">{event.date.month}</span>
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {event.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Join Now Button */}
                                <div className="flex-shrink-0">
                                    <Link
                                        href={`/events/${index}`}
                                        className="inline-flex items-center text-violet-600 hover:text-appPurple-900 font-medium"
                                    >
                                        Join Now
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Column - Video Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3}}
                        className="relative rounded-2xl overflow-hidden h-full"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070"
                            alt="Event preview"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            {/* Pulsing rings */}
                            <div className="relative">
                                <div className="absolute -inset-4">
                                    <div className="w-24 h-24 rounded-full bg-appPurple-900/20 animate-ping" />
                                </div>
                                <div className="absolute -inset-8">
                                    <div className="w-32 h-32 rounded-full bg-appPurple-900/10 animate-pulse" />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsVideoOpen(true)}
                                    className="relative w-16 h-16 rounded-full bg-appPurple-900 text-white flex items-center justify-center hover:bg-appPurple-900/90 transition-colors z-10"
                                >
                                    <Play className="w-6 h-6" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Video Dialog */}
            {isVideoOpen && ( 
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                >
                    <div className="relative w-full max-w-5xl bg-black group rounded-2xl overflow-hidden flex items-center justify-center">
                        <Button
                            onClick={() => setIsVideoOpen(false)}
                            // bg-gray-900 /40 p-2 rounded-full bg-opacity-5 hidden group-hover:block transition-colors
                            className="absolute top-6 right-6 p-2 rounded-full group-hover:inline-block hidden text-white bg-white/20 hover:bg-white/30  transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                            {/* <span className="sr-only">Close video</span> */}
                        </Button>

                        <VideoPlayer
                            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            watermark={`© Workforwin ${new Date().getFullYear()}`}
                            className="md:rounded-lg"
                        />


                        {/* <div className="relative pt-[56.25%]">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="Video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </div> */}
                        {/* <div className="relative pt-[56.25%]">
                            <iframe
                                src="https://player.vimeo.com/video/76979871?autoplay=1"
                                title="Vimeo Video Player"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </div> */}
                        {/* <div className="relative pt-[56.25%]">
                            <video
                                src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
                                controls
                                autoPlay
                                className="absolute inset-0 w-full h-full"
                            />
                        </div> */}

                        {/* <VideCard /> */}

                    </div>
                    {/* <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="relative pt-[56.25%]">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </div>
                    </div> */}
                </motion.div>
            )}
        </section>
    );
};

export default Events;