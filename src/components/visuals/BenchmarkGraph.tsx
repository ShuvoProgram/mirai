"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const BenchmarkGraph = () => {
    const [activeChip, setActiveChip] = useState('M4 Max');

    type ChipData = { tps: number, lat: number, power: number };
    const data: Record<string, ChipData> = {
        'M4 Max': { tps: 182.5, lat: 8, power: 12 },
        'A17 Pro': { tps: 45.2, lat: 22, power: 4 },
        'RTX 4090': { tps: 210.1, lat: 6, power: 450 }
    };

    return (
        <div className="w-full bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <h3 className="text-lg font-mono text-white">Inference Performance (Llama-3-8B)</h3>
                <div className="flex gap-2 bg-white/5 p-1 rounded-lg">
                    {(Object.keys(data) as Array<keyof typeof data>).map(chip => (
                        <button
                            key={chip}
                            onClick={() => setActiveChip(chip)}
                            className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${activeChip === chip ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
                        >
                            {chip}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest mb-2">Throughput</div>
                    <motion.div
                        key={`${activeChip}-tps`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl font-bold text-white mb-1"
                    >
                        {data[activeChip].tps}
                    </motion.div>
                    <div className="text-green-400 text-xs">tok/sec</div>
                </div>
                <div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest mb-2">First Token</div>
                    <motion.div
                        key={`${activeChip}-lat`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl font-bold text-white mb-1"
                    >
                        {data[activeChip].lat}
                    </motion.div>
                    <div className="text-blue-400 text-xs">ms latency</div>
                </div>
                <div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest mb-2">Efficiency</div>
                    <motion.div
                        key={`${activeChip}-pow`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl font-bold text-white mb-1"
                    >
                        {data[activeChip].power}
                    </motion.div>
                    <div className="text-orange-400 text-xs">watts</div>
                </div>
            </div>
        </div>
    );
};
