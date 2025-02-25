"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Award,
    BookOpen,
    Clock,
    GraduationCap,
    LineChart,
    Star,
    Trophy,
    Users,
    ArrowRight,
    Play,
    Sparkles,
    Rocket,
    Target,
    CheckCircle2,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const userStats = {
    totalCourses: 5,
    hoursLearned: 42,
    coursesCompleted: 3,
    certificatesEarned: 2,
};

const enrolledCourses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        progress: 75,
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
        totalLessons: 156,
        completedLessons: 117,
        nextLesson: "JavaScript Promises",
    },
    {
        id: 2,
        title: "UI/UX Design Fundamentals",
        progress: 45,
        image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=800&h=600&fit=crop",
        totalLessons: 98,
        completedLessons: 44,
        nextLesson: "Color Theory Basics",
    },
    {
        id: 3,
        title: "Google Analytics Masterclass",
        progress: 80,
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop",
        totalLessons: 65,
        completedLessons: 44,
        nextLesson: "Add Google Analytics",
    },
];

const suggestedCourses = [
    {
        id: 3,
        title: "Data Science with Python",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        instructor: "Emily Chen",
        rating: 4.8,
        students: "15.5k",
        price: 149.99,
    },
    {
        id: 4,
        title: "Digital Marketing Masterclass",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        instructor: "Sarah Johnson",
        rating: 4.9,
        students: "12.3k",
        price: 129.99,
    }
];

const achievements = [
    {
        id: 1,
        title: "Workforwin Learner",
        description: "Completed first course milestone",
        icon: Trophy,
        date: "March 15, 2024",
        color: "text-yellow-500",
        bgColor: "bg-yellow-50",
    },
    {
        id: 2,
        title: "Quick Starter",
        description: "Completed 5 lessons in one day",
        icon: Rocket,
        date: "March 10, 2024",
        color: "text-purple-500",
        bgColor: "bg-purple-50",
    },
    {
        id: 3,
        title: "Goal Achiever",
        description: "Reached weekly learning goal",
        icon: Target,
        date: "March 5, 2024",
        color: "text-green-500",
        bgColor: "bg-green-50",
    },
];

