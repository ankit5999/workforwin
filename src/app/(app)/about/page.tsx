"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, GraduationCap, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Users, value: "50k+", label: "Active Students" },
  { icon: GraduationCap, value: "300+", label: "Expert Instructors" },
  { icon: Globe, value: "120+", label: "Countries Reached" },
  { icon: Award, value: "15+", label: "Years Experience" },
];

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from course content to student support.",
  },
  {
    title: "Innovation",
    description: "Continuously innovating our platform and teaching methods to provide the best learning experience.",
  },
  {
    title: "Accessibility",
    description: "Making quality education accessible to everyone, everywhere, at any time.",
  },
  {
    title: "Community",
    description: "Building a supportive community of learners and educators from around the world.",
  },
];

const achievements = [
  "Named Best Online Learning Platform 2024",
  "Featured in Forbes Education Innovation",
  "Over 1M+ Student Success Stories",
  "98% Student Satisfaction Rate",
  "Industry-Leading Course Completion Rate",
  "Award-Winning Support Team",
];

export default function About() {

  return (
    <div className="relative z-20">
      {/* Background div */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-appDark-900" />
      {/* Bottom half - white background */}
      {/* <div className="absolute  bottom-0 left-0 right-0 h-[37%] bg-white" /> */}


      <div className="max-w-7xl relative mx-auto px-4 pt-24 md:pt-32">
        <div className="text-center">
          {/* <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-appPurple-900 text-white mb-6">
            About Us
          </motion.span> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl leading-[1.2] md:text-4xl font-medium text-white mb-6"
          >
            Transforming Lives Through Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-200 text-lg max-w-2xl mx-auto"
          >
            We're on a mission to make quality education accessible to everyone, everywhere.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        className="py-16 bg-gray-50 mt-20 rounded">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                // whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-appPurple-900/10 text-appPurple-900 mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      
      <section className="">

        {/* Story Section */}
        <section className="py-20 max-w-7xl relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-appPurple-900 text-white">
                Our Story
              </span>
              <h2 className="text-3xl leading-[1.2] md:text-4xl font-medium">
                Building the Future of Education Since 2010
              </h2>
              <p className="text-lg text-gray-600">
                What started as a small team of passionate educators has grown into a global platform
                transforming how people learn. We believe in the power of education to change lives
                and create opportunities.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-appPurple-900 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                  alt="Our Team"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl relative mx-auto px-4">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-appPurple-900 text-white mb-4"
              >
                Our Values
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl leading-[1.2] md:text-4xl font-medium"
              >
                What Drives Us Forward
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-appPurple-900 px-4">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl leading-[1.2] md:text-4xl font-medium text-white mb-6"
            >
              Ready to Start Your Learning Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-violet-50 text-lg mb-8 max-w-2xl mx-auto"
            >
              Join millions of learners from around the world who are already transforming their lives with our courses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/library"
                className="inline-flex items-center px-8 py-3 rounded-full bg-white text-violet-600 font-semibold hover:bg-violet-50 transition-colors"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </section>
    </div>
  );
};