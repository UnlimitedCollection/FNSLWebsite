import { client } from "@/sanity/client";
import { producersQuery } from "@/sanity/lib/queries";
import { ProducerCard, Producer } from "@/components/ui/ProducerCard";
import { Button } from "@/components/ui/Button";
import { Search, List, Map as MapIcon, Filter, ChevronDown } from "lucide-react";
import ProducersList from "./ProducersList";

// Placeholder interface matching Sanity query result
interface SanityProducer {
    _id: string;
    name: string;
    slug: string;
    location?: string;
    mainImage?: string;
    producerType?: string;
    productCount?: number;
}

export const dynamic = 'force-dynamic';

export default async function ProducersPage() {
    let producersRaw: SanityProducer[] = [];
    try {
        producersRaw = await client.fetch(producersQuery);
    } catch (error) {
        console.warn("Failed to fetch producers:", error);
    }

    // Map Sanity data to Producer component interface
    const producers: Producer[] = producersRaw.map(p => ({
        id: p._id,
        name: p.name,
        type: p.producerType || "Producer",
        district: p.location || "Sri Lanka",
        image: p.mainImage || "https://images.unsplash.com/photo-1597816760319-a612140bb715?auto=format&fit=crop&q=80&w=800",
        badges: ["Fairtrade"], // Default badge until we fetch them dynamically
        products: [`${p.productCount || 0} Products`],
        impactSnippet: { icon: "info", text: "View profile for impact details." }
    }));

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
                    </div>
                </div>
            </section>

            <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <ProducersList initialProducers={producers} />
            </main>
        </div>
    );
}
