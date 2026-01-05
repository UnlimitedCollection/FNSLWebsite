"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
    ArrowRight,
    Search,
    MapPin,
    Clock,
    Video,
    Mail,
    ChevronLeft,
    ChevronRight,
    Calendar
} from "lucide-react";

// Interface for News Items from Sanity
export interface NewsItem {
    _id: string;
    title: string;
    slug: string;
    type: string;
    publishedAt: string;
    mainImage?: string;
    excerpt?: string;
    eventDate?: string;
    location?: string;
}

interface NewsListProps {
    initialNews: NewsItem[];
}

export default function NewsList({ initialNews }: NewsListProps) {
    const [activeFilter, setActiveFilter] = useState("All Updates");

    // Filter items locally for now
    const filteredNews = activeFilter === "All Updates"
        ? initialNews
        : initialNews.filter(item => {
            if (activeFilter === "Events") return item.type === "event"; // Sanity value is lowercase usually
            if (activeFilter === "Press Release") return item.type === "pressRelease";
            if (activeFilter === "News") return item.type === "news" || !item.type;
            return true;
        });

    // Extract upcoming events from the fetched data
    // Assuming 'event' type items with future dates are upcoming events
    // For now, we'll just mock/filter from the list or assume the sidebar events are separate or same.
    // Let's filter from the main list for the "Upcoming Events" widget if possible, or keep it static/mocked if data is sparse.
    // I will use the passed data to populate the widget if type is 'event'.

    const events = initialNews.filter(item => item.type === 'event').slice(0, 3);

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark font-display">
            <main className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-8">

                {/* Page Heading */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-2 text-slate-900 dark:text-white">News & Events</h1>
                    <p className="text-slate-600 dark:text-gray-400 text-lg">Latest updates from Fairtrade NAPP–Sri Lanka</p>
                </div>

                {/* Featured Story - Just picking the first one for now */}
                {initialNews.length > 0 && (
                    <section className="mb-12">
                        <div className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 group cursor-pointer hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row items-stretch">
                                <div className="w-full lg:w-3/5 h-64 lg:h-auto bg-gray-200 relative">
                                    {initialNews[0].mainImage && (
                                        <Image
                                            src={initialNews[0].mainImage}
                                            alt={initialNews[0].title}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-1 rounded bg-primary/20 text-green-800 dark:text-primary text-xs font-bold uppercase tracking-wider">Latest Story</span>
                                        <span className="text-slate-500 text-sm font-medium">{new Date(initialNews[0].publishedAt).toLocaleDateString()}</span>
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold leading-tight group-hover:text-primary transition-colors text-slate-900 dark:text-white">
                                        {initialNews[0].title}
                                    </h2>
                                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                                        {initialNews[0].excerpt}
                                    </p>
                                    <div className="pt-2">
                                        <Link href={`/news/${initialNews[0].slug}`} className="inline-flex items-center text-sm font-bold uppercase tracking-wide text-primary hover:text-primary-dark transition-colors">
                                            Read Full Story <ArrowRight size={18} className="ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Search & Filter Toolbar */}
                <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-10 pb-6 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex flex-wrap gap-2">
                        {["All Updates", "News", "Events", "Press Releases"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === filter
                                    ? "bg-primary text-black"
                                    : "bg-gray-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="w-full lg:w-auto min-w-[300px]">
                        <div className="relative flex items-center h-10 w-full rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 focus-within:border-primary overflow-hidden transition-colors">
                            <div className="pl-3 pr-2 text-slate-400">
                                <Search size={20} />
                            </div>
                            <input
                                className="w-full h-full border-none bg-transparent p-0 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0"
                                placeholder="Search news, events..."
                                type="text"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: News Feed */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {filteredNews.length > 0 ? filteredNews.map((item) => (
                            <article key={item._id} className="group flex flex-col sm:flex-row gap-5 p-5 rounded-xl bg-white dark:bg-surface-dark border border-transparent hover:border-gray-100 dark:hover:border-gray-800 hover:shadow-sm transition-all">
                                <div className="w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-lg bg-gray-200 relative overflow-hidden">
                                    {item.mainImage ? (
                                        <Image src={item.mainImage} alt={item.title} fill className="object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">No Image</div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 text-xs font-medium">
                                        <span className="text-primary uppercase tracking-wide font-bold">{item.type}</span>
                                        <span className="text-slate-400">•</span>
                                        <span className="text-slate-500 dark:text-gray-400">{new Date(item.publishedAt).toLocaleDateString()}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-gray-300 line-clamp-2">
                                        {item.excerpt}
                                    </p>
                                </div>
                            </article>
                        )) : (
                            <div className="p-8 text-center text-slate-500 italic">No news items found.</div>
                        )}

                        {/* Pagination */}
                        <div className="mt-8 flex justify-center">
                            <nav className="flex items-center gap-1 bg-white dark:bg-surface-dark p-2 rounded-lg border border-gray-100 dark:border-gray-800">
                                <button className="size-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-500 disabled:opacity-50">
                                    <ChevronLeft size={20} />
                                </button>
                                <button className="size-10 flex items-center justify-center rounded-md bg-primary text-black font-bold text-sm">1</button>
                                <button className="size-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-500 disabled:opacity-50 text-sm">
                                    <ChevronRight size={20} />
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <aside className="lg:col-span-4 flex flex-col gap-8">

                        {/* Upcoming Events Widget */}
                        <div className="rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Upcoming Events</h4>
                                <Link href="#" className="text-sm font-semibold text-primary hover:underline">View All</Link>
                            </div>
                            {events.length > 0 ? (
                                <div className="flex flex-col gap-5">
                                    {events.map((event, i) => {
                                        const date = new Date(event.eventDate || event.publishedAt);
                                        return (
                                            <div key={i} className="flex gap-4 items-start group cursor-pointer">
                                                <div className={`shrink-0 w-12 h-14 rounded-lg flex flex-col items-center justify-center border font-bold ${i === 0 ? "bg-primary/10 border-primary/20 text-primary" : "bg-gray-50 dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-slate-500"}`}>
                                                    <span className="text-xs uppercase">{date.toLocaleString('default', { month: 'short' })}</span>
                                                    <span className="text-lg leading-none text-slate-900 dark:text-white">{date.getDate()}</span>
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors line-clamp-2">{event.title}</h5>
                                                    <div className="flex items-center gap-1 mt-1 text-slate-500 text-xs">
                                                        <MapPin size={14} />
                                                        <span className="ml-1">{event.location || "Online"}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <p className="text-sm text-slate-500">No upcoming events listed.</p>
                            )}
                        </div>

                        {/* Subscribe Widget */}
                        <div className="rounded-xl bg-[#102210] p-6 text-white relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2 text-primary">
                                    <Mail size={18} />
                                    <span className="text-xs font-bold uppercase tracking-widest">Newsletter</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Stay in the Loop</h4>
                                <p className="text-gray-400 text-sm mb-4">Get the latest stories from our producers and impact updates delivered to your inbox.</p>
                                <form className="flex flex-col gap-3">
                                    <input className="w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-500 text-sm py-2 px-3 focus:ring-1 focus:ring-primary focus:outline-none" placeholder="name@example.com" type="email" />
                                    <Button className="w-full font-bold text-black" type="button">Subscribe</Button>
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
