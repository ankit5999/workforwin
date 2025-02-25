"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Menu, ScanFace } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ClockTime from "../clock";
import HeaderData from "@/data/header.json";
import { smoothScroll } from "@/lib/utils";
// import { NavContext } from "@/context/navContext";

interface HeaderProps {
    className: {
        header: string,
        list: string,
    };
}
export default function Header({ className }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // const { activeNav, setActiveNav } = useContext(NavContext);
    const SectionData = HeaderData;

    // Check scroll position and update background color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-sm`}
        >
            <div className={`${scrolled ? 'bg-white/80' : `bg-appDark-900/80`}`}>
                {/* <div className={`max-w-7xl mx-auto px-4 ${scrolled ? 'bg-white/80' : `bg-appDark-900/80`}`}> */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-[72px]">
                        <div className="flex gap-10">
                            <div className="flex items-center w-10 h-10">
                                <Link aria-label="logo" href="/">
                                    <Image
                                        src={SectionData.logo}
                                        alt={SectionData.logo_alt}
                                        width={50}
                                        height={50}
                                        priority
                                        className="w-auto h-auto rounded-lg"
                                    />
                                </Link>
                            </div>

                            <nav
                                className="hidden lg:flex items-center gap-12">
                                {SectionData.navLinks.map(({ href, label, ref }, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        key={index}>
                                        <Link href={href} className={`${scrolled ? 'hover:text-appPurple-900' : `text-gray-300 transition-colors hover:text-purple-500`}`}>
                                            {label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <div className={`text-[13px] ${scrolled ? 'text-gray-900' : `text-gray-300 transition-colors`}`}>{SectionData.address}</div>
                                <div className={`text-[13px] font-bold ${scrolled ? 'text-gray-900' : `text-gray-300 transition-colors`}`}><ClockTime /></div>
                            </div>

                            <Link href={SectionData.calander_link} target="blank" className="hidden md:block">
                                <Button className=" hidden md:flex justify-between items-center gap-2 bg-gray-100 group text-gray-900 hover:bg-gray-200 transition-colors text-sm"><Calendar className="w-4 h-4" />{SectionData.calander_btn}</Button>
                            </Link>

                            <Link href={SectionData.signin_link} target="blank">
                                <Button className="hidden lg:block p-2" aria-label="Account">
                                    <ScanFace className="w-6 h-6" />
                                </Button>
                            </Link>

                            {/* Mobile menu button */}
                            <Button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 -ml-6 lg:hidden"
                                aria-label="Toggle"
                            >
                                <Menu className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`lg:hidden p-4  ${scrolled ? 'bg-white/80' : `bg-appDark-900/80 text-gray-100`}`}
                >
                    <nav className="flex flex-col space-y-4">
                        {SectionData.navLinks.map(({ href, label }, index) => (
                            <Link key={index} href={href} className="hover:text-purple-500 transition-colors">
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link href={SectionData.calander_link}>
                            <Button className="w-full gap-4" aria-label="Card">
                                <Calendar className="w-4 h-4" />
                                {SectionData.calander_btn}
                            </Button>
                        </Link>
                        <Link href={SectionData.signin_link}>
                            <Button className="w-full gap-4 bg-gray-100 text-gray-900 hover:bg-gray-200">
                                <ScanFace className="w-4 h-4" />
                                {SectionData.business_card_btn}
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}