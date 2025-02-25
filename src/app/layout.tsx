import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/scroll.css";
import "@/styles/shadow.css";
import "@/styles/animation.css";
import { GoogleFonts } from "@/fonts";
import { Toaster } from "@/components/ui/toaster";
import { NavContextProvider } from "@/context/navContext";
import Cursor from "@/components/layout/cursor";
import ChatBot from "@/components/bot/chat";
import BotWarning from "@/components/bot/warning";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { InstallPrompt } from "@/components/ui/InstallPrompt";

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
  // viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Workforwin',
  },
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

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${GoogleFonts.inter.className} antialiased min-h-screen bg-white`} style={{ scrollBehavior: 'smooth' }}
        id="gray_scroll"
      >
        <NavContextProvider>
          <BotWarning />
          <Cursor />
          {/* <Header /> */}
          {children}
          <Toaster />
          <ChatBot />
          <InstallPrompt />
          {/* <PWANotification /> */}
          <Analytics />
          <SpeedInsights />
        </NavContextProvider>
      </body>
    </html>
  );
}
