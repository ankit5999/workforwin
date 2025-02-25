"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Brands() {
    const brands = [
        // { name: "Meta", logo: "/assets/images/brands/meta.svg" },
        { name: "Google", logo: "/assets/images/brands/google.svg" },
        { name: "Microsoft", logo: "/assets/images/brands/microsoft.svg" },
        // { name: "Amazon", logo: "/assets/images/brands/spotify.svg" },
        { name: "JpMorgan", logo: "/assets/images/brands/jpmorgan.svg" },
        // { name: "Airbnb", logo: "/assets/images/brands/ibm.svg" },
        { name: "Walmart", logo: "/assets/images/brands/walmart.svg" },
        { name: "Paypal", logo: "/assets/images/brands/paypal.svg" },
        { name: "Vmware", logo: "/assets/images/brands/vmware.svg" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-gray-600 text-lg">
                        Join a community of 11K+ candidates who&apos;ve landed jobs at top companies
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
                >
                    {brands.map((brand, index) => (
                        <motion.div
                            key={brand.name}
                            initial={{ opacity: 0, y: 20 }}
                            // animate={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="w-32 h-12 flex justify-between items-center overflow-hidden relative  transition-all duration-300"
                        >
                            <Image
                                src={brand.logo}
                                // src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080"
                                alt="Mentor"
                                width={120}
                                height={120}
                                className="object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};