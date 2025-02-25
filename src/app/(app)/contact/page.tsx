"use client";

import Faq from "@/components/layout/faq";
import ContactForm from "@/forms/ContactForm";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const address = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 (9876) 543210",
    href: "tel:+919876543210"
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@workforwin.com",
    href: "mailto:contact@workforwin.com"
  },
  {
    icon: MapPin,
    title: "Office",
    content: "N1C 4AG, London (United Kingdom)",
    href: "#"
  }
]

export default function Contact() {

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
            Contact Us
          </motion.span> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl leading-[1.2] md:text-4xl font-medium text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-200 text-lg max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>

        {/* Contact Information & Form Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Contact Information
                  </h2>
                  <p className="text-gray-400 max-w-md">
                    Fill up the form and our team will get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {address.map((item, index) => (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200/80 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="p-3 rounded-full bg-violet-100 text-appPurple-900">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg md:shadow-lg md:p-8 p-2"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Faq />
    </div>
  );
};