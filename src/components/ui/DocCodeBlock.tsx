"use client";

import React from 'react';
import { Copy } from 'lucide-react';

export const DocCodeBlock = ({ lang, code }: { lang: string, code: string }) => (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden my-6 group">
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
            <span className="text-xs font-mono text-gray-500">{lang}</span>
            <Copy size={14} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-white" />
        </div>
        <div className="p-4 overflow-x-auto">
            <pre className="font-mono text-sm text-gray-300 leading-relaxed whitespace-pre">{code}</pre>
        </div>
    </div>
);
