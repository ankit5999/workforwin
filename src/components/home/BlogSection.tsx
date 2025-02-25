"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "Become a Better Blogger Content Planning",
        date: "May 20, 2025",
        comments: 5,
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60",
        category: "Education",
        categoryColor: "bg-appPurple-900",
    },
    {
        id: 2,
        title: "How to Keep Workouts Fresh in the Morning",
        date: "May 20, 2025",
        comments: 5,
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60",
        category: "Workouts",
        categoryColor: "bg-appPurple-900",
    },
    {
        id: 3,
        title: "Four Ways to Keep Your Workout Routine Fresh",
        date: "May 20, 2025",
        comments: 5,
        image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop&q=60",
        category: "Health",
        categoryColor: "bg-appPurple-900",
    },
];

const BlogSection = () => {
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
                        Diary
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl leading-[1.2] md:text-4xl font-medium"
                    >
                        Read Brands Diary 
                    </motion.h2>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-64">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${post.categoryColor} text-white`}>
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Meta */}
                                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>{post.comments} Comments</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Read More Link */}
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center text-appPurple-900 hover:text-appPurple-700 font-medium"
                                >
                                    Read More
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 12H19M19 12L12 5M19 12L12 19"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;