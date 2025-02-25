"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    Calendar,
    Clock,
    MapPin,
    Users,
    ArrowLeft,
    Calendar as CalendarIcon,
    ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EventForm from "@/forms/Event";

// This would typically come from your API/database
interface Session {
    time: string;
    title: string;
    speaker: string;
}

interface ScheduleDay {
    day: string;
    sessions: Session[];
}

interface Speaker {
    name: string;
    role: string;
    image: string;
}

interface EventType {
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
    price: number;
    speakers?: Speaker[];
    schedule?: ScheduleDay[];
}

interface RelatedEvent {
    id: number;
    title: string;
    date: string;
    image: string;
    category: string;
}

const events: Record<string, EventType> = {
    "1": {
        id: 1,
        title: "Web Development Summit 2024",
        date: "March 15-17, 2024",
        time: "9:00 AM - 6:00 PM",
        location: "Tech Convention Center, New York",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
        category: "Technology",
        attendees: 250,
        description: "Join us for three days of cutting-edge web development talks and workshops. Learn from industry experts, network with fellow developers, and stay up-to-date with the latest trends and technologies in web development.",
        status: "ongoing",
        price: 299,
        speakers: [
            {
                name: "John Smith",
                role: "Senior Developer at Google",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
            },
            {
                name: "Sarah Johnson",
                role: "Tech Lead at Microsoft",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
            }
        ],
        schedule: [
            {
                day: "Day 1",
                sessions: [
                    {
                        time: "9:00 AM - 10:30 AM",
                        title: "Opening Keynote",
                        speaker: "John Smith"
                    },
                    {
                        time: "11:00 AM - 12:30 PM",
                        title: "Modern Frontend Frameworks",
                        speaker: "Sarah Johnson"
                    }
                ]
            },
            {
                day: "Day 2",
                sessions: [
                    {
                        time: "9:00 AM - 10:30 AM",
                        title: "Backend Architecture",
                        speaker: "Mike Wilson"
                    },
                    {
                        time: "11:00 AM - 12:30 PM",
                        title: "Cloud Deployment",
                        speaker: "Emily Chen"
                    }
                ]
            }
        ]
    },
    "2": {
        id: 2,
        title: "Digital Marketing Conference",
        date: "April 5-6, 2024",
        time: "10:00 AM - 5:00 PM",
        location: "Marketing Hub, San Francisco",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=400&fit=crop",
        category: "Marketing",
        attendees: 150,
        description: "Learn the latest digital marketing strategies from industry experts. This two-day conference covers SEO, social media marketing, content strategy, and more.",
        status: "upcoming",
        price: 199,
        speakers: [
            {
                name: "Emily Brown",
                role: "Marketing Director at Facebook",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100"
            }
        ]
    }
};

const relatedEvents: RelatedEvent[] = [
    {
        id: 3,
        title: "UX Design Workshop",
        date: "April 20, 2024",
        image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=400&fit=crop",
        category: "Design"
    },
    {
        id: 4,
        title: "AI & Machine Learning Summit",
        date: "May 15, 2024",
        image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&h=400&fit=crop",
        category: "Technology"
    }
];

