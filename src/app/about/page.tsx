import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Flag, Eye, Heart, Users, Handshake, Globe, School, Store, Leaf, Gavel, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-background-dark py-24 lg:py-32 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-10">
                    <Leaf size={400} className="text-white absolute -right-20 -top-20 rotate-12" />
                </div>

                <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                    <div className="max-w-[720px]">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider mb-4">
                            Who We Are
                        </span>
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
                            Empowering Sri Lankan Producers for a Fairer Future
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-[600px]">
                            We bridge the gap between local craftsmanship and ethical global markets, ensuring sustainability, transparency, and dignity in every trade.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-16 md:py-24 bg-white dark:bg-surface-dark">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <Card className="flex flex-col gap-4 border-gray-100 dark:border-gray-800" hoverEffect>
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary mb-2">
                                <Flag size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Mission</h3>
                                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                                    To empower Sri Lankan producers by connecting them to fair markets, ensuring they receive the equitable value their hard work deserves.
                                </p>
                            </div>
                        </Card>

                        {/* Vision */}
                        <Card className="flex flex-col gap-4 border-gray-100 dark:border-gray-800" hoverEffect>
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary mb-2">
                                <Eye size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Vision</h3>
                                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                                    A world where trade is fair, sustainable, and transparent, creating thriving communities across Sri Lanka.
                                </p>
                            </div>
                        </Card>

                        {/* Values */}
                        <Card className="flex flex-col gap-4 border-gray-100 dark:border-gray-800" hoverEffect>
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary mb-2">
                                <Heart size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Values</h3>
                                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                                    Integrity in our dealings, Sustainability in our practices, and Transparency in every action we take.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* The Fairtrade Ecosystem */}
            <section className="py-20 bg-background-light dark:bg-background-dark border-y border-gray-200 dark:border-gray-800">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">How We Fit in the Fairtrade Ecosystem</h2>
                        <p className="text-slate-600 dark:text-gray-400 text-lg">
                            We serve as the vital link connecting grassroots efforts to global opportunities.
                        </p>
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        {/* Step 1: Producers */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="size-24 rounded-full bg-white dark:bg-surface-dark border-4 border-primary shadow-sm flex items-center justify-center mb-6 z-10 relative">
                                <Users size={40} className="text-slate-900 dark:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Producers</h3>
                            <p className="text-sm text-slate-600 dark:text-gray-400 max-w-[200px]">Farmers & artisans cultivating quality goods</p>
                        </div>

                        {/* Connector Line (Mobile hidden) */}
                        <div className="hidden md:block w-32 h-0.5 bg-primary/30"></div>

                        {/* Step 2: FNSL Support */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="size-24 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center mb-6 z-10 relative transform group-hover:scale-110 transition-transform duration-300">
                                <Handshake size={40} className="text-slate-900" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">FNSL Support</h3>
                            <p className="text-sm text-slate-600 dark:text-gray-400 max-w-[200px]">Certification, training, and market access</p>
                        </div>

                        {/* Connector Line (Mobile hidden) */}
                        <div className="hidden md:block w-32 h-0.5 bg-primary/30"></div>

                        {/* Step 3: Global Markets */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="size-24 rounded-full bg-white dark:bg-surface-dark border-4 border-primary shadow-sm flex items-center justify-center mb-6 z-10 relative">
                                <Globe size={40} className="text-slate-900 dark:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Global Markets</h3>
                            <p className="text-sm text-slate-600 dark:text-gray-400 max-w-[200px]">Ethical buyers and sustainable supply chains</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Strategic Approach */}
            <section className="py-20 bg-white dark:bg-surface-dark">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Strategic Approach</h2>
                            <p className="text-slate-600 dark:text-gray-400 text-lg">
                                We focus on holistic development to ensure long-term prosperity for our producer network.
                            </p>
                        </div>
                        <Link href="/impact" className="text-primary hover:text-primary-dark font-bold inline-flex items-center gap-1 group">
                            Learn more about our impact
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <Card className="min-h-[300px] flex flex-col justify-end p-8 bg-slate-100 dark:bg-gray-800 border-none group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                            {/* Background Image Placeholder using CSS for now, ideally next/image */}
                            <div className="absolute inset-0 bg-slate-600 z-0"></div>

                            <div className="relative z-20">
                                <div className="size-12 rounded-lg bg-primary flex items-center justify-center text-slate-900 mb-4">
                                    <School size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Capacity Building</h3>
                                <p className="text-gray-200 text-sm">Equipping producers with the skills and knowledge needed for modern, sustainable agriculture.</p>
                            </div>
                        </Card>

                        {/* Card 2 */}
                        <Card className="min-h-[300px] flex flex-col justify-end p-8 bg-slate-100 dark:bg-gray-800 border-none group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                            <div className="absolute inset-0 bg-slate-500 z-0"></div>

                            <div className="relative z-20">
                                <div className="size-12 rounded-lg bg-primary flex items-center justify-center text-slate-900 mb-4">
                                    <Store size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Market Access</h3>
                                <p className="text-gray-200 text-sm">Opening doors to international fairtrade buyers and premium markets globally.</p>
                            </div>
                        </Card>

                        {/* Card 3 */}
                        <Card className="min-h-[300px] flex flex-col justify-end p-8 bg-slate-100 dark:bg-gray-800 border-none group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                            <div className="absolute inset-0 bg-slate-400 z-0"></div>

                            <div className="relative z-20">
                                <div className="size-12 rounded-lg bg-primary flex items-center justify-center text-slate-900 mb-4">
                                    <Leaf size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Climate Resilience</h3>
                                <p className="text-gray-200 text-sm">Implementing eco-friendly practices to protect crops and livelihoods against climate change.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Governance */}
            <section className="py-20 bg-background-light dark:bg-background-dark">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Gavel className="text-primary" size={28} />
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Governance & Accountability</h3>
                        </div>
                        <p className="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
                            FNSL operates with a commitment to high ethical standards. Our board is composed of producer representatives and industry experts dedicated to transparent decision-making. We believe that accountability is the cornerstone of trust.
                        </p>
                        <Button variant="outline">View Transparency Report</Button>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider">Trusted by Global Networks</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {["Fairtrade", "NAPP", "EU Aid", "UNDP", "USAID", "EDB"].map((partner) => (
                                <div key={partner} className="h-20 bg-white dark:bg-surface-dark rounded-lg flex items-center justify-center p-4 border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors cursor-default">
                                    <span className="text-gray-400 font-bold text-lg">{partner}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
