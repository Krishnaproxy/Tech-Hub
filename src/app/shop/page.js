"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Zap, Filter, ChevronDown, X, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useCart } from "../context/CartContext";
import { useSearchParams } from "next/navigation";

const initialProducts = [
    {
        id: 1,
        name: "Quantum Phone X",
        price: 999,
        rating: 4.9,
        category: "phones",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
        id: 2,
        name: "Nebula Pro Laptop",
        price: 1499,
        rating: 5.0,
        category: "laptops",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
        id: 3,
        name: "Sonic Wireless Pods",
        price: 199,
        rating: 4.8,
        category: "audio",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
        id: 4,
        name: "Titan Smart Watch",
        price: 299,
        rating: 4.7,
        category: "wearables",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
        id: 5,
        name: "Apex Gaming Console",
        price: 499,
        rating: 4.9,
        category: "gaming",
        img: "https://images.unsplash.com/photo-1486401899868-0e435ed85128"
    },
    {
        id: 6,
        name: "Lumina VR Headset",
        price: 599,
        rating: 4.6,
        category: "gaming",
        img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac"
    }
];

const categories = ["all", "phones", "laptops", "gaming", "wearables", "audio"];

function ShopContent() {
    const searchParams = useSearchParams();
    const { addToCart } = useCart();

    const [products, setProducts] = useState(initialProducts);
    const [filter, setFilter] = useState(searchParams.get("category") || "all");
    const [sortBy, setSortBy] = useState("featured");
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        let result = initialProducts;

        // Category Filter
        if (filter !== "all") {
            result = result.filter(p => p.category === filter);
        }

        // Search Query
        if (searchQuery) {
            result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        // Sorting
        if (sortBy === "price-low") {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-high") {
            result = [...result].sort((a, b) => b.price - a.price);
        } else if (sortBy === "rating") {
            result = [...result].sort((a, b) => b.rating - a.rating);
        }

        setProducts(result);
    }, [filter, sortBy, searchQuery]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-8 mb-12"
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            Explore Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7]">Collection</span>
                        </h1>
                        <p className="text-white/50">Discover premium tech built for the future.</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#3B82F6] transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-white/5 border border-white/10 pl-12 pr-4 py-3 rounded-xl focus:border-[#3B82F6] outline-none transition-all w-full md:w-64"
                            />
                        </div>

                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all border ${isFilterOpen ? 'bg-[#3B82F6] border-[#3B82F6]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                        >
                            <Filter size={18} />
                            <span>Filters</span>
                        </button>

                        <div className="relative group">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none bg-white/5 border border-white/10 px-5 py-3 pr-12 rounded-xl hover:bg-white/10 transition-colors outline-none cursor-pointer"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40" size={18} />
                        </div>
                    </div>
                </div>

                {/* Expandable Filter Bar */}
                <AnimatePresence>
                    {isFilterOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="flex flex-wrap gap-3 p-6 bg-white/5 rounded-3xl border border-white/10">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilter(cat)}
                                        className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all ${filter === cat ? 'bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-white shadow-lg' : 'bg-white/5 text-white/40 hover:text-white border border-white/10'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-[32px] p-6 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.2)] transition-all"
                        >
                            <Link href="/product-details" className="relative h-64 w-full block rounded-2xl overflow-hidden mb-6">
                                <Image
                                    src={product.img}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/10 capitalize">
                                    {product.category}
                                </div>
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold border border-white/10">
                                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                    {product.rating}
                                </div>
                            </Link>

                            <Link href="/product-details">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-[#3B82F6] transition-colors">{product.name}</h3>
                            </Link>
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-2xl font-black">${product.price}</p>
                            </div>

                            <button
                                onClick={() => addToCart(product)}
                                className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                            >
                                <Zap size={18} className="fill-current" />
                                Add to Cart
                            </button>
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-white/20">
                        <Search size={64} className="mb-6 opacity-20" />
                        <h3 className="text-2xl font-bold">No products found</h3>
                        <p>Try adjusting your filters or search query</p>
                        <button
                            onClick={() => { setFilter("all"); setSearchQuery(""); }}
                            className="mt-6 text-[#3B82F6] font-bold"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-[#0B0F19] text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-6 lg:px-20 max-w-7xl mx-auto">
                <Suspense fallback={<div>Loading...</div>}>
                    <ShopContent />
                </Suspense>
            </main>

            <Footer />
        </div>
    );
}
