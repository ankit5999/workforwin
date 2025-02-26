import type { Metadata } from "next";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Workforwin | Let's Do The Engineering",
  description: "Elevate your career with Workforwin! Master coding interviews using essential algorithms and data structures. Tailored for professionals and emerging talents, our platform offers top-tier tutorials and real-world scenarios.",
  generator: 'workforwin.com',
  applicationName: 'Workforwin',
  referrer: 'origin-when-cross-origin',
  keywords: ['Workforwin', 'Computer Science', 'JavaScript', 'Ankit', 'Founder of Workforwin', 'Workforwin ceo', 'ankit5999', 'python', 'data structure', 'algorithms', 'gate cse', 'computer science', 'iit', 'elearning', 'jobs', 'linkedin', 'google'],
  authors: [{ name: 'Ankit Kumar', url: 'https://workforwin.com' }],
  creator: 'Ankit Kumar',
  publisher: 'Ankit Kumar',
  metadataBase: new URL('https://workforwin.com'),
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
    url: "https://workforwin.com",
    type: "website",
    images: [
      {
        url: "https://workforwin.com/assets/images/social/home_banner.png", // Use an absolute URL
        width: 1200,
        height: 630,
        alt: "Workforwin | Let's Do The Engineering"
      }
    ]
  }

};

// ✅ Export viewport separately
export const viewport = {
  themeColor: "#0d1117",
};

const headerClass = {
  header: "bg-transparent",
  list: "text-gray-300 transition-colors"
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header className={headerClass} />
      {children}
      <Toaster />
      <Footer />
    </>
  );
}
