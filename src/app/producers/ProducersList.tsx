"use client";

import { useState } from "react";
import { ProducerCard, Producer } from "@/components/ui/ProducerCard";
import { Button } from "@/components/ui/Button";
import { Filter, ChevronDown } from "lucide-react";

interface ProducersListProps {
    initialProducers: Producer[];
}

export default function ProducersList({ initialProducers }: ProducersListProps) {
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    // In a real implementation with deeper filtering, we might want to fetch filters from Sanity too
    // or pass them as props. For now, we'll keep the UI static for filters.

    return (
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
                    <p>Showing <span className="font-bold text-slate-900 dark:text-white">{initialProducers.length}</span> results</p>
                </div>

                {initialProducers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {initialProducers.map(producer => (
                            <ProducerCard key={producer.id} producer={producer} />
                        ))}
                    </div>
                ) : (
                    <div className="p-12 text-center border-2 border-dashed border-gray-200 rounded-xl">
                        <p className="text-slate-500">No producers found. Add content in Sanity Studio.</p>
                    </div>
                )}

                <div className="mt-8 flex justify-center">
                    <Button variant="outline" disabled>Previous</Button>
                    <div className="flex items-center px-4 font-bold text-slate-900 dark:text-white">1</div>
                    <Button variant="outline">Next</Button>
                </div>
            </div>
        </div>
    );
}
