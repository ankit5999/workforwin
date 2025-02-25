import ImageColumn from "@/components/auth/banner/ImageColumn";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auth",
    description: "Elevate your career with Workforwin! Master coding interviews using essential algorithms and data structures. Tailored for professionals and emerging talents, our platform offers top-tier tutorials and real-world scenarios.",
    generator: 'workforwin.com',
    applicationName: 'Workforwin',
    referrer: 'origin-when-cross-origin',
    keywords: ['Workforwin', 'Computer Science', 'JavaScript', 'Ankit', 'Founder of Workforwin', 'Workforwin ceo', 'ankit5999', 'python', 'data structure', 'algorithms', 'gate cse', 'computer science', 'iit', 'elearning', 'jobs', 'linkedin', 'google'],
    authors: [{ name: 'Ankit Kumar', url: 'https://workforwin.com' }],
    creator: 'Ankit Kumar',
    publisher: 'Ankit Kumar',
    metadataBase: new URL('https://workforwin.com/signin'),
    manifest: "/manifest.json",
    icons: {
        icon: '/icon.svg',
    },
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US'
        },
    },
    openGraph: {
        title: "Workforwin | Let's Do The Engineering",
        description: "Elevate your career with Workforwin! Master coding interviews using essential algorithms and data structures. Tailored for professionals and emerging talents, our platform offers top-tier tutorials and real-world scenarios.",
        url: "https://workforwin.com/signin",
        type: "website",
        images: [
            {
                url: "https://ankit.workforwin.com/assets/images/social/home_banner.png",
                width: 1200,
                height: 630,
                alt: "Workforwin | Let's Do The Engineering"
            }
        ]
    }

};

// ✅ Export viewport separately
export const viewport = {
    themeColor: "#fff",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen grid lg:grid-cols-2 scrollbar-hide">
            {/* Left Column - Sign In Form */}
            {children}

            {/* Right Column - Image */}
            <ImageColumn />
        </div>
    );
}
