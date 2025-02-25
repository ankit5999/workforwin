"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, BookOpen, Search, Filter, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const categories = [
  { id: "all", name: "All Courses" },
  { id: "development", name: "Development", count: 150 },
  { id: "business", name: "Business", count: 130 },
  { id: "design", name: "Design", count: 120 },
  { id: "marketing", name: "Marketing", count: 110 },
  { id: "photography", name: "Photography", count: 80 },
  { id: "music", name: "Music", count: 70 },
  { id: "data-science", name: "Data Science", count: 90 },
];

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
    instructor: {
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100",
      rating: 4.9,
      students: "15.5k",
    },
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    price: 129.99,
    rating: 4.7,
    totalRatings: 1920,
    lessons: 98,
    hours: 28,
    level: "Intermediate",
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      rating: 4.8,
      students: "12.3k",
    },
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    category: "design",
    image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=800&h=600&fit=crop",
    price: 139.99,
    rating: 4.9,
    totalRatings: 3150,
    lessons: 135,
    hours: 38,
    level: "All Levels",
    instructor: {
      name: "Mike Wilson",
      avatar: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100",
      rating: 4.9,
      students: "18.2k",
    },
  },
  {
    id: 4,
    title: "Data Science with Python",
    category: "data-science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    price: 159.99,
    rating: 4.8,
    totalRatings: 2420,
    lessons: 182,
    hours: 52,
    level: "Advanced",
    instructor: {
      name: "Emily Chen",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100",
      rating: 4.8,
      students: "14.8k",
    },
  },
  {
    id: 5,
    title: "Business Analytics & Strategy",
    category: "business",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    price: 144.99,
    rating: 4.7,
    totalRatings: 1850,
    lessons: 124,
    hours: 35,
    level: "Intermediate",
    instructor: {
      name: "David Brown",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      rating: 4.7,
      students: "11.5k",
    },
  },
  {
    id: 6,
    title: "Professional Photography",
    category: "photography",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop",
    price: 119.99,
    rating: 4.8,
    totalRatings: 2150,
    lessons: 92,
    hours: 26,
    level: "Beginner",
    instructor: {
      name: "Lisa Anderson",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100",
      rating: 4.8,
      students: "13.7k",
    },
  },
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setIsCategoriesOpen(window.innerWidth >= 1024);
  }, []);

  return (
    <div className="relative z-20 bg-gray-50">
      {/* Background div */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-appDark-900" />
      {/* Bottom half - white background */}
      {/* <div className="absolute  bottom-0 left-0 right-0 h-[37%] bg-white" /> */}


      <div className="max-w-7xl relative mx-auto px-4 pt-24 md:pt-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl leading-[1.2] md:text-4xl font-medium text-white mb-6">
              Explore Our Library
            </h1>
            <p className="text-violet-100 text-lg max-w-2xl mx-auto">
              Discover a wide range of courses taught by expert instructors
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 relative">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="lg:hidden w-full mb-4 px-4 py-3 bg-white rounded-xl shadow-lg flex items-center justify-between"
            >
              <span className="font-semibold text-gray-900 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Categories
              </span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isCategoriesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden lg:sticky lg:top-20"
                >
                  <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                            ? "bg-appPurple-900 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                          <span className="flex items-center justify-between">
                            <span>{category.name}</span>
                            {category.count && (
                              <span className={`text-sm ${selectedCategory === category.id
                                ? "text-violet-200"
                                : "text-gray-400"
                                }`}>
                                {category.count}
                              </span>
                            )}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className=" bg-white rounded-lg p-6 overflow-hidden border border-gray-200">
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
                        alt="Special Offer"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-bold mb-1">Special Offer</h3>
                        <p className="text-sm">Get 50% off on all courses this week!</p>
                      </div>
                    </div>
                    <Link
                      href="/library/special-offer"
                      className="block w-full text-center px-4 py-2 bg-appPurple-900 text-white rounded-lg font-medium hover:bg-appPurple-900/90 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 lg:sticky lg:top-20 z-40"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-appPurple-900 focus:border-transparent transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </motion.div>

            {filteredCourses.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6 z-30">
                {filteredCourses.map((course, index) => (
                  <motion.div key={course.id} whileHover={{ y: -10 }} className="h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                    >
                      {/* Image Section */}
                      <div className="relative h-48">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full text-sm font-semibold bg-appPurple-900 text-white">
                            ${course.price}
                          </span>
                        </div>
                      </div>

                      {/* Content Section with `flex-grow` */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="px-2 py-1 rounded-md bg-violet-50 text-appPurple-900">
                              {course.level}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(course.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                                }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">
                            {course.rating} ({course.totalRatings.toLocaleString()})
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{course.lessons} Lessons</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.hours} Hours</span>
                          </div>
                        </div>

                        {/* Instructor & Button Section - Always at the Bottom */}
                        <div className="pt-4 border-t border-gray-200 mt-auto">
                          <div className="flex items-center justify-between flex-wrap gap-6">
                            <div className="flex items-center gap-2">
                              <Image
                                src={course.instructor.avatar}
                                alt={course.instructor.name}
                                width={32}
                                height={32}
                                className="rounded-full h-10 w-10"
                              />
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {course.instructor.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {course.instructor.students} students
                                </p>
                              </div>
                            </div>
                            
                            <Link
                              href={`/library/${course.id}`}
                            >
                              <Button>View Course</Button>
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
                className="bg-white rounded-xl shadow-lg p-8 text-center relative"
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
            )}

            <Card className="p-6 my-4 relative overflow-hidden md:hidden block">
              <p className="text-sm text-gray-500 mb-2 ">Advertisement</p>
              <p className="absolute top-2 right-0 bg-gray-100 px-2 py-1 text-sm rounded-l text-gray-500 font-medium">Workforwin</p>
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
                  alt="Special Offer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold mb-1">Special Offer</h3>
                  <p className="text-sm">Get 50% off on all courses this week!</p>
                </div>
              </div>
              <Link
                href="/library/special-offer"
                className="block w-full text-center px-4 py-2 bg-appPurple-900 text-white rounded-lg font-medium hover:bg-appPurple-900/90 transition-colors"
              >
                Learn More
              </Link>
            </Card>

     
          </div>
        </div>
      </div>
    </div>
  );
}