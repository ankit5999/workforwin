"use client";
import {
    MapPin,
    Clock,
    DollarSign,
    Building2,
    Link as LinkIcon,
    ArrowLeft
} from "lucide-react";
import Link from "next/link";
import JobForm from "@/forms/JobForm";

// This would typically come from an API/database
const jobDetails = {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    salary: "$120,000 - $150,000",
    postedDate: "2024-03-15",
    description: `We are looking for a Senior Frontend Developer to join our team and help build the next generation of our product.

Key Responsibilities:
• Lead frontend development initiatives and mentor junior developers
• Architect and implement scalable frontend solutions
• Collaborate with designers and backend developers
• Write clean, maintainable, and efficient code
• Participate in code reviews and technical discussions

Requirements:
• 5+ years of experience in frontend development
• Expert knowledge of React.js and modern JavaScript
• Experience with TypeScript and state management libraries
• Strong understanding of web performance optimization
• Excellent problem-solving and communication skills

Benefits:
• Competitive salary and equity package
• Health, dental, and vision insurance
• Flexible work hours and remote work options
• Professional development budget
• Regular team events and activities`,
    company: {
        name: "TechCorp Inc.",
        logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100",
    },
};


export default function JobDetailPage() {

    return (
        <main className=" bg-gray-50 py-12">
            {/* Background div */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-appDark-900" />

            <div className="max-w-6xl mx-auto md:px-10 relative mt-12">
                {/* Back Button */}
                <Link
                    href="/careers"
                    className="inline-flex items-center text-gray-200 hover:text-appPurple-900 mb-8 px-4 md:px-0"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Jobs
                </Link>

                {/* Job Details Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                    <div className="py-8 px-4 md:px-8">
                        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <Building2 className="w-8 h-8 text-gray-600" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900 mb-1">
                                        {jobDetails.title}
                                    </h1>
                                    <p className="text-gray-600">{jobDetails.company.name}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                    {jobDetails.type}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-violet-100 rounded-lg">
                                    <MapPin className="w-5 h-5 text-violet-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Location</p>
                                    <p className="font-medium text-gray-900">{jobDetails.location}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-pink-100 rounded-lg">
                                    <Clock className="w-5 h-5 text-pink-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Experience</p>
                                    <p className="font-medium text-gray-900">{jobDetails.experience}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <DollarSign className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Salary Range</p>
                                    <p className="font-medium text-gray-900">{jobDetails.salary}</p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="whitespace-pre-line">
                                {jobDetails.description}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Application Form */}
                <JobForm />
            </div>
        </main>
    );
}