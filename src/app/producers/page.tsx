"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, List, Map, Filter, MapPin, ArrowRight, Droplets, School, Heart, Leaf, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProducersPage() {
    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-sans">

            {/* Top Header & Search Section (within Main) */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 py-8">
                <section className="mb-10 flex flex-col gap-6">
                    <div className="flex flex-col gap-2 max-w-3xl">
                        <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Our Producers</h1>
                        <p className="text-slate-600 dark:text-gray-400 text-lg font-normal leading-relaxed">
                            Discover Sri Lanka&apos;s Fairtrade certified producers committed to ethical farming, sustainable trade, and community growth.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between w-full mt-2">
                        {/* Search Bar */}
                        <div className="w-full md:max-w-xl relative">
                            <div className="flex w-full items-center rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm focus-within:ring-2 focus-within:ring-primary focus-within:border-primary overflow-hidden h-12">
                                <div className="flex items-center justify-center pl-4 text-slate-400">
                                    <Search size={20} />
                                </div>
                                <input className="w-full h-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 px-3 text-base" placeholder="Search by producer name, product, or location" />
                                <button className="bg-primary hover:bg-primary-dark text-[#111811] font-bold px-5 h-full transition-colors">
                                    Search
                                </button>
                            </div>
                        </div>
                        {/* View Toggle */}
                        <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm self-end md:self-auto">
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#f0f4f0] dark:bg-gray-700 text-slate-900 dark:text-white text-sm font-bold shadow-sm">
                                <List size={18} />
                                List
                            </button>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-gray-50 dark:hover:bg-gray-700 text-slate-500 dark:text-gray-400 text-sm font-medium transition-colors">
                                <Map size={18} />
                                Map
                            </button>
                        </div>
                    </div>
                </section>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">

                    {/* Filters Sidebar */}
                    <aside className="w-full">
                        {/* Mobile Toggle */}
                        <div className="lg:hidden mb-6">
                            <button onClick={() => setFilterOpen(!filterOpen)} className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm font-bold text-slate-900 dark:text-white">
                                <div className="flex items-center gap-2">
                                    <Filter className="text-primary" size={20} />
                                    Filters
                                </div>
                                <ChevronDown className={`transition-transform ${filterOpen ? 'rotate-180' : ''}`} size={20} />
                            </button>
                        </div>

                        <div className={`${filterOpen ? 'flex' : 'hidden'} lg:flex flex-col gap-6 sticky top-24`}>
                            {/* Category Filter */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">Product Category</h3>
                                <div className="flex flex-col gap-2">
                                    {["Tea (Black/Green)", "Spices & Herbs", "Coconut Products", "Rubber", "Fruits & Vegetables"].map(cat => (
                                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                            <input className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
                                            <span className="text-slate-700 dark:text-gray-300 text-sm group-hover:text-primary transition-colors">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <hr className="border-gray-200 dark:border-gray-700" />

                            {/* Region Filter */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">District / Province</h3>
                                <select className="block w-full rounded-lg border-gray-300 bg-white text-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white py-2">
                                    <option>All Districts</option>
                                    <option>Kandy</option>
                                    <option>Nuwara Eliya</option>
                                    <option>Uva</option>
                                    <option>Ratnapura</option>
                                    <option>Galle</option>
                                </select>
                            </div>
                            <hr className="border-gray-200 dark:border-gray-700" />

                            {/* Standards Filter */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">Standards</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Fairtrade", "Organic", "ISO 22000", "Rainforest A."].map((s, i) => (
                                        <button key={s} className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${i === 0 ? 'bg-primary/20 border-primary text-primary-dark' : 'border-gray-300 text-slate-600 hover:border-primary hover:bg-primary/10 hover:text-primary dark:border-gray-600 dark:text-gray-300'}`}>
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Producers Grid */}
                    <div className="flex flex-col gap-6">
                        {/* Status Bar */}
                        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-gray-400">
                            <p>Showing <span className="font-bold text-slate-900 dark:text-white">12</span> of <span className="font-bold text-slate-900 dark:text-white">48</span> producers</p>
                            <div className="flex items-center gap-2">
                                <span>Sort by:</span>
                                <select className="bg-transparent font-bold text-slate-900 dark:text-white border-none p-0 pr-6 focus:ring-0 cursor-pointer text-sm">
                                    <option>Recommended</option>
                                    <option>Name (A-Z)</option>
                                    <option>Capacity (High-Low)</option>
                                </select>
                            </div>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
                                <div className="h-48 w-full overflow-hidden bg-gray-100 relative">
                                    <div className="absolute top-3 left-3 z-10 flex gap-2">
                                        <span className="bg-white/90 backdrop-blur text-[#111811] text-xs font-bold px-2 py-1 rounded shadow-sm">Fairtrade</span>
                                        <span className="bg-primary text-[#111811] text-xs font-bold px-2 py-1 rounded shadow-sm">Organic</span>
                                    </div>
                                    <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbM3Pvzd7QnIOVvPyOxnFxUwHfXh660-E9wVpqH0j1vCs-SLjIOXlGj4FZYTc1-byWQF1Gnb7a5aHptYBV0dabxy_-9m9cm-eFZs3z114vn9CCgsGO_0JOhDsxqx7B-7r0OXwdq8zkQHXWlZQOfwxLqH4pihtk7velzoI_sm8O16TSNBAkNjXr7lfKz1UcbpcAgLhY1CzTXJ3U_ZH90xMJc8cn8CG0szRDl8qJTUJumJX9f5wnR0lEhtEsNi6ZtqwT217JPXypEmM")` }}></div>
                                </div>
                                <div className="flex flex-1 flex-col p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Green Valley Tea Co-op</h3>
                                        <span className="rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-300">Co-op</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-gray-400 mb-4">
                                        <MapPin size={18} className="text-primary" />
                                        Nuwara Eliya District
                                    </div>
                                    <div className="space-y-3 mb-5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Main Products</span>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="inline-flex items-center rounded-full bg-background-light px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-gray-700 dark:text-gray-200">Black Tea</span>
                                                <span className="inline-flex items-center rounded-full bg-background-light px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-gray-700 dark:text-gray-200">Green Tea</span>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
                                            <p className="text-xs italic text-green-800 dark:text-green-200 flex gap-2">
                                                <Heart size={16} />
                                                &quot;Supporting 500+ smallholder families with education grants.&quot;
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-2">
                                        <button className="w-full rounded-lg border border-primary bg-transparent hover:bg-primary px-4 py-2.5 text-sm font-bold text-primary hover:text-[#111811] transition-all flex items-center justify-center gap-2 group/btn">
                                            View Profile
                                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
                                <div className="h-48 w-full overflow-hidden bg-gray-100 relative">
                                    <div className="absolute top-3 left-3 z-10 flex gap-2">
                                        <span className="bg-white/90 backdrop-blur text-[#111811] text-xs font-bold px-2 py-1 rounded shadow-sm">Fairtrade</span>
                                    </div>
                                    <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBi-3J5lHrNQnMUSCXJaQNjkj8iIl2t9VUC6sSo9yajRT4uj4CW5Xk8XhNGModD4gQnd1XE2Asu5m6aBbuJgdYuuqHZ0gz9lvK3rk00AIzTbdebUA89cCjFky7gQy3QOSbNVswNYABbpTwn2M-WPV6nPUx_xXLipDCTbsXu2yPKyyAMOLhuprLb5GJIr6Vf2x2J2h55YWp8tk6O5NzjB-FIfSUyUREmODfxXDjF8wKF4-L4yVgx4M2IdulLuDWaYTaDC4CCnu7XBOw")` }}></div>
                                </div>
                                <div className="flex flex-1 flex-col p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Lanka Spices Alliance</h3>
                                        <span className="rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-300">SME</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-gray-400 mb-4">
                                        <MapPin size={18} className="text-primary" />
                                        Kandy District
                                    </div>
                                    <div className="space-y-3 mb-5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Main Products</span>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="inline-flex items-center rounded-full bg-background-light px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-gray-700 dark:text-gray-200">Cinnamon</span>
                                                <span className="inline-flex items-center rounded-full bg-background-light px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-gray-700 dark:text-gray-200">Pepper</span>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
                                            <p className="text-xs italic text-green-800 dark:text-green-200 flex gap-2">
                                                <Droplets size={16} />
                                                &quot;Pioneering water conservation techniques in spice gardens.&quot;
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-2">
                                        <button className="w-full rounded-lg border border-primary bg-transparent hover:bg-primary px-4 py-2.5 text-sm font-bold text-primary hover:text-[#111811] transition-all flex items-center justify-center gap-2 group/btn">
                                            View Profile
                                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
                                <div className="h-48 w-full overflow-hidden bg-gray-100 relative">
                                    <div className="absolute top-3 left-3 z-10 flex gap-2">
                                        <span className="bg-white/90 backdrop-blur text-[#111811] text-xs font-bold px-2 py-1 rounded shadow-sm">Fairtrade</span>
                                        <span className="bg-primary text-[#111811] text-xs font-bold px-2 py-1 rounded shadow-sm">ISO 22000</span>
                                    </div>
                                    <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAW5GZmWfycskvpd_z4kIkaYuHi55ZLs7dnY8jT0h-Q2304oNVBzAjQdOMlAHZNLR_2tWR34M7_rOluPioW4rBXvoCjeTsWWsJVauqGqwQjDppqLIx1fjUFjee7_258mfOCcHpH-vN-YerYsTtKPaOD9cMXfluwdmg73cA61IIe9f7A-HNiluHdndpnutVzNo4it-zJewD18ewXY10rJyGzIsWKDvGuL0QfHKnLbvAYhfuyiznkm65TnPA8pey5h4Y_2oq1qgBSIcc")` }}></div>
                                </div>
                                <div className="flex flex-1 flex-col p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Tropical Coco Exports</h3>
                                        <span className="rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-300">SME</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-gray-400 mb-4">
                                        <MapPin size={18} className="text-primary" />
                                        Kurunegala District
                                    </div>
                                    <div className="space-y-3 mb-5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Main Products</span>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="inline-flex items-center rounded-full bg-background-light px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-gray-700 dark:text-gray-200">Coconut Oil</span>
                                                <span className="inline-flex items-center rounded-full bg-background-light px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-gray-700 dark:text-gray-200">Desiccated</span>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
                                            <p className="text-xs italic text-green-800 dark:text-green-200 flex gap-2">
                                                <School size={16} />
                                                &quot;Funded local school library renovation project.&quot;
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-2">
                                        <button className="w-full rounded-lg border border-primary bg-transparent hover:bg-primary px-4 py-2.5 text-sm font-bold text-primary hover:text-[#111811] transition-all flex items-center justify-center gap-2 group/btn">
                                            View Profile
                                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
                                <div className="h-48 w-full overflow-hidden bg-gray-100 relative">
                                    <div className="absolute top-3 left-3 z-10 flex gap-2">
                                        <span className="bg-white/90 backdrop-blur text-[#111811] text-xs font-bold px-2 py-1 rounded shadow-sm">Fairtrade</span>
                                    </div>
                                    <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgM09k3CCvYXkK0ey3vz_IU2Hw4MjyeyoqCOjxmzfBMZPw4nHaG4CrfhIbXyRJskyM3Z0HT3O_p2GFpT9RvikjZm7z_6IzUpyS5WB9-eLZ4E8yBG_q9HPD7MyvEkxzRtpsP2QsgOToUzLu6InHW2PCrr0rQAUyP6q2hrxro91S9raVO2U1F4FtRVGtRrswINfGbtWXy4FoorOl4ZOzFW2UwSmrGrINEfGPibV8v_sYTbu2-UCOAdzMum57X_6-Fmx8GE2NQV8DIPU")` }}></div>
                                </div>
                                <div className="flex flex-1 flex-col p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Kegalle Rubber Collective</h3>
                                        <span className="rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-300">Co-op</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-gray-400 mb-4">
                                        <MapPin size={18} className="text-primary" />
                                        Kegalle District
                                    </div>
                                    <div className="space-y-3 mb-5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Main Products</span>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="inline-flex items-center rounded-full bg-background-light px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-gray-700 dark:text-gray-200">Raw Rubber Sheets</span>
                                                <span className="inline-flex items-center rounded-full bg-background-light px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-gray-700 dark:text-gray-200">Latex</span>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
                                            <p className="text-xs italic text-green-800 dark:text-green-200 flex gap-2">
                                                <Leaf size={16} />
                                                &quot;Providing healthcare coverage for all seasonal workers.&quot;
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-2">
                                        <button className="w-full rounded-lg border border-primary bg-transparent hover:bg-primary px-4 py-2.5 text-sm font-bold text-primary hover:text-[#111811] transition-all flex items-center justify-center gap-2 group/btn">
                                            View Profile
                                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex justify-center">
                            <nav className="flex items-center gap-1">
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                                    <ChevronLeft size={18} />
                                </button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-[#111811] font-bold shadow-sm">1</button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">2</button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">3</button>
                                <span className="flex h-10 w-10 items-center justify-center text-slate-400">...</span>
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                                    <ChevronRight size={18} />
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
