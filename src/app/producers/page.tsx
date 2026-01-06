"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, List, Map, Filter, MapPin, ArrowRight, Droplets, School, Heart, Leaf, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { producers } from "@/data/mockData";

const ITEMS_PER_PAGE = 6;

type Producer = typeof producers[0];

// Helper to check category matches more robustly
const matchesCategory = (producer: Producer, category: string) => {
    const products = producer.products_supplied.map((p: string) => p.toLowerCase());
    const type = producer.type.toLowerCase();

    switch (category) {
        case "Tea (Black/Green)":
            return products.some((p: string) => p.includes("tea"));
        case "Spices & Herbs":
            return products.some((p: string) => p.includes("cinnamon") || p.includes("pepper") || p.includes("spice") || p.includes("clove") || p.includes("cardamom"));
        case "Coconut Products":
            return products.some((p: string) => p.includes("coconut")) || type.includes("coconut");
        case "Rubber":
            return products.some((p: string) => p.includes("rubber") || p.includes("latex"));
        case "Fruits & Vegetables":
            return products.some((p: string) => p.includes("fruit") || p.includes("mango") || p.includes("pineapple") || p.includes("banana") || p.includes("vegetable"));
        default:
            return false;
    }
};

export default function ProducersPage() {
    const [filterOpen, setFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedRegion, setSelectedRegion] = useState("All Districts");
    const [selectedStandard, setSelectedStandard] = useState("All");

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);

    // Reset pagination when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategories, selectedRegion, selectedStandard]);

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const filteredProducers = producers.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.products_supplied.some(prod => prod.toLowerCase().includes(searchQuery.toLowerCase())) ||
            p.location.toLowerCase().includes(searchQuery.toLowerCase());

        const isCategoryMatch = selectedCategories.length === 0 ||
            selectedCategories.some(cat => matchesCategory(p, cat));

        const matchesRegion = selectedRegion === "All Districts" || p.location.includes(selectedRegion);

        const matchesStandard = selectedStandard === "All" || p.certifications.includes(selectedStandard);

        return matchesSearch && isCategoryMatch && matchesRegion && matchesStandard;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredProducers.length / ITEMS_PER_PAGE);
    const paginatedProducers = filteredProducers.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-white font-sans">

            {/* Top Header & Search Section (within Main) */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 py-8">
                <section className="mb-10 flex flex-col gap-6">
                    <div className="flex flex-col gap-2 max-w-3xl">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Our Producers</h1>
                        <p className="text-gray-400 text-lg font-normal leading-relaxed">
                            Discover Sri Lanka&apos;s Fairtrade certified producers committed to ethical farming, sustainable trade, and community growth.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between w-full mt-2">
                        {/* Search Bar */}
                        <div className="w-full md:max-w-xl relative">
                            <div className="flex w-full items-center rounded-xl bg-surface-dark border border-gray-700 shadow-sm focus-within:ring-2 focus-within:ring-primary focus-within:border-primary overflow-hidden h-12">
                                <div className="flex items-center justify-center pl-4 text-slate-400">
                                    <Search size={20} />
                                </div>
                                <input
                                    className="w-full h-full bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-400 px-3 text-base"
                                    placeholder="Search by producer name, product, or location"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="bg-primary hover:bg-primary-dark text-[#111811] font-bold px-5 h-full transition-colors">
                                    Search
                                </button>
                            </div>
                        </div>
                        {/* View Toggle */}
                        <div className="flex items-center gap-3 bg-surface-dark p-1.5 rounded-lg border border-gray-700 shadow-sm self-end md:self-auto">
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-gray-700 text-white text-sm font-bold shadow-sm">
                                <List size={18} />
                                List
                            </button>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-gray-700 text-gray-400 text-sm font-medium transition-colors">
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
                            <button onClick={() => setFilterOpen(!filterOpen)} className="w-full flex items-center justify-between p-4 bg-surface-dark rounded-xl border border-gray-700 shadow-sm font-bold text-white">
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
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Product Category</h3>
                                <div className="flex flex-col gap-2">
                                    {["Tea (Black/Green)", "Spices & Herbs", "Coconut Products", "Rubber", "Fruits & Vegetables"].map(cat => (
                                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                className="w-4 h-4 rounded border-gray-600 text-primary focus:ring-primary bg-gray-700"
                                                type="checkbox"
                                                checked={selectedCategories.includes(cat)}
                                                onChange={() => toggleCategory(cat)}
                                            />
                                            <span className="text-gray-300 text-sm group-hover:text-primary transition-colors">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <hr className="border-gray-200 dark:border-gray-700" />

                            {/* Region Filter */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">District / Province</h3>
                                <select
                                    className="block w-full rounded-lg border-gray-600 bg-surface-dark text-sm focus:border-primary focus:ring-primary text-white py-2"
                                    value={selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)}
                                >
                                    <option>All Districts</option>
                                    <option>Kandy</option>
                                    <option>Nuwara Eliya</option>
                                    <option>Uva</option>
                                    <option>Ratnapura</option>
                                    <option>Galle</option>
                                    <option>Kurunegala</option>
                                    <option>Hambantota</option>
                                </select>
                            </div>
                            <hr className="border-gray-200 dark:border-gray-700" />

                            {/* Standards Filter */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Standards</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["All", "Fairtrade", "Organic", "ISO 22000", "Rainforest Alliance"].map((s, i) => (
                                        <button
                                            key={s}
                                            onClick={() => setSelectedStandard(s)}
                                            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${selectedStandard === s ? 'bg-primary/20 border-primary text-primary' : 'border-gray-600 text-gray-300 hover:border-primary hover:bg-primary/10 hover:text-primary'}`}
                                        >
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
                        <div className="flex items-center justify-between text-sm text-gray-400">
                            <p>Showing <span className="font-bold text-white">{filteredProducers.length}</span> of <span className="font-bold text-white">{producers.length}</span> producers</p>
                            <div className="flex items-center gap-2">
                                <span>Sort by:</span>
                                <select className="bg-transparent font-bold text-white border-none p-0 pr-6 focus:ring-0 cursor-pointer text-sm">
                                    <option>Recommended</option>
                                    <option>Name (A-Z)</option>
                                    <option>Capacity (High-Low)</option>
                                </select>
                            </div>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {paginatedProducers.length > 0 ? paginatedProducers.map((producer) => (
                                <div key={producer.id} className="group flex flex-col rounded-xl border border-gray-700 bg-surface-dark shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                                    <div className="h-48 w-full overflow-hidden bg-gray-100 relative">
                                        <div className="absolute top-3 left-3 z-10 flex gap-2">
                                            {producer.certifications.slice(0, 2).map(cert => (
                                                <span key={cert} className="bg-white/90 backdrop-blur text-[#111811] text-xs font-bold px-2 py-1 rounded shadow-sm">{cert}</span>
                                            ))}
                                        </div>
                                        {producer.images?.[0] ? (
                                            <Image
                                                src={producer.images[0]}
                                                alt={producer.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-700">
                                                <Leaf className="text-gray-400" size={48} />
                                            </div>
                                        )}

                                    </div>
                                    <div className="flex flex-1 flex-col p-5">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{producer.name}</h3>
                                            <span className="rounded-md bg-gray-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300">{producer.type}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-4">
                                            <MapPin size={18} className="text-primary" />
                                            {producer.location}
                                        </div>
                                        <div className="space-y-3 mb-5">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Main Products</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {producer.products_supplied.slice(0, 3).map(prod => (
                                                        <span key={prod} className="inline-flex items-center rounded-full bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-200">{prod}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            {producer.impact && producer.impact.length > 0 && (
                                                <div className="bg-green-900/20 p-3 rounded-lg border border-green-900/30">
                                                    <p className="text-xs italic text-green-200 flex gap-2">
                                                        <Heart size={16} />
                                                        &quot;{producer.impact[0].title}: {producer.impact[0].text}&quot;
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="mt-auto pt-2">
                                            <Link href={`/producers/${producer.id}`} className="w-full rounded-lg border border-primary bg-transparent hover:bg-primary px-4 py-2.5 text-sm font-bold text-primary hover:text-[#111811] transition-all flex items-center justify-center gap-2 group/btn">
                                                View Profile
                                                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="col-span-1 md:col-span-2 py-20 text-center">
                                    <Leaf className="mx-auto text-slate-300 mb-4" size={48} />
                                    <h3 className="text-xl font-bold text-white">No producers found</h3>
                                    <p className="text-gray-400">Try adjusting your filters or search terms.</p>
                                    <button
                                        onClick={() => { setSearchQuery(""); setSelectedCategories([]); setSelectedRegion("All Districts"); setSelectedStandard("All"); }}
                                        className="mt-4 text-primary font-bold hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        {filteredProducers.length > 0 && (
                            <div className="mt-8 flex justify-center">
                                <nav className="flex items-center gap-1">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-surface-dark text-gray-400 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold transition-colors ${currentPage === page
                                                ? 'bg-primary text-[#111811] shadow-sm'
                                                : 'border border-gray-700 bg-surface-dark text-gray-300 hover:bg-gray-800'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-surface-dark text-gray-400 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
