"use client";

import React from "react";
import Link from "next/link";
import { Verified, Handshake, FileText, ArrowLeft, ArrowRight, MapPin, Search } from "lucide-react";

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111811] dark:text-white font-sans">

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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-[#e5e9e5] dark:border-[#2a3c2a]">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#1a2c1a] shadow-sm">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-green-700 dark:text-green-300">
                                <Verified size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Quality Assured</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Products meet international export standards and rigorous checks.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#1a2c1a] shadow-sm">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-green-700 dark:text-green-300">
                                <Handshake size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Ethically Sourced</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Direct trade supporting fair wages and community development.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#1a2c1a] shadow-sm">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-green-700 dark:text-green-300">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Full Traceability</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Transparent supply chains from local farm to global port.</p>
                            </div>
                        </div>
                    </div>

                    {/* Categories Grid */}
                    <div className="py-12">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight mb-2">Explore Our Categories</h2>
                                <p className="text-gray-600 dark:text-gray-400">Browse Sri Lanka&apos;s finest exports by sector.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1: Tea */}
                            <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9fnRBvbue4C_3bl_jwtmsa-R3L-1iFK-8O4aKlEAF4Zdhx8LuajWS8UNwBZnQKJLt0cHkCx-E_-Vmwm_0AgCnzx66L6bCav4RnGs4aOiI0K5tVAGBrrAT6qkmrG4SPo6DbEFpUXoAFz3L388aOnHcAwE38c1MVpP-_WeecZgwioqbZnObuSfPozyPZjKXD6aCj872YQJl4JM4WATqi4X_A6iQDh26UjYfG3Kfc2xc2F9676tG_5oXa1zZMKj-thQ6T6SUnKlvmX8")` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-white text-2xl font-bold mb-1">Tea</h3>
                                    <p className="text-gray-200 text-sm">Ceylon Black, Green & White Tea</p>
                                </div>
                            </div>
                            {/* Card 2: Spices */}
                            <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSFc_u2qv6mh-4REjulVXvH8157nPLQHdr5KhOogmcRBZ-resYOACZWSHO6Eo4g4jNjEu2Fy016HuEnUEd5YMIoM-5GmDFhuqDx-9Gn2w6R3OsIvQrwF3lK70ycMbyWqn0kuKvYo00ddwG3k3vQFGAeBbz_L7vJtYvfAnKZvP09qEk0ZFRcQjxz2O7UG-s33Q8x1CAF7ERqRXNyDHrZDmhEVufO1T7N7JSgglaKqyzrG55EnIR6uL5MFEghTU3frkzv79YTFg_rfY")` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-white text-2xl font-bold mb-1">Spices</h3>
                                    <p className="text-gray-200 text-sm">True Cinnamon, Pepper, Cloves</p>
                                </div>
                            </div>
                            {/* Card 3: Coconut */}
                            <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBzyx4Rg-73zcqd-7mUY2b2l2OP4EtC4K8P7XL9fYpBUxf85Jh6X9FO4JA9uTubsXOJX0z-zaaxolfXcO0BV4rpdNsn00IDhEGoKzxcpF0XFZkuwJ7hrm8o0KmHn-pJK8Daon1DSvKHljYI1kE6bwjGvLvc_j0clatT2OniOTQdeBl1WXswqWthJHMl2dXg-PcIcJU5lso4uvktRXzk63voWhuwEzPmEHFM6WU4WB3tRjmpl8iV-G32mu8tu82kve87Q47-33Jhuw")` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-white text-2xl font-bold mb-1">Coconut</h3>
                                    <p className="text-gray-200 text-sm">Virgin Oil, Milk, Desiccated</p>
                                </div>
                            </div>
                            {/* Card 4: Herbs */}
                            <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBh5puulWM5Sdtcs_vrBVFlZY5X7zK3uR9D5BxPNH5zzplj1R-TqLHD3_MDZdJNVg2l4HfxdbdaiIU9U_YBG7d1K8ILvSiSfRAk5DIskl884mzFxQAisaEa0SL5nhqZopXBsbG6VtySO3Si8jBUXC8VWjGxxDv082TkrA9qnIABK579plqCt5HIpD7IlIFRYg17gIO3tJF0fW2DtBbn561uV0BfrVCyLfgSCWdprMwuRzLS0rdFjZHYIh0r1UXXcoWRa9nAGJ92rf0")` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-white text-2xl font-bold mb-1">Herbs & Wellness</h3>
                                    <p className="text-gray-200 text-sm">Ayurvedic Plants, Essential Oils</p>
                                </div>
                            </div>
                            {/* Card 5: Handicrafts */}
                            <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcA_2H0QY03FgTC54sWz41WvaPsHlu5L9kvWzckJPQ_io9YS8tYwwuCQbtdvGGGb3H7adppO5jjtTOTiB7gQoEgos4Jll0AhRtlAJLzU3hIZeSIL6kAMnghfzQrguoRV-jxVESDPlhPvFTspzchIr1B9sxSvUYRCEy7eACe_pRJPTthtNXELTS807AqEmqyJr2osMwjC7GiUZZg_AYMRfeLOVQFR4mndnzgQW5MMb89gI_CbGvZkPx92tol_acTpowEMCQFnQw9F0")` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-white text-2xl font-bold mb-1">Handicrafts</h3>
                                    <p className="text-gray-200 text-sm">Artisanal Wood, Clay & Reed</p>
                                </div>
                            </div>
                            {/* Card 6: Textiles */}
                            <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHewiuwaOeAVM3ONd7HI17f14j6TcnPwGV88vejCLBJmtd5dbsHLfm4vMfokvq3QnSgEaUa_7olNiyIhL7lRsYQF00Ms4Rw2yKf_sUznxAFEY9uP-Pp6i7NQwlm6cAaka9AJlxVd9n6fic7vXuWvifnQeMcxAOLjEJBYxnBFaVWM58JupjsPzsYjkzwX3HDRN3UouPaYTtwUi7MH3jNEdkFtluNgNDPda3lh69uaivibBe8ONybCX4v_PQYeijKkWyubJ0qhinsoQ")` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-white text-2xl font-bold mb-1">Textiles</h3>
                                    <p className="text-gray-200 text-sm">Ethical Fabrics, Handloom</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How It Works Section */}
                    <div className="py-16 my-8 rounded-3xl bg-[#f0f4f0] dark:bg-[#1a2c1a] px-8 relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                            <div className="flex-1">
                                <h2 className="text-3xl font-black mb-4">How Sourcing Requests Work</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
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
                                    <div key={item.step} className="bg-white dark:bg-[#111811] p-6 rounded-xl border border-[#e5e9e5] dark:border-[#2a3c2a] flex flex-col gap-3">
                                        <div className="size-10 rounded-full bg-primary/20 text-green-800 dark:text-primary flex items-center justify-center font-bold">{item.step}</div>
                                        <h4 className="font-bold text-lg">{item.title}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
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
                                <button className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <ArrowLeft size={20} />
                                </button>
                                <button className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
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
                                <div key={idx} className="min-w-[280px] w-[280px] bg-white dark:bg-[#1a2c1a] rounded-xl border border-[#e5e9e5] dark:border-[#2a3c2a] overflow-hidden snap-start hover:shadow-md transition-shadow">
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
                                        <button className="mt-2 w-full py-2 border border-green-600 dark:border-green-500 text-green-700 dark:text-green-400 rounded-lg text-sm font-bold hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors">
                                            Request Quote
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
