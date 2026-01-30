"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Smartphone,
  Gamepad2,
  Watch,
  Headphones,
  ArrowRight,
  Star,
  Zap,
  ShieldCheck,
  Truck
} from "lucide-react";
import { useRef } from "react";
import { useCart } from "../context/CartContext";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Home() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const categories = [
    { name: "Phones", icon: <Smartphone />, color: "from-[#3B82F6] to-[#1D4ED8]", slug: "phones" },
    { name: "Laptops", icon: <Cpu />, color: "from-[#A855F7] to-[#7E22CE]", slug: "laptops" },
    { name: "Gaming", icon: <Gamepad2 />, color: "from-[#F59E0B] to-[#D97706]", slug: "gaming" },
    { name: "Wearables", icon: <Watch />, color: "from-[#10B981] to-[#047857]", slug: "wearables" },
    { name: "Accessories", icon: <Headphones />, color: "from-[#EC4899] to-[#BE185D]", slug: "audio" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Quantum Phone X",
      price: 999,
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      id: 2,
      name: "Nebula Pro Laptop",
      price: 1499,
      rating: 5.0,
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      id: 3,
      name: "Sonic Wireless Pods",
      price: 199,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
  ];

  return (
    <main ref={containerRef} className="relative bg-[#0B0F19] text-white overflow-hidden selection:bg-[#3B82F6]/30 selection:text-white">

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#A855F7]/10 rounded-full blur-[150px]"
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 max-w-7xl mx-auto pt-40 pb-20 lg:pt-25 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#3B82F6] mb-3">
            <Zap size={16} className="fill-current" />
            <span>Next Gen Technology is Here</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            Elevate Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7]">Digital</span> Experience
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-5 text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
            Step into the future with our curated collection of high-performance tech essentials designed for power users.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-5 items-center">
            <Link href="/shop">
              <button className="group relative bg-[#3B82F6] px-8 py-4 rounded-2xl font-bold overflow-hidden transition-all hover:shadow-[0_0_30px_-5px_#3B82F6]">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Collection <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </Link>
            <button className="px-8 py-4 rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-colors">
              Watch Demo
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex items-center gap-8">
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold">50k+</p>
              <p className="text-sm text-white/40">Customers</p>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-sm text-white/40">Rating</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-20 lg:mt-0"
        >
          <motion.div
            animate={floatingAnimation}
            className="relative z-20"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#3B82F6]/50 to-[#A855F7]/50 rounded-[40px] blur-3xl opacity-20" />
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Premium Gadgets"
              width={600}
              height={600}
              className="relative rounded-[40px] shadow-2xl border border-white/10 object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-20 px-20 max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">Browse by <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7]">Categories</span></h2>
            <p className="mt-4 text-white/50">Find the perfect tech for your needs</p>
          </motion.div>
          <Link href="/categories">
            <motion.button
              whileHover={{ gap: "12px" }}
              className="flex items-center gap-2 text-[#3B82F6] font-semibold transition-all"
            >
              View All Categories <ArrowRight size={20} />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <Link key={cat.name} href={`/shop?category=${cat.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[32px] text-center transition-all hover:bg-white/10 cursor-pointer overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-lg`}>
                  {cat.icon}
                </div>
                <p className="text-xl font-bold">{cat.name}</p>
                <p className="text-sm text-white/40 mt-2">120+ Products</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS SECTION */}
      <section className="py-32 bg-[#111827]/50 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-20">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold"
            >
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7]">Masterpieces</span>
            </motion.h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto">Hand-picked premium tech products that set new standards in innovation and design.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[40px] p-6 transition-all hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.3)]">
                  <Link href="/product-details" className="relative h-72 w-full block rounded-[30px] overflow-hidden mb-8">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/5 backdrop-blur-lg border border-white/10 px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      {product.rating}
                    </div>
                  </Link>

                  <Link href="/product-details">
                    <h3 className="text-2xl font-bold mb-2 hover:text-[#3B82F6] transition-colors">{product.name}</h3>
                  </Link>
                  <div className="flex items-center justify-between mb-8">
                    <p className="text-3xl font-black text-[#3B82F6]">${product.price}</p>
                    <p className="text-sm text-white/40 line-through">$1,299</p>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <Zap size={18} className="fill-current" />
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO / CTA SECTION */}
      <section className="py-20 px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto relative rounded-[50px] overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
              alt="Promo background"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#A855F7] mix-blend-multiply opacity-80" />
          </div>

          <div className="relative z-10 p-12 md:p-24 flex flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-black text-white"
            >
              FUTURE IS NOW. <br /> SAVE 50% TODAY.
            </motion.h2>
            <p className="mt-8 text-xl text-white/80 max-w-2xl">
              Don't miss out on the biggest tech sale of the decade. Limited stock available for first 1000 orders.
            </p>
            <Link href="/deals">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 bg-white text-black px-12 py-5 rounded-2xl font-black text-lg shadow-2xl"
              >
                Claim Your Discount
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-10 pb-30 px-20 max-w-7xl mx-auto z-10 relative">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Swift Express",
              desc: "Next-day delivery across all major cities with real-time tracking.",
              icon: <Truck className="w-10 h-10 text-[#3B82F6]" />
            },
            {
              title: "Titan Security",
              desc: "Military-grade encryption for all your transactions and data.",
              icon: <ShieldCheck className="w-10 h-10 text-[#A855F7]" />
            },
            {
              title: "24/7 Expert Help",
              desc: "Instant access to tech specialists for any setup or support issues.",
              icon: <Zap className="w-10 h-10 text-yellow-400" />
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-6 rounded-[30px] bg-white/5 backdrop-blur-lg border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER-LIKE NEWSLETTER */}
      <section className="py-32 px-6 bg-[#111827] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[100px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Ahead of the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7]">Curve</span></h2>
            <p className="text-white/50 mb-12 text-lg">Join 100k+ subscribers getting exclusive early access to gadget launches.</p>
          </motion.div>

          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-8 py-5 rounded-2xl bg-[#0B0F19] border border-white/10 text-white outline-none focus:border-[#3B82F6] transition-colors"
            />
            <button className="bg-[#3B82F6] px-10 py-5 rounded-2xl font-bold hover:bg-[#2563EB] transition-colors shadow-lg">
              Unlock Early Access
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
