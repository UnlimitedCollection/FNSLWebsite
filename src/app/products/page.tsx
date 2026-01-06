"use client";

import React from "react";
import Link from "next/link";
import { Verified, Handshake, FileText, ArrowLeft, ArrowRight, MapPin, Search } from "lucide-react";
import { products } from "@/data/mockData";

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-dark text-white font-sans">

            {/* Hero Section */}
            <section className="relative min-h-[560px] flex items-center justify-center text-center px-4 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwRcBAvT3mBEHlnKYsA6sUffnfrEnJZc5xZ5K1JTzUXk7bzbYC6CZpp5w7nLWutFArSs1Zdn0ZWPSeo4Fp4iIM2VgfFhWJ9ifiwSDXxqb9FiantdFuhMQlXBOVhLDk0t54wbgT9Sskrfk0TizCosaJxrJGXh2xP4HAWWL2-fBMVb6zJ6A2lJ6wTvgltwzrOL-NXFfzC4WgGeUXsG8AyZW-b_3r6iTsHBmSdtwWGlNln5uKTPpn28WsYNWiAOstq9nXmlcGgBqUiaQ")` }}>
                <div className="max-w-[800px] flex flex-col gap-6 items-center z-10">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                        Export Ready • Ethical • Sustainable
                    </span>
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl drop-shadow-sm">
                        Sri Lankan Fairtrade-Aligned Products
                    </h1>
                    <h2 className="text-gray-100 text-lg font-normal leading-relaxed max-w-[600px] drop-shadow-sm">
                        Discover premium goods directly from certified producers. Connecting global markets to ethical, high-quality sources.
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center mt-4">
                        <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-black text-base font-bold transition-transform hover:scale-105">
                            Request Sourcing Support
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 text-base font-bold transition-colors">
                            View Categories
                        </button>
                    </div>
                </div>
            </section>

            <div className="flex justify-center py-5 px-4 md:px-10 lg:px-40">
                <div className="flex flex-col max-w-[1200px] flex-1">

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-[#2a3c2a]">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1a2c1a] shadow-sm">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-green-300">
                                <Verified size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Quality Assured</h3>
                                <p className="text-sm text-gray-400">Products meet international export standards and rigorous checks.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1a2c1a] shadow-sm">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-green-300">
                                <Handshake size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Ethically Sourced</h3>
                                <p className="text-sm text-gray-400">Direct trade supporting fair wages and community development.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1a2c1a] shadow-sm">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-green-300">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Full Traceability</h3>
                                <p className="text-sm text-gray-400">Transparent supply chains from local farm to global port.</p>
                            </div>
                        </div>
                    </div>

                    {/* Categories Grid */}
                    <div className="py-12">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight mb-2">Explore Our Categories</h2>
                                <p className="text-gray-400">Browse Sri Lanka&apos;s finest exports by sector.</p>
                            </div>
                        </div>
                        {/* Featured Products Grid */}
                        <div className="py-12">
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Products</h2>
                                    <p className="text-gray-400">Export-quality goods available for immediate sourcing.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <Link
                                        href={`/products/${product.id}`}
                                        key={product.id}
                                        className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer block hover:shadow-xl transition-shadow"
                                    >
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${product.images[0]}")` }}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 p-6 w-full">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="px-2 py-1 bg-primary text-black text-xs font-bold uppercase rounded">{product.category}</span>
                                            </div>
                                            <h3 className="text-white text-xl font-bold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                                            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                                                <p className="text-gray-300 text-sm mt-2 line-clamp-2">{product.description}</p>
                                                <div className="mt-3 flex items-center text-primary text-sm font-bold">
                                                    View Specs <ArrowRight size={16} className="ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="py-16 my-8 rounded-3xl bg-[#1a2c1a] px-8 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                    <div className="flex-1">
                        <h2 className="text-3xl font-black mb-4">How Sourcing Requests Work</h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Follow these simple steps to connect with verified producers and start your ethical supply chain journey.
                        </p>
                        <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-[#111811] text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                            Start Buyer Inquiry
                        </button>
                    </div>
                    <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {[
                            { step: 1, title: "Browse Catalog", desc: "Explore categories and specific producer profiles." },
                            { step: 2, title: "Submit Inquiry", desc: "Fill out the buyer form with your specifications." },
                            { step: 3, title: "Supplier Match", desc: "We connect you with capable, certified producers." },
                            { step: 4, title: "Finalize Logistics", desc: "Coordinate samples, pricing, and shipping." }
                        ].map((item) => (
                            <div key={item.step} className="bg-[#111811] p-6 rounded-xl border border-[#2a3c2a] flex flex-col gap-3">
                                <div className="size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">{item.step}</div>
                                <h4 className="font-bold text-lg">{item.title}</h4>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Products Carousel */}
            <div className="py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
                    <div className="flex gap-2">
                        <button className="size-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800">
                            <ArrowLeft size={20} />
                        </button>
                        <button className="size-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    {[
                        {
                            cat: "Spices", title: "Organic Black Pepper", loc: "Matale, Sri Lanka",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgW-1S-TSjpeH6Eh7JOxnSM1UEdx3kc2HFVswGwu-G-yspInrIWLkGsdHuAMDPHHpyNItIe5DxkYSLqbODRgkWK7aXcjJ-JUTRyBmos35qHf2MHGQaQTmoubtopDekDy_4dCkTm_46doqp5FTOE56FyMzyEDKzgGrz85owCKx3NDFulRoq1NkUhiKISoOWNs-CwcwuXC9beHN9qfqzFrmJ6926TRKBOQxlFryejNeUWzb8bHkGTzD2sXMkdsvyL26ScJFtBVD6RsU"
                        },
                        {
                            cat: "Coconut", title: "Virgin Coconut Oil", loc: "Kurunegala, Sri Lanka",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV1FIyEm20Ut1nm3aKBs5-LCLnq2BZSpuOm8vxZbvg_5ACIMVcG4ZXcxF_dwj0kCN3lNYhMYheRrqtqT3rs2z3X5fo7kVIP52DNS8nVTXqaNFJ_cqi-CmorOtckcTMECezdpC_rFDkMfCCZ9RThNRxm1qA0nxCq9MGVRIiEyIfrtkZGeQyVU0IBp1IFIQKjP8vFnmhhIRUDLtMqmQ43c-WsGVeMegY-mCnjp0sUSQcb3vrT5Tryu_v0WkXFwlZFy4pzp52mYqZgeU"
                        },
                        {
                            cat: "Tea", title: "Premium Earl Grey", loc: "Nuwara Eliya, Sri Lanka",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgSd0NFXRp1xkJ3JfecE17T16Ymjur_DTlC1sHV6cuD89KiJ8Nb2tcoemnzGVmbEdVMUHngowIHTFbfiTmD6AnjPff6Oo_3fokJbdATbW-xr-AS0FQzHqA2iM7svWwbUWXxd7kvu-wnUjcbIDHAXExoAcIfy4-K264TnLQngvJdkUwIgbO1n2vSXXzHCbYA90qrUNWpyRkJrFNNXlOfREbsIy2X0-4l4i7go4uvj-8RkVN3CO0PSEUaUWGY8D3je_PTsKq7h7s6oo"
                        },
                        {
                            cat: "Spices", title: "Ceylon Cinnamon (Alba)", loc: "Galle, Sri Lanka",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcpsd7xo4xDKvSbyVJflpMgvL7dbbjjT5Mi927v7Q5mnVwqCoiPkkN4bK0vmALxx5sJrnM-vgAa1ca74E4iX02F-9SYJqVY3IC0-hG1cUZ-E9Re-u0_HbNCzA-1RuX5ltJx1UPJnpgBItcC0NtSN5xX9lxgGK3YaP1SlOThfXKr7d5rJ5DyzsrK3Uz4GyYhiwZ651LdZbEjus6LdHCVjHLbOHmdWLImV5b97M_CIhgpiemh0rgny9BNROTxfL3PDRQKhvtQsI9Tdk"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="min-w-[280px] w-[280px] bg-[#1a2c1a] rounded-xl border border-[#2a3c2a] overflow-hidden snap-start hover:shadow-md transition-shadow">
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url("${item.img}")` }}></div>
                            <div className="p-4 flex flex-col gap-3">
                                <div>
                                    <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{item.cat}</div>
                                    <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                                    <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                                        <MapPin size={16} />
                                        <span>{item.loc}</span>
                                    </div>
                                </div>
                                <button className="mt-2 w-full py-2 border border-green-500 text-green-400 rounded-lg text-sm font-bold hover:bg-green-900/30 transition-colors">
                                    Request Quote
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
