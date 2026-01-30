"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: { duration: 0.25, ease: "easeInOut" }
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#0B0F19]/90 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl w-[95%] max-w-6xl px-6 py-3"
    >
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl tracking-wide">
          Tech<span className="text-[#3B82F6]">Hub</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-white/80">
          {["Shop", "Categories", "Deals", "Support"].map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.05 }} className="relative group">
              <Link href={`/${item.toLowerCase()}`} className="hover:text-white transition">
                {item}
              </Link>

              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#A855F7] group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">

          <motion.button whileHover={{ scale: 1.1 }} className="text-white/80 hover:text-white">
            <Search size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="relative text-white/80 hover:text-white"
          >
            <Link href="/cart">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#A855F7] text-xs w-4 h-4 rounded-full flex items-center justify-center text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </motion.button>

          <Link href="/shop" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-white px-4 py-2 rounded-xl font-medium shadow-lg"
            >
              Shop Now
            </motion.button>
          </Link>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobileMenu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden overflow-hidden mt-4 bg-[#111827] rounded-xl p-4 flex flex-col gap-4 text-white/80 border border-white/10"
          >
            {["Shop", "Categories", "Deals", "Support"].map((item) => (
              <motion.div key={item} whileTap={{ scale: 0.98 }}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block hover:text-white transition"
                >
                  {item}
                </Link>
              </motion.div>
            ))}

            <Link href="/shop" onClick={() => setOpen(false)}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-white py-2 rounded-lg mt-2"
              >
                Shop Now
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
