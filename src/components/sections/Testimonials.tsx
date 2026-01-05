"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export const Testimonials = () => {
    const reviews = [
        { name: "Sarah Chen", role: "CTO @ Flux", text: "Mirai cut our cloud GPU bill by 85%. The latency improvement on the iPhone 15 Pro is actually insane.", avatar: "SC" },
        { name: "David Park", role: "Founder @ Neo", text: "Finally, a way to run Llama-3 locally without dealing with GGML compilation errors. The JS SDK is flawless.", avatar: "DP" },
        { name: "Elena Rodriguez", role: "Eng Lead @ Vercel", text: "The smart routing feature is a game changer. We use local for chat and cloud for complex reasoning automatically.", avatar: "ER" },
        { name: "James Wilson", role: "DevOps @ Supabase", text: "Deployed to 50k users in a weekend. The edge caching layer is indistinguishable from magic.", avatar: "JW" },
        { name: "Anita Patel", role: "PM @ Linear", text: "Our mobile app feels instant now. The offline capability means our users can work from anywhere.", avatar: "AP" },
        { name: "Tom Holland", role: "Indie Hacker", text: "I built a voice assistant in 4 hours using the React hooks. Documentation is top tier.", avatar: "TH" }
    ];

    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-16">Loved by engineering teams</h2>

                <div className="relative overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-6 w-max"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 60,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        {/* Doubled list for seamless loop */}
                        {[...reviews, ...reviews, ...reviews].map((r, i) => (
                            <div key={i} className="w-[400px] flex-shrink-0">
                                <SpotlightCard className="p-8 rounded-2xl h-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center font-bold text-white text-xs border border-white/10">
                                            {r.avatar}
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-sm">{r.name}</div>
                                            <div className="text-gray-500 text-xs">{r.role}</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-sm">&quot;{r.text}&quot;</p>
                                </SpotlightCard>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
