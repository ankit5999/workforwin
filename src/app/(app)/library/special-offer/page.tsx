"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Timer, CheckCircle2, Gift, Users, Sparkles, ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/library/CountdownTimer";
import { Card } from "@/components/ui/card";

export default function SpecialOfferPage() {
    return (
        <main className="relative z-20">
            {/* Background div */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-appDark-900" />

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* <section className="relative bg-violet-600 py-20 overflow-hidden"> */}
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-appPurple-900 text-white mb-6">
                            Limited Time Offer
                        </span>
                        <h1 className="text-3xl leading-[1.2] md:text-4xl font-medium text-white mb-6">
                            Spring Sale: 50% Off All Courses
                        </h1>
                        <p className="text-violet-100 text-lg max-w-2xl mx-auto mb-8">
                            Take advantage of our biggest discount of the year. Unlock premium courses at unbeatable prices.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/library">
                                <Button size="lg" className="bg-white text-appPurple-900 hover:bg-violet-50">
                                    Browse Courses
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Offer Details */}
            <section className="mb-20 md:-mt-20 -mt-10 relative">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Timer Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-lg bg-white border border-gray-200 px-8 py-12 text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 text-appPurple-900 mb-4">
                            <Timer className="w-6 h-6" />
                            <span className="font-semibold">Offer Ends In</span>
                        </div>
                        <CountdownTimer />
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 md:pt-20">
                        {/* Left Column - Why This Offer */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl leading-[1.2] font-medium text-gray-900 mb-4">
                                    Why This Special Offer?
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    We believe in making quality education accessible to everyone. This spring sale is our way of helping you invest in your future without breaking the bank.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {[
                                    {
                                        icon: Gift,
                                        title: "50% Off Everything",
                                        description: "All courses are available at half price during this special offer period."
                                    },
                                    {
                                        icon: Clock,
                                        title: "Lifetime Access",
                                        description: "Once enrolled, you'll have unlimited access to your courses forever."
                                    },
                                    {
                                        icon: Calendar,
                                        title: "Limited Time Only",
                                        description: "This offer is only available for a short time. Don't miss out!"
                                    }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex gap-4 p-6 rounded-lg border border-gray-200 hover:shadow transition-shadow"
                                    >
                                        <div className="p-3 rounded-lg bg-appPurple-900/10 text-appPurple-900 h-fit">
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column - How to Avail */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl leading-[1.2] font-medium text-gray-900 mb-4">
                                    How to Avail This Offer
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Taking advantage of this special offer is simple. Follow these steps to get started:
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    "Browse our course catalog and select your desired courses",
                                    "Add courses to your cart - discount is automatically applied",
                                    "Complete the checkout process",
                                    "Start learning immediately after payment"
                                ].map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-8 h-8 min-w-8 rounded-full bg-appPurple-900/10 text-appPurple-900/80 flex items-center justify-center font-semibold">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-600">{step}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Promotional Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-r from-violet-600 to-pink-500 rounded-2xl p-8 text-white"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <Sparkles className="w-8 h-8" />
                                    <h3 className="text-xl font-semibold">Special Bonus</h3>
                                </div>
                                <p className="mb-6">
                                    Enroll now and get access to exclusive webinars and workshops worth $199 - absolutely free!
                                </p>
                                <Link href="/library">
                                    <Button className="bg-white text-appPurple-900/80 hover:bg-violet-50">
                                        Start Learning Now
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl leading-[1.2] md:text-4xl font-medium text-gray-900">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600">
                            Have questions about our special offer? We're here to help!
                        </p>
                        <div></div>
                        <Link href="/faq">
                            <Button variant="outline">
                                View All FAQs
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}











// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { Clock, Star, Users, BookOpen, ArrowRight, Timer, CheckCircle2 } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const offers = [
//     {
//         id: 1,
//         title: "Complete Web Development Bootcamp",
//         description: "Master web development with our comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, and more.",
//         image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
//         originalPrice: 149.99,
//         discountedPrice: 74.99,
//         discount: 50,
//         endDate: "2024-04-01",
//         category: "Development",
//         rating: 4.8,
//         students: "15.5k",
//         lessons: 156,
//         hours: 42,
//         instructor: {
//             name: "John Smith",
//             avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100",
//         },
//         features: [
//             "Lifetime Access",
//             "Certificate of Completion",
//             "15+ Downloadable Resources",
//             "Mobile and TV Access",
//             "Assignments & Projects",
//             "Expert Instructor Support",
//         ]
//     },
//     {
//         id: 2,
//         title: "UI/UX Design Masterclass Bundle",
//         description: "Learn professional UI/UX design from scratch. Master Figma, design principles, and create stunning user interfaces.",
//         image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=800&h=600&fit=crop",
//         originalPrice: 199.99,
//         discountedPrice: 79.99,
//         discount: 60,
//         endDate: "2024-04-15",
//         category: "Design",
//         rating: 4.9,
//         students: "12.3k",
//         lessons: 135,
//         hours: 38,
//         instructor: {
//             name: "Sarah Johnson",
//             avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
//         },
//         features: [
//             "Lifetime Access",
//             "Certificate of Completion",
//             "20+ Design Templates",
//             "Mobile and TV Access",
//             "Design Projects",
//             "1-on-1 Mentoring",
//         ]
//     },
//     {
//         id: 3,
//         title: "Data Science & Machine Learning",
//         description: "Comprehensive course covering data science fundamentals, machine learning algorithms, and practical applications.",
//         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
//         originalPrice: 179.99,
//         discountedPrice: 89.99,
//         discount: 50,
//         endDate: "2024-04-10",
//         category: "Data Science",
//         rating: 4.7,
//         students: "10.8k",
//         lessons: 182,
//         hours: 52,
//         instructor: {
//             name: "Michael Chen",
//             avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
//         },
//         features: [
//             "Lifetime Access",
//             "Certificate of Completion",
//             "25+ Practice Datasets",
//             "Mobile and TV Access",
//             "Real-world Projects",
//             "Community Support",
//         ]
//     }
// ];

// export default function SpecialOfferPage() {
//     const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

//     const calculateTimeLeft = (endDate: string) => {
//         const difference = +new Date(endDate) - +new Date();
//         let timeLeft = {
//             days: 0,
//             hours: 0,
//             minutes: 0,
//             seconds: 0
//         };

//         if (difference > 0) {
//             timeLeft = {
//                 days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//                 hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//                 minutes: Math.floor((difference / 1000 / 60) % 60),
//                 seconds: Math.floor((difference / 1000) % 60)
//             };
//         }

//         return timeLeft;
//     };

//     return (
//         <main className="min-h-screen bg-gray-50">
//             {/* Hero Section */}
//             <section className="relative bg-violet-600 py-20 overflow-hidden">
//                 <div className="absolute inset-0">
//                     <div className="absolute inset-0 bg-violet-600 opacity-90" />
//                     <Image
//                         src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600"
//                         alt="Special Offers"
//                         fill
//                         className="object-cover"
//                         priority
//                     />
//                 </div>

//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-pink-500 text-white mb-6">
//                             Limited Time Offer
//                         </span>
//                         <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                             Special Offers & Discounts
//                         </h1>
//                         <p className="text-violet-100 text-lg max-w-2xl mx-auto">
//                             Take advantage of our biggest discounts of the year. Unlock premium courses at unbeatable prices.
//                         </p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Offers Section */}
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid gap-8">
//                         {offers.map((offer, index) => {
//                             const timeLeft = calculateTimeLeft(offer.endDate);

//                             return (
//                                 <motion.div
//                                     key={offer.id}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                     className="bg-white rounded-2xl shadow-lg overflow-hidden"
//                                 >
//                                     <div className="grid md:grid-cols-2 gap-8">
//                                         {/* Left Column - Image */}
//                                         <div className="relative">
//                                             <div className="relative h-64 md:h-full">
//                                                 <Image
//                                                     src={offer.image}
//                                                     alt={offer.title}
//                                                     fill
//                                                     className="object-cover"
//                                                 />
//                                                 <div className="absolute top-4 left-4">
//                                                     <span className="px-3 py-1 rounded-full text-sm font-semibold bg-pink-500 text-white">
//                                                         {offer.discount}% OFF
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Right Column - Content */}
//                                         <div className="p-8">
//                                             <div className="flex items-center gap-2 mb-4">
//                                                 <span className="px-3 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-600">
//                                                     {offer.category}
//                                                 </span>
//                                                 <div className="flex items-center gap-1">
//                                                     <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                                                     <span className="text-sm text-gray-600">{offer.rating}</span>
//                                                 </div>
//                                             </div>

//                                             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                                                 {offer.title}
//                                             </h2>

//                                             <p className="text-gray-600 mb-6">
//                                                 {offer.description}
//                                             </p>

//                                             <div className="flex items-center gap-6 mb-6">
//                                                 <div className="flex items-center gap-2">
//                                                     <Users className="w-4 h-4 text-gray-400" />
//                                                     <span className="text-sm text-gray-600">{offer.students} students</span>
//                                                 </div>
//                                                 <div className="flex items-center gap-2">
//                                                     <BookOpen className="w-4 h-4 text-gray-400" />
//                                                     <span className="text-sm text-gray-600">{offer.lessons} lessons</span>
//                                                 </div>
//                                                 <div className="flex items-center gap-2">
//                                                     <Clock className="w-4 h-4 text-gray-400" />
//                                                     <span className="text-sm text-gray-600">{offer.hours} hours</span>
//                                                 </div>
//                                             </div>

//                                             <div className="flex items-center gap-4 mb-6">
//                                                 <div className="flex items-center gap-2">
//                                                     <Image
//                                                         src={offer.instructor.avatar}
//                                                         alt={offer.instructor.name}
//                                                         width={40}
//                                                         height={40}
//                                                         className="rounded-full"
//                                                     />
//                                                     <div>
//                                                         <p className="font-medium text-gray-900">{offer.instructor.name}</p>
//                                                         <p className="text-sm text-gray-600">Instructor</p>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <div className="space-y-4 mb-8">
//                                                 <div className="flex items-center justify-between">
//                                                     <div>
//                                                         <span className="text-3xl font-bold text-gray-900">
//                                                             ${offer.discountedPrice}
//                                                         </span>
//                                                         <span className="ml-2 text-lg text-gray-500 line-through">
//                                                             ${offer.originalPrice}
//                                                         </span>
//                                                     </div>
//                                                     <div className="flex items-center gap-2 text-gray-600">
//                                                         <Timer className="w-4 h-4" />
//                                                         <span className="text-sm">
//                                                             {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m left
//                                                         </span>
//                                                     </div>
//                                                 </div>

//                                                 <div className="grid grid-cols-2 gap-4">
//                                                     {offer.features.slice(0, 4).map((feature, index) => (
//                                                         <div key={index} className="flex items-center gap-2">
//                                                             <CheckCircle2 className="w-4 h-4 text-green-500" />
//                                                             <span className="text-sm text-gray-600">{feature}</span>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>

//                                             <div className="flex gap-4">
//                                                 <Button
//                                                     className="flex-1"
//                                                     onClick={() => setSelectedOffer(offer.id)}
//                                                 >
//                                                     Enroll Now
//                                                     <ArrowRight className="w-4 h-4 ml-2" />
//                                                 </Button>
//                                                 <Link
//                                                     href={`/library/${offer.id}`}
//                                                     className="px-6 py-3 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
//                                                 >
//                                                     Learn More
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* FAQ Section */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5 }}
//                         className="space-y-6"
//                     >
//                         <h2 className="text-3xl font-bold text-gray-900">
//                             Frequently Asked Questions
//                         </h2>
//                         <p className="text-gray-600">
//                             Have questions about our special offers? We're here to help!
//                         </p>
//                         <Button variant="outline" onClick={() => window.location.href = '/faq'}>
//                             View All FAQs
//                         </Button>
//                     </motion.div>
//                 </div>
//             </section>
//         </main>
//     );
// }