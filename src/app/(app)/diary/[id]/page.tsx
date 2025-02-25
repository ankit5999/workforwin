// import BotWarning from "@/components/bot/warning";

// export default function CaseStudyDetails() {
//   return (
//     <main className="min-h-screen bg-white max-w-7xl mx-auto px-4">
//       <BotWarning visibility={true} buttons={true} title="This page is protected. Please contact the owner." />
//     </main>
//   );
// }





"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MessageCircle, Share2, Bookmark, ThumbsUp, Facebook, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

// This would typically come from an API
const post = {
  id: 1,
  title: "The Future of Online Learning: AI-Powered Education",
  content: `
    <p>The landscape of online education is rapidly evolving, with artificial intelligence playing an increasingly central role in how we learn and teach. This transformation is not just about automating administrative tasks; it's about creating truly personalized learning experiences that adapt to each student's needs, pace, and learning style.</p>

    <h2 className="text-2xl leading-[1.2] font-medium">The Rise of AI in Education</h2>
    <p>Artificial Intelligence is revolutionizing education in several key ways:</p>
    <ul>
      <li>Personalized Learning Paths</li>
      <li>Intelligent Tutoring Systems</li>
      <li>Automated Assessment</li>
      <li>Predictive Analytics</li>
    </ul>

    <h2 className="text-2xl leading-[1.2] font-medium">Benefits of AI-Powered Learning</h2>
    <p>The integration of AI in education offers numerous advantages:</p>
    <ol>
      <li>Adaptive Learning: Content that adjusts to student performance</li>
      <li>Immediate Feedback: Real-time assessment and correction</li>
      <li>24/7 Support: Always-available learning assistance</li>
      <li>Data-Driven Insights: Better understanding of student progress</li>
    </ol>

    <h2 className="text-2xl leading-[1.2] font-medium">Challenges and Considerations</h2>
    <p>While AI presents exciting opportunities, there are important considerations:</p>
    <ul>
      <li>Data Privacy and Security</li>
      <li>Ethical Use of AI</li>
      <li>Teacher Training and Adaptation</li>
      <li>Digital Divide and Access</li>
    </ul>

    <h2 className="text-2xl leading-[1.2] font-medium">The Future Landscape</h2>
    <p>Looking ahead, we can expect to see:</p>
    <ul>
      <li>More sophisticated AI tutoring systems</li>
      <li>Enhanced virtual and augmented reality learning experiences</li>
      <li>Better integration of AI with traditional teaching methods</li>
      <li>Improved accessibility and inclusivity in education</li>
    </ul>

    <p>As we move forward, the key will be finding the right balance between AI-powered tools and human instruction, ensuring that technology enhances rather than replaces the crucial human elements of education.</p>
  `,
  category: "education",
  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=600&fit=crop",
  author: {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    bio: "Education Technology Specialist with over 10 years of experience in implementing innovative learning solutions.",
    role: "Senior Education Consultant"
  },
  date: "March 15, 2024",
  readTime: "5 min read",
  comments: 12,
  likes: 156,
  tags: ["Education", "Technology", "AI", "E-Learning", "Future"],
  relatedPosts: [
    {
      id: 2,
      title: "10 Essential Web Development Tools for 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      category: "development",
      date: "March 14, 2024"
    },
    {
      id: 3,
      title: "Mastering UI/UX Design Principles",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      category: "design",
      date: "March 13, 2024"
    },
    {
      id: 4,
      title: "Getting Started with Machine Learning",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      category: "technology",
      date: "March 12, 2024"
    }
  ]
};

export default function BlogPostPage() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <main className="bg-gray-50">
      {/* Background div */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-appDark-900" />

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 pt-24">
        <Link
          href="/diary"
          className="inline-flex items-center text-gray-200 hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to diary
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl leading-[1.2] md:text-4xl font-medium text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-200 flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>{post.comments} comments</span>
            </div>
            {/* <span>{post.readTime}</span> */}
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto md:px-4 py-12 relative">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg border border-gray-200 p-8"
            >
              {/* Author Info */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                    <p className="text-gray-600">{post.author.role}</p>
                    <p className="text-sm text-gray-500 mt-1 hidden md:block">{post.author.bio}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4 md:hidden">{post.author.bio}</p>
              </div>

              {/* Post Content */}
              {/* <div
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              /> */}

              <div
                className="prose prose-lg max-w-none mb-8 text-base"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/className=/g, "class=") }}
              />



              {/* Engagement Section */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 ${isLiked ? "text-pink-600" : "text-gray-600"
                      }`}
                  >
                    <ThumbsUp className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                    <span>{likes}</span>
                  </button>
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`flex items-center gap-2 ${isBookmarked ? "text-appPurple-900" : "text-gray-600"
                      }`}
                  >
                    <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
                    <span>Save</span>
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-blue-600 hover:text-blue-700">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="text-sky-500 hover:text-sky-600">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="text-blue-700 hover:text-blue-800">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-700">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-8">
              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Related Articles
                </h2>
                <div className="space-y-6">
                  {post.relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/diary/${relatedPost.id}`}
                      className="group block"
                    >
                      <div className="relative h-32 rounded-lg overflow-hidden mb-2">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-medium text-gray-900 group-hover:text-appPurple-900 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs">
                          {relatedPost.category}
                        </span>
                        <span>•</span>
                        <span>{relatedPost.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Tags Cloud */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Popular Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/diary?filter=${tag.toLowerCase()}`}
                      // href={`/diary/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm hover:bg-appPurple-900/10 hover:text-appPurple-900 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}