export default function EventDetailPage() {
    const params = useParams();

    // const eventId = typeof params.id === 'string' ? params.id : params.id[0];
    const eventId = typeof params.id === 'string' ? params.id : params.id?.[0] ?? "";

    const event = events[eventId];

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y:20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl border border-gray-200 p-8 text-center max-w-xl"
                >
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No Events Found
                    </h3>
                    <p className="text-gray-600 mb-4">
                        No events are scheduled at this time or the event has been moved to another place. Please check back later.
                    </p>

                    <Link
                        href="/events"
                        className="text-violet-600 hover:text-violet-700 font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 inline mr-2" />
                        Back to Events
                    </Link>
                </motion.div>
            </div>
        );
    }

    const isRegistrationOpen = event.status === "upcoming";

    return (
        <main className="relative bg-gray-50 py-28 md:py-32">
            {/* Background div */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-appDark-900" />

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Back Button */}
                <Link
                    href="/events"
                    className="inline-flex items-center text-white hover:text-appPurple-900 mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Events
                </Link>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Event Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative h-[400px] rounded-lg overflow-hidden"
                        >
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-4 py-2 rounded-full text-sm font-medium bg-white text-violet-600">
                                    {event.category}
                                </span>
                            </div>
                            {event.status === "ongoing" && (
                                <div className="absolute top-4 right-4">
                                    <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-500 text-white animate-pulse">
                                        Live Now
                                    </span>
                                </div>
                            )}
                        </motion.div>

                        {/* Event Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-lg border border-gray-200 p-8"
                        >
                            <h1 className="text-3xl leading-[1.2] md:text-4xl font-medium text-gray-900 mb-6">
                                {event.title}
                            </h1>

                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center text-gray-600">
                                    <CalendarIcon className="w-5 h-5 mr-3" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Clock className="w-5 h-5 mr-3" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <MapPin className="w-5 h-5 mr-3" />
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Users className="w-5 h-5 mr-3" />
                                    <span>{event.attendees} Attendees</span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p>{event.description}</p>
                            </div>
                        </motion.div>

                        {/* Speakers */}
                        {event.speakers && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-lg border border-gray-200 p-8"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Speakers
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {event.speakers.map((speaker, index) => (
                                        <div key={index + speaker.name} className="flex items-center gap-4">
                                            <Image
                                                src={speaker.image}
                                                alt={speaker.name}
                                                width={64}
                                                height={64}
                                                className="rounded-full h-12 w-12"
                                            />
                                            <div>
                                                <h3 className="font-semibold text-gray-900">
                                                    {speaker.name}
                                                </h3>
                                                <p className="text-gray-600">{speaker.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Schedule */}
                        {event.schedule && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white rounded-lg border border-gray-200 p-8"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Event Schedule
                                </h2>
                                <div className="space-y-8">
                                    {event.schedule.map((day, dayIndex) => (
                                        <div key={dayIndex + day.day}>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                                {day.day}
                                            </h3>
                                            <div className="space-y-4">
                                                {day.sessions.map((session, sessionIndex) => (
                                                    <div
                                                        key={session.title + sessionIndex}
                                                        className="flex flex-wrap items-start gap-4 p-4 rounded-lg bg-gray-50"
                                                    >
                                                        <div className="text-gray-600 whitespace-nowrap">
                                                            {session.time}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900">
                                                                {session.title}
                                                            </h4>
                                                            <p className="text-gray-600">
                                                                by {session.speaker}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Registration Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-lg border border-gray-200 p-6"
                        >
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {isRegistrationOpen ? "Register Now" : "Registration Closed"}
                                </h2>
                                <p className="text-gray-600">
                                    {isRegistrationOpen
                                        ? "Secure your spot at this amazing event"
                                        : event.status === "ongoing"
                                            ? "This event is currently in progress"
                                            : "This event has ended"}
                                </p>
                            </div>

                            {isRegistrationOpen ? (
                                <EventForm />
                            ) : (
                                <div className="text-center">
                                    <Button disabled className="w-full">
                                        Registration Closed
                                    </Button>
                                </div>
                            )}
                        </motion.div>

                        {/* Related Events */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-lg border border-gray-200 p-6"
                        >
                            <h2 className="text-xl font-bold text-gray-900 mb-6">
                                Related Events
                            </h2>
                            <div className="space-y-4">
                                {relatedEvents.map((relatedEvent, i) => (
                                    <Link
                                        key={relatedEvent.id + i}
                                        href={`/events/${relatedEvent.id}`}
                                        className="block group"
                                    >
                                        <div className="flex gap-4">
                                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={relatedEvent.image}
                                                    alt={relatedEvent.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-900 group-hover:text-violet-600 transition-colors">
                                                    {relatedEvent.title}
                                                </h3>
                                                <p className="text-sm text-gray-600">{relatedEvent.date}</p>
                                                <span className="text-sm text-violet-600">
                                                    {relatedEvent.category}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        {/* Advertisement */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-violet-600 to-pink-500 rounded-lg shadow-lg p-6 text-white"
                        >
                            <h3 className="text-xl font-bold mb-4">
                                Become a Speaker
                            </h3>
                            <p className="mb-6">
                                Share your knowledge and experience with our community. Apply to become a speaker at our upcoming events.
                            </p>
                            <a
                                href="/events/speaker-application"
                                className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-violet-600 font-medium hover:bg-violet-50 transition-colors"
                            >
                                Apply Now
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}