"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Smartphone, Cpu, Gamepad2, Watch, Headphones, ArrowRight, Laptop, Speaker, Camera, Keyboard } from "lucide-react";
import Link from "next/link";

const categories = [
    { name: "Phones", icon: <Smartphone />, color: "from-[#3B82F6] to-[#1D4ED8]", count: "120+ Products" },
    { name: "Laptops", icon: <Laptop />, color: "from-[#A855F7] to-[#7E22CE]", count: "80+ Products" },
    { name: "Gaming", icon: <Gamepad2 />, color: "from-[#F59E0B] to-[#D97706]", count: "150+ Products" },
    { name: "Wearables", icon: <Watch />, color: "from-[#10B981] to-[#047857]", count: "60+ Products" },
    { name: "Audio", icon: <Headphones />, color: "from-[#EC4899] to-[#BE185D]", count: "90+ Products" },
    { name: "Cameras", icon: <Camera />, color: "from-[#6366F1] to-[#4338CA]", count: "40+ Products" },
    { name: "Accessories", icon: <Keyboard />, color: "from-[#F43F5E] to-[#BE123C]", count: "200+ Products" },
    { name: "Smart Home", icon: <Speaker />, color: "from-[#06B6D4] to-[#0891B2]", count: "70+ Products" },
];

export default function CategoriesPage() {
    return (
        <div className="min-h-screen bg-[#0B0F19] text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-6 lg:px-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6">
                        Shop by <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7]">Category</span>
                    </h1>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">
                        Explore our vast ecosystem of cutting-edge technology, organized to help you find exactly what you need.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[32px] overflow-hidden cursor-pointer"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                            <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                {cat.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                            <p className="text-white/40 mb-6">{cat.count}</p>

                            <Link href={`/shop?category=${cat.name.toLowerCase()}`} className="flex items-center gap-2 text-[#3B82F6] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                Explore <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
