"use client";

import Link from "next/link";
import { useState } from "react";
import { Leaf, Menu, ArrowRight, X } from "lucide-react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary-dark dark:text-primary group-hover:bg-primary/30 transition-colors">
                            <Leaf className="fill-current text-2xl" size={24} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                            FNSL
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8">
                        <Link
                            href="/about"
                            className="text-sm font-medium text-slate-600 hover:text-primary-dark dark:text-slate-300 dark:hover:text-primary transition-colors"
                        >
                            About FNSL
                        </Link>
                        <Link
                            href="/producers"
                            className="text-sm font-medium text-slate-600 hover:text-primary-dark dark:text-slate-300 dark:hover:text-primary transition-colors"
                        >
                            Producers
                        </Link>
                        <Link
                            href="/products"
                            className="text-sm font-medium text-slate-600 hover:text-primary-dark dark:text-slate-300 dark:hover:text-primary transition-colors"
                        >
                            Products
                        </Link>
                        <Link
                            href="/programs"
                            className="text-sm font-medium text-slate-600 hover:text-primary-dark dark:text-slate-300 dark:hover:text-primary transition-colors"
                        >
                            Programs
                        </Link>
                        <Link
                            href="/news"
                            className="text-sm font-medium text-slate-600 hover:text-primary-dark dark:text-slate-300 dark:hover:text-primary transition-colors"
                        >
                            News
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <Link
                            href="/contact"
                            className="bg-primary hover:bg-primary-dark transition-colors text-slate-900 font-bold text-sm px-6 py-2.5 rounded-lg flex items-center gap-2 group"
                        >
                            <span>Contact Us</span>
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-0.5 transition-transform"
                            />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About FNSL</MobileNavLink>
                        <MobileNavLink href="/producers" onClick={() => setIsMobileMenuOpen(false)}>Producers</MobileNavLink>
                        <MobileNavLink href="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</MobileNavLink>
                        <MobileNavLink href="/programs" onClick={() => setIsMobileMenuOpen(false)}>Programs</MobileNavLink>
                        <MobileNavLink href="/news" onClick={() => setIsMobileMenuOpen(false)}>News</MobileNavLink>
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="bg-primary hover:bg-primary-dark transition-colors text-slate-900 font-bold block w-full text-center py-3 rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <Link
            href={href}
            className="block px-3 py-3 text-base font-medium text-slate-600 bg-transparent hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-gray-800 hover:text-primary-dark dark:hover:text-primary rounded-lg transition-colors"
            onClick={onClick}
        >
            {children}
        </Link>
    );
}
