"use client";

import React from 'react';
import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

export const Footer = () => (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#020202] text-sm text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-12">
            <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black font-bold font-mono text-xs">M</div>
                    <span className="font-bold text-white">Mirai</span>
                </div>
                <p className="text-gray-500 mb-6 max-w-xs leading-relaxed">
                    The intelligence layer for the next generation of computing. Deploy anywhere, instantly.
                </p>
                <div className="flex gap-4">
                    <Github size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                    <Twitter size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                </div>
            </div>
            {[
                { title: 'Product', links: [{ l: 'Model Library', p: '/models' }, { l: 'Inference Engine', p: '/' }, { l: 'Enterprise', p: '/enterprise' }] },
                { title: 'Developers', links: [{ l: 'Documentation', p: '/docs' }, { l: 'API Reference', p: '/docs' }, { l: 'Status', p: '/' }] },
                { title: 'Company', links: [{ l: 'About', p: '/' }, { l: 'Blog', p: '/' }, { l: 'Careers', p: '/' }] },
                { title: 'Legal', links: [{ l: 'Privacy', p: '/' }, { l: 'Terms', p: '/' }] }
            ].map((col, i) => (
                <div key={i}>
                    <h4 className="text-white font-bold mb-6">{col.title}</h4>
                    <ul className="space-y-4 text-gray-500">
                        {col.links.map((item, j) => (
                            <li key={j}><Link href={item.p} className="hover:text-white transition-colors">{item.l}</Link></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600">
            <p>© 2024 Mirai Inc.</p>
            <div className="flex items-center gap-2 text-xs font-mono mt-4 md:mt-0">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                SYSTEM NORMAL
            </div>
        </div>
    </footer>
);
