"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronDown,
    ChevronUp,
    Play,
    File,
    MessageSquare,
    ThumbsUp,
    Send,
    Download,
    Menu,
    X,
    ArrowLeft
} from "lucide-react";
import { useParams } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VideoPlayer } from "@/components/ui/video-player";

// This would typically come from an API
const courseData = {
    id: 1,
    title: "Complete Web Development Bootcamp",
    curriculum: [
        {
            title: "Getting Started",
            duration: "2.5 hours",
            lessons: [
                {
                    id: "1",
                    title: "Course Introduction",
                    duration: "15 min",
                    type: "video",
                    completed: true
                },
                {
                    id: "2",
                    title: "Setting Up Your Development Environment",
                    duration: "45 min",
                    type: "video",
                    completed: false
                },
                {
                    id: "3",
                    title: "Web Development Fundamentals",
                    duration: "1 hour",
                    type: "video",
                    completed: false
                },
                {
                    id: "4",
                    title: "First Assignment",
                    duration: "30 min",
                    type: "assignment",
                    completed: false
                }
            ],
        },
        {
            title: "HTML & CSS Fundamentals",
            duration: "8 hours",
            lessons: [
                {
                    id: "5",
                    title: "HTML5 Basics",
                    duration: "2 hours",
                    type: "video",
                    completed: false
                },
                {
                    id: "6",
                    title: "CSS3 Styling",
                    duration: "2.5 hours",
                    type: "video",
                    completed: false
                },
                {
                    id: "7",
                    title: "Responsive Design",
                    duration: "2 hours",
                    type: "video",
                    completed: false
                },
                {
                    id: "8",
                    title: "Flexbox & Grid",
                    duration: "1.5 hours",
                    type: "video",
                    completed: false
                },
                {
                    id: "9",
                    title: "Responsive Design",
                    duration: "2 hours",
                    type: "video",
                    completed: false
                },
                {
                    id: "10",
                    title: "Flexbox & Grid",
                    duration: "1.5 hours",
                    type: "video",
                    completed: false
                }
            ],
        }
    ],
    resources: [
        {
            title: "Course Slides",
            type: "PDF",
            size: "2.5 MB",
            url: "#"
        },
        {
            title: "Source Code",
            type: "ZIP",
            size: "15 MB",
            url: "#"
        },
        {
            title: "Exercise Files",
            type: "ZIP",
            size: "8 MB",
            url: "#"
        }
    ],
    comments: [
        {
            id: 1,
            user: {
                name: "Sarah Johnson",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
                role: "Student"
            },
            content: "This lecture was incredibly helpful! The explanation of flexbox concepts really cleared things up for me.",
            timestamp: "2 hours ago",
            likes: 24,
            replies: 3
        },
        {
            id: 2,
            user: {
                name: "Michael Chen",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
                role: "Student"
            },
            content: "Great explanation of the concepts. Could you please elaborate more on the grid system in the next lecture?",
            timestamp: "5 hours ago",
            likes: 18,
            replies: 2
        }
    ]
};

