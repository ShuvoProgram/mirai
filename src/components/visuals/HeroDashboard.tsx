"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { CountUp } from '@/components/ui/CountUp';

export const HeroDashboard = () => {
    const [phase, setPhase] = useState('init');

    useEffect(() => {
        let mounted = true;
        const sequence = async () => {
            while (mounted) {
                setPhase('init');
                await new Promise(r => setTimeout(r, 500));
                setPhase('coding');
                await new Promise(r => setTimeout(r, 3000));
                setPhase('connecting');
                await new Promise(r => setTimeout(r, 1000));
                setPhase('processing');
                await new Promise(r => setTimeout(r, 1500));
                setPhase('done');
                await new Promise(r => setTimeout(r, 4000));
            }
        };
        sequence();
        return () => { mounted = false; };
    }, []);

    const codeLines = [
        { text: "// 1. Define your inference pipeline", color: "text-gray-500", indent: 0 },
        { text: "", color: "text-white", indent: 0 },
        { text: "const", color: "text-purple-400", indent: 0 },
        { text: "pipeline = new Mirai({", color: "text-blue-400", indent: 0 },
        { text: "models: ['llama-3-8b', 'whisper-v3'],", color: "text-gray-300", indent: 1 },
        { text: "strategy: 'cost-optimized',", color: "text-green-400", indent: 1 },
        { text: "fallback: 'gpt-4o'", color: "text-green-400", indent: 1 },
        { text: "});", color: "text-white", indent: 0 },
        { text: "", color: "text-white", indent: 0 },
        { text: "// 2. Execute safely", color: "text-gray-500", indent: 0 },
        { text: "await", color: "text-purple-400", indent: 0 },
        { text: "pipeline.generate(prompt);", color: "text-yellow-400", indent: 0 },
    ];

    return (
        <div className="relative rounded-xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl overflow-hidden max-w-5xl mx-auto ring-1 ring-white/10">
            <div className="flex items-center gap-4 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded bg-black border border-white/10 text-xs text-gray-400 font-mono">
                    <Lock size={10} /> mirai.config.ts
                </div>
            </div>

            <div className="grid md:grid-cols-2">
                <div className="p-6 text-left border-r border-white/5 bg-black/50 font-mono text-xs md:text-sm overflow-x-auto h-[320px] relative">
                    <div className="space-y-1">
                        {codeLines.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                    opacity: phase !== 'init' ? 1 : 0,
                                    x: phase !== 'init' ? 0 : -10
                                }}
                                transition={{ delay: phase === 'coding' ? i * 0.1 : 0, duration: 0.2 }}
                                className={`${line.color} whitespace-pre`}
                                style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                            >
                                {line.text}
                                {i === codeLines.length - 1 && phase === 'coding' && (
                                    <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse align-middle" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-900/10 to-purple-900/10 flex flex-col justify-center items-center relative overflow-hidden h-[320px]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    <motion.div
                        animate={{ top: ["0%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-12 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent z-0 pointer-events-none"
                    />

                    <div className="relative z-10 w-full max-w-xs space-y-6">
                        <div className="flex justify-between text-xs font-mono text-gray-400 uppercase tracking-wider">
                            <span>Device Status</span>
                            <motion.span
                                animate={{
                                    color: ['processing', 'done'].includes(phase) ? '#4ade80' : '#6b7280',
                                    textShadow: ['processing', 'done'].includes(phase) ? '0 0 10px rgba(74,222,128,0.5)' : 'none'
                                }}
                            >
                                {['processing', 'done'].includes(phase) ? 'CONNECTED' : 'SEARCHING...'}
                            </motion.span>
                        </div>

                        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: ['processing', 'done'].includes(phase) ? "100%" : "5%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <motion.div
                                initial={{ opacity: 0.5, scale: 0.95 }}
                                animate={{
                                    opacity: phase === 'done' ? 1 : 0.5,
                                    scale: phase === 'done' ? 1 : 0.95,
                                    borderColor: phase === 'done' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'
                                }}
                                className="p-4 bg-black/40 rounded-xl border border-white/5 text-center transition-colors duration-500"
                            >
                                <div className="text-3xl font-bold text-white mb-1">
                                    {phase === 'done' ? <CountUp to={12} suffix="ms" /> : '--'}
                                </div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Latency</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0.5, scale: 0.95 }}
                                animate={{
                                    opacity: phase === 'done' ? 1 : 0.5,
                                    scale: phase === 'done' ? 1 : 0.95,
                                    borderColor: phase === 'done' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'
                                }}
                                className="p-4 bg-black/40 rounded-xl border border-white/5 text-center transition-colors duration-500"
                            >
                                <motion.div className="text-3xl font-bold text-white mb-1">
                                    {phase === 'done' ? '0.0$' : '--'}
                                </motion.div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Cost</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
