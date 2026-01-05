"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Smartphone, Server } from 'lucide-react';

export const ArchitectureVisual = () => {
    return (
        <div className="relative h-[400px] w-full border border-white/10 rounded-2xl overflow-hidden bg-[#050505] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
            <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-2xl px-8">
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="flex items-center gap-3 px-4 py-2 rounded-full bg-gray-900 border border-white/10 text-sm text-gray-300"
                >
                    <MessageSquare size={14} />
                    <span>User Query: "Analyze financial report"</span>
                </motion.div>

                <div className="relative w-full flex justify-center items-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent absolute top-1/2" />
                    <div className="bg-black border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] rounded-xl px-6 py-4 relative z-20 flex flex-col items-center">
                        <div className="text-xs font-mono text-blue-400 mb-1">MIRAI ROUTER</div>
                        <div className="font-bold text-white">Decision Engine</div>
                    </div>
                </div>

                <div className="flex w-full justify-between gap-8">
                    <motion.div
                        className="flex-1 p-4 rounded-xl border border-green-500/30 bg-green-500/5 flex items-center gap-3"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><Smartphone size={20} /></div>
                        <div>
                            <div className="text-xs text-green-400 font-mono mb-1">LOCAL (NPU)</div>
                            <div className="text-sm font-bold text-white">Llama-3-8B</div>
                            <div className="text-xs text-gray-500 mt-1">Privacy Safe • 0ms Cost</div>
                        </div>
                    </motion.div>

                    <div className="flex-1 p-4 rounded-xl border border-white/5 bg-white/5 flex items-center gap-3 opacity-50 grayscale">
                        <div className="p-2 bg-white/10 rounded-lg text-gray-400"><Server size={20} /></div>
                        <div>
                            <div className="text-xs text-gray-400 font-mono mb-1">CLOUD (GPU)</div>
                            <div className="text-sm font-bold text-gray-300">GPT-4o</div>
                            <div className="text-xs text-gray-500 mt-1">Complex Reasoning</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
