"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, BookOpen, Users, Play, CheckCircle2, ArrowLeft, ChevronDown, ChevronUp, ThumbsUp, MessageSquare, AlertCircle, Search, Mail, X } from "lucide-react";
import { useState } from "react";
import { use } from "react";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/ui/video-player";

// This would typically come from an API, using the same data structure as the courses page
const courses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        category: "development",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
        price: 149.99,
        rating: 4.8,
        totalRatings: 2850,
        lessons: 156,
        hours: 42,
        level: "Beginner",
        language: "English",
        description: "Master web development with our comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and gain practical experience.",
        overview: {
            description: `This comprehensive web development bootcamp is designed to take you from beginner to professional developer. You'll learn both front-end and back-end development, working with the latest technologies and best practices in the industry.

      What you'll learn:
      • Full-stack web development from the ground up
      • Modern HTML5, CSS3, and JavaScript (ES6+)
      • React.js and Node.js
      • Database design and management
      • REST APIs and Web Services
      • Version control with Git
      • Deployment and hosting
      
      This course includes:
      • 42 hours of video content
      • 156 downloadable resources
      • 85 coding exercises
      • 12 real-world projects
      • Certificate of completion
      • Lifetime access
      
      Requirements:
      • Basic computer knowledge
      • No prior programming experience needed
      • A computer with internet access
      
      Who this course is for:
      • Beginners who want to learn web development
      • Students and professionals looking to switch careers
      • Entrepreneurs who want to build their own websites
      • Anyone interested in learning to code`,
            skills: [
                "HTML5 & CSS3",
                "JavaScript (ES6+)",
                "React.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "RESTful APIs",
                "Git & GitHub",
                "Responsive Design",
                "Web Security"
            ]
        },
        instructor: {
            name: "John Smith",
            avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100",
            rating: 4.9,
            students: "15.5k",
            courses: 12,
            bio: "Senior Web Developer with 10+ years of experience. Passionate about teaching and helping others learn to code.",
        },
        curriculum: [
            {
                title: "Getting Started",
                duration: "2.5 hours",
                lessons: [
                    {
                        title: "Course Introduction",
                        duration: "15 min",
                        type: "video"
                    },
                    {
                        title: "Setting Up Your Development Environment",
                        duration: "45 min",
                        type: "video"
                    },
                    {
                        title: "Web Development Fundamentals",
                        duration: "1 hour",
                        type: "video"
                    },
                    {
                        title: "First Assignment",
                        duration: "30 min",
                        type: "assignment"
                    }
                ],
            },
            {
                title: "HTML & CSS Fundamentals",
                duration: "8 hours",
                lessons: [
                    {
                        title: "HTML5 Basics",
                        duration: "2 hours",
                        type: "video"
                    },
                    {
                        title: "CSS3 Styling",
                        duration: "2.5 hours",
                        type: "video"
                    },
                    {
                        title: "Responsive Design",
                        duration: "2 hours",
                        type: "video"
                    },
                    {
                        title: "Flexbox & Grid",
                        duration: "1.5 hours",
                        type: "video"
                    }
                ],
            },
            {
                title: "JavaScript Programming",
                duration: "12 hours",
                lessons: [
                    {
                        title: "JavaScript Basics",
                        duration: "3 hours",
                        type: "video"
                    },
                    {
                        title: "DOM Manipulation",
                        duration: "2.5 hours",
                        type: "video"
                    },
                    {
                        title: "Event Handling",
                        duration: "3 hours",
                        type: "video"
                    },
                    {
                        title: "Async Programming",
                        duration: "3.5 hours",
                        type: "video"
                    }
                ],
            },
        ],
        features: [
            "Lifetime Access",
            "Certificate of Completion",
            "15+ Downloadable Resources",
            "Mobile and TV Access",
            "Assignments & Projects",
            "Expert Instructor Support",
        ],
        reviews: [
            {
                id: 1,
                user: {
                    name: "Sarah Johnson",
                    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
                    title: "Web Developer"
                },
                rating: 5,
                date: "March 15, 2024",
                content: "This course exceeded my expectations! The instructor explains complex concepts in a way that's easy to understand. I started with zero coding knowledge and now I'm building full-stack applications. The projects are practical and relevant to real-world scenarios.",
                helpful: 245,
                replies: 12
            },
            {
                id: 2,
                user: {
                    name: "Michael Chen",
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
                    title: "Student"
                },
                rating: 4,
                date: "March 12, 2024",
                content: "Great course with comprehensive content. The instructor is very knowledgeable and responsive to questions. The only reason I'm giving 4 stars is that some sections could use more practical exercises. Otherwise, it's an excellent resource for learning web development.",
                helpful: 189,
                replies: 8
            },
            {
                id: 3,
                user: {
                    name: "Emily Rodriguez",
                    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
                    title: "UX Designer"
                },
                rating: 5,
                date: "March 10, 2024",
                content: "As someone transitioning from design to development, this course was exactly what I needed. The curriculum is well-structured, and the projects help reinforce the concepts. The section on React was particularly helpful. Highly recommend!",
                helpful: 156,
                replies: 5
            }
        ]
    },
    // ... other courses
];

