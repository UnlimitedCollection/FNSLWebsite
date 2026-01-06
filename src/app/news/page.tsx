"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Clock, MapPin, Video, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { news } from "@/data/mockData";

export default function NewsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-dark text-white font-sans">
            <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
                {/* Page Heading */}
                <div className="mb-8">
                    <p className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-2 text-white">News & Events</p>
                    <p className="text-gray-400 text-lg">Latest updates from Fairtrade NAPP–Sri Lanka</p>
                </div>

                {/* Featured Story */}
                <section className="mb-12">
                    <div className="rounded-xl overflow-hidden shadow-sm bg-surface-dark border border-gray-700 group cursor-pointer hover:shadow-md transition-shadow">
                        <div className="flex flex-col lg:flex-row items-stretch">
                            {/* Image */}
                            <div className="w-full lg:w-3/5 h-64 lg:h-auto bg-cover bg-center min-h-[300px]" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAb4Rt98kAfIuxe3Z4iuAJu5jdHcnXQvO-6jtFOx24qFNInQX3L9qO8D7jKT1WJa6AMMFYQG3X292S-WZ812lPxbgYQ94gTsRCRag0yaAz5Bm_yjswrncPKPguB7E9S8Hk_XQvb18YQlZPUv63SVBj3Ijr41nLixBW0HulaXLonnb4QayABTaLUKNVt1r1KQRDEjRu9KUkAx8Fs9tZCuNg01Hm25cXU5Jl3HRRaEVVu5YhdKQ04ro-dk22vvwOZph5-tEeQxWSHDtk')` }}>
                            </div>
                            {/* Content */}
                            <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-1 rounded bg-primary/20 text-green-300 text-xs font-bold uppercase tracking-wider">Featured Story</span>
                                    <span className="text-gray-500 text-sm font-medium">Oct 24, 2023</span>
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold leading-tight group-hover:text-primary transition-colors text-white">
                                    Sri Lankan Tea Producers See 20% Growth in Ethical Exports
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Discover how new Fairtrade initiatives are opening global markets for local tea estates, ensuring fair wages and sustainable agricultural practices across the central highlands.
                                </p>
                                <div className="pt-2">
                                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:text-primary-dark transition-colors">
                                        Read Full Story
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Search & Filter Toolbar */}
                <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-10 pb-6 border-b border-gray-700">
                    {/* Chips */}
                    <div className="flex flex-wrap gap-2">
                        <button className="px-4 py-2 rounded-lg bg-primary text-[#111811] text-sm font-bold transition-colors">All Updates</button>
                        <button className="px-4 py-2 rounded-lg bg-surface-dark border border-gray-700 hover:bg-gray-800 text-gray-300 text-sm font-medium transition-colors">News</button>
                        <button className="px-4 py-2 rounded-lg bg-surface-dark border border-gray-700 hover:bg-gray-800 text-gray-300 text-sm font-medium transition-colors">Events</button>
                        <button className="px-4 py-2 rounded-lg bg-surface-dark border border-gray-700 hover:bg-gray-800 text-gray-300 text-sm font-medium transition-colors">Press Releases</button>
                    </div>
                    {/* Search */}
                    <div className="w-full lg:w-auto min-w-[300px]">
                        <div className="relative flex items-center h-10 w-full rounded-lg bg-white dark:bg-[#1a2c1a] border border-gray-200 dark:border-[#2a3c2a] focus-within:border-primary focus-within:ring-1 focus-within:ring-primary overflow-hidden">
                            <div className="pl-3 pr-2 text-[#618961] dark:text-gray-500">
                                <Search size={20} />
                            </div>
                            <input className="w-full h-full border-none bg-transparent p-0 text-sm text-[#111811] dark:text-white placeholder:text-[#618961] focus:ring-0" placeholder="Search news, events..." type="text" />
                        </div>
                    </div>
                </div>

                {/* Main Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: News Feed (8 cols) */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {news.map((item) => (
                            <article key={item.id} className="group flex flex-col sm:flex-row gap-5 p-5 rounded-xl bg-white dark:bg-[#1a2c1a] border border-transparent hover:border-[#f0f4f0] dark:hover:border-[#2a3c2a] hover:shadow-sm transition-all">
                                <div className="w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}></div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 text-xs font-medium">
                                        <span className="text-primary uppercase tracking-wide font-bold">{item.type}</span>
                                        <span className="text-[#618961] dark:text-gray-500">•</span>
                                        <span className="text-[#618961] dark:text-gray-500">{item.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#111811] dark:text-white group-hover:text-primary transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[#618961] dark:text-gray-300 line-clamp-2">
                                        {item.excerpt}
                                    </p>
                                </div>
                            </article>
                        ))}

                        {/* Pagination */}
                        <div className="mt-8 flex justify-center">
                            <nav className="flex items-center gap-1 bg-white dark:bg-[#1a2c1a] p-2 rounded-lg border border-[#f0f4f0] dark:border-[#2a3c2a]">
                                <button className="size-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-[#2a3c2a] text-[#618961] disabled:opacity-50">
                                    <ChevronLeft size={18} />
                                </button>
                                <button className="size-10 flex items-center justify-center rounded-md bg-primary text-[#111811] font-bold text-sm">1</button>
                                <button className="size-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-[#2a3c2a] text-[#618961] font-medium text-sm">2</button>
                                <button className="size-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-[#2a3c2a] text-[#618961] font-medium text-sm">3</button>
                                <span className="flex items-end justify-center px-2 pb-2 text-[#618961]">...</span>
                                <button className="size-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-[#2a3c2a] text-[#618961] font-medium text-sm">8</button>
                                <button className="size-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-[#2a3c2a] text-[#618961]">
                                    <ChevronRight size={18} />
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Right Column: Sidebar (4 cols) */}
                    <aside className="lg:col-span-4 flex flex-col gap-8">
                        {/* Upcoming Events Widget */}
                        <div className="rounded-xl bg-white dark:bg-[#1a2c1a] border border-[#f0f4f0] dark:border-[#2a3c2a] p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-lg font-bold text-[#111811] dark:text-white">Upcoming Events</h4>
                                <Link className="text-sm font-semibold text-primary hover:underline" href="#">View All</Link>
                            </div>
                            <div className="flex flex-col gap-5">
                                {/* Event 1 */}
                                <div className="flex gap-4 items-start">
                                    <div className="shrink-0 w-12 h-14 rounded-lg bg-primary/10 flex flex-col items-center justify-center border border-primary/20">
                                        <span className="text-xs font-bold text-primary uppercase">Nov</span>
                                        <span className="text-lg font-black text-[#111811] dark:text-white leading-none">12</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-[#111811] dark:text-white text-sm hover:text-primary cursor-pointer transition-colors">
                                            Annual Producer Summit
                                        </h5>
                                        <div className="flex items-center gap-1 mt-1 text-[#618961] dark:text-gray-400 text-xs">
                                            <Clock size={14} />
                                            <span>9:00 AM</span>
                                            <span className="mx-1">•</span>
                                            <MapPin size={14} />
                                            <span>Colombo</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Event 2 */}
                                <div className="flex gap-4 items-start">
                                    <div className="shrink-0 w-12 h-14 rounded-lg bg-gray-100 dark:bg-[#2a3c2a] flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700">
                                        <span className="text-xs font-bold text-[#618961] uppercase">Nov</span>
                                        <span className="text-lg font-black text-[#111811] dark:text-white leading-none">28</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-[#111811] dark:text-white text-sm hover:text-primary cursor-pointer transition-colors">
                                            Fairtrade Certification Training
                                        </h5>
                                        <div className="flex items-center gap-1 mt-1 text-[#618961] dark:text-gray-400 text-xs">
                                            <Video size={14} />
                                            <span>Online Webinar</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Event 3 */}
                                <div className="flex gap-4 items-start">
                                    <div className="shrink-0 w-12 h-14 rounded-lg bg-gray-100 dark:bg-[#2a3c2a] flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700">
                                        <span className="text-xs font-bold text-[#618961] uppercase">Dec</span>
                                        <span className="text-lg font-black text-[#111811] dark:text-white leading-none">05</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-[#111811] dark:text-white text-sm hover:text-primary cursor-pointer transition-colors">
                                            Youth in Agriculture Forum
                                        </h5>
                                        <div className="flex items-center gap-1 mt-1 text-[#618961] dark:text-gray-400 text-xs">
                                            <MapPin size={14} />
                                            <span>Kandy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Subscribe Widget */}
                        <div className="rounded-xl bg-[#102210] p-6 text-white relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2 text-primary">
                                    <Mail size={16} />
                                    <span className="text-xs font-bold uppercase tracking-widest">Newsletter</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Stay in the Loop</h4>
                                <p className="text-gray-400 text-sm mb-4">Get the latest stories from our producers and impact updates delivered to your inbox.</p>
                                <form className="flex flex-col gap-3">
                                    <input className="w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-500 text-sm py-2 px-3 focus:ring-1 focus:ring-primary focus:border-primary" placeholder="name@example.com" type="email" />
                                    <button className="w-full rounded-lg bg-primary hover:bg-primary-dark text-[#111811] font-bold text-sm py-2 px-4 transition-colors" type="button">
                                        Subscribe
                                    </button>
                                </form>
                                <p className="text-[10px] text-gray-500 mt-3 text-center">No spam, unsubscribe anytime.</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
