"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/models', label: 'Models' },
        { href: '/docs', label: 'Documentation' },
        { href: '/enterprise', label: 'Enterprise' }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg font-bold font-mono group-hover:scale-95 transition-transform">M</div>
                    <span className="text-xl font-bold text-white tracking-tight">Mirai</span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium transition-colors ${pathname === item.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/signin" className="text-sm font-medium text-gray-400 hover:text-white transition-colors hidden md:block">
                        Sign In
                    </Link>
                    <Link href="/contact">
                        <Button className="h-9 px-4 text-xs">Talk to Sales</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
