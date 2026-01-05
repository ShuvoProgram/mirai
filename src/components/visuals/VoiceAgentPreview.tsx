"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Volume2 } from 'lucide-react';

export const VoiceAgentPreview = () => {
    const [status, setStatus] = useState('idle');
    const [transcript, setTranscript] = useState('');
    const [translation, setTranslation] = useState('');

    useEffect(() => {
        let mounted = true;
        const cycle = async () => {
            while (mounted) {
                setStatus('idle'); setTranscript(''); setTranslation('');
                await new Promise(r => setTimeout(r, 1000));

                setStatus('user-speaking');
                setTranscript('Bonjour...');
                await new Promise(r => setTimeout(r, 500));
                setTranscript('Bonjour, comment ça va?');
                await new Promise(r => setTimeout(r, 1200));

                setStatus('processing');
                await new Promise(r => setTimeout(r, 800));

                setStatus('ai-speaking');
                setTranslation("Hello, how are you?");
                await new Promise(r => setTimeout(r, 2500));
            }
        };
        cycle();
        return () => { mounted = false };
    }, []);

    return (
        <div className="h-full flex flex-col items-center justify-center relative bg-black/20 overflow-hidden">
            <div className={`absolute inset-0 bg-purple-500/5 transition-opacity duration-1000 ${status === 'idle' ? 'opacity-0' : 'opacity-100'}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)]" />

            <div className="relative z-10 w-full max-w-[280px] flex flex-col items-center">
                <div className="h-20 flex items-center justify-center gap-1.5 mb-10">
                    {[...Array(12)].map((_, i) => {
                        const variants = {
                            idle: { height: 4, opacity: 0.3 },
                            'user-speaking': {
                                height: [10, 32, 14, 24, 10],
                                opacity: 1,
                                transition: { duration: 0.4, repeat: Infinity, repeatType: "mirror" as const, delay: i * 0.05 }
                            },
                            processing: {
                                height: 8,
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.2, 1],
                                transition: { duration: 0.5, repeat: Infinity, delay: i * 0.1 }
                            },
                            'ai-speaking': {
                                height: [10, 48, 20, 40, 10],
                                backgroundColor: "#a855f7",
                                opacity: 1,
                                transition: { duration: 0.5, repeat: Infinity, repeatType: "mirror" as const, delay: i * 0.03 }
                            }
                        };

                        return (
                            <motion.div
                                key={i}
                                animate={status}
                                variants={variants}
                                className={`w-1.5 rounded-full ${status === 'ai-speaking' ? 'bg-purple-400 shadow-[0_0_10px_#a855f7]' : 'bg-white/80'}`}
                            />
                        );
                    })}
                </div>

                <motion.div
                    layout
                    className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                >
                    <div className={`w-2 h-2 rounded-full ${status === 'processing' ? 'bg-blue-400 animate-pulse' : status.includes('speaking') ? 'bg-green-400' : 'bg-gray-500'}`} />
                    <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest font-bold">
                        {status === 'user-speaking' ? 'Listening...' : status === 'processing' ? 'Translating (12ms)' : status === 'ai-speaking' ? 'Speaking' : 'Standby'}
                    </span>
                </motion.div>

                <div className="text-center space-y-4 h-28 w-full">
                    <AnimatePresence mode="wait">
                        {transcript && (
                            <motion.div
                                key="transcript"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-2xl font-bold text-white tracking-tight"
                            >
                                "{transcript}"
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        {translation && (
                            <motion.div
                                key="translation"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-lg text-purple-300 font-medium bg-purple-500/10 px-4 py-2 rounded-xl inline-block border border-purple-500/20"
                            >
                                "{translation}"
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="absolute bottom-6 flex gap-6 text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                <div className="flex items-center gap-1.5"><Mic size={12} className="text-gray-400" /> Source: FR</div>
                <div className="flex items-center gap-1.5"><Volume2 size={12} className="text-purple-400" /> Target: EN</div>
            </div>
        </div>
    );
};