interface CourseDetailPageProps {
    params: Promise<{ id: string }>;
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState("overview");
    const [expandedSections, setExpandedSections] = useState<number[]>([]);

    // Unwrap params using React.use()
    const { id } = use(params);

    // Find the course by ID
    const course = courses.find((c) => c.id === parseInt(id));

    const toggleSection = (index: number) => {
        setExpandedSections(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg border border-gray-200 p-8 text-center relative"
                >
                    <div className="max-w-md mx-auto">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="w-24 h-24 bg-appPurple-900/10 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <Search className="w-12 h-12 text-appPurple-900" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            No Content Found
                        </h3>
                        <p className="text-gray-600 mb-8">
                            We couldn't find any content matching your search. Let us know what you're looking for, and we'll work on bringing new courses to meet your needs.
                        </p>
                        <Link
                            href="/contact"
                        >
                            <Button>
                                <Mail className="w-5 h-5 mr-2" />
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <main className="">
            {/* Hero Section */}
            <section className="bg-appDark-900 py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-white"
                        >
                            <Link
                                href="/library"
                                className="inline-flex items-center text-violet-200 hover:text-white mb-6"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Courses
                            </Link>
                            <h1 className="text-3xl leading-[1.2] md:text-4xl font-medium mb-6">
                                {course.title}
                            </h1>
                            <p className="text-violet-100 text-lg mb-8">
                                {course.description}
                            </p>
                            <div className="flex flex-wrap gap-6 text-sm mb-8">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span>{course.rating} ({course.totalRatings.toLocaleString()} ratings)</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    <span>{course.instructor.students} students</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <BookOpen className="w-4 h-4" />
                                    <span>{course.lessons} lessons</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{course.hours} hours</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={course.instructor.avatar}
                                        alt={course.instructor.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium">{course.instructor.name}</p>
                                        <p className="text-sm text-violet-200">Course Instructor</p>
                                    </div>
                                </div>
                                {/* <div className="h-8 w-px bg-violet-500" /> */}
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-px bg-violet-500" />
                                    <div>
                                        <p className="font-medium">Last updated: March 2024</p>
                                        <p className="text-sm text-violet-200">{course.language}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden aspect-video">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group hover:bg-black/50 transition-colors cursor-pointer"
                                    onClick={() => setIsVideoOpen(true)}
                                >
                                    <div className="relative">
                                        <div className="absolute -inset-4">
                                            <div className="w-24 h-24 rounded-full bg-violet-500/20 animate-ping" />
                                        </div>
                                        <div className="relative w-16 h-16 rounded-full bg-appPurple-900 text-white flex items-center justify-center group-hover:bg-appPurple-900/90 transition-colors">
                                            <Play className="w-6 h-6 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 overflow-hidden ">
                            {/* Navigation */}
                            <div className="flex gap-8 mb-8 border-b border-gray-200 overflow-x-scroll scrollbar-hide">
                                {["overview", "curriculum", "instructor", "reviews"].map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => setSelectedSection(section)}
                                        className={`px-4 py-4 text-base font-medium capitalize ${selectedSection === section
                                                ? "text-violet-600 border-b-2 border-violet-600"
                                                : "text-gray-600 hover:text-gray-900"
                                            }`}
                                    >
                                        {section}
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div className={`${selectedSection === "curriculum" ? "" : ""}`}>
                                {/* <div className={`${selectedSection === "curriculum" ? "md:bg-gray-50 md:border border-gray-200 rounded-lg md:p-8" : "bg-gray-50 border border-gray-200 rounded-lg p-8"}`}> */}
                                {/* <div className="bg-gray-50 border border-gray-200 rounded-lg p-8"> */}
                                {selectedSection === "overview" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-8"
                                    >
                                        <div className="prose max-w-none">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Description</h3>
                                            <div className="whitespace-pre-line text-gray-800">
                                                {course.overview.description}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills You'll Learn</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {course.overview.skills.map((skill, index) => (
                                                    <div key={index} className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-5 h-5 text-appGreen-900" />
                                                        <span className="text-gray-800 text-md">{skill}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {selectedSection === "curriculum" && (
                                    <div className="space-y-6">
                                        {course.curriculum.map((section, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="border border-gray-200 bg-white rounded-lg overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => toggleSection(index)}
                                                    className={`w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-100 transition-colors ${expandedSections.includes(index) ? "bg-gray-100" : "bg-gray-50"}`}
                                                >
                                                    <div className="text-start">
                                                        <h3 className="font-semibold text-gray-900">
                                                            {section.title}
                                                        </h3>
                                                        <p className="text-sm text-gray-800 flex items-center gap-2"><Clock className="w-4 h-4 text-gray-600" /> {section.duration}</p>
                                                    </div>
                                                    {expandedSections.includes(index) ? (
                                                        <ChevronUp className="w-5 h-5 text-gray-800" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5 text-gray-800" />
                                                    )}
                                                </button>

                                                {expandedSections.includes(index) && (
                                                    <ul className="divide-y divide-gray-200">
                                                        {section.lessons.map((lesson, lessonIndex) => (
                                                            <li key={lessonIndex} className="px-6 py-4">
                                                                {lesson.type === "video" ? (
                                                                    <Link
                                                                        href={`/library/${id}/watch/${lessonIndex + 1}`}
                                                                        className="flex items-center justify-between group hover:text-appPurple-900 transition-colors"
                                                                    >
                                                                        <div className="flex items-center gap-3">
                                                                            <div className="flex items-center justify-center w-8 h-8 min-w-[35px] min-h-[35px] rounded-full bg-appPurple-900/10 text-appPurple-900 group-hover:bg-appPurple-900 group-hover:text-white transition-all">
                                                                                <Play className="w-4 h-4" />
                                                                            </div>
                                                                            <span className="text-gray-800 group-hover:text-appPurple-900 line-clamp-1">
                                                                                {lesson.title}
                                                                            </span>
                                                                        </div>
                                                                        <span className="text-sm text-nowrap pl-4 text-gray-600">{lesson.duration}</span>
                                                                    </Link>

                                                                ) : (
                                                                    <div className="flex items-center justify-between text-gray-800">
                                                                        <div className="flex items-center gap-3">
                                                                                <div className="w-8 h-8 min-w-[35px] min-h-[35px] rounded-full bg-appPurple-900/10 flex items-center justify-center">
                                                                                <AlertCircle className="w-4 h-4" />
                                                                            </div>
                                                                            {lesson.title}
                                                                        </div>
                                                                        <span className="text-sm text-nowrap pl-4 text-gray-600">{lesson.duration}</span>
                                                                    </div>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                )}

                                {selectedSection === "instructor" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex flex-wrap items-center gap-4">
                                            <Image
                                                src={course.instructor.avatar}
                                                alt={course.instructor.name}
                                                width={80}
                                                height={80}
                                                className="rounded-full w-20 h-20"
                                            />
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                                    {course.instructor.name}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-800">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                        <span>{course.instructor.rating} Instructor Rating</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Users className="w-4 h-4" />
                                                        <span>{course.instructor.students} Students</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <BookOpen className="w-4 h-4" />
                                                        <span>{course.instructor.courses} Courses</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed">
                                            {course.instructor.bio}
                                        </p>
                                    </motion.div>
                                )}

                                {selectedSection === "reviews" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-8"
                                    >
                                        {course.reviews.map((review, index) => (
                                            <motion.div
                                                key={review.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="border-b border-gray-200 last:border-0 pb-8 last:pb-0"
                                            >
                                                <div className="flex flex-wrap items-start gap-4">
                                                    <div className="flex flex-grow gap-4">
                                                        <div className="my-auto">
                                                            <Image
                                                                src={review.user.avatar}
                                                                alt={review.user.name}
                                                                width={48}
                                                                height={48}
                                                                className="rounded-full w-16 h-16"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900">
                                                                {review.user.name}
                                                            </h4>
                                                            <p className="text-sm text-gray-800">{review.user.title}</p>
                                                            <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${i < review.rating
                                                                    ? "text-yellow-400 fill-current"
                                                                    : "text-gray-300"
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                    
                                                </div>
                                                <p className="mt-4 text-gray-800">{review.content}</p>
                                                <div className="flex flex-wrap items-center gap-6 mt-4 text-sm">
                                                    <button className="flex items-center gap-2 text-gray-800 hover:text-violet-600">
                                                        <ThumbsUp className="w-4 h-4" />
                                                        <span>Supporting ({review.helpful})</span>
                                                    </button>
                                                    {/* <button className="flex items-center gap-2 text-gray-800 hover:text-violet-600">
                                                        <MessageSquare className="w-4 h-4" />
                                                        <span>Reply ({review.replies})</span>
                                                    </button> */}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="space-y-6 sticky top-20">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className=" rounded-lg border border-lg p-6 bg-white"
                                >
                                    <div className="text-3xl font-bold text-gray-900 mb-4">
                                        ${course.price}
                                    </div>
                                    <button className="w-full px-6 py-3 bg-appPurple-900 text-white rounded-lg font-medium hover:bg-appPurple-900/90 transition-colors mb-4">
                                        Enroll Now
                                    </button>
                                    <ul className="space-y-2 text-sm text-gray-800">
                                        {course.features.slice(0, 3).map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2 text-base">
                                                <CheckCircle2 className="w-5 h-5 text-appGreen-900" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                                <div className=" rounded-lg border border-lg p-6 bg-white">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                        Course Features
                                    </h3>
                                    <ul className="space-y-4">
                                        {course.features.map((feature, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="flex items-center gap-3"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-appGreen-900" />
                                                <span className="text-gray-800">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoOpen && (
                // <motion.div
                //     initial={{ opacity: 0 }}
                //     animate={{ opacity: 1 }}
                //     exit={{ opacity: 0 }}
                //     className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                // >
                //     <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden">
                //         <Button
                //             onClick={() => setIsVideoOpen(false)}
                //             // bg-gray-900 /40 p-2 rounded-full bg-opacity-5 hidden group-hover:block transition-colors
                //             className="absolute top-6 right-6 p-2 rounded-full group-hover:inline-block hidden text-white bg-white/20 hover:bg-white/30  transition-colors z-10"
                //         >
                //             <X className="w-5 h-5" />
                //             {/* <span className="sr-only">Close video</span> */}
                //         </Button>

                //         <VideoPlayer
                //             url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                //             watermark={`© Workforwin ${new Date().getFullYear()}`}
                //             className="md:rounded-lg"
                //         />
                //         {/* <button
                //             onClick={() => setIsVideoOpen(false)}
                //             className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
                //         >
                //             <ArrowLeft className="w-6 h-6" />
                //         </button>
                //         <div className="relative pt-[56.25%]">
                //             <iframe
                //                 src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                //                 title="Course Preview"
                //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                //                 allowFullScreen
                //                 className="absolute inset-0 w-full h-full"
                //             />
                //         </div> */}
                //     </div>
                // </motion.div>
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

                    </div>
                </motion.div>
            )}
        </main>
    );
}