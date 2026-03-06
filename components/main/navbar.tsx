'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Features', 'Pricing', 'Contact'];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
            `}</style>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled || mobileMenuOpen
                    ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
                    : 'bg-transparent border-b border-transparent'
                    }`}
                style={{ fontFamily: "'Roboto', sans-serif" }}
            >
                <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Left: Logo Text */}
                    <Link href="/" className="no-underline" onClick={() => setMobileMenuOpen(false)}>
                        <span className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                            Nailart AI
                        </span>
                    </Link>

                    {/* Center: Desktop Navigation Links */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-white/80 hover:text-white no-underline text-[0.95rem] font-medium transition-colors duration-200"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/started"
                            className="hidden md:block px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-[0.95rem] border border-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-sm"
                        >
                            Log In
                        </Link>

                        <button
                            className="md:hidden block bg-transparent border-none text-white cursor-pointer p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`${mobileMenuOpen ? 'flex' : 'hidden'
                        } md:hidden flex-col absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 p-6 gap-6 items-center`}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white no-underline text-[1.2rem] font-medium"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="/started"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mt-4 px-8 py-3 rounded-lg bg-white text-black no-underline font-semibold text-[1.1rem] text-center w-max"
                    >
                        Get Started
                    </Link>
                </div>
            </header>
        </>
    );
}
