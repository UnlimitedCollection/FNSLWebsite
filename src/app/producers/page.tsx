"use client";

import { useState } from "react";
import { ProducerCard, Producer } from "@/components/ui/ProducerCard";
import { Button } from "@/components/ui/Button";
import { Search, List, Map as MapIcon, Filter, ChevronDown } from "lucide-react";

// Mock Data
const MOCK_PRODUCERS: Producer[] = [
    {
        id: "1",
        name: "Green Valley Tea Co-op",
        type: "Co-op",
        district: "Nuwara Eliya District",
        image: "https://images.unsplash.com/photo-1597816760319-a612140bb715?auto=format&fit=crop&q=80&w=800",
        badges: ["Fairtrade", "Organic"],
        products: ["Black Tea", "Green Tea"],
        impactSnippet: { icon: "volunteer_activism", text: "Supporting 500+ smallholder families with education grants." }
    },
    {
        id: "2",
        name: "Lanka Spices Alliance",
        type: "SME",
        district: "Kandy District",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
        badges: ["Fairtrade"],
        products: ["Cinnamon", "Pepper", "Cloves"],
        impactSnippet: { icon: "water_drop", text: "Pioneering water conservation techniques in spice gardens." }
    },
    {
        id: "3",
        name: "Tropical Coco Exports",
        type: "SME",
        district: "Kurunegala District",
        image: "https://images.unsplash.com/photo-1543158913-75c128d5789f?auto=format&fit=crop&q=80&w=800",
        badges: ["Fairtrade", "ISO 22000"],
        products: ["Desiccated Coconut", "Coconut Oil"],
        impactSnippet: { icon: "school", text: "Funded local school library renovation project." }
    },
    {
        id: "4",
        name: "Kegalle Rubber Collective",
        type: "Co-op",
        district: "Kegalle District",
        image: "https://images.unsplash.com/photo-1577452656360-32df9f3c754d?auto=format&fit=crop&q=80&w=800",
        badges: ["Fairtrade"],
        products: ["Raw Rubber Sheets", "Latex"],
        impactSnippet: { icon: "health_and_safety", text: "Providing healthcare coverage for all seasonal workers." }
    }
];

export default function ProducersPage() {
    const [viewMode, setViewMode] = useState<"list" | "map">("list");
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header & Search */}
            <section className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 pt-12 pb-10">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
                    <div className="max-w-3xl">
                        <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight mb-4">Our Producers</h1>
                        <p className="text-slate-600 dark:text-gray-400 text-lg font-normal leading-relaxed">
                            Discover Sri Lanka's Fairtrade certified producers committed to ethical farming, sustainable trade, and community growth.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="w-full md:max-w-xl relative flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-primary overflow-hidden h-12">
                            <div className="pl-4 text-slate-400">
                                <Search size={20} />
                            </div>
                            <input
                                className="w-full h-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 px-3 text-base outline-none"
                                placeholder="Search by producer name, product, or location"
                            />
                            <button className="bg-primary hover:bg-primary-dark text-slate-900 font-bold px-6 h-full transition-colors">
                                Search
                            </button>
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center gap-1 bg-white dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                            <button
                                onClick={() => setViewMode("list")}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-bold transition-colors ${viewMode === "list" ? "bg-slate-100 dark:bg-gray-700 text-slate-900 dark:text-white" : "text-slate-500 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
                            >
                                <List size={18} />
                                List
                            </button>
                            <button
                                onClick={() => setViewMode("map")}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-bold transition-colors ${viewMode === "map" ? "bg-slate-100 dark:bg-gray-700 text-slate-900 dark:text-white" : "text-slate-500 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
                            >
                                <MapIcon size={18} />
                                Map
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">

                    {/* Filters Sidebar */}
                    <aside className="w-full">
                        {/* Mobile Trigger */}
                        <div className="lg:hidden mb-4">
                            <Button
                                variant="outline"
                                className="w-full justify-between"
                                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                            >
                                <span className="flex items-center gap-2"><Filter size={18} /> Filters</span>
                                <ChevronDown size={18} className={`transition-transform ${isMobileFiltersOpen ? "rotate-180" : ""}`} />
                            </Button>
                        </div>

                        <div className={`${isMobileFiltersOpen ? "flex" : "hidden"} lg:flex flex-col gap-8 sticky top-24 bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm`}>
                            {/* Category */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">Product Category</h3>
                                <div className="flex flex-col gap-2">
                                    {["Tea", "Spices & Herbs", "Coconut Products", "Rubber", "Fruits & Vegetables"].map(cat => (
                                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                                            <span className="text-slate-700 dark:text-gray-300 text-sm group-hover:text-primary transition-colors">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            {/* Region */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">District</h3>
                                <select className="block w-full rounded-lg border-gray-300 text-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white py-2 px-3">
                                    <option>All Districts</option>
                                    <option>Kandy</option>
                                    <option>Nuwara Eliya</option>
                                    <option>Uva</option>
                                    <option>Galle</option>
                                </select>
                            </div>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            {/* Standards */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">Standards</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Fairtrade", "Organic", "ISO 22000", "Rainforest A."].map(tag => (
                                        <button key={tag} className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-slate-600 hover:border-primary hover:bg-primary/10 hover:text-primary dark:border-gray-600 dark:text-gray-300 transition-colors">
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Grid */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-gray-400">
                            <p>Showing <span className="font-bold text-slate-900 dark:text-white">{MOCK_PRODUCERS.length}</span> results</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {MOCK_PRODUCERS.map(producer => (
                                <ProducerCard key={producer.id} producer={producer} />
                            ))}
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Button variant="outline" disabled>Previous</Button>
                            <div className="flex items-center px-4 font-bold text-slate-900 dark:text-white">1</div>
                            <Button variant="outline">Next</Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