export default function CourseVideoPage() {
    const params = useParams();
    const [expandedSections, setExpandedSections] = useState<number[]>([0]);
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [comments, setComments] = useState(courseData.comments);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSection = (index: number) => {
        setExpandedSections(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const handleSubmitComment = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!comment.trim()) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newComment = {
            id: comments.length + 1,
            user: {
                name: "You",
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
                role: "Student"
            },
            content: comment,
            timestamp: "Just now",
            likes: 0,
            replies: 0
        };

        setComments(prev => [newComment, ...prev]);
        setComment("");
        setIsSubmitting(false);
    };

    return (
        <main className="">
            <div className="max-w-[1600px] mx-auto">
                <div className="lg:grid lg:grid-cols-4 min-h-screen">
                    {/* Mobile Sidebar Toggle */}
                    <motion.button
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-appPurple-900 text-white rounded-lg"
                    >
                        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>

                    {/* Left Sidebar - Course Curriculum */}
                    <div className={`
            fixed inset-0 lg:relative bg-white transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0 z-40' : '-translate-x-full lg:translate-x-0'}
            lg:col-span-1 border-r border-gray-200 lg:h-[calc(100vh-40px)] lg:sticky lg:top-20 lg:pb-10
          `}>
                        <div className="h-full flex flex-col">
                            
                            <div className="p-4 border-b border-gray-200">
                                <Link
                                    href={`/library/${params.id}`}
                                    className="inline-flex items-center text-appDark-900 hover:text-appPurple-900 mb-6"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Courses
                                </Link>
                                <h2 className="text-lg font-medium tracking-[1.2] text-gray-900">Course Content</h2>
                                <p className="text-sm text-gray-600">42 lectures • 12.5 hours</p>
                            </div>

                            <ScrollArea className="flex-1">
                                <div className="divide-y divide-gray-200">
                                    {courseData.curriculum.map((section, sectionIndex) => (
                                        <div key={section.title} className="bg-white">
                                            <button
                                                onClick={() => toggleSection(sectionIndex)}
                                                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                                            >
                                                <div className="flex-1 text-left">
                                                    <h3 className="font-medium text-gray-900">{section.title}</h3>
                                                    <p className="text-sm text-gray-600">{section.duration}</p>
                                                </div>
                                                {expandedSections.includes(sectionIndex) ? (
                                                    <ChevronUp className="w-5 h-5 text-gray-500" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                                )}
                                            </button>

                                            {expandedSections.includes(sectionIndex) && (
                                                <div className="bg-gray-50">
                                                    {section.lessons.map((lesson) => (
                                                        <Link
                                                            key={lesson.id}
                                                            href={`/library/${params.id}/watch/${lesson.id}`}
                                                            onClick={() => setIsSidebarOpen(false)}
                                                            className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-100 ${lesson.id === params.videoId ? "bg-appPurple-900/10" : ""
                                                                }`}
                                                        >
                                                            <div className="flex-shrink-0">
                                                                {lesson.type === "video" ? (
                                                                    <Play className={`w-4 h-4 ${lesson.id === params.videoId ? "text-appPurple-900" : "text-gray-500"
                                                                        }`} />
                                                                ) : (
                                                                    <File className="w-4 h-4 text-gray-500" />
                                                                )}
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <p className={`text-sm font-medium truncate ${lesson.id === params.videoId ? "text-appPurple-900" : "text-gray-900"
                                                                    }`}>
                                                                    {lesson.title}
                                                                </p>
                                                                <p className="text-xs text-gray-500">{lesson.duration}</p>
                                                            </div>
                                                            {lesson.completed && (
                                                                <div className="flex-shrink-0">
                                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                                </div>
                                                            )}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 py-20">
                        {/* Video Player */}
                        <div className="md:px-4">
                            <VideoPlayer
                                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                watermark={`© Workforwin ${new Date().getFullYear()}`}
                                className="md:rounded-lg"
                            />
                            {/* <div className="aspect-video bg-gray-200">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Course Video"
                                    className="w-full h-full md:rounded-lg"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div> */}
                        </div>

                        {/* Content Tabs */}
                        <div className="p-4 lg:p-6">
                            <div className="max-w-4xl mx-auto space-y-8">
                                {/* Video Info */}
                                <div>
                                    <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                                        1. Course Introduction
                                    </h1>
                                    <p className="text-gray-600">
                                        Learn the fundamentals of web development in this comprehensive introduction.
                                        We'll cover the course structure, prerequisites, and what you'll achieve by the end.
                                    </p>
                                </div>

                                {/* Resources */}
                                <div>
                                    <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
                                        Resources
                                    </h2>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {courseData.resources.map((resource, index) => (
                                            <motion.a
                                                key={resource.title}
                                                href={resource.url}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-appPurple-900/10 hover:bg-appPurple-900/5 transition-colors"
                                            >
                                                <div className="p-2 rounded-lg bg-violet-100 text-appPurple-900">
                                                    <Download className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{resource.title}</p>
                                                    <p className="text-sm text-gray-600">{resource.type} • {resource.size}</p>
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                                {/* Comments Section */}
                                <div>
                                    <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-6">
                                        Discussion
                                    </h2>

                                    {/* Comment Form */}
                                    <form onSubmit={handleSubmitComment} className="mb-8">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
                                                    alt="Your avatar"
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <textarea
                                                    value={comment}
                                                    onChange={(e) => setComment(e.target.value)}
                                                    placeholder="Add to the discussion"
                                                    rows={3}
                                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 resize-none"
                                                />
                                                <div className="mt-2 flex justify-end">
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting || !comment.trim()}
                                                        className="inline-flex items-center px-4 py-2 rounded-lg bg-appPurple-900 text-white font-medium hover:bg-violet-700 transition-all disabled:bg-appPurple-900/80 disabled:cursor-not-allowed"
                                                    >
                                                        {isSubmitting ? (
                                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                        ) : (
                                                            <>
                                                                <Send className="w-4 h-4 mr-2" />
                                                                Comment
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    {/* Comments List */}
                                    <div className="space-y-6">
                                        {comments.map((comment) => (
                                            <motion.div
                                                key={comment.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="flex gap-4"
                                            >
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <Image
                                                        src={comment.user.avatar}
                                                        alt={comment.user.name}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full w-10 h-10"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                        <span className="font-medium text-gray-900">
                                                            {comment.user.name}
                                                        </span>
                                                        <span className="text-sm text-gray-500">
                                                            {comment.user.role}
                                                        </span>
                                                        <span className="text-sm text-gray-500">
                                                            • {comment.timestamp}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600 mb-2 break-words">{comment.content}</p>
                                                    <div className="flex items-center gap-4 text-sm">
                                                        <button className="flex items-center gap-1 text-gray-500 hover:text-appPurple-900">
                                                            <ThumbsUp className="w-4 h-4" />
                                                            <span>{comment.likes}</span>
                                                        </button>
                                                        <button className="flex items-center gap-1 text-gray-500 hover:text-appPurple-900">
                                                            <MessageSquare className="w-4 h-4" />
                                                            <span>{comment.replies} replies</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}