"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MoreVertical, X } from "lucide-react";
import QuotesSlider from "./Slider";
export default function ImageColumn() {

    return (
        <div className="hidden lg:block relative bg-appDark-900">
            <div className="absolute inset-0 bg-gradient-to-br from-appDark-900/90 to-appDark-900/70" />
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-full p-12 flex flex-col items-center justify-center text-white"
            >
                {/* Progress Card */}
                <div className="absolute top-20 w-[360px] bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-gray-900 font-medium">Progress</h3>
                            <button className="text-gray-400 hover:text-gray-600">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <Image
                                    // src="/assets/images/team/ankit.svg"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                                    alt="Profile"
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                                <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-appPurple-900 rounded-full border-2 border-white" />
                            </div>
                            <div>
                                <h4 className="text-gray-900 font-medium">Alesia Karapova</h4>
                                <p className="text-sm text-gray-500">Basic M'</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-900">30</span>
                                <span className="text-gray-500">Hours spend</span>
                            </div>
                            <div className="h-32 flex items-end gap-3">
                                {[60, 80, 40, 90, 50].map((height, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-appPurple-900/10 rounded-t-lg"
                                        style={{ height: `${height}%` }}
                                    />
                                ))}
                            </div>
                            <div className="text-sm text-gray-500">Sun 15</div>
                        </div>
                    </div>
                </div>

                {/* Course Card */}
                <div className="absolute bottom-60 right-24 w-[350px] bg-orange-400 rounded-2xl p-6 shadow-xl">
                    <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-white">
                                <span className="px-2 py-0.5 bg-white/20 rounded-full">Beginner</span>
                                <span>• 6 hours</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white">Animation for Beginner</h3>
                        </div>
                        <button className="p-1 bg-gray-900/20 rounded-lg">
                            <X className="w-4 h-4 text-white" />
                        </button>
                    </div>
                    <p className="text-sm text-white/90 mb-4">
                        Procreate Dreams has transformed my ability to make animations from my art. Yet when I first opened...
                    </p>
                    <div className="flex items-center gap-2 text-white text-sm">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1">4.9</span>
                        </div>
                        <span>(1,890)</span>
                    </div>
                </div>

                {/* App Icons */}
                <div className="">
                    <div className="w-12 h-12 absolute bottom-72 left-24 bg-violet-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="w-12 h-12 absolute top-10 right-24 bg-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-12 left-12 right-12 text-center">
                    <QuotesSlider />
                </div>
            </motion.div>
        </div>
    );
}