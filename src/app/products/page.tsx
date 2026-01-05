import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Search, CheckCircle, Handshake, Leaf, MapPin } from "lucide-react";

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111811] px-6 py-4 sticky top-16 lg:top-20 z-40">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold">Product Catalog</h1>
                    <nav className="hidden md:flex gap-4">
                        <span className="text-primary font-bold border-b-2 border-primary text-sm">Overview</span>
                        <span className="text-slate-500 hover:text-slate-900 cursor-pointer text-sm">Seasonal</span>
                        <span className="text-slate-500 hover:text-slate-900 cursor-pointer text-sm">New Arrivals</span>
                    </nav>
                </div>
                <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 w-64 lg:w-96">
                    <Search size={18} className="text-gray-400" />
                    <input className="bg-transparent border-none outline-none text-sm ml-2 w-full" placeholder="Search products..." />
                </div>
            </header>

            {/* Hero */}
            <div className="relative bg-slate-900 min-h-[400px] flex items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                {/* Simple Background Placeholder */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546875508-251f93f1ac4e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60"></div>

                <div className="relative z-20 max-w-3xl flex flex-col gap-6 items-center">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                        Export Ready • Ethical • Sustainable
                    </span>
                    <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
                        Sri Lankan Fairtrade-Aligned Products
                    </h2>
                    <p className="text-gray-200 text-lg max-w-xl">
                        Discover premium goods directly from certified producers. Connecting global markets to ethical, high-quality sources.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg">Request Sourcing Support</Button>
                        <Button variant="secondary" size="lg">View Categories</Button>
                    </div>
                </div>
            </div>

            {/* Trust Indicators */}
            <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: CheckCircle, title: "Quality Assured", desc: "Products meet international export standards and rigorous checks." },
                            { icon: Handshake, title: "Ethically Sourced", desc: "Direct trade supporting fair wages and community development." },
                            { icon: Leaf, title: "Full Traceability", desc: "Transparent supply chains from local farm to global port." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark dark:text-primary shrink-0">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 dark:text-white">{item.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Categories */}
            <section className="py-16 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Explore Our Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { name: "Tea", sub: "Ceylon Black, Green & White Tea", img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80" },
                        { name: "Spices", sub: "True Cinnamon, Pepper, Cloves", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80" },
                        { name: "Coconut", sub: "Virgin Oil, Milk, Desiccated", img: "https://images.unsplash.com/photo-1543158913-75c128d5789f?auto=format&fit=crop&q=80" },
                        { name: "Herbs & Wellness", sub: "Ayurvedic Plants, Essential Oils", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80" },
                        { name: "Handicrafts", sub: "Artisanal Wood, Clay & Reed", img: "https://images.unsplash.com/photo-1589150024467-33306dbab7d6?auto=format&fit=crop&q=80" },
                        { name: "Textiles", sub: "Ethical Fabrics, Handloom", img: "https://images.unsplash.com/photo-1629032355262-d7554d3cd582?auto=format&fit=crop&q=80" }
                    ].map((cat, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer bg-gray-100">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${cat.img})` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-white text-2xl font-bold mb-1">{cat.name}</h3>
                                <p className="text-gray-200 text-sm">{cat.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Products</h2>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">View All</Button>
                        </div>
                    </div>

                    <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
                        {[
                            { name: "Organic Black Pepper", region: "Matale", cat: "Spices", img: "https://images.unsplash.com/photo-1558994340-3b603314051a?auto=format&fit=crop&q=80" },
                            { name: "Virgin Coconut Oil", region: "Kurunegala", cat: "Coconut", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80" },
                            { name: "Premium Earl Grey", region: "Nuwara Eliya", cat: "Tea", img: "https://images.unsplash.com/photo-1571934811356-5cc55449d0f4?auto=format&fit=crop&q=80" },
                            { name: "Ceylon Cinnamon", region: "Galle", cat: "Spices", img: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80" }
                        ].map((item, i) => (
                            <Card key={i} className="min-w-[280px] w-[280px] snap-start hover:shadow-md transition-shadow p-0 overflow-hidden">
                                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }}></div>
                                <div className="p-4 flex flex-col gap-3">
                                    <div>
                                        <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{item.cat}</div>
                                        <h3 className="font-bold text-lg leading-tight text-slate-900 dark:text-white">{item.name}</h3>
                                        <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                                            <MapPin size={16} />
                                            <span>{item.region}, Sri Lanka</span>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary-dark hover:text-white">
                                        Request Quote
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
