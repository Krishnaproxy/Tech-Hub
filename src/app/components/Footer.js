"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Shop",
            links: [
                { name: "All Products", href: "/shop" },
                { name: "Laptops", href: "/shop?category=laptops" },
                { name: "Smartphones", href: "/shop?category=phones" },
                { name: "Gaming Gear", href: "/shop?category=gaming" },
            ],
        },
        {
            title: "Explore",
            links: [
                { name: "Categories", href: "/categories" },
                { name: "Hot Deals", href: "/deals" },
                { name: "New Arrivals", href: "/shop" },
                { name: "Staff Picks", href: "/shop" },
            ],
        },
        {
            title: "Support",
            links: [
                { name: "Help Center", href: "/support" },
                { name: "Shipping", href: "/support" },
                { name: "Returns", href: "/support" },
                { name: "Contact", href: "/support" },
            ],
        },
    ];

    return (
        <footer className="bg-[#0B0F19] border-t border-white/5 pt-20 pb-10 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#3B82F6]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-black tracking-tighter text-white">
                                Tech<span className="text-[#3B82F6]">Hub</span>
                            </span>
                        </Link>
                        <p className="text-white/50 text-base leading-relaxed max-w-sm mb-8">
                            Pioneering the future of technology with curated premium gadgets and hardware for the next generation of innovators.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#3B82F6] hover:border-[#3B82F6]/50 transition-colors"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-white font-bold text-lg mb-6">{column.title}</h3>
                            <ul className="space-y-4">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/40 hover:text-white transition-colors flex items-center group text-sm"
                                        >
                                            {link.name}
                                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-y border-white/5 mb-10">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6]">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-white/40 uppercase tracking-wider font-bold">Location</p>
                            <p className="text-white font-medium group-hover:text-[#3B82F6] transition-colors cursor-default">San Francisco, CA</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-[#A855F7]/10 flex items-center justify-center text-[#A855F7]">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-white/40 uppercase tracking-wider font-bold">Email Us</p>
                            <p className="text-white font-medium group-hover:text-[#A855F7] transition-colors cursor-default">hello@techbolt.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-500">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-white/40 uppercase tracking-wider font-bold">Call Us</p>
                            <p className="text-white font-medium group-hover:text-yellow-500 transition-colors cursor-default">+1 (555) 000-0000</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-sm">
                        © {currentYear} WebNova. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-white/30 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-white/30 hover:text-white text-sm transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-white/30 hover:text-white text-sm transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
