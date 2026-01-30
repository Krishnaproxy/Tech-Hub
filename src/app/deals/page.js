"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Zap, Timer, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const deals = [
    {
        id: 101, // Unique IDs for deals
        name: "Nebula Pro Laptop",
        originalPrice: 1899,
        price: 1499,
        discount: "21% OFF",
        timeLeft: "05:22:11",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
        id: 102,
        name: "Lumina VR Headset",
        originalPrice: 899,
        price: 599,
        discount: "33% OFF",
        timeLeft: "12:45:00",
        img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac"
    },
    {
        id: 103,
        name: "Titan Smart Watch",
        originalPrice: 449,
        price: 299,
        discount: "33% OFF",
        timeLeft: "02:15:30",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    }
];

export default function DealsPage() {
    const { addToCart } = useCart();

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-6 lg:px-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-bold text-sm mb-4">
                        <Timer size={16} />
                        <span>Limited Time Offers</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6">
                        Exclusive <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] to-[#EF4444]">Deals</span>
                    </h1>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">
                        High-performance tech at unbeatable prices. Once they're gone, they're gone for good.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {deals.map((deal, index) => (
                        <motion.div
                            key={deal.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[40px] overflow-hidden group"
                        >
                            <Link href="/product-details" className="relative h-64 w-full block">
                                <Image src={deal.img} alt={deal.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-6 left-6 bg-[#EF4444] text-white px-4 py-1 rounded-full font-black text-sm">
                                    {deal.discount}
                                </div>
                                <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex items-center justify-between">
                                    <span className="text-xs font-bold text-white/60">Ends in:</span>
                                    <span className="font-mono font-bold text-yellow-500">{deal.timeLeft}</span>
                                </div>
                            </Link>

                            <div className="p-8">
                                <Link href="/product-details">
                                    <h3 className="text-2xl font-bold mb-4 hover:text-[#F59E0B] transition-colors">{deal.name}</h3>
                                </Link>
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-3xl font-black text-[#F59E0B]">${deal.price}</span>
                                    <span className="text-lg text-white/30 line-through">${deal.originalPrice}</span>
                                </div>

                                <button
                                    onClick={() => addToCart(deal)}
                                    className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    <Zap size={18} className="fill-current" />
                                    Grab the Deal
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Promo */}
                <section className="relative rounded-[50px] overflow-hidden bg-gradient-to-r from-[#F59E0B]/20 to-[#EF4444]/20 border border-white/10 p-12 md:p-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Want Early Access?</h2>
                    <p className="text-white/60 mb-10 max-w-xl mx-auto">Join our VIP list to get notified 24 hours before we drop new exclusive deals.</p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input type="email" placeholder="Your email" className="flex-1 px-6 py-4 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-[#F59E0B]" />
                        <button className="bg-[#F59E0B] text-black px-8 py-4 rounded-2xl font-black">Join VIP</button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
