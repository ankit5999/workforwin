"use client";

import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";
import Brands from "@/components/home/Brands";
import Categories from "@/components/home/Categories";
import Events from "@/components/home/Events";
import Hero from "@/components/home/Hero";
import InstructorsSection from "@/components/home/InstructorsSection";
import PopularCourses from "@/components/home/PopularCourses";
import Testimonials from "@/components/home/Testimonials";
import VideoSection from "@/components/home/VideoSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/layout/footer";
import Social from "@/components/layout/social";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js", { scope: "/" })
        .then((reg) => console.log("✅ Service Worker registered!", reg))
        .catch((error) => console.log("❌ Service Worker registration failed:", error));
    }
  }, []);
  return (
    <main className="">

      {/* Hero Section */}
      <Hero />

      {/* Brands Section */}
      <Brands />

      {/* Social Links */}
      {/* <Social /> */}

      {/* Categories Section */}
      <Categories />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Popular course Section */}
      <PopularCourses />

      {/* Events Section */}
      <Events />

      {/* Blog Section */}
      <BlogSection />

      {/* About section */}
      <AboutSection />

      {/* Instruction Section */}
      <InstructorsSection />

      {/* Video Section */}
      <VideoSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}