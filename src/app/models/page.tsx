"use client";

import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export default function ModelsPage() {
    const [filter, setFilter] = useState("All");

    const models = [
        { name: "Llama 3 8B", type: "Text", size: "4.7GB", downloads: "2.4M", desc: "Most popular general purpose model. Great for chat.", tags: ["Chat", "Reasoning"] },
        { name: "Mistral 7B v0.3", type: "Text", size: "4.1GB", downloads: "1.8M", desc: "High performance instruction tuned model.", tags: ["Code", "Chat"] },
        { name: "Gemma 2 9B", type: "Text", size: "5.2GB", downloads: "900K", desc: "Google's open weights model optimized for TPUs.", tags: ["Reasoning"] },
        { name: "Whisper Large v3", type: "Audio", size: "1.5GB", downloads: "3.1M", desc: "Robust speech recognition supporting 99 languages.", tags: ["ASR", "Multilingual"] },
        { name: "Stable Diffusion 3", type: "Image", size: "6.8GB", downloads: "450K", desc: "Text-to-image generation optimized for Apple Neural Engine.", tags: ["Generation", "Art"] },
        { name: "Phi-3 Mini", type: "Text", size: "2.3GB", downloads: "1.2M", desc: "Efficient small language model for mobile devices.", tags: ["Mobile", "Fast"] },
    ];

    const filtered = filter === "All" ? models : models.filter(m => m.type === filter);

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen max-w-7xl mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Model Library</h1>
                <p className="text-gray-400 max-w-2xl">
                    Pre-quantized models ready for immediate deployment. Mirai automatically handles format conversion (CoreML, ONNX, TFLite).
                </p>
            </div>

            <div className="flex gap-2 mb-8 overflow-x-auto pb-4">
                {["All", "Text", "Audio", "Image"].map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${filter === f ? 'bg-white text-black border-white' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'}`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((m, i) => (
                    <SpotlightCard key={i} className="p-6 rounded-xl bg-gray-900/40 border border-white/10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex gap-2">
                                <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded bg-white/5 border border-white/5 ${m.type === 'Text' ? 'text-blue-400' : m.type === 'Audio' ? 'text-purple-400' : 'text-green-400'}`}>{m.type}</span>
                                <span className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-400">{m.size}</span>
                            </div>
                            <Download size={16} className="text-gray-500 hover:text-white cursor-pointer" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{m.name}</h3>
                        <p className="text-sm text-gray-400 mb-6 flex-1">{m.desc}</p>
                        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                            <div className="flex gap-2">
                                {m.tags.map(t => <span key={t} className="text-xs text-gray-500">#{t}</span>)}
                            </div>
                            <span className="text-xs font-mono text-gray-600">{m.downloads}</span>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
}
