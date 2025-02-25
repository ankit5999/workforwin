"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Mail,
    Phone,
    User,
    Loader2,
    Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { eventFormSchema } from "@/lib/validations/event";

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


type FormData = z.infer<typeof eventFormSchema>;

export default function EventForm() {
    const params = useParams();
    const [isRegistering, setIsRegistering] = useState(false);
    const { toast } = useToast();

    // const eventId = typeof params.id === 'string' ? params.id : params.id[0];
    const eventId = typeof params.id === 'string' ? params.id : params.id?.[0] ?? "";

    const event = events[eventId];

    const form = useForm<FormData>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
        },
    });

    const onSubmit = async (values: FormData) => {
        setIsRegistering(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        toast({
            title: "Registration successful!",
            description: "Check your email for confirmation.",
        });
        setIsRegistering(false);
        form.reset();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <Input className="pl-10" placeholder="John Doe" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <Input className="pl-10" placeholder="john@example.com" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <Input className="pl-10" placeholder="+1 (555) 000-0000" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <Input className="pl-10" placeholder="Company Name" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="pt-4">
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isRegistering}
                    >
                        {isRegistering ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Registering...
                            </>
                        ) : (
                            <>Register Now • ${event.price}</>
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
}