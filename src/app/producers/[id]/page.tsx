"use client";

import { use } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
    MapPin,
    History,
    Users,
    Download,
    Info,
    Leaf,
    School,
    Verified,
    ArrowRight
} from "lucide-react";

export default function ProducerProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    // Mock data - In a real app, fetch based on ID
    const producer = {
        name: "Golden Valley Spices",
        type: "Cooperative Society",
        location: "Kandy, Sri Lanka",
        est: "1998",
        members: "450 Members",
        certifications: ["Fairtrade Certified", "EU Organic", "JAS"],
        description: [
            "Rooted in the central highlands of Kandy, Golden Valley Spices was established in 1998 with a simple yet powerful mission: to empower small-scale spice farmers while sharing Sri Lanka's finest organic spices with the world. What started as a small collective of 20 families has grown into a robust cooperative of over 450 members.",
            "Our farmers practice traditional, regenerative agriculture, intercropping spices with fruit trees to maintain biodiversity and soil health. By adhering to strict Fairtrade standards, we ensure that every purchase contributes directly to the betterment of our community, funding local schools and healthcare initiatives."
        ],
        quickFacts: [
            { label: "Producer Type", value: "Cooperative Society" },
            { label: "Certifications", value: "Fairtrade, Organic, ISO 22000" },
            { label: "Primary Crops", value: "Cinnamon, Pepper, Cloves" },
            { label: "Export Markets", value: "Germany, UK, USA, Japan" },
            { label: "Processing", value: "On-site grading & drying" },
            { label: "Annual Volume", value: "~450 Metric Tons" },
        ],
        impact: [
            { icon: Users, title: "Women's Empowerment", text: "40% of our board members are women. We run specialized training programs for female entrepreneurs in the community." },
            { icon: School, title: "Community Investment", text: "Provided school supplies for 300+ children of member farmers and funded a new computer lab." }
        ],
        products: [
            { name: "Ceylon Cinnamon", sub: "Quills, Powder, Oil", grade: "Grade C4-C5", matches: "https://images.unsplash.com/photo-1558994340-3b603314051a?auto=format&fit=crop&q=80" },
            { name: "Black Pepper", sub: "Whole, Cracked, Ground", grade: "500-550 GL", matches: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80" },
            { name: "Organic Cloves", sub: "Hand-picked buds", grade: "Lal Pari", matches: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80" } // Reusing placeholders
        ]
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20">
            <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">

                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="text-slate-300">/</span>
                    <Link href="/producers" className="hover:text-primary transition-colors">Producers</Link>
                    <span className="text-slate-300">/</span>
                    <span className="text-slate-900 dark:text-white">{producer.name}</span>
                </nav>

                {/* Hero Section */}
                <section className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-8 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
                        <div className="relative shrink-0">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl bg-gray-200 border-4 border-white dark:border-gray-700 shadow-lg overflow-hidden relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1597816760319-a612140bb715?auto=format&fit=crop&q=80"
                                    alt={producer.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 bg-primary text-black text-xs font-bold px-2 py-1 rounded-full border-2 border-white dark:border-gray-800 shadow-sm flex items-center gap-1">
                                <Verified size={14} /> Verified
                            </div>
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">{producer.name}</h1>
                                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-bold px-2.5 py-0.5 rounded border border-green-200 dark:border-green-800 uppercase tracking-wide">
                                    {producer.type}
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-slate-500 dark:text-gray-400 mb-4 text-sm font-medium">
                                <div className="flex items-center gap-1.5"><MapPin size={18} className="text-primary" /> {producer.location}</div>
                                <div className="flex items-center gap-1.5"><History size={18} className="text-primary" /> Est. {producer.est}</div>
                                <div className="flex items-center gap-1.5"><Users size={18} className="text-primary" /> {producer.members}</div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {producer.certifications.map((cert) => (
                                    <span key={cert} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3 w-full md:w-auto">
                            <Button variant="outline" className="flex-1 md:flex-none">
                                <Download size={18} className="mr-2" /> Brochure
                            </Button>
                            <Button className="flex-1 md:flex-none font-bold text-slate-900">
                                Contact
                            </Button>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Content (8 cols) */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Quick Facts */}
                        <section className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                                <Info size={20} className="text-primary" /> Quick Facts
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {producer.quickFacts.map((fact, i) => (
                                    <div key={i}>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">{fact.label}</p>
                                        <p className="font-medium text-slate-900 dark:text-white text-sm">{fact.value}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Story */}
                        <section className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Our Story</h3>
                            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                                <div className="float-right ml-6 mb-4 w-1/3 min-w-[200px] hidden md:block">
                                    <div className="aspect-[4/3] rounded-lg bg-gray-200 relative overflow-hidden">
                                        <Image src="https://images.unsplash.com/photo-1546875508-251f93f1ac4e?auto=format&fit=crop&q=80" alt="Plantation" fill className="object-cover" />
                                    </div>
                                    <p className="text-xs text-center mt-2 italic text-gray-500">The misty hills of Kandy</p>
                                </div>
                                {producer.description.map((para, i) => (
                                    <p key={i} className="mb-4">{para}</p>
                                ))}
                            </div>
                        </section>

                        {/* Impact */}
                        <section className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Social Impact</h3>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">Fairtrade Premium</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {producer.impact.map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-slate-50 dark:bg-black/20 rounded-lg">
                                        <div className="bg-primary/20 text-green-700 dark:text-primary p-2 rounded-full h-fit shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                                            <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Products */}
                        <section>
                            <h3 className="text-lg font-bold mb-4 px-1 text-slate-900 dark:text-white">Products Supplied</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {producer.products.map((prod, i) => (
                                    <div key={i} className="group bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="h-40 bg-gray-200 relative overflow-hidden">
                                            <Image src={prod.matches} alt={prod.name} fill className="object-cover" />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">{prod.name}</h4>
                                            <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">{prod.sub}</p>
                                            <div className="mt-4 flex justify-between items-center">
                                                <span className="text-xs bg-slate-100 dark:bg-gray-700 px-2 py-1 rounded text-slate-600 dark:text-gray-300 font-medium">{prod.grade}</span>
                                                <Link href="/products/1" className="text-xs font-bold text-primary hover:text-primary-dark flex items-center">
                                                    Details <ArrowRight size={12} className="ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Sidebar (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Sourcing Card */}
                        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 sticky top-24">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Source from {producer.name}</h3>
                                <p className="text-sm text-slate-500 mt-1">Direct trade inquiry. We typically respond within 24 hours.</p>
                            </div>
                            <form className="space-y-4">
                                {["Your Name", "Company Email"].map((label) => (
                                    <div key={label}>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-1">{label}</label>
                                        <input type="text" className="w-full rounded-lg bg-slate-50 dark:bg-black/20 border-transparent focus:border-primary focus:bg-white dark:focus:bg-black/40 text-sm py-2.5 px-3" />
                                    </div>
                                ))}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-1">Interested Product</label>
                                    <select className="w-full rounded-lg bg-slate-50 dark:bg-black/20 border-transparent focus:border-primary text-sm py-2.5 px-3">
                                        <option>Select product...</option>
                                        {producer.products.map(p => <option key={p.name}>{p.name}</option>)}
                                    </select>
                                </div>
                                <Button className="w-full font-bold justify-center" size="lg">Send Sourcing Inquiry</Button>
                                <p className="text-xs text-center text-slate-400 mt-2">By clicking send, you agree to our Terms.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
