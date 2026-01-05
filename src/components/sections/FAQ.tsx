"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const items = [
        { q: "Does this work on Android?", a: "Yes. Mirai supports Android via NNAPI. We automatically fallback to OpenGL/Vulkan if the NPU is not available." },
        { q: "How large are the models?", a: "We use state-of-the-art 4-bit quantization. Llama-3-8B is compressed to roughly 4.7GB, which fits comfortably on most modern phones." },
        { q: "What about battery life?", a: "Mirai is optimized for energy efficiency. By running on the NPU (Neural Processing Unit) instead of the GPU, we use 4x less power than standard inference engines." },
        { q: "Can I use my own custom models?", a: "Absolutely. You can convert any PyTorch or Safetensors model using our CLI tool `mirai convert`." },
    ];

    return (
        <section className="py-32 px-6 border-t border-white/5 bg-[#050505]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Common Questions</h2>
                <div className="space-y-4">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="border border-white/10 rounded-lg bg-[#0A0A0A] overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-white font-medium">{item.q}</span>
                                {openIndex === i ? <Minus size={16} className="text-gray-400" /> : <Plus size={16} className="text-gray-400" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
