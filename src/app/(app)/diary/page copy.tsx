"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, BookOpen, Search, Filter, ChevronDown, Mail, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All Posts" },
  { id: "tutorials", name: "Tutorials", count: 25 },
  { id: "education", name: "Education", count: 18 },
  { id: "technology", name: "Technology", count: 12 },
  { id: "development", name: "Development", count: 15 },
  { id: "design", name: "Design", count: 10 },
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

const blogPosts = [
  {
    id: 1,
    title: "The Future of Online Learning: AI-Powered Education",
    excerpt: "Discover how artificial intelligence is transforming the landscape of online education and creating personalized learning experiences.",
    category: "education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
    },
    date: "March 15, 2024",
    readTime: "5 min read",
    comments: 12
  },
  {
    id: 2,
    title: "10 Essential Web Development Tools for 2024",
    excerpt: "Stay ahead of the curve with these must-have development tools that will boost your productivity and improve your workflow.",
    category: "development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    date: "March 14, 2024",
    readTime: "8 min read",
    comments: 24
  },
  {
    id: 3,
    title: "Mastering UI/UX Design Principles",
    excerpt: "Learn the fundamental principles of user interface and user experience design that will help you create better digital products.",
    category: "design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
    author: {
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    },
    date: "March 13, 2024",
    readTime: "6 min read",
    comments: 18
  },
  {
    id: 4,
    title: "Getting Started with Machine Learning",
    excerpt: "A beginner's guide to understanding machine learning concepts and implementing your first ML model.",
    category: "technology",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100"
    },
    date: "March 12, 2024",
    readTime: "10 min read",
    comments: 15
  },
  {
    id: 5,
    title: "Building Responsive Websites with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive websites using the utility-first CSS framework, Tailwind CSS.",
    category: "tutorials",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    author: {
      name: "Lisa Anderson",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100"
    },
    date: "March 11, 2024",
    readTime: "7 min read",
    comments: 21
  }
];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setIsCategoriesOpen(window.innerWidth >= 1024);
  }, []);

  return (
    <div className="relative z-20">
      {/* Background div */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-appDark-900" />

      <div className="max-w-7xl relative mx-auto px-4 pt-24 md:pt-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl leading-[1.2] md:text-4xl font-medium text-white mb-6">
              Diary
            </h1>
            <p className="text-violet-100 text-lg max-w-2xl mx-auto">
              Stay up to date with the latest news, tutorials, and insights
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
                  <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                            ? "bg-appPurple-900 text-white"
                            : "text-gray-600 hover:bg-gray-200"
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

                  <div className="hidden lg:block bg-gray-50 rounded-lg p-6 overflow-hidden border border-gray-200">
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

            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6 z-30">
                {filteredPosts.map((post, index) => (
                  <motion.div key={post.id} whileHover={{ y: -10 }} className="h-full">
                    <motion.article
                      // key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      // whileInView={{ opacity: 1, y: 0}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <Link href={`/diary/${post.id}`}>
                        <div className="relative h-48">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white text-appPurple-900">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              width={40}
                              height={40}
                              className="rounded-full h-12 w-12"
                            />
                            <div>
                              <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                          <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-gray-600">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.comments} comments</span>
                            </div>
                            <span className="text-appPurple-900 font-medium inline-flex items-center gap-1 group">
                              Read More
                              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
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
                    We couldn't find any content matching your search. Let us know what you're looking for, and we'll work on bringing new Post to meet your needs.
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
          </div>
        </div>
      </div>
    </div>
  );
}