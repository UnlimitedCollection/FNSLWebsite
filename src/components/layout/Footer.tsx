import Link from "next/link";
import { Leaf, MapPin, Phone, Mail, BadgeCheck, Camera, Globe, Briefcase } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-surface-dark text-white pt-20 pb-10 border-t border-gray-800">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="size-8 bg-primary rounded flex items-center justify-center text-slate-900">
                                <Leaf className="fill-current" size={20} />
                            </div>
                            <span className="text-xl font-bold">FNSL</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Fairtrade NAPP–Sri Lanka empowers producers through sustainable talk, connecting local excellence to global ethical markets.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Globe size={20} />} />
                            <SocialLink href="#" icon={<Camera size={20} />} />
                            <SocialLink href="#" icon={<Briefcase size={20} />} />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <FooterLink href="/about">About Us</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="/producers">Our Producers</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="/products">Product Categories</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="/news">News & Events</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="/resources">Resource Center</FooterLink>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-0.5 shrink-0" size={18} />
                                <span>
                                    123 Green Path, Colombo 07,
                                    <br />
                                    Sri Lanka
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary shrink-0" size={18} />
                                <span>+94 11 234 5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={18} />
                                <span>info@fnsl.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Certification */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Certified By</h4>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                            <div className="flex items-center justify-center gap-2 text-2xl font-black text-white mb-2">
                                <BadgeCheck className="text-3xl" /> Fairtrade
                            </div>
                            <p className="text-xs text-gray-400">
                                We adhere to the highest international standards of Fairtrade practices.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} FNSL. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-gray-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5"
        >
            {icon}
        </Link>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="hover:text-primary transition-colors block">
            {children}
        </Link>
    );
}
