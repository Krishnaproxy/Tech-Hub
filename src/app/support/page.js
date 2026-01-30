"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, HelpCircle, ArrowRight, ShieldCheck, Truck, RefreshCw } from "lucide-react";

export default function SupportPage() {
    const faqs = [
        { q: "How do I track my order?", a: "Once your order ships, you'll receive a tracking number via email." },
        { q: "What is your return policy?", a: "We offer a 30-day money-back guarantee on all our products." },
        { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries worldwide." }
    ];

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-6 lg:px-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6">
                        We're Here to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7]">Help</span>
                    </h1>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">
                        Have questions about a product or need help with an order? Our expert team is ready to assist you.
                    </p>
                </motion.div>

                {/* Support Channels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        { icon: <MessageSquare className="text-[#3B82F6]" />, title: "Live Chat", desc: "Average response: 2 mins", action: "Start Chat" },
                        { icon: <Mail className="text-[#A855F7]" />, title: "Email Support", desc: "Average response: 4 hours", action: "Send Email" },
                        { icon: <Phone className="text-[#10B981]" />, title: "Phone", desc: "Mon-Fri, 9am - 6pm EST", action: "Call Us" }
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-10 rounded-[40px] text-center group hover:bg-white/10 transition-all"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 bg-white/5 rounded-2xl flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-white/50 mb-8">{item.desc}</p>
                            <button className="w-full py-4 border border-white/10 rounded-2xl font-bold group-hover:bg-white group-hover:text-black transition-all">
                                {item.action}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section */}
                <section className="mb-24">
                    <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                        <HelpCircle className="text-[#3B82F6]" />
                        Frequently Asked Questions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 p-8 rounded-3xl border border-white/10"
                            >
                                <h4 className="text-xl font-bold mb-4">{faq.q}</h4>
                                <p className="text-white/50">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Quick Links */}
                <div className="grid md:grid-cols-3 gap-8 p-12 bg-white/5 rounded-[40px] border border-white/10">
                    <div className="flex items-center gap-6">
                        <Truck className="w-10 h-10 text-[#3B82F6]" />
                        <div>
                            <h4 className="font-bold">Shipping Info</h4>
                            <p className="text-sm text-white/40">Real-time tracking details</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0 md:px-8">
                        <RefreshCw className="w-10 h-10 text-[#A855F7]" />
                        <div>
                            <h4 className="font-bold">Returns & Refunds</h4>
                            <p className="text-sm text-white/40">30-day hassle-free policy</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <ShieldCheck className="w-10 h-10 text-yellow-400" />
                        <div>
                            <h4 className="font-bold">Warranty Policy</h4>
                            <p className="text-sm text-white/40">2-year premium coverage</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
