"use client";

import { use } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowRight,
    MapPin,
    Download,
    CheckCircle,
    Leaf,
    ShieldCheck,
    FileText,
    Users
} from "lucide-react";
import { products, producers } from "@/data/mockData";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    // Find product from mock data
    const product = products.find((p) => p.id === id) || products[0];

    // Find related producers (mock logic: find producers that supply this product category or just random)
    // For this demo, we'll pick producers that list this product in their 'products_supplied' or just the 'related_producers' field I added
    const productProducers = product.related_producers
        ? producers.filter(p => product.related_producers?.includes(p.id))
        : [];

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20">
            <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">

                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium overflow-x-auto whitespace-nowrap">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                    <span>/</span>
                    <span className="text-slate-900 dark:text-white truncate">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
                    {/* Gallery (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 relative group">
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold uppercase rounded-full shadow-sm text-slate-900 dark:text-white">Fairtrade</span>
                                <span className="px-3 py-1 bg-primary text-black text-xs font-bold uppercase rounded-full shadow-sm">Organic</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {product.images?.map((img, i) => (
                                <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 relative cursor-pointer hover:opacity-80 transition-opacity">
                                    <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Info (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col h-full">
                        <div className="flex-1">
                            <div className="mb-4">
                                <span className="text-primary font-bold text-sm tracking-wide uppercase">{product.category}</span>
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-1 leading-tight">{product.name}</h1>
                            </div>

                            <p className="text-base text-slate-600 dark:text-gray-300 leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {/* Quick Stats */}
                            <div className="bg-white dark:bg-surface-dark rounded-xl p-5 mb-8 border border-gray-200 dark:border-gray-800">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    {product.quickStats?.map((stat, i) => (
                                        <div key={i}>
                                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">{stat.label}</p>
                                            <p className="font-bold text-slate-900 dark:text-white">{stat.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {["Fairtrade", "EU Organic", "ISO 22000"].map((badge) => (
                                    <div key={badge} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent">
                                        <CheckCircle size={16} className="text-green-600" />
                                        <span className="text-xs font-bold text-slate-900 dark:text-white">{badge}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <div className="flex flex-col gap-3">
                                <Button className="w-full h-12 text-lg font-bold" onClick={() => document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Request Quote / Sample <ArrowRight className="ml-2" />
                                </Button>
                                <p className="text-center text-xs text-slate-500">Direct sourcing. No middleman fees. Transparent pricing.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Icon Row */}
                <div className="py-10 border-y border-dashed border-gray-200 dark:border-gray-800 mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Leaf, title: "Sustainable", desc: "Regenerative farming" },
                            { icon: Users, title: "Farmer Owned", desc: "Smallholder co-ops" },
                            { icon: ShieldCheck, title: "100% Traceable", desc: "Farm to port" },
                            { icon: FileText, title: "Certified", desc: "Fairtrade Premium" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-3">
                                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-green-700 dark:text-primary">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">{item.title}</h3>
                                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
                    {/* Specs (8 col) */}
                    <div className="lg:col-span-8">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                            Technical Specifications
                        </h2>
                        <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 mb-8">
                            <table className="w-full text-left text-sm">
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {product.specs?.map((row, i) => (
                                        <tr key={i} className="group">
                                            <td className="p-4 bg-gray-50 dark:bg-white/5 font-bold text-slate-500 w-1/3">{row.label}</td>
                                            <td className="p-4 font-medium text-slate-900 dark:text-white">{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Documents */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Compliance & Documentation</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {["Organic Certificate", "Product Spec Sheet", "Fairtrade Audit"].map((doc) => (
                                    <div key={doc} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark cursor-pointer hover:border-primary transition-colors group">
                                        <div className="flex items-center gap-3">
                                            <FileText className="text-red-500" size={20} />
                                            <span className="text-sm font-bold text-slate-700 dark:text-white">{doc}</span>
                                        </div>
                                        <Download size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side (Producers) */}
                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="text-lg font-bold mb-0 text-slate-900 dark:text-white">Producers of this product</h2>
                        <div className="flex flex-col gap-4">
                            {productProducers.length > 0 ? (
                                productProducers.map((prod) => (
                                    <Link key={prod.id} href={`/producers/${prod.id}`}>
                                        <div className="bg-white dark:bg-surface-dark rounded-xl p-4 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-16 h-16 rounded-lg bg-gray-200 shrink-0 relative overflow-hidden">
                                                    <Image src={prod.images[0]} alt={prod.name} fill className="object-cover" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">{prod.name}</h4>
                                                    <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                                                        <MapPin size={12} /> {prod.location}
                                                    </div>
                                                    <span className="text-xs font-bold text-primary mt-2 inline-block">View Profile</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p className="text-sm text-slate-500 italic">Contact us for supplier information.</p>
                            )}
                        </div>

                        <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900">
                            <h3 className="text-sm font-bold text-blue-900 dark:text-blue-100 mb-2">Need a custom blend?</h3>
                            <p className="text-xs text-blue-800 dark:text-blue-200 mb-3">Our producers can customize grinding grades and packaging.</p>
                            <span className="text-xs font-bold text-blue-700 dark:text-blue-300 underline cursor-pointer">Contact Support</span>
                        </div>
                    </div>
                </div>

                {/* RFQ Section */}
                <section id="rfq-section" className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg mb-20">
                    <div className="bg-primary/10 p-6 border-b border-primary/10">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-900 dark:text-white">
                            Request a Quote
                        </h2>
                        <p className="text-slate-600 dark:text-gray-400 mt-1">Connect directly with FNSL sourcing team.</p>
                    </div>
                    <div className="p-6 md:p-8">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {["Company Name", "Business Email", "Destination Country", "Estimated Quantity"].map((field) => (
                                <div key={field} className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900 dark:text-white">{field}</label>
                                    <input className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-black/20 text-sm h-10 px-3" />
                                </div>
                            ))}
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-slate-900 dark:text-white">Notes</label>
                                <textarea className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-black/20 text-sm p-3" rows={4}></textarea>
                            </div>
                            <div className="md:col-span-2 flex justify-end">
                                <Button size="lg" className="font-bold">Submit Request</Button>
                            </div>
                        </form>
                    </div>
                </section>

            </main>
        </div>
    );
}
