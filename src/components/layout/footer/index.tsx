"use client";

import Newsletter from "@/components/newsletter";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Youtube, Dribbble, LocateIcon, Map } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    const currentYear = new Date().getFullYear();

    interface FooterLink {
        name: string;
        href: string;
        icon?: any;
    }

    const footerLinks: { title: string; links: FooterLink[] }[] = [
        {
            title: "Explore",
            links: [
                { name: "Careers", href: "/careers" },
                { name: "Open Source", href: "https://opensource.workforwin.com/" },
                { name: "Versions", href: "/versions" },
            ],
        },
        {
            title: "Social",
            links: [
                { name: "Youtube", href: "https://youtube.com/workforwin", icon: Youtube },
                { name: "LinkedIn", href: "https://linkedin.com/company/workforwin", icon: Linkedin },
                { name: "Portfolio", href: "https://ankit.workforwin.com", icon: Dribbble },
            ],
        },
    ];

    const address = [
        { name: "contact@workforwin.com", href: "mailto:contact@workforwin.com", icon: Mail },
        { name: "Gurugram, HR (IN)", href: "https://map.google.com/workforwin", icon: Map },
        { name: "N1C 4AG, London (UK)", href: "https://map.google.com/workforwin", icon: Map },
    ]

    return (
        <footer className="bg-appDark-900 relative text-white overflow-hidden z-10"> 
            <Newsletter />
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3}}
                // transition={{ duration: 0.3 }}
                className="max-w-7xl relative mx-auto px-4 pb-12 md:pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-2xl leading-[1.2] font-medium"
                        >
                            Workforwin
                        </motion.h3>
                        <p className="text-gray-400 max-w-xs">
                            Crafting learning experiences with passion and precision. Learn, design, build, and innovate at your peace.
                        </p>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h4 className="text-xl leading-[1.2]">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((items,index) => (
                                    <li key={items.name}>
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                            // whileHover={{ x: 5 }}
                                            className="group"
                                        >
                                            <motion.a
                                                whileHover={{ x: 5 }}
                                                href={items.href}
                                                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                            >
                                                {items.icon && <items.icon className="w-4 h-4" />}
                                                <span>{items.name}</span>
                                                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                            </motion.a>
                                        </motion.div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter Section */}
                    <div className="space-y-4">
                        <h4 className="text-xl leading-[1.2]">Contact</h4>
                        {/* <p className="text-gray-400">Let's meet in our world class offices worldwide</p> */}
                        {address.map((addr) => (
                            <motion.a 
                                key={addr.name}
                                href={addr.href}
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                {addr.icon && <addr.icon className="w-4 h-4" />}
                                <span>{addr.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Workforwin. All rights reserved.
                    </p>
                    <div className="flex gap-6 flex-wrap">
                        {/* <Link href="https://opensource.workforwin.com/" target="blank" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Open Source
                        </Link> */}
                        <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </motion.div>
            <div className="absolute top-0 right-0 w-96 h-96 transform -translate-y-1/2 translate-x-1/2">
                <div className="absolute inset-0 bg-violet-400 rounded-full opacity-20 blur-3xl" />
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 transform translate-y-1/2 -translate-x-1/2 -z-10">
                <div className="absolute inset-0 bg-violet-600 rounded-full opacity-20 blur-3xl" />
            </div>
        </footer>
    );
};