"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Network, Cpu, Cloud } from 'lucide-react';

export const DocArchitectureVisual = () => {
    return (
        <div className="w-full h-64 bg-[#0A0A0A] border border-white/10 rounded-xl relative overflow-hidden flex items-center justify-center my-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)]" />

            <div className="flex items-center gap-12 relative z-10">
                {/* App */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg border border-white/10 flex items-center justify-center">
                        <Code2 size={24} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-500 font-mono">APP</span>
                </div>

                {/* Animated Path 1 */}
                <div className="w-16 h-[2px] bg-gray-800 relative overflow-hidden">
                    <motion.div
                        animate={{ x: [-20, 64] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    />
                </div>

                {/* Router */}
                <div className="flex flex-col items-center gap-2 relative">
                    <div className="w-16 h-16 bg-blue-900/20 rounded-full border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                        <Network size={28} className="text-blue-400" />
                    </div>
                    <span className="text-xs text-blue-400 font-mono font-bold">ROUTER</span>

                    {/* Router Pulse */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border border-blue-500"
                    />
                </div>

                {/* Animated Path 2 (Split) */}
                <div className="relative w-16 h-16">
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                        <path d="M0,32 C20,32 40,10 64,10" fill="none" stroke="#1f2937" strokeWidth="2" />
                        <path d="M0,32 C20,32 40,54 64,54" fill="none" stroke="#1f2937" strokeWidth="2" />

                        <motion.circle r="2" fill="#4ade80">
                            <animateMotion path="M0,32 C20,32 40,10 64,10" dur="1.5s" repeatCount="indefinite" />
                        </motion.circle>
                        <motion.circle r="2" fill="#a855f7">
                            <animateMotion path="M0,32 C20,32 40,54 64,54" dur="1.5s" begin="0.75s" repeatCount="indefinite" />
                        </motion.circle>
                    </svg>
                </div>

                {/* Targets */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-500/10 rounded border border-green-500/20 flex items-center justify-center">
                            <Cpu size={16} className="text-green-400" />
                        </div>
                        <span className="text-xs text-green-400 font-mono">NPU</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-500/10 rounded border border-purple-500/20 flex items-center justify-center">
                            <Cloud size={16} className="text-purple-400" />
                        </div>
                        <span className="text-xs text-purple-400 font-mono">CLOUD</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
