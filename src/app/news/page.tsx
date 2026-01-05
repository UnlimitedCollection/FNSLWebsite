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
    ChevronRight
} from "lucide-react";

// Mock Data
const newsItems = [
    {
        id: 1,
        type: "News",
        date: "Oct 20, 2023",
        title: "Spices of Sri Lanka: Empowering Women in Agriculture",
        excerpt: "A new cooperative model is helping female spice growers in Matale achieve financial independence through Fairtrade certification and direct market access.",
        image: "https://images.unsplash.com/photo-1596568359553-a56de6970068?auto=format&fit=crop&q=80",
        slug: "spices-empowering-women"
    },
    {
        id: 2,
        type: "Press Release",
        date: "Oct 15, 2023",
        title: "FNSL Partners with European Retail Giants",
        excerpt: "Strategic partnership announced to bring more ethically sourced Sri Lankan products to shelves across Germany and the UK starting next quarter.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
        slug: "fnsl-european-partners"
    },
    {
        id: 3,
        type: "Events",
        date: "Oct 12, 2023",
        title: "Recap: Sustainable Soil Management Workshop",
        excerpt: "Over 200 farmers gathered in Nuwara Eliya to learn about organic composting techniques that improve yield without harmful chemicals.",
        image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80",
        slug: "soil-management-workshop"
    },
    {
        id: 4,
        type: "News",
        date: "Oct 05, 2023",
        title: "Coconut Sector: Navigating Climate Challenges",
        excerpt: "How Fairtrade premiums are helping coconut producers invest in drought-resistant saplings and irrigation systems.",
        image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80",
        slug: "coconut-climate-challenges"
    }
];

const upcomingEvents = [
    {
        day: "12",
        month: "Nov",
        title: "Annual Producer Summit",
        time: "9:00 AM",
        location: "Colombo",
        type: "physical"
    },
    {
        day: "28",
        month: "Nov",
        title: "Fairtrade Certification Training",
        time: "2:00 PM",
        location: "Online Webinar",
        type: "virtual"
    },
    {
        day: "05",
        month: "Dec",
        title: "Youth in Agriculture Forum",
        time: "10:00 AM",
        location: "Kandy",
        type: "physical"
    }
];

export default function NewsPage() {
    const [activeFilter, setActiveFilter] = useState("All Updates");

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark font-display">
            <main className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-8">

                {/* Page Heading */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-2 text-slate-900 dark:text-white">News & Events</h1>
                    <p className="text-slate-600 dark:text-gray-400 text-lg">Latest updates from Fairtrade NAPP–Sri Lanka</p>
                </div>

                {/* Featured Story */}
                <section className="mb-12">
                    <div className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 group cursor-pointer hover:shadow-md transition-shadow">
                        <div className="flex flex-col lg:flex-row items-stretch">
                            <div className="w-full lg:w-3/5 h-64 lg:h-auto bg-gray-200 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&q=80"
                                    alt="Tea pluckers"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-1 rounded bg-primary/20 text-green-800 dark:text-primary text-xs font-bold uppercase tracking-wider">Featured Story</span>
                                    <span className="text-slate-500 text-sm font-medium">Oct 24, 2023</span>
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold leading-tight group-hover:text-primary transition-colors text-slate-900 dark:text-white">
                                    Sri Lankan Tea Producers See 20% Growth in Ethical Exports
                                </h2>
                                <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                                    Discover how new Fairtrade initiatives are opening global markets for local tea estates, ensuring fair wages and sustainable agricultural practices across the central highlands.
                                </p>
                                <div className="pt-2">
                                    <Link href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-wide text-primary hover:text-primary-dark transition-colors">
                                        Read Full Story <ArrowRight size={18} className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                        {newsItems.map((item) => (
                            <article key={item.id} className="group flex flex-col sm:flex-row gap-5 p-5 rounded-xl bg-white dark:bg-surface-dark border border-transparent hover:border-gray-100 dark:hover:border-gray-800 hover:shadow-sm transition-all">
                                <div className="w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-lg bg-gray-200 relative overflow-hidden">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 text-xs font-medium">
                                        <span className="text-primary uppercase tracking-wide font-bold">{item.type}</span>
                                        <span className="text-slate-400">•</span>
                                        <span className="text-slate-500 dark:text-gray-400">{item.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-gray-300 line-clamp-2">
                                        {item.excerpt}
                                    </p>
                                </div>
                            </article>
                        ))}

                        {/* Pagination */}
                        <div className="mt-8 flex justify-center">
                            <nav className="flex items-center gap-1 bg-white dark:bg-surface-dark p-2 rounded-lg border border-gray-100 dark:border-gray-800">
                                <button className="size-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-500 disabled:opacity-50">
                                    <ChevronLeft size={20} />
                                </button>
                                <button className="size-10 flex items-center justify-center rounded-md bg-primary text-black font-bold text-sm">1</button>
                                <button className="size-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-500 font-medium text-sm">2</button>
                                <button className="size-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-500 font-medium text-sm">3</button>
                                <span className="flex items-end justify-center px-2 pb-2 text-slate-500">...</span>
                                <button className="size-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-500 font-medium text-sm">8</button>
                                <button className="size-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-500">
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
                            <div className="flex flex-col gap-5">
                                {upcomingEvents.map((event, i) => (
                                    <div key={i} className="flex gap-4 items-start group cursor-pointer">
                                        <div className={`shrink-0 w-12 h-14 rounded-lg flex flex-col items-center justify-center border font-bold ${i === 0 ? "bg-primary/10 border-primary/20 text-primary" : "bg-gray-50 dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-slate-500"}`}>
                                            <span className="text-xs uppercase">{event.month}</span>
                                            <span className="text-lg leading-none text-slate-900 dark:text-white">{event.day}</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors">{event.title}</h5>
                                            <div className="flex items-center gap-1 mt-1 text-slate-500 text-xs">
                                                {event.type === 'virtual' ? <Video size={14} /> : <MapPin size={14} />}
                                                <span className="ml-1">{event.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1 mt-0.5 text-slate-400 text-xs">
                                                <Clock size={12} /> {event.time}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
