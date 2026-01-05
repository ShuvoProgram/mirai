"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Mic, MessageSquare } from 'lucide-react';
import { RagPreview } from '@/components/visuals/RagPreview';
import { VoiceAgentPreview } from '@/components/visuals/VoiceAgentPreview';
import { PrivateAgentPreview } from '@/components/visuals/PrivateAgentPreview';

export const UseCases = () => {
    const [activeCase, setActiveCase] = useState(0);

    const iconStyles = {
        blue: {
            active: "bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 shadow-[0_0_30px_rgba(59,130,246,0.4)] border-blue-400/20",
            inactive: "group-hover:text-blue-400"
        },
        purple: {
            active: "bg-gradient-to-br from-purple-600 via-purple-500 to-pink-400 shadow-[0_0_30px_rgba(168,85,247,0.4)] border-purple-400/20",
            inactive: "group-hover:text-purple-400"
        },
        green: {
            active: "bg-gradient-to-br from-green-600 via-green-500 to-emerald-400 shadow-[0_0_30px_rgba(34,197,94,0.4)] border-green-400/20",
            inactive: "group-hover:text-green-400"
        }
    };

    const cases = [
        {
            title: "Local RAG",
            desc: "Securely query documents on-device without data leaving the sandbox.",
            icon: FileText,
            color: "blue" as const,
            preview: <RagPreview />
        },
        {
            title: "Zero-Latency Voice",
            desc: "Real-time speech-to-speech translation with Whisper + Llama.",
            icon: Mic,
            color: "purple" as const,
            preview: <VoiceAgentPreview />
        },
        {
            title: "Private Companions",
            desc: "AI agents that remember user context and run offline.",
            icon: MessageSquare,
            color: "green" as const,
            preview: <PrivateAgentPreview />
        }
    ];

    return (
        <section className="py-32 px-6 border-t border-white/5 bg-[#030303]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for builders.</h2>
                        <p className="text-lg text-gray-400 mb-12">
                            Mirai provides the primitives to build the next generation of privacy-focused AI applications.
                        </p>
                        <div className="space-y-2">
                            {cases.map((c, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveCase(i)}
                                    className={`group p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeCase === i
                                            ? 'bg-white/[0.03] border-white/10'
                                            : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                                        }`}
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border
                      ${activeCase === i
                                                ? `${iconStyles[c.color].active} text-white scale-110 border-t`
                                                : `bg-white/5 border-white/5 text-gray-500 ${iconStyles[c.color].inactive} group-hover:bg-white/10 group-hover:scale-105`
                                            }
                    `}>
                                            <c.icon size={26} strokeWidth={activeCase === i ? 2 : 1.5} />
                                        </div>
                                        <div>
                                            <h4 className={`text-lg font-bold transition-colors duration-300 ${activeCase === i ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                                {c.title}
                                            </h4>
                                            <AnimatePresence>
                                                {activeCase === i && (
                                                    <motion.p
                                                        initial={{ opacity: 0, height: 0, y: -10 }}
                                                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="text-sm text-gray-400 mt-2 leading-relaxed"
                                                    >
                                                        {c.desc}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[500px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl" />
                        <div className="relative h-full bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCase}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="h-full"
                                >
                                    {cases[activeCase].preview}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