export default function DashboardPage() {
    const [showCertificate, setShowCertificate] = useState(false);

    return (
       <div className="">
            <div className="relative md:py-20 py-6 z-20">
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-appDark-900" />
                <div className="max-w-7xl mx-auto px-4 relative pt-20">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-2xl font-bold text-white">
                                Welcome back, John! 👋
                            </h1>
                            <p className="text-gray-200">
                                Track your progress and keep learning
                            </p>
                        </motion.div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                            { title: "Total Courses", value: userStats.totalCourses, icon: BookOpen, color: "violet" },
                            { title: "Hours Learned", value: userStats.hoursLearned, icon: Clock, color: "pink" },
                            { title: "Completed", value: userStats.coursesCompleted, icon: CheckCircle2, color: "green" },
                            { title: "Certificates", value: userStats.certificatesEarned, icon: Award, color: "yellow" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">
                                                    {stat.title}
                                                </p>
                                                <p className="text-3xl font-bold text-gray-900">
                                                    {stat.value}
                                                </p>
                                            </div>
                                            <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                                                <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Enrolled Courses */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Enrolled Courses Section */}
                            <section>
                                <h2 className="text-xl font-semibold lg:text-gray-100 text-gray-900 mb-4">
                                    Enrolled Courses
                                </h2>
                                {enrolledCourses.length > 0 ? (
                                    <div className="space-y-6">
                                        {enrolledCourses.map((course, index) => (
                                            <motion.div
                                                key={course.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className=""
                                            >
                                                <motion.div whileHover={{ y: -10 }} className="p-6 bg-white rounded-lg border border-gray-200 overflow-hidden">
                                                    <div className="flex flex-col md:flex-row gap-6">
                                                        <div className="relative w-full md:w-48 h-48 md:h-32 flex-shrink-0">
                                                            <Image
                                                                src={course.image}
                                                                alt={course.title}
                                                                fill
                                                                className="object-cover rounded-lg"
                                                            />
                                                        </div>
                                                        <div className="flex-grow">
                                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                                {course.title}
                                                            </h3>
                                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                                                                <div className="flex items-center gap-1">
                                                                    <BookOpen className="w-4 h-4" />
                                                                    <span>{course.completedLessons}/{course.totalLessons} Lessons</span>
                                                                </div>
                                                                <div className="flex items-center gap-1">
                                                                    <Clock className="w-4 h-4" />
                                                                    <span>{course.progress}% Complete</span>
                                                                </div>
                                                            </div>
                                                            <Progress value={course.progress} className="mb-4" />
                                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                                                <p className="text-sm text-gray-600">
                                                                    Next Lesson: {course.nextLesson}
                                                                </p>
                                                                <Link href={`/library/${course.id}`}>
                                                                <Button>
                                                                    Continue Learning
                                                                    <Play className="w-4 h-4 ml-2" />
                                                                </Button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ y: -10 }}
                                        className="bg-white rounded-lg border hover:shadow-lg transition-shadow border-gray-200 p-8 text-center"
                                    >
                                        <div className="w-16 h-16 bg-appPurple-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <BookOpen className="w-8 h-8 text-appPurple-900" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            No Courses Enrolled
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            Start your learning journey by enrolling in a course
                                        </p>
                                        <Button>
                                            Browse Courses
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </motion.div>
                                )}
                            </section>

                            {/* Course Suggestions */}
                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Recommended for You
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {suggestedCourses.map((course, index) => (
                                        <motion.div
                                            key={course.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="bg-white rounded-lg border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow duration-300"
                                        >
                                            <div className="relative h-48">
                                                <Image
                                                    src={course.image}
                                                    alt={course.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute top-4 right-4">
                                                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-white text-appPurple-900">
                                                        ${course.price}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                    {course.title}
                                                </h3>
                                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                        <span>{course.rating}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Users className="w-4 h-4" />
                                                        <span>{course.students} students</span>
                                                    </div>
                                                </div>
                                                {/* <Button className="w-full">Enroll Now</Button> */}
                                                <Link href={`/checkout`}><Button className="w-full">Enroll Now</Button></Link>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Advertisement Block */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative rounded-2xl overflow-hidden"
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600"
                                        alt="Advertisement"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-appPurple-900 to-appPurple-900/80" />
                                </div>
                                <div className="relative p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-4">
                                        Unlock Premium Features 🚀
                                    </h3>
                                    <p className="text-violet-100 mb-6 max-w-lg">
                                        Get unlimited access to all courses, premium support, and exclusive content
                                    </p>
                                    <Button variant="secondary">
                                        Upgrade Now
                                        <Sparkles className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </motion.section>
                        </div>

                        {/* Right Column - Achievements & Certifications */}
                        <div className="space-y-8">
                            {/* Achievements Section */}
                            <section>
                                <h2 className="text-xl font-semibold lg:text-gray-100 text-gray-900 mb-4">
                                    Achievements
                                </h2>
                                <div className="space-y-4">
                                    {achievements.map((achievement, index) => (
                                        <motion.div
                                            key={achievement.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className=""
                                        >
                                            <motion.div whileHover={{ y: -5 }} className="flex items-center gap-4 bg-white rounded-lg border border-gray-200 p-6">
                                                <div className={`p-3 rounded-full ${achievement.bgColor}`}>
                                                    <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">
                                                        {achievement.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600">
                                                        {achievement.description}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        {achievement.date}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Certifications Section */}
                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Certifications
                                </h2>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-lg border border-gray-200 shadow-sm p-6"
                                >
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-appPurple-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <GraduationCap className="w-8 h-8 text-appPurple-900" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Complete a course to earn your first certificate
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            Certificates help you showcase your skills to potential employers
                                        </p>
                                        {/* <Button variant="outline" onClick={() => setShowCertificate(true)}>
                                        View Sample Certificate
                                    </Button> */}
                                        <Button variant="secondary" onClick={() => setShowCertificate(true)}>
                                            View Sample Certificate
                                        </Button>
                                    </div>
                                </motion.div>
                            </section>

                            {/* Side Advertisement */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-br from-pink-500 to-violet-600 rounded-xl shadow-sm p-6 text-white"
                            >
                                <h3 className="text-lg font-semibold mb-2">
                                    Refer a Friend
                                </h3>
                                <p className="text-white/90 mb-4">
                                    Get 50% off on your next course when you refer a friend
                                </p>
                                <Button variant="secondary" className="w-full">
                                    Get Referral Link
                                </Button>
                            </motion.section>
                        </div>
                    </div>
                </div>

            </div>

            {/* Certificate Dialog */}
            <div>
                <Dialog open={showCertificate} onOpenChange={setShowCertificate}>
                    <DialogContent className="sm:max-w-3xl w-full h-[calc(100vh-8rem)] md:h-auto p-0 rounded-lg" hidden>
                        {/* <DialogContent className="sm:max-w-[500px] md:h-[90vh] h-[calc(100vh-3.5rem)] h-full w-full md:max-h-[70vh] md:max-w-[400px] px-0"> */}
                        <DialogTitle className="hidden"></DialogTitle>
                        {/* <div className="overflow-hidden rounded-tl absolute">
                            <div className="relative overflow-hidden top-0 left-0 w-32 h-32 z-10 bg-appBrown-800 rounded-full -translate-y-16 -translate-x-16"></div>
                        </div> */}
                        <Button
                            onClick={() => setShowCertificate(false)}
                            className="absolute top-3 right-3 p-2 md:hidden z-30"
                        >
                            <X className="w-6 h-6" />
                        </Button>
                        <ScrollArea className="h-full rounded-lg">
                            <div className="md:p-8 z-20">
                                <div className="border-8 border-double border-appPurple-900/20 p-8">
                                    <div className="text-center space-y-6">
                                        <div className="flex justify-center">
                                            <div className="w-24 h-24 bg-appPurple-900/10 rounded-full flex items-center justify-center">
                                                <Award className="w-12 h-12 text-appPurple-900" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-serif text-gray-900 mb-2">Certificate of Completion</h2>
                                            <p className="text-gray-600">This is to certify that</p>
                                            <p className="text-2xl font-semibold text-gray-900 mt-4">John Doe</p>
                                            <p className="text-gray-600 mt-2">has successfully completed the course</p>
                                            <p className="text-xl font-semibold text-appPurple-900 mt-4">Complete Web Development Bootcamp</p>
                                        </div>
                                        <div className="pt-8">
                                            <div className="flex gap-6 justify-around items-end max-w-md flex-wrap mx-auto">
                                                <div className="text-center flex flex-col justify-center items-center">
                                                    <Image
                                                        src="/assets/images/signatures/ankit.png"
                                                        alt="Signature"
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <div className="w-40 border-t-2 border-gray-300 pt-2">
                                                        <p className="text-sm font-medium text-gray-900">Ankit Kumar</p>
                                                        <p className="text-xs text-gray-600">Course Instructor</p>
                                                    </div>
                                                </div>
                                                <div className="text-center flex flex-col justify-center items-center">
                                                    <Image
                                                        src="/assets/images/signatures/ankit.png"
                                                        alt="Award"
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <div className="w-40 border-t-2 border-gray-300 pt-2">
                                                        <p className="text-sm font-medium text-gray-900">March 15, 2024</p>
                                                        <p className="text-xs text-gray-600">Date of Completion</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-6">
                                            <p className="text-sm text-gray-600">Certificate ID: WFW-2024-1234-ABCD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
            </div>
       </div>
    );
}