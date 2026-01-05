import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MapPin, Phone, Mail, Clock, Send, Globe, Camera, Briefcase, Map, ChevronDown } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-background-light dark:bg-background-dark overflow-hidden">
                <div className="max-w-[960px] mx-auto relative z-10 text-center sm:text-left">
                    <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-4 text-slate-900 dark:text-white">
                        Get in Touch with FNSL
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl font-normal leading-relaxed">
                        Connecting Sri Lankan producers to ethical global markets. Whether you are a producer, buyer, or partner, we are here to help.
                    </p>
                </div>
            </section>

            {/* Main Content Info & Form */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Contact Information</h2>
                            <p className="text-slate-600 dark:text-gray-400">
                                Reach out to our team in Colombo for inquiries regarding certification, partnerships, or general information.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* Address */}
                            <Card className="flex gap-4 p-5 hover:border-primary/50 transition-colors">
                                <div className="bg-primary/10 p-3 rounded-full h-fit text-primary-dark dark:text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Visit Us</h3>
                                    <p className="text-slate-600 dark:text-gray-400 text-sm">123 Bauddhaloka Mawatha,<br />Colombo 04, Sri Lanka</p>
                                </div>
                            </Card>

                            {/* Phone */}
                            <Card className="flex gap-4 p-5 hover:border-primary/50 transition-colors">
                                <div className="bg-primary/10 p-3 rounded-full h-fit text-primary-dark dark:text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Call or WhatsApp</h3>
                                    <p className="text-slate-600 dark:text-gray-400 text-sm font-medium">+94 11 234 5678</p>
                                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                                        <Clock size={12} />
                                        <span>Mon-Fri, 9am - 5pm IST</span>
                                    </div>
                                </div>
                            </Card>

                            {/* Email */}
                            <Card className="flex gap-4 p-5 hover:border-primary/50 transition-colors">
                                <div className="bg-primary/10 p-3 rounded-full h-fit text-primary-dark dark:text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Email Us</h3>
                                    <p className="text-slate-600 dark:text-gray-400 text-sm">info@fairtradenapp.lk</p>
                                </div>
                            </Card>
                        </div>

                        {/* Socials */}
                        <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Connect with us</p>
                            <div className="flex gap-4">
                                {[Globe, Briefcase, Camera].map((Icon, i) => (
                                    <button key={i} className="size-10 rounded-full bg-slate-100 dark:bg-gray-800 flex items-center justify-center text-slate-600 dark:text-white hover:bg-primary hover:text-slate-900 transition-colors">
                                        <Icon size={20} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7">
                        <Card className="p-6 sm:p-8 shadow-lg border-gray-200 dark:border-gray-700">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">How can we help you today?</h3>
                                <p className="text-sm text-slate-600 dark:text-gray-400 mt-1">Please fill out the form below and we will get back to you.</p>
                            </div>

                            <form className="flex flex-col gap-5">
                                {/* Role */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-slate-900 dark:text-gray-200" htmlFor="role">I am a...</label>
                                    <div className="relative">
                                        <select
                                            className="w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-base text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            defaultValue=""
                                        >
                                            <option disabled value="">Select Role</option>
                                            <option value="producer">Producer / Farmer</option>
                                            <option value="buyer">Buyer / Trader</option>
                                            <option value="partner">Partner NGO</option>
                                            <option value="media">Media / Press</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" size={20} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-slate-900 dark:text-gray-200" htmlFor="name">Full Name</label>
                                        <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" id="name" placeholder="John Doe" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-slate-900 dark:text-gray-200" htmlFor="email">Email Address</label>
                                        <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" id="email" placeholder="john@example.com" type="email" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-slate-900 dark:text-gray-200" htmlFor="message">Message</label>
                                    <textarea className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 resize-none" id="message" placeholder="Tell us more about your inquiry..." rows={4}></textarea>
                                </div>

                                <Button className="w-full sm:w-auto" size="lg" icon={<Send size={18} />}>
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Map Section Mockup */}
            <section className="w-full h-[400px] bg-slate-200 dark:bg-gray-800 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-slate-300 dark:bg-gray-700 opacity-50"></div>
                <Card className="relative z-10 max-w-sm text-center">
                    <Map className="mx-auto text-primary mb-2" size={32} />
                    <h3 className="font-bold text-slate-900 dark:text-white">Colombo Headquarters</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">Visualize Google Maps Embed Here</p>
                    <Button variant="outline" size="sm">Open in Google Maps</Button>
                </Card>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Frequently Asked Questions</h2>
                        <p className="text-slate-600 dark:text-gray-400">Common questions about contacting FNSL and our operations.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* FAQ Items (Native Details/Summary for now) */}
                        <details className="group bg-background-light dark:bg-background-dark rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-slate-900 dark:text-white list-none select-none">
                                <span>How do I become a Fairtrade certified producer?</span>
                                <ChevronDown className="transition-transform duration-300 group-open:rotate-180" size={20} />
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 dark:text-gray-400 leading-relaxed">
                                To become certified, you must meet specific social, economic, and environmental standards. Please use the contact form above and select &quot;Producer&quot; to request our starter kit.
                            </div>
                        </details>

                        <details className="group bg-background-light dark:bg-background-dark rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-slate-900 dark:text-white list-none select-none">
                                <span>Where can I find a list of certified suppliers?</span>
                                <ChevronDown className="transition-transform duration-300 group-open:rotate-180" size={20} />
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 dark:text-gray-400 leading-relaxed">
                                We maintain an updated directory. If you are a buyer, please select &quot;Buyer&quot; in the contact form to receive a tailored list.
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
}
