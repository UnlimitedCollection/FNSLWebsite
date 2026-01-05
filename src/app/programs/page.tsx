import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
    ArrowRight,
    Search,
    Leaf,
    School,
    Globe,
    CheckCircle,
    Users,
    Handshake,
    ClipboardCheck,
    Dumbbell,
    Link as LucideLink,
    BarChart,
    Library,
    Activity
} from "lucide-react";
import { client } from "@/sanity/client";
import { programsQuery } from "@/sanity/lib/queries";

// Placeholder interface for sanity program data
interface SanityProgram {
    _id: string;
    title: string;
    slug: string;
    theme?: string;
    mainImage?: string;
    overview?: string;
    impactMetrics?: Array<{ value: string; label: string }>;
}

export const dynamic = 'force-dynamic';

export default async function ProgramsPage() {
    let programs: SanityProgram[] = [];
    try {
        programs = await client.fetch(programsQuery);
    } catch (error) {
        console.warn("Failed to fetch programs:", error);
    }

    // Filter/Select featured project (just taking the first one for now)
    const featuredProject = programs.length > 0 ? programs[0] : null;

    const deliverySteps = [
        { icon: ClipboardCheck, title: "Assess", desc: "Identify needs & opportunities in local communities." },
        { icon: School, title: "Train", desc: "Equip producers with skills and knowledge." },
        { icon: Dumbbell, title: "Strengthen", desc: "Build robust cooperative structures." },
        { icon: LucideLink, title: "Link", desc: "Connect cooperatives to global markets." },
        { icon: BarChart, title: "Measure", desc: "Track impact and refine strategies." },
    ];

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark font-display">

            {/* Hero Section */}
            <section className="w-full px-4 lg:px-40 py-10 lg:py-16 bg-white dark:bg-[#1a2e1a]">
                <div className="max-w-[1280px] w-full mx-auto">
                    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center">
                        <div className="flex flex-col gap-6 lg:w-1/2">
                            <h1 className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                                Our Work
                            </h1>
                            <p className="text-slate-700 dark:text-gray-200 text-lg font-normal leading-relaxed">
                                Empowering Sri Lankan producers through sustainable practices, robust market linkages, and ethical export standards to reach global markets effectively.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <Button size="lg" className="font-bold shadow-lg shadow-primary/20 text-black">
                                    Explore Our Programs
                                </Button>
                                <Button variant="outline" size="lg" className="font-bold">
                                    How We Deliver
                                </Button>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="w-full aspect-video rounded-2xl bg-gray-200 overflow-hidden shadow-xl relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1596568359553-a56de6970068?auto=format&fit=crop&q=80"
                                    alt="Sri Lankan Tea Plantation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Themes Grid (Mapped from Sanity Programs) */}
            <section className="w-full px-4 lg:px-40 py-16 bg-background-light dark:bg-background-dark">
                <div className="max-w-[1280px] w-full mx-auto">
                    <div className="flex flex-col mb-10 text-center lg:text-left">
                        <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">Key Programs</h2>
                        <p className="text-slate-500 mt-2 text-lg">Comprehensive support pillars for sustainable growth.</p>
                    </div>

                    {programs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {programs.map((program) => (
                                <div key={program._id} className="group bg-white dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-transparent hover:border-primary/50 transition-all hover:shadow-md flex flex-col gap-4">
                                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                                        <Leaf size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{program.title}</h3>
                                    <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed flex-grow line-clamp-3">
                                        {program.overview || "No overview available."}
                                    </p>
                                    <Link href="#" className="text-primary font-bold text-sm flex items-center gap-1 mt-2 group-hover:gap-2 transition-all">
                                        View Project <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 text-center text-slate-500 border border-dashed rounded-lg">
                            No active programs found. Add content in Sanity Studio.
                        </div>
                    )}
                </div>
            </section>

            {/* Timeline / How We Deliver */}
            <section className="w-full px-4 lg:px-40 py-16 bg-white dark:bg-[#1a2e1a]">
                <div className="max-w-[1280px] w-full mx-auto">
                    <div className="flex flex-col items-center mb-12 text-center">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Methodology</span>
                        <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">How We Deliver Impact</h2>
                    </div>

                    <div className="relative">
                        {/* Connector Line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-gray-800 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                            {deliverySteps.map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className={`w-16 h-16 rounded-full bg-white dark:bg-surface-dark border-4 flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300
                             ${i === 0 ? "border-primary" :
                                            i === 1 ? "border-primary/80" :
                                                i === 2 ? "border-primary/60" :
                                                    i === 3 ? "border-primary/40" : "border-primary/20"
                                        }
                           `}>
                                        <step.icon size={28} className="text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-500">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Project */}
            {featuredProject && (
                <section className="w-full px-4 lg:px-40 py-16 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[1280px] w-full mx-auto">
                        <div className="flex flex-col lg:flex-row bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm">
                            <div className="lg:w-1/2 relative min-h-[300px]">
                                {featuredProject.mainImage ? (
                                    <Image
                                        src={featuredProject.mainImage}
                                        alt={featuredProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl">
                                        Featured Project
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 lg:hidden">
                                    <h2 className="text-white text-2xl font-bold">Featured: {featuredProject.title}</h2>
                                </div>
                            </div>
                            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-primary/20 text-slate-900 dark:text-primary text-xs font-bold rounded-full uppercase tracking-wide">Spotlight</span>
                                    <span className="text-slate-500 text-xs font-medium">Ongoing</span>
                                </div>
                                <h2 className="hidden lg:block text-slate-900 dark:text-white text-3xl font-bold leading-tight mb-4">{featuredProject.title}</h2>
                                <p className="text-slate-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                                    {featuredProject.overview}
                                </p>

                                {/* Impact Metrics from Sanity or Fallback */}
                                {featuredProject.impactMetrics && featuredProject.impactMetrics.length > 0 && (
                                    <div className="grid grid-cols-2 gap-6 mb-8 border-t border-b border-gray-100 dark:border-gray-800 py-6">
                                        {featuredProject.impactMetrics.slice(0, 2).map((metric, idx) => (
                                            <div key={idx}>
                                                <p className="text-4xl font-black text-primary mb-1">{metric.value}</p>
                                                <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <Button variant="secondary" className="w-fit">
                                    View Full Case Study
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

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
                        <Button size="lg" className="font-bold text-black bg-primary hover:bg-primary-dark">
                            <Library className="mr-2 h-5 w-5" /> Projects Library
                        </Button>
                        <Button size="lg" variant="outline" className="font-bold text-white border-white/20 hover:bg-white/10 hover:text-white">
                            <Activity className="mr-2 h-5 w-5" /> Impact Dashboard
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
