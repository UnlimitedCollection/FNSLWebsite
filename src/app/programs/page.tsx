"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import { School, Globe, Leaf, Verified, Users, Handshake, Search, Activity, Link as LinkIcon, BarChart, ArrowRight } from "lucide-react";

export default function ProgramsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111811] dark:text-white font-sans">

            {/* Top Header Section (inside Main for structure matching original HTML mostly, but adapting for Nextjs nav usually in Layout) */}
            {/* We assume standard header from layout.tsx is present, this page content starts below */}

            <main className="flex flex-col items-center w-full">
                {/* Hero Section */}
                <section className="w-full px-4 lg:px-40 py-10 lg:py-16 bg-white dark:bg-[#1a2e1a]">
                    <div className="max-w-[1280px] w-full mx-auto">
                        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center">
                            <div className="flex flex-col gap-6 lg:w-1/2">
                                <h1 className="text-[#111811] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                                    Our Work
                                </h1>
                                <p className="text-[#111811]/80 dark:text-white/80 text-lg font-normal leading-relaxed">
                                    Empowering Sri Lankan producers through sustainable practices, robust market linkages, and ethical export standards to reach global markets effectively.
                                </p>
                                <div className="flex gap-4 pt-2">
                                    <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-[#111811] text-base font-bold leading-normal tracking-[0.015em] hover:brightness-105 transition-all shadow-lg shadow-primary/20">
                                        Explore Our Programs
                                    </button>
                                    <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-[#111811]/20 dark:border-white/20 text-[#111811] dark:text-white text-base font-bold leading-normal hover:bg-neutral-50 dark:hover:bg-white/5 transition-all">
                                        How We Deliver
                                    </button>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="w-full aspect-video rounded-2xl bg-gray-200 overflow-hidden shadow-xl">
                                    <img alt="Sri Lankan Tea Plantation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpmkCAG7pBnuot4HTpGnHmYImPRVh-CUnt7h39_gso1Ait_wJfGKmsRXrpJxGRv13n4YPmImA9r20b5MOnd9s6X3aNSj7saYkE3vDyRu5fYIiOBv2RsSCQ4rqTWIp6a1mPZcKEFHbuNp8WxXPNeYxjI_cRUL3kU2csQa0Grivre8Uv_aXoE2Fbcwxy0jnnN1mOhJ_cBx6gteHv__uFDnDSSidZVIDPolbfMc0E-xMz75PkDeYTqKhr_-wata57ak26MeWRDOypFuE" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Themes Grid */}
                <section className="w-full px-4 lg:px-40 py-16 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[1280px] w-full mx-auto">
                        <div className="flex flex-col mb-10 text-center lg:text-left">
                            <h2 className="text-[#111811] dark:text-white text-[32px] font-bold leading-tight tracking-tight">Key Program Themes</h2>
                            <p className="text-[#618961] mt-2 text-lg">Comprehensive support pillars for sustainable growth.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Training & Capacity Building", icon: School, text: "Upskilling farmers in modern agricultural techniques and business management." },
                                { title: "Market Access", icon: Globe, text: "Connecting local cooperatives directly to ethical global Fairtrade buyers." },
                                { title: "Sustainability & Climate", icon: Leaf, text: "Implementing climate-resilient farming strategies and biodiversity protection." },
                                { title: "Quality & Compliance", icon: Verified, text: "Ensuring products meet international standards and Fairtrade certification requirements." },
                                { title: "Women & Youth", icon: Users, text: "Empowering marginalized groups through leadership training and economic opportunities." },
                                { title: "Partnerships & Advocacy", icon: Handshake, text: "Building coalitions for policy change and strengthening global fair trade networks." }
                            ].map((card, idx) => (
                                <div key={idx} className="group bg-white dark:bg-[#1e331e] p-8 rounded-xl shadow-sm border border-transparent hover:border-primary/50 transition-all hover:shadow-md flex flex-col gap-4">
                                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                                        <card.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#111811] dark:text-white">{card.title}</h3>
                                    <p className="text-[#111811]/70 dark:text-white/70 text-base leading-relaxed flex-grow">
                                        {card.text}
                                    </p>
                                    <Link className="text-primary font-bold text-sm flex items-center gap-1 mt-2 group-hover:gap-2 transition-all" href="#">
                                        View Projects <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How We Deliver (Timeline) */}
                <section className="w-full px-4 lg:px-40 py-16 bg-white dark:bg-[#1a2e1a]">
                    <div className="max-w-[1280px] w-full mx-auto">
                        <div className="flex flex-col items-center mb-12 text-center">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Methodology</span>
                            <h2 className="text-[#111811] dark:text-white text-[32px] font-bold leading-tight">How We Deliver Impact</h2>
                        </div>
                        <div className="relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-[#f0f4f0] dark:bg-[#2a3e2a] -translate-y-1/2 z-0"></div>
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                                {[
                                    { title: "Assess", icon: Search, text: "Identify needs & opportunities in local communities.", opacity: "border-primary" },
                                    { title: "Train", icon: School, text: "Equip producers with skills and knowledge.", opacity: "border-primary/80" },
                                    { title: "Strengthen", icon: Activity, text: "Build robust cooperative structures.", opacity: "border-primary/60" },
                                    { title: "Link", icon: LinkIcon, text: "Connect cooperatives to global markets.", opacity: "border-primary/40" },
                                    { title: "Measure", icon: BarChart, text: "Track impact and refine strategies.", opacity: "border-primary/20" }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex flex-col items-center text-center group">
                                        <div className={`w-16 h-16 rounded-full bg-white dark:bg-[#1a2e1a] border-4 ${step.opacity} flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <step.icon className="text-primary" size={28} />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-2">{step.title}</h3>
                                        <p className="text-sm text-[#618961]">{step.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Project Spotlight */}
                <section className="w-full px-4 lg:px-40 py-16 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[1280px] w-full mx-auto">
                        <div className="flex flex-col lg:flex-row bg-white dark:bg-[#1e331e] rounded-2xl overflow-hidden shadow-sm">
                            <div className="lg:w-1/2 relative min-h-[300px]">
                                <img alt="Cinnamon Processing" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhA_0MOGQpu_ISD918S7P2Zr6BsHlRw4tlC_h_WKKhHZeN1gPxyevPB7MJ3IyRV6S6qrOiLQcnR8J6gIuWniFh_NhmWduIIzEdH4CMyL1l_zp49DcA3MKXuS_z3QexPFxJ69kwkamzCKFnrDrIJ7fY44RSSQTZGqtr-qRrx-oecXP8KKX1lP2ymkQEz0SWwuCdPDwbQmvLbyHYrvU5_68iZCDx740g0p1ODN4a-dpsIIQx6yYxU32X_cu7b-W3OS2L41AcWJHtecg" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 lg:hidden">
                                    <h2 className="text-white text-2xl font-bold">Featured Project: Cinnamon Producers of Galle</h2>
                                </div>
                            </div>
                            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-primary/20 text-[#111811] dark:text-primary text-xs font-bold rounded-full uppercase tracking-wide">Spotlight</span>
                                    <span className="text-[#618961] text-xs font-medium">Updated 3 days ago</span>
                                </div>
                                <h2 className="hidden lg:block text-[#111811] dark:text-white text-3xl font-bold leading-tight mb-4">Cinnamon Producers of Galle</h2>
                                <p className="text-[#111811]/80 dark:text-white/80 text-lg mb-8 leading-relaxed">
                                    Through targeted interventions in processing and organic certification, we&apos;ve helped the Galle Cinnamon Cooperative achieve premium pricing in European markets.
                                </p>
                                <div className="grid grid-cols-2 gap-6 mb-8 border-t border-b border-gray-100 dark:border-white/10 py-6">
                                    <div>
                                        <p className="text-4xl font-black text-primary mb-1">+20%</p>
                                        <p className="text-sm font-medium text-[#618961]">Income Increase</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-black text-primary mb-1">500+</p>
                                        <p className="text-sm font-medium text-[#618961]">Farmers Certified</p>
                                    </div>
                                </div>
                                <button className="w-fit flex items-center justify-center rounded-lg h-10 px-6 bg-[#111811] dark:bg-white text-white dark:text-[#111811] text-sm font-bold leading-normal hover:opacity-90 transition-opacity">
                                    View Full Case Study
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Band */}
                <section className="w-full px-4 lg:px-40 py-20 bg-[#102210] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                    <div className="max-w-[1280px] w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="max-w-2xl">
                            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">Ready to dive deeper?</h2>
                            <p className="text-gray-300 text-lg">Explore our comprehensive library of past and ongoing projects, or view the real-time data on our impact dashboard.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-[#111811] text-base font-bold leading-normal hover:bg-primary/90 transition-colors whitespace-nowrap">
                                <School className="mr-2" size={20} />
                                Projects Library
                            </button>
                            <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-white/20 text-white text-base font-bold leading-normal hover:bg-white/10 transition-colors whitespace-nowrap">
                                <Activity className="mr-2" size={20} />
                                Impact Dashboard
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
