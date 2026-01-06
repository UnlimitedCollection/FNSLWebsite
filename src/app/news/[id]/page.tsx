"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, ChevronRight } from "lucide-react";
import { news } from "@/data/mockData";

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const article = news.find((n) => n.id === id) || news[0];

    // Find related/other news
    const otherNews = news.filter(n => n.id !== article.id).slice(0, 2);

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20 font-sans">
            {/* Hero Image */}
            <div className="w-full h-[400px] relative">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto">
                    <Link href="/news" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-bold text-sm bg-black/30 backdrop-blur px-3 py-1.5 rounded-full w-fit">
                        <ArrowLeft size={16} /> Back to News
                    </Link>
                    <div className="flex items-center gap-4 text-white/90 text-sm font-bold mb-3">
                        <span className="bg-primary text-slate-900 px-2 py-0.5 rounded uppercase tracking-wider text-xs">{article.type}</span>
                        <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-4xl shadow-sm">{article.title}</h1>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
                <div className="bg-white dark:bg-surface-dark rounded-xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800 -mt-20 relative z-10">
                    <p className="text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-8 border-l-4 border-primary pl-4 italic">
                        {article.excerpt}
                    </p>

                    <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="mb-4">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Key Highlights</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Sustainable farming practices implementation.</li>
                            <li>Community engagement and development programs.</li>
                            <li>Fair trade certification and standards.</li>
                        </ul>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-xs font-bold text-slate-400 uppercase">Tags:</span>
                            {["Fairtrade", "Sustainability", "Sri Lanka"].map(tag => (
                                <span key={tag} className="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">#{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Related News */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">More News</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {otherNews.map(item => (
                            <Link key={item.id} href={`/news/${item.id}`} className="group bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
                                <div className="aspect-video relative">
                                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                                        <span className="text-primary uppercase">{item.type}</span>
                                        <span>•</span>
                                        <span>{item.date}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">{item.title}</h4>
                                    <div className="flex items-center text-sm font-bold text-primary mt-4">
                                        Read Article <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
