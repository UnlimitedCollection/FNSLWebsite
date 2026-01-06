"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter, Instagram, ChevronDown, Clock, Send, Map } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-sans">

            {/* Hero Section */}
            <section className="relative px-4 sm:px-10 py-12 sm:py-20 bg-background-light dark:bg-background-dark overflow-hidden">
                {/* Abstract Background Pattern */}
                <div
                    className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(#13ec13 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
                ></div>
                <div className="max-w-[960px] mx-auto relative z-10 text-center sm:text-left">
                    <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-4 text-[#111811] dark:text-white">
                        Get in Touch with FNSL
                    </h1>
                    <p className="text-lg text-[#618961] dark:text-[#a0cfa0] max-w-2xl font-normal leading-relaxed">
                        Connecting Sri Lankan producers to ethical global markets. Whether you are a producer, buyer, or partner, we are here to help.
                    </p>
                </div>
            </section>

            {/* Two Column Layout: Contact Info & Form */}
            <section className="px-4 sm:px-10 pb-20">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Contact Information */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-bold text-[#111811] dark:text-white">Contact Information</h2>
                            <p className="text-[#618961] dark:text-[#a0cfa0]">
                                Reach out to our team in Colombo for inquiries regarding certification, partnerships, or general information.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {/* Address Card */}
                            <div className="flex gap-4 rounded-xl border border-[#dbe6db] dark:border-gray-700 bg-white dark:bg-[#1a2e1a] p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full h-fit text-[#111811] dark:text-white">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-base font-bold text-[#111811] dark:text-white">Visit Us</h3>
                                    <p className="text-[#618961] dark:text-[#a0cfa0] text-sm">123 Bauddhaloka Mawatha,<br />Colombo 04, Sri Lanka</p>
                                </div>
                            </div>
                            {/* Phone Card */}
                            <div className="flex gap-4 rounded-xl border border-[#dbe6db] dark:border-gray-700 bg-white dark:bg-[#1a2e1a] p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full h-fit text-[#111811] dark:text-white">
                                    <Phone className="text-primary" size={24} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-base font-bold text-[#111811] dark:text-white">Call or WhatsApp</h3>
                                    <p className="text-[#618961] dark:text-[#a0cfa0] text-sm font-medium">+94 11 234 5678</p>
                                    <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9am - 5pm IST</p>
                                </div>
                            </div>
                            {/* Email Card */}
                            <div className="flex gap-4 rounded-xl border border-[#dbe6db] dark:border-gray-700 bg-white dark:bg-[#1a2e1a] p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full h-fit text-[#111811] dark:text-white">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-base font-bold text-[#111811] dark:text-white">Email Us</h3>
                                    <p className="text-[#618961] dark:text-[#a0cfa0] text-sm">info@fairtradenapp.lk</p>
                                </div>
                            </div>
                        </div>
                        {/* Socials */}
                        <div className="pt-4">
                            <p className="text-sm font-semibold text-[#111811] dark:text-white mb-4">Connect with us</p>
                            <div className="flex gap-4">
                                <a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#f0f4f0] dark:bg-gray-800 flex items-center justify-center text-[#111811] dark:text-white hover:bg-primary hover:text-black transition-colors" href="#">
                                    <Linkedin size={20} />
                                </a>
                                <a aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#f0f4f0] dark:bg-gray-800 flex items-center justify-center text-[#111811] dark:text-white hover:bg-primary hover:text-black transition-colors" href="#">
                                    <Facebook size={20} />
                                </a>
                                <a aria-label="Twitter" className="w-10 h-10 rounded-full bg-[#f0f4f0] dark:bg-gray-800 flex items-center justify-center text-[#111811] dark:text-white hover:bg-primary hover:text-black transition-colors" href="#">
                                    <Twitter size={20} />
                                </a>
                                <a aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#f0f4f0] dark:bg-gray-800 flex items-center justify-center text-[#111811] dark:text-white hover:bg-primary hover:text-black transition-colors" href="#">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-[#1a2e1a] rounded-2xl p-6 sm:p-8 border border-[#dbe6db] dark:border-gray-700 shadow-lg">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-[#111811] dark:text-white">How can we help you today?</h3>
                                <p className="text-sm text-[#618961] dark:text-[#a0cfa0] mt-1">Please fill out the form below and we will get back to you.</p>
                            </div>
                            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                                {/* Role Selection */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-[#111811] dark:text-gray-200" htmlFor="role">I am a...</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none rounded-lg border border-[#dbe6db] dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-base text-[#111811] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="role" defaultValue="">
                                            <option disabled value="">Select Role</option>
                                            <option value="producer">Producer / Farmer</option>
                                            <option value="buyer">Buyer / Trader</option>
                                            <option value="partner">Partner NGO</option>
                                            <option value="media">Media / Press</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                            <ChevronDown size={20} />
                                        </span>
                                    </div>
                                </div>
                                {/* Name & Email Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-[#111811] dark:text-gray-200" htmlFor="name">Full Name</label>
                                        <input className="w-full rounded-lg border border-[#dbe6db] dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-base text-[#111811] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" id="name" placeholder="John Doe" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-[#111811] dark:text-gray-200" htmlFor="email">Email Address</label>
                                        <input className="w-full rounded-lg border border-[#dbe6db] dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-base text-[#111811] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" id="email" placeholder="john@example.com" type="email" />
                                    </div>
                                </div>
                                {/* Organization & Conditional Field */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-[#111811] dark:text-gray-200" htmlFor="org">Organization / Farm</label>
                                        <input className="w-full rounded-lg border border-[#dbe6db] dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-base text-[#111811] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" id="org" placeholder="Company Name" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-[#111811] dark:text-gray-200" htmlFor="interest">Product Interest / Region</label>
                                        <input className="w-full rounded-lg border border-[#dbe6db] dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-base text-[#111811] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" id="interest" placeholder="e.g. Spices, Tea, Coconut" type="text" />
                                    </div>
                                </div>
                                {/* Message */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-[#111811] dark:text-gray-200" htmlFor="message">Message</label>
                                    <textarea className="w-full rounded-lg border border-[#dbe6db] dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-base text-[#111811] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 resize-none" id="message" placeholder="Tell us more about your inquiry..." rows={4}></textarea>
                                </div>
                                {/* Submit & Validation */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded">
                                        <Clock size={16} />
                                        <span>Typical response time: 24-48 hours</span>
                                    </div>
                                    <button className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-[#0fcc0f] text-[#111811] font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 group" type="submit">
                                        Send Message
                                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full h-[400px] relative bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                {/* Placeholder for Map Embed */}
                <div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8TiTFoqraY_5mJF7BBIy5MRS5SumMVhypa7PQuzPkdhpLzJmGPKggDaIm-1jLDR3SVVxXKxORrqJrcq35PvFyWvl6OtJPXKF5_yL2d2RQlvzwVqQ3Y94-s52SSW2aF_qSuk26dh8XFChivm4rrLGf8yMcKw-xJldqA198CPQPlV0VXDHWZzuFgGqwTujjd7-Fi1f1QY5P2ju4XwzHD-VnGe9oC4m7Edrkjd5IH8HJRcQwrJBlXaWa9yEMH7KmMNALnKDL64bfQjU')` }}></div>
                <div className="relative z-10 bg-white dark:bg-[#1a2e1a] p-6 rounded-xl shadow-xl max-w-sm text-center border border-gray-100 dark:border-gray-700">
                    <Map className="text-primary mx-auto mb-2" size={40} />
                    <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-1">Colombo Headquarters</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Interact with the map to find directions to our main office.</p>
                    <button className="mt-4 text-primary text-sm font-bold hover:underline">Open in Google Maps</button>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white dark:bg-[#1a2e1a] py-16 px-4 sm:px-10 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-[800px] mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#111811] dark:text-white mb-3">Frequently Asked Questions</h2>
                        <p className="text-gray-600 dark:text-gray-400">Common questions about contacting FNSL and our operations.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        {/* FAQ Item 1 */}
                        <details className="group bg-background-light dark:bg-background-dark rounded-lg border border-[#dbe6db] dark:border-gray-700 overflow-hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-[#111811] dark:text-white list-none select-none">
                                <span>How do I become a Fairtrade certified producer?</span>
                                <ChevronDown className="transition-transform duration-300 group-open:rotate-180" size={20} />
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-[#618961] dark:text-[#a0cfa0] leading-relaxed">
                                To become certified, you must meet specific social, economic, and environmental standards. Please use the contact form above and select &quot;Producer&quot; to request our starter kit and guidance documentation.
                            </div>
                        </details>
                        {/* FAQ Item 2 */}
                        <details className="group bg-background-light dark:bg-background-dark rounded-lg border border-[#dbe6db] dark:border-gray-700 overflow-hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-[#111811] dark:text-white list-none select-none">
                                <span>Where can I find a list of certified Sri Lankan suppliers?</span>
                                <ChevronDown className="transition-transform duration-300 group-open:rotate-180" size={20} />
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-[#618961] dark:text-[#a0cfa0] leading-relaxed">
                                We maintain an updated directory of certified producers. If you are a buyer, please select &quot;Buyer&quot; in the contact form and specify the products you are interested in (e.g., Tea, Spices) to receive a tailored list.
                            </div>
                        </details>
                        {/* FAQ Item 3 */}
                        <details className="group bg-background-light dark:bg-background-dark rounded-lg border border-[#dbe6db] dark:border-gray-700 overflow-hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-[#111811] dark:text-white list-none select-none">
                                <span>Can I visit a Fairtrade farm?</span>
                                <ChevronDown className="transition-transform duration-300 group-open:rotate-180" size={20} />
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-[#618961] dark:text-[#a0cfa0] leading-relaxed">
                                Farm visits can be arranged for potential buyers and partners, subject to the producers&apos; availability and seasonal schedules. Please contact our office directly to coordinate.
                            </div>
                        </details>
                    </div>
                </div>
            </section>

        </div>
    );
}
