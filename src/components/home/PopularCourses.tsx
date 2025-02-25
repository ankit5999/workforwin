"use client";

import { motion } from "framer-motion";
import { Star, Clock, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RatingStars from "../layout/rating";

const courses = [
    {
        id: 1,
        title: "Professional Ceramic Moulding for Beginners",
        category: "Data Science",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        price: 150,
        rating: 5.0,
        totalRatings: 78,
        lessons: 25,
        hours: 8,
        instructor: {
            name: "John Smith",
            avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100",
            rating: 5.0,
            reviews: "1.5k",
        },
    },
    {
        id: 2,
        title: "Ultimate Photoshop Training: From Beginner",
        category: "Management",
        image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
        price: 120,
        rating: 4.5,
        totalRatings: 50,
        lessons: 35,
        hours: 24,
        instructor: {
            name: "Masum Billah",
            avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100",
            rating: 5.0,
            reviews: "2k",
        },
    },
    {
        id: 3,
        title: "Basic Fundamentals of Interior & Graphics Design",
        category: "Graphics",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
        price: 170,
        rating: 5.0,
        totalRatings: 21,
        lessons: 65,
        hours: 30,
        instructor: {
            name: "Sarah Wilson",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
            rating: 5.0,
            reviews: "3k",
        },
    },
    // {
    //     id: 4,
    //     title: "WordPress for Beginners – Master WordPress",
    //     category: "Development",
    //     image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
    //     price: 140,
    //     rating: 5.0,
    //     totalRatings: 28,
    //     lessons: 25,
    //     hours: 8,
    //     instructor: {
    //         name: "Mike Johnson",
    //         avatar: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100",
    //         rating: 5.0,
    //         reviews: "1.8k",
    //     },
    // },
];

const PopularCourses = () => {
    return (
        <section className="py-20 bg-gray-50">
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
                            Popular Courses
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-3xl leading-[1.2] md:text-4xl font-medium"
                    >
                        Pick A Course To Get Started
                    </motion.h2>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            // className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <motion.div 
                                className="group border border-gray-200 bg-white rounded-lg overflow-hidden hover:shadow-lg"
                            whileHover={{ y: -10 }}>
                                {/* Course Image */}
                                <div className="relative h-48">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-white text-appPurple-900">
                                            {course.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-appPurple-900 text-white">
                                            ${course.price}
                                        </span>
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className="relative p-6">
                                    {/* Default Content */}
                                    <div className="space-y-4 transition-opacity duration-300 group-hover:opacity-0">
                                        <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                                            {course.title}
                                        </h3>
                                        <div className="flex items-center gap-1">
                                            <RatingStars rating={course.rating} />
                                            <span className="text-sm text-gray-600 ml-1">
                                                {course.rating} / {course.totalRatings} Rating
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <BookOpen className="w-4 h-4" />
                                                <span>{course.lessons} Lessons</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{course.hours} Hours</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Content - Absolute positioned over default content */}
                                    <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white">
                                        <div className="flex flex-col h-full">
                                            <div className="flex items-center gap-3 mb-4">
                                                <Image
                                                    src={course.instructor.avatar}
                                                    alt={course.instructor.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full overflow-hidden"
                                                />
                                                <div>
                                                    <p className="font-medium text-gray-900">
                                                        {course.instructor.name}
                                                    </p>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                        <span className="text-sm text-gray-600">
                                                            {course.instructor.rating} ({course.instructor.reviews})
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow" />
                                            <Link
                                                href={`/library/${course.id}`}
                                                className="inline-flex items-center justify-center w-full px-4 py-2 bg-appPurple-900 text-white rounded-full font-medium hover:bg-bg-appPurple-900/90 transition-colors"
                                            >
                                                Enroll Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;