import React from "react";
import Link from "next/link";
import { Flag, Eye, Heart, Users, Handshake, Globe, ArrowRight, GraduationCap, Store, Leaf, Scale } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">

            {/* Breadcrumbs */}
            <div className="bg-white dark:bg-surface-dark border-b border-[#f0f4f0] dark:border-[#2a3e2a]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3">
                    <div className="flex flex-wrap gap-2 items-center text-sm">
                        <Link href="/" className="text-[#618961] hover:text-primary font-medium">Home</Link>
                        <span className="text-[#618961] font-medium">/</span>
                        <span className="text-[#111811] dark:text-white font-semibold">About Us</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative bg-background-dark">
                <div className="absolute inset-0 z-0">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVerTjMb-Z0HzZG3KZnFbpq_RBdFfhC2-fpRcl78DRGHk-QluAHK5RKCqk86kBjc6R91eUyxtACPnJ-LYe2mML4YwtHIsEAHfHVpANZu5-LhzFbl_kBqKumd4zn22Vuixk_SGVfvVjQYJVD0-MAQjg8Gt3DrraV8lLRvKHDxMfQktg6q0Xmntf1F4iqpcowIpPgAc4XsWRerQe5J-kQv5LySmQHLzgvSxdmt2D1EpRYlTdWcvHbJVkrCwUPGurnzpvUAhwkC16nek')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-10 py-24 lg:py-32 flex flex-col justify-center min-h-[480px]">
                    <div className="max-w-[720px]">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider mb-4">Who We Are</span>
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
                <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <div className="flex flex-col gap-4 p-6 rounded-xl bg-background-light dark:bg-background-dark border border-[#dbe6db] dark:border-[#2a3e2a] hover:shadow-lg transition-shadow duration-300">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary mb-2">
                                <Flag size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#111811] dark:text-white mb-2">Our Mission</h3>
                                <p className="text-[#618961] dark:text-gray-400 leading-relaxed">To empower Sri Lankan producers by connecting them to fair markets, ensuring they receive the equitable value their hard work deserves.</p>
                            </div>
                        </div>
                        {/* Vision */}
                        <div className="flex flex-col gap-4 p-6 rounded-xl bg-background-light dark:bg-background-dark border border-[#dbe6db] dark:border-[#2a3e2a] hover:shadow-lg transition-shadow duration-300">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary mb-2">
                                <Eye size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#111811] dark:text-white mb-2">Our Vision</h3>
                                <p className="text-[#618961] dark:text-gray-400 leading-relaxed">A world where trade is fair, sustainable, and transparent, creating thriving communities across Sri Lanka.</p>
                            </div>
                        </div>
                        {/* Values */}
                        <div className="flex flex-col gap-4 p-6 rounded-xl bg-background-light dark:bg-background-dark border border-[#dbe6db] dark:border-[#2a3e2a] hover:shadow-lg transition-shadow duration-300">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary mb-2">
                                <Heart size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#111811] dark:text-white mb-2">Our Values</h3>
                                <p className="text-[#618961] dark:text-gray-400 leading-relaxed">Integrity in our dealings, Sustainability in our practices, and Transparency in every action we take.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Fairtrade Ecosystem */}
            <section className="py-20 bg-background-light dark:bg-background-dark border-y border-[#dbe6db] dark:border-[#2a3e2a]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#111811] dark:text-white mb-4">How We Fit in the Fairtrade Ecosystem</h2>
                        <p className="text-[#618961] dark:text-gray-400 text-lg">We serve as the vital link connecting grassroots efforts to global opportunities.</p>
                    </div>
                    <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
                        {/* Step 1: Producers */}
                        <div className="relative flex-1 flex flex-col items-center text-center group w-full md:w-auto">
                            <div className="w-24 h-24 rounded-full bg-white dark:bg-surface-dark border-4 border-primary shadow-sm flex items-center justify-center mb-6 z-10 relative">
                                <Users size={40} className="text-[#111811] dark:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[#111811] dark:text-white mb-2">Producers</h3>
                            <p className="text-sm text-[#618961] dark:text-gray-400 max-w-[200px]">Farmers & artisans cultivating quality goods</p>
                        </div>
                        {/* Step 2: FNSL Support */}
                        <div className="relative flex-1 flex flex-col items-center text-center group w-full md:w-auto">
                            <div className="w-24 h-24 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center mb-6 z-10 relative transform group-hover:scale-110 transition-transform">
                                <Handshake size={40} className="text-[#111811]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#111811] dark:text-white mb-2">FNSL Support</h3>
                            <p className="text-sm text-[#618961] dark:text-gray-400 max-w-[200px]">Certification, training, and market access</p>
                        </div>
                        {/* Step 3: Global Markets */}
                        <div className="relative flex-1 flex flex-col items-center text-center group w-full md:w-auto">
                            <div className="w-24 h-24 rounded-full bg-white dark:bg-surface-dark border-4 border-primary shadow-sm flex items-center justify-center mb-6 z-10 relative">
                                <Globe size={40} className="text-[#111811] dark:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[#111811] dark:text-white mb-2">Global Markets</h3>
                            <p className="text-sm text-[#618961] dark:text-gray-400 max-w-[200px]">Ethical buyers and sustainable supply chains</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach (Pillars) */}
            <section className="py-20 bg-white dark:bg-surface-dark">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold text-[#111811] dark:text-white mb-4">Our Strategic Approach</h2>
                            <p className="text-[#618961] dark:text-gray-400 text-lg">We focus on holistic development to ensure long-term prosperity for our producer network.</p>
                        </div>
                        <Link href="#" className="text-primary hover:text-primary-dark font-bold inline-flex items-center gap-1 group">
                            Learn more about our impact
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="group relative overflow-hidden rounded-xl bg-background-light dark:bg-background-dark min-h-[300px] flex flex-col justify-end p-6 border border-transparent hover:border-primary/50 transition-colors">
                            <div className="absolute inset-0 z-0">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4q2aGdZto8EmdqeVRGjYqdEm2FAx5cjPjoG5vQWukTsEVXT7knAQNnotN1rB-Qo93L6DIJPCYEaYG6Td1nxYcPlVFemTesDHL3-Ov6tmwwqEwlrxHPebEr7D49vh3QRhS_YDIOOz_7OmfroZ8Z76tTMdcDSAFU-MW33emK7B2VZnf3zZ8L9OlAsvLRFMFMQGZ5B8HllKQVSYB-sC_kM4hZjoXkYtJ5XZWnQXnwEtVwxqi5xED4h4m-trkDlXIm6xEGqZOitrGPu4')` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="size-12 rounded-lg bg-primary/90 flex items-center justify-center text-[#111811] mb-4">
                                    <GraduationCap size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Capacity Building</h3>
                                <p className="text-gray-300 text-sm">Equipping producers with the skills and knowledge needed for modern, sustainable agriculture.</p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="group relative overflow-hidden rounded-xl bg-background-light dark:bg-background-dark min-h-[300px] flex flex-col justify-end p-6 border border-transparent hover:border-primary/50 transition-colors">
                            <div className="absolute inset-0 z-0">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsOALN3wcqKXNuzMDRiYhSNYHCnfzxp-TluVxDadEkpcwy96p5Ib3rXI2ptoJVhiW8flvMHOazoevhV6ZUnpAYNgNe0T3OPlSxSCvgthyagDpJDZ2BnbRLc5WxLZXZ2QhylnwnIMNmVZNECmnfUtQhfmVXWHgpYviMOUYMfM2Lk-z8dkcOZ8M8tZsFZHAGz4fauPPCa6ifVvYHRWf8IDyZ3QlIo-3Vpt8jZ8GGUi9Ytd9K4BptjMHbifCl4mW7zNJVc1blOBzhEaI')` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="size-12 rounded-lg bg-primary/90 flex items-center justify-center text-[#111811] mb-4">
                                    <Store size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Market Access</h3>
                                <p className="text-gray-300 text-sm">Opening doors to international fairtrade buyers and premium markets globally.</p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="group relative overflow-hidden rounded-xl bg-background-light dark:bg-background-dark min-h-[300px] flex flex-col justify-end p-6 border border-transparent hover:border-primary/50 transition-colors">
                            <div className="absolute inset-0 z-0">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeD6vm0fb7hhlFUYH-EWJDfujzWhxjC3kg3uHnVePKlqynmPdXGo8lvgyMhS8CZPxUOeifMyPX1FSKIJiIKHbkGn9hMi6Xc6l6KGPnolZwzfOuHnwVUuLDuywwPtCQLY4Me0jlK1__yoj6g41cHK1lpTIoy4ttjAX_rjCk0uR-AVnwI8At_4ScDmFMAF92NoHsGDuL_-ZTwDYINPPzaeBFbBxxkGOfuzfTBJYhJQpC9Gawnr21drtzApgHrZTccywcM01iGbHbQVc')` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="size-12 rounded-lg bg-primary/90 flex items-center justify-center text-[#111811] mb-4">
                                    <Leaf size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Climate Resilience</h3>
                                <p className="text-gray-300 text-sm">Implementing eco-friendly practices to protect crops and livelihoods against climate change.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Governance & Partners */}
            <section className="py-20 bg-background-light dark:bg-background-dark">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-10 flex flex-col lg:flex-row gap-16">
                    {/* Governance Teaser */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Scale className="text-primary" size={28} />
                            <h3 className="text-2xl font-bold text-[#111811] dark:text-white">Governance & Accountability</h3>
                        </div>
                        <p className="text-[#618961] dark:text-gray-400 mb-6 leading-relaxed">
                            FNSL operates with a commitment to high ethical standards. Our board is composed of producer representatives and industry experts dedicated to transparent decision-making. We believe that accountability is the cornerstone of trust.
                        </p>
                        <Link href="#" className="inline-flex items-center justify-center h-12 px-6 rounded-lg border border-[#dbe6db] dark:border-[#2a3e2a] bg-white dark:bg-surface-dark text-[#111811] dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-[#203620] transition-colors">
                            View Transparency Report
                        </Link>
                    </div>
                    {/* Logo Wall */}
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-6 uppercase tracking-wider text-center lg:text-left">Trusted by Global Networks</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {["Fairtrade", "NAPP", "EU Aid", "UNDP", "USAID", "EDB"].map((logo) => (
                                <div key={logo} className="h-20 bg-white dark:bg-surface-dark rounded-lg flex items-center justify-center p-4 border border-[#e0e6e0] dark:border-[#2a3e2a] hover:border-primary transition-colors">
                                    <span className="text-gray-400 font-bold text-xl italic">{logo}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-white dark:bg-surface-dark">
                <div className="max-w-[960px] mx-auto px-4 sm:px-10">
                    <div className="bg-background-dark dark:bg-black rounded-2xl overflow-hidden shadow-2xl relative">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="relative z-10 px-8 py-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in partnering or joining?</h2>
                            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Whether you are a local producer looking for support or an international buyer seeking ethical goods, we have a place for you.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/producers" className="w-full sm:w-auto min-w-[200px] h-14 flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-[#111811] rounded-lg font-bold text-base transition-all">
                                    For Producers
                                </Link>
                                <Link href="/contact" className="w-full sm:w-auto min-w-[200px] h-14 flex items-center justify-center bg-primary text-[#111811] hover:bg-primary-dark rounded-lg font-bold text-base shadow-[0_0_20px_rgba(19,236,19,0.3)] hover:shadow-[0_0_30px_rgba(19,236,19,0.5)] transition-all">
                                    For Buyers & Partners
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
