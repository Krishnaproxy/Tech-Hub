"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

    const shipping = cartItems.length > 0 ? 25 : 0;
    const finalTotal = cartTotal + shipping;

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-6 lg:px-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        Shopping <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7]">Cart</span>
                    </h1>
                    <p className="text-white/50">You have {cartItems.length} items in your cart.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl"
                            >
                                <div className="relative h-24 w-24 rounded-2xl overflow-hidden flex-shrink-0">
                                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                                    <p className="text-[#3B82F6] font-bold">${item.price}</p>
                                </div>

                                <div className="flex items-center gap-4 bg-[#0B0F19] rounded-xl p-2 border border-white/10">
                                    <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="p-1 hover:text-[#3B82F6] transition-colors"
                                    >
                                        <Minus size={18} />
                                    </button>
                                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="p-1 hover:text-[#3B82F6] transition-colors"
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-3 text-white/40 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </motion.div>
                        ))}

                        {cartItems.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/20"
                            >
                                <ShoppingBag size={48} className="mx-auto mb-4 text-white/20" />
                                <p className="text-xl font-bold text-white/40">Your cart is empty</p>
                                <Link href="/shop" className="inline-block mt-6 text-[#3B82F6] font-bold hover:underline">
                                    Start Shopping
                                </Link>
                            </motion.div>
                        )}
                    </div>

                    {/* Summary */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 h-fit"
                    >
                        <h3 className="text-2xl font-bold mb-8">Order Summary</h3>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-white/60">
                                <span>Subtotal</span>
                                <span>${cartTotal}</span>
                            </div>
                            <div className="flex justify-between text-white/60">
                                <span>Shipping</span>
                                <span>${shipping}</span>
                            </div>
                            <div className="h-[1px] bg-white/10 my-4" />
                            <div className="flex justify-between text-2xl font-bold">
                                <span>Total</span>
                                <span className="text-[#3B82F6]">${finalTotal}</span>
                            </div>
                        </div>

                        <button
                            disabled={cartItems.length === 0}
                            className={`w-full py-5 rounded-2xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-3 ${cartItems.length > 0 ? 'bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-white hover:shadow-[#3B82F6]/20' : 'bg-white/5 text-white/20 cursor-not-allowed'}`}
                        >
                            Checkout Now <ArrowRight size={20} />
                        </button>

                        <div className="mt-6 flex items-center justify-center gap-4 text-white/40 text-sm">
                            <span>Secure Payment</span>
                            <div className="w-1 h-1 bg-white/20 rounded-full" />
                            <span>30-Day Returns</span>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
