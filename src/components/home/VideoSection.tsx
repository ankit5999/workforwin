"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { VideoPlayer } from "../ui/video-player";

const VideoSection = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="py-20 bg-white relative">
            {/* Background Pattern */}
            <div className="absolute left-0 top-0 w-32 h-32 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-7xl mx-auto px-4">
                <div className="relative rounded-lg overflow-hidden max-h-[600px] mx-auto">
                    {/* Video Thumbnail */}
                    <div className="aspect-video relative">
                        <Image
                            src="/assets/images/home/video-thumbnail.svg"
                            alt="Video thumbnail"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Play Button Overlay */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            onClick={() => setIsVideoOpen(true)}
                            className="absolute inset-0 flex items-center justify-center bg-black/20 group hover:bg-black/30 transition-colors duration-300"
                        >
                            {/* Pulsing rings */}
                            <div className="relative">
                                <div className="absolute -inset-4">
                                    <div className="w-24 h-24 rounded-full bg-violet-500/20 animate-ping" />
                                </div>
                                <div className="absolute -inset-8">
                                    <div className="w-32 h-32 rounded-full bg-violet-500/10 animate-pulse" />
                                </div>
                                <div className="relative w-16 h-16 rounded-full bg-violet-600 text-white flex items-center justify-center group-hover:bg-violet-700 transition-colors z-10">
                                    <Play className="w-6 h-6 ml-1" />
                                </div>
                            </div>
                            <span className="sr-only">Play Video</span>
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Video Modal */}
            {isVideoOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <div className="relative w-full max-w-5xl bg-black group rounded-2xl overflow-hidden">
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
                </motion.div>
            )}
        </section>
    );
};

export default VideoSection;