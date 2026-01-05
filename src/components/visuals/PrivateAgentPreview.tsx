"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, FileText, Mail, Database } from 'lucide-react';

export const PrivateAgentPreview = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let mounted = true;
        const cycle = async () => {
            while (mounted) {
                setStep(0); await new Promise(r => setTimeout(r, 1000));
                setStep(1); await new Promise(r => setTimeout(r, 1500));
                setStep(2); await new Promise(r => setTimeout(r, 1500));
                setStep(3); await new Promise(r => setTimeout(r, 4500));
            }
        }
        cycle();
        return () => { mounted = false };
    }, []);

    const nodes = [
        { id: 'calendar', icon: Calendar, label: 'Calendar', x: 20, y: 20, color: 'text-blue-400', bg: 'bg-blue-500/20', delay: 0.1 },
        { id: 'notes', icon: FileText, label: 'Obsidian Vault', x: 80, y: 30, color: 'text-purple-400', bg: 'bg-purple-500/20', delay: 0.2 },
        { id: 'mail', icon: Mail, label: 'Local Mail', x: 50, y: 80, color: 'text-green-400', bg: 'bg-green-500/20', delay: 0.3 },
    ];

    return (
        <div className="h-full flex flex-col p-6 relative overflow-hidden bg-[#0A0A0A]">
            <div className="absolute inset-0 pointer-events-none">
                {step >= 2 && (
                    <svg className="w-full h-full">
                        {nodes.map((node, i) => (
                            <motion.line
                                key={i}
                                x1={`${node.x}%`} y1={`${node.y}%`}
                                x2="50%" y2="50%"
                                stroke={step >= 3 ? "#4ade80" : "#3b82f6"}
                                strokeWidth="2"
                                strokeOpacity="0.2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, delay: node.delay }}
                            />
                        ))}
                    </svg>
                )}
            </div>

            <div className="flex items-center justify-between mb-8 z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-900/20">
                        <Database size={20} className="text-white" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white">Personal Context</div>
                        <div className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Local Knowledge Graph
                        </div>
                    </div>
                </div>
                <div className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded bg-white/5">
                    RAM: 240MB
                </div>
            </div>

            <div className="relative flex-1 min-h-[200px] z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                        animate={{
                            scale: step === 2 ? 1.1 : 1,
                            boxShadow: step === 2 ? "0 0 30px rgba(59,130,246,0.3)" : "0 0 0px rgba(0,0,0,0)"
                        }}
                        className="w-16 h-16 bg-gray-900 rounded-full border border-white/10 flex items-center justify-center relative"
                    >
                        <div className="absolute inset-0 bg-white/5 rounded-full animate-ping opacity-20" />
                        <div className="text-white font-bold text-xl">M</div>
                    </motion.div>
                </div>

                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        className={`absolute flex flex-col items-center gap-2 p-3 rounded-xl border border-white/5 backdrop-blur-sm transition-colors duration-500 ${step >= 2 ? 'bg-white/10 border-white/20' : 'bg-transparent'}`}
                        style={{ left: `${node.x}%`, top: `${node.y}%`, x: '-50%', y: '-50%' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: node.delay }}
                    >
                        <div className={`p-2 rounded-lg ${node.bg} ${node.color}`}>
                            <node.icon size={16} />
                        </div>
                        <div className="text-[10px] font-medium text-gray-400 whitespace-nowrap bg-black/50 px-2 py-0.5 rounded">
                            {step >= 2 && node.id === 'calendar' ? 'Meeting: Q3 Review' :
                                step >= 2 && node.id === 'notes' ? 'Action: Update Deck' :
                                    node.label}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-auto z-10">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="text-center text-gray-500 text-sm py-4"
                        >
                            Waiting for request...
                        </motion.div>
                    )}
                    {step === 1 && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                                <span className="text-xs font-bold text-white">U</span>
                            </div>
                            <div className="text-sm text-gray-200">"Draft a follow-up for the Q3 review."</div>
                        </motion.div>
                    )}
                    {step >= 2 && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                            className="space-y-2"
                        >
                            {step === 2 && (
                                <div className="flex gap-2 justify-center">
                                    <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-[10px] border border-blue-500/30">Found: Tuesday 2pm</span>
                                    <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 text-[10px] border border-purple-500/30">Found: Update Slides</span>
                                </div>
                            )}
                            {step >= 3 && (
                                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 shadow-lg">
                                    <div className="flex items-center gap-2 mb-2 border-b border-green-500/10 pb-2">
                                        <Mail size={12} className="text-green-400" />
                                        <span className="text-xs font-bold text-green-300">Draft Created</span>
                                    </div>
                                    <div className="text-xs text-gray-300 font-mono leading-relaxed">
                                        Subject: Re: Q3 Review<br />
                                        Hi Team, regarding our meeting on Tuesday: I've updated the slide deck as discussed...
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
