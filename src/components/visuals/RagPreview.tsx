"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, RefreshCw, Lock } from 'lucide-react';

export const RagPreview = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let mounted = true;
        const sequence = async () => {
            while (mounted) {
                setStep(0); await new Promise(r => setTimeout(r, 1000));
                setStep(1); await new Promise(r => setTimeout(r, 1500));
                setStep(2); await new Promise(r => setTimeout(r, 1000));
                setStep(3); await new Promise(r => setTimeout(r, 4000));
            }
        }
        sequence();
        return () => { mounted = false };
    }, []);

    return (
        <div className="h-full flex flex-col p-6 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
                        <FileText size={20} />
                    </div>
                    <motion.div
                        animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-1 bg-white/50 blur-[1px]"
                    />
                </div>
                <div>
                    <div className="text-sm font-mono text-gray-300">confidential_Q3_report.pdf</div>
                    <div className="text-[10px] text-gray-500 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Indexed (Local Vector DB)
                    </div>
                </div>
            </div>

            <div className="space-y-6 relative z-10">
                <AnimatePresence>
                    {step >= 1 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            className="bg-blue-500/10 self-end p-4 rounded-2xl rounded-tr-sm text-sm text-blue-100 max-w-[90%] ml-auto border border-blue-500/20"
                        >
                            What was the net retention rate?
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {step === 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center gap-2 text-xs text-gray-500 ml-2"
                        >
                            <RefreshCw size={12} className="animate-spin" /> Scanning vector embeddings...
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {step >= 2 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-3"
                        >
                            <div className="mt-1">
                                <div className="w-1 h-full bg-gray-800 rounded-full overflow-hidden min-h-[40px]">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: '85%' }}
                                        transition={{ delay: 0.2 }}
                                        className="w-full bg-green-500 rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="flex-1">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-[10px] uppercase font-bold text-green-400 mb-1"
                                >
                                    Context Found (Page 14) • 98% Match
                                </motion.div>
                                <div className="bg-gray-900/50 border border-white/5 p-3 rounded-lg text-xs text-gray-400 font-mono mb-2">
                                    "...Q3 showed strong resilience with <span className="text-white bg-white/10 px-1 rounded">NRR hitting 124%</span> driven by enterprise expansion..."
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {step >= 3 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-gray-800 p-4 rounded-2xl rounded-tl-sm text-sm text-gray-200 max-w-[90%] border border-white/10 flex gap-3 shadow-xl"
                        >
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            <div>
                                Based on the report, the net retention rate increased to <strong className="text-white">124% Year-over-Year</strong>.
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-auto flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase border-t border-white/5 pt-4">
                <Lock size={10} /> End-to-End Encrypted • Offline Mode
            </div>
        </div>
    );
};
