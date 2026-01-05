"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-xl bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                <h1 className="text-3xl font-bold text-white mb-2">Contact Sales</h1>
                <p className="text-gray-400 mb-8">Deploying to more than 100k devices? Let's talk.</p>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">First Name</label>
                            <input className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Last Name</label>
                            <input className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Work Email</label>
                        <input className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                        <textarea rows={4} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" />
                    </div>
                    <Button className="w-full h-12">Submit Request</Button>
                </form>
            </div>
        </div>
    );
};
