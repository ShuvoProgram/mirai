"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const IntegrationSection = () => {
    const [activeTab, setActiveTab] = useState('typescript');

    return (
        <section className="py-32 px-6 border-t border-white/5 bg-[#030303]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Drop-in SDK.</h2>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        Integrate in minutes. Our SDK handles model downloading, caching, hardware delegates, and quantization automatically.
                    </p>
                    <ul className="space-y-4 mb-10">
                        {['Automatic INT4 Quantization', 'Cross-Platform (iOS, Android, Web)', 'HuggingFace Compatible'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Check size={12} />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Button variant="outline">Read Documentation</Button>
                </div>

                <div className="flex-1 w-full max-w-xl">
                    <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">
                        <div className="flex items-center gap-6 px-4 py-3 bg-white/5 border-b border-white/5">
                            {['typescript', 'python'].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setActiveTab(lang)}
                                    className={`text-xs font-medium pb-3 -mb-3.5 transition-colors relative ${activeTab === lang ? 'text-white' : 'text-gray-500 hover:text-white'
                                        }`}
                                >
                                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                                    {activeTab === lang && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                        <div className="p-6 overflow-x-auto h-[340px] relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="font-mono text-sm leading-relaxed text-gray-300"
                                >
                                    {activeTab === 'typescript' ? (
                                        <pre>
                                            <span className="text-purple-400">import</span> {'{'} useMirai {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@mirai/react'</span>;{'\n\n'}

                                            <span className="text-purple-400">function</span> <span className="text-blue-400">ChatBot</span>() {'{'}{'\n'}
                                            &nbsp;&nbsp;<span className="text-gray-500">// Auto-downloads model on mount</span>{'\n'}
                                            &nbsp;&nbsp;<span className="text-purple-400">const</span> {'{'} generate, status {'}'} = <span className="text-blue-400">useMirai</span>({'{'}{'\n'}
                                            &nbsp;&nbsp;&nbsp;&nbsp;model: <span className="text-green-400">'llama-3-8b-instruct'</span>,{'\n'}
                                            &nbsp;&nbsp;&nbsp;&nbsp;quantization: <span className="text-green-400">'q4_0'</span>{'\n'}
                                            &nbsp;&nbsp;{'}'});{'\n\n'}

                                            &nbsp;&nbsp;<span className="text-purple-400">return</span> ({'\n'}
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span>&gt;{'\n'}
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status: {'{'}status{'}'}{'\n'}
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">div</span>&gt;{'\n'}
                                            &nbsp;&nbsp;);{'\n'}
                                            {'}'}
                                        </pre>
                                    ) : (
                                        <pre>
                                            <span className="text-purple-400">from</span> mirai <span className="text-purple-400">import</span> MiraiClient{'\n\n'}

                                            client = <span className="text-blue-400">MiraiClient</span>(api_key=<span className="text-green-400">"env.MIRAI_KEY"</span>){'\n\n'}

                                            <span className="text-gray-500"># Auto-detects local NPU if available</span>{'\n'}
                                            stream = client.chat.completions.create({'\n'}
                                            &nbsp;&nbsp;model=<span className="text-green-400">"llama-3-8b-instruct"</span>,{'\n'}
                                            &nbsp;&nbsp;messages=[{'{'}<span className="text-green-400">"role"</span>: <span className="text-green-400">"user"</span>, <span className="text-green-400">"content"</span>: <span className="text-green-400">"Hello!"</span>{'}'}],{'\n'}
                                            &nbsp;&nbsp;stream=<span className="text-purple-400">True</span>{'\n'}
                                            ){'\n\n'}

                                            <span className="text-purple-400">for</span> chunk <span className="text-purple-400">in</span> stream:{'\n'}
                                            &nbsp;&nbsp;<span className="text-yellow-400">print</span>(chunk.choices[0].delta.content, end=<span className="text-green-400">""</span>)
                                        </pre>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
