"use client";

import { motion } from "framer-motion";
import {
    LayoutDashboard,
    User,
    Rocket,
    Code2,
    Sparkles,
    ArrowRight,
    Layers,
    Zap,
    Globe,
    Monitor,
    Smartphone,
    Mail
} from "lucide-react";
import Link from "next/link";

export default function ProductDemoPage() {
    return (
        <div className="min-h-screen bg-[#030712] text-white selection:bg-[#3B82F6]/30 font-sans">
            {/* Custom Clean Header (No TechHub Branding) */}
            <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="group flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#A855F7] rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                            <Layers size={18} className="text-white" />
                        </div>
                        <span className="font-black text-xl tracking-tighter uppercase italic">Portfolio<span className="text-[#3B82F6]">Showcase</span></span>
                    </Link>
                    <div className="flex gap-6 items-center">
                        <Link href="/admin" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1">
                            <LayoutDashboard size={16} /> Admin
                        </Link>
                        <a href="https://web-nova-1uyb.vercel.app/contact" className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-bold transition-all">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20 overflow-hidden">
                {/* Hero Section */}
                <section className="px-6 lg:px-20 max-w-7xl mx-auto relative">
                    <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-[12px] font-bold uppercase tracking-widest mb-6">
                                <Sparkles size={14} />
                                <span>Web Development Excellence</span>
                            </div>

                            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                                Building <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3182CE] via-[#9F7AEA] to-[#ED64A6]">
                                    Digital Legacy.
                                </span>
                            </h1>

                            <p className="text-xl text-white/50 mb-10 leading-relaxed max-w-lg">
                                You've just seen a glimpse of what's possible. I specialize in crafting high-performance, conversion-driven web solutions that help businesses scale in the digital age.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <a
                                    href="https://web-nova-1uyb.vercel.app/portfolio"
                                    target="_blank"
                                    className="group flex items-center justify-center gap-3 bg-[#3B82F6] text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-[#2563EB] transition-all shadow-xl shadow-[#3B82F6]/20"
                                >
                                    Explore My Work <User size={20} />
                                </a>
                                <Link
                                    href="/admin"
                                    className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
                                >
                                    View Admin Panel <LayoutDashboard size={20} />
                                </Link>
                            </div>

                            <div className="flex items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                                <div className="flex items-center gap-2">
                                    <Globe size={20} />
                                    <span className="text-sm font-bold">Scalable</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Monitor size={20} />
                                    <span className="text-sm font-bold">Responsive</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap size={20} />
                                    <span className="text-sm font-bold">Fast</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#3B82F6] to-[#A855F7] rounded-[40px] blur-3xl opacity-20 animate-pulse" />
                            <div className="relative bg-[#111827] border border-white/10 p-10 rounded-[48px] shadow-2xl overflow-hidden">

                                <h2 className="text-3xl font-black mb-6">Need a <span className="text-[#3B82F6]">Custom Website</span>?</h2>
                                <p className="text-lg text-white/50 mb-8 leading-relaxed">
                                    Whether it's an immersive e-commerce store, a complex enterprise dashboard, or a sleek portfolio, I bring your vision to life with modern tech stacks.
                                </p>

                                <div className="space-y-5 mb-10">
                                    {[
                                        "Full-Stack Web Development",
                                        "Custom UI/UX Design Systems",
                                        "Performance & SEO Optimization",
                                        "Real-time Dashboards & APIs"
                                    ].map((service, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#3B82F6]/20 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                                            </div>
                                            <span className="font-semibold text-white/80">{service}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="https://web-nova-1uyb.vercel.app/contact"
                                    className="block w-full text-center bg-white text-black py-5 rounded-2xl font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
                                >
                                    Start Your Project <ArrowRight size={20} className="inline ml-2" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features / Services Grid */}
                <section className="py-32 px-6 lg:px-20 max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Web Services I Provide</h2>
                        <p className="text-white/50">Comprehensive solutions for modern digital problems.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Frontend Orchestration",
                                desc: "Dynamic, interactive interfaces built with React, Next.js, and Framer Motion for a premium feels.",
                                icon: <Monitor className="text-[#3B82F6]" />
                            },
                            {
                                title: "Backend Architecture",
                                desc: "Robust, secure, and scalable server-side systems using Node.js, Express, and modern databases.",
                                icon: <Layers className="text-[#A855F7]" />
                            },
                            {
                                title: "Mobile-First Design",
                                desc: "Ensuring your site looks and performs flawlessly on every device, from mobile to desktop.",
                                icon: <Smartphone className="text-[#ED64A6]" />
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/5 p-8 rounded-[32px] hover:bg-white/10 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-white/40 leading-relaxed text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="px-6 lg:px-20 max-w-5xl mx-auto">
                    <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10 p-12 md:p-20 text-center">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to build <br /> something amazing?</h2>
                        <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
                            I am currently available for freelance projects and full-time collaborations. Let's talk about your next big idea.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="mailto:your-email@example.com" className="flex items-center justify-center gap-3 bg-white text-black px-12 py-5 rounded-2xl font-black text-lg hover:scale-[1.05] transition-all">
                                <Mail size={20} /> Send an Email
                            </a>
                            <a href="https://web-nova-1uyb.vercel.app/" className="flex items-center justify-center gap-3 bg-white/10 text-white px-12 py-5 rounded-2xl font-black text-lg border border-white/10 hover:bg-white/20 transition-all">
                                View Full Portfolio
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Clean Portfolio Footer */}
            <footer className="py-20 px-6 border-t border-white/5 bg-[#030712] relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#3B82F6] to-[#A855F7] rounded flex items-center justify-center">
                            <Layers size={14} className="text-white" />
                        </div>
                        <span className="font-bold tracking-tighter uppercase">Portfolio<span className="text-[#3B82F6]">Showcase</span></span>
                    </div>
                    <p className="text-white/30 text-sm">
                        © {new Date().getFullYear()} Designed & Developed By WebNova
                    </p>
                    <div className="flex gap-6">
                        <a href="https://github.com" className="text-white/30 hover:text-white transition-colors text-sm">GitHub</a>
                        <a href="https://linkedin.com" className="text-white/30 hover:text-white transition-colors text-sm">LinkedIn</a>
                        <a href="https://twitter.com" className="text-white/30 hover:text-white transition-colors text-sm">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
