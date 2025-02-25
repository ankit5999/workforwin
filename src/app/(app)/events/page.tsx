"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight, Calendar as CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// This would typically come from your API/database
const events = {
    ongoing: [
        {
            id: 1,
            title: "Web Development Summit 2024",
            date: "March 15-17, 2024",
            time: "9:00 AM - 6:00 PM",
            location: "Tech Convention Center, New York",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
            category: "Technology",
            attendees: 250,
            description: "Join us for three days of cutting-edge web development talks and workshops.",
            status: "ongoing"
        }
    ],
    upcoming: [
        {
            id: 2,
            title: "Digital Marketing Conference",
            date: "April 5-6, 2024",
            time: "10:00 AM - 5:00 PM",
            location: "Marketing Hub, San Francisco",
            image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=400&fit=crop",
            category: "Marketing",
            attendees: 150,
            description: "Learn the latest digital marketing strategies from industry experts.",
            status: "upcoming"
        },
        {
            id: 3,
            title: "UX Design Workshop",
            date: "April 20, 2024",
            time: "9:00 AM - 4:00 PM",
            location: "Design Studio, London",
            image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=400&fit=crop",
            category: "Design",
            attendees: 50,
            description: "Hands-on workshop focusing on user experience design principles.",
            status: "upcoming"
        }
    ],
    past: [
        {
            id: 4,
            title: "AI & Machine Learning Summit",
            date: "February 28, 2024",
            time: "9:00 AM - 6:00 PM",
            location: "AI Center, Boston",
            image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&h=400&fit=crop",
            category: "Technology",
            attendees: 300,
            description: "Exploring the future of AI and machine learning technologies.",
            status: "past"
        },
        {
            id: 5,
            title: "Mobile App Development Workshop",
            date: "February 15, 2024",
            time: "10:00 AM - 4:00 PM",
            location: "Tech Hub, Seattle",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
            category: "Technology",
            attendees: 100,
            description: "Learn to build modern mobile applications.",
            status: "past"
        },
        {
            id: 6,
            title: "Startup Networking Event",
            date: "February 1, 2024",
            time: "6:00 PM - 9:00 PM",
            location: "Innovation Center, Austin",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop",
            category: "Business",
            attendees: 200,
            description: "Connect with fellow entrepreneurs and investors.",
            status: "past"
        }
    ]
};

interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    image: string;
    category: string;
    attendees: number;
    description: string;
    status: string;
}

export default function EventsPage() {
    const renderEventCard = (event: Event) => (
        <motion.div whileHover={{ y: -10 }} className="h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-transform duration-300 flex flex-col h-full"
            >
                {/* Image Section (Fixed Height) */}
                <div className="relative h-48 flex-shrink-0">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-white text-violet-600">
                            {event.category}
                        </span>
                    </div>
                    {event.status === "ongoing" && (
                        <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500 text-white animate-pulse">
                                Live Now
                            </span>
                        </div>
                    )}
                </div>

                {/* Content Section (Fills Remaining Space) */}
                <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {event.title}
                    </h3>

                    <div className="space-y-3 mb-4 flex-1">
                        <div className="flex items-center text-gray-600">
                            <CalendarIcon className="w-5 h-5 mr-2" />
                            <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Clock className="w-5 h-5 mr-2" />
                            <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <MapPin className="w-5 h-5 mr-2" />
                            <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Users className="w-5 h-5 mr-2" />
                            <span>{event.attendees} Attendees</span>
                        </div>
                    </div>

                    {/* Button Section (Fixed at Bottom) */}
                    <Link
                        href={`/events/${event.id}`}
                        className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium mt-auto"
                    >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </motion.div>
        </motion.div>

    );

    const renderNoEvents = () => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl border border-gray-200 p-8 text-center"
        >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Events Found
            </h3>
            <p className="text-gray-600">
                There are no events scheduled at this time. Please check back later.
            </p>
        </motion.div>
    );

    return (
        <main className="relative bg-gray-50 py-28 md:py-32">
            {/* Background div */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-appDark-900" />

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl leading-[1.2] md:text-4xl font-medium text-white mb-4"
                    >
                        Events & Meetups
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-200 max-w-2xl mx-auto"
                    >
                        Join our upcoming events, workshops, and conferences to learn and connect with fellow professionals.
                    </motion.p>
                </div>

                {/* Ongoing Events */}
                <section className="mb-16">
                    <h2 className="text-2xl leading-[1.2] font-medium text-gray-100 mb-8">Ongoing Events</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.ongoing.length > 0 ? events.ongoing.map(((event) => <div key={event.id}>{renderEventCard(event)}</div>)) : renderNoEvents()}
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="mb-16">
                    <h2 className="text-2xl leading-[1.2] font-medium text-gray-900 mb-8">Upcoming Events</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.upcoming.length > 0 ? events.upcoming.map(((event) => <div key={event.id}>{renderEventCard(event)}</div>)) : renderNoEvents()}
                    </div>
                </section>

                {/* Past Events */}
                <section>
                    <h2 className="text-2xl leading-[1.2] font-medium text-gray-900 mb-8">Past Events</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.past.length > 0 ? events.past.map(((event) => <div key={event.id}>{renderEventCard(event)}</div>)) : renderNoEvents()}
                    </div>
                </section>
            </div>
        </main>
    );
}