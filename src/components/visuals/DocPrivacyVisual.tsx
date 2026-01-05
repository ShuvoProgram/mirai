"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const DocPrivacyVisual = () => {
    const [isCloud, setIsCloud] = useState(false);

    return (
        <div className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-6 my-8">
            <div className="flex justify-center mb-6">
                <div className="flex bg-white/5 rounded-lg p-1">
                    <button
                        onClick={() => setIsCloud(false)}
                        className={`px-4 py-1 text-xs font-medium rounded-md transition-all ${!isCloud ? 'bg-green-500/20 text-green-400' : 'text-gray-500 hover:text-white'}`}
                    >
                        Local Mode
                    </button>
                    <button
                        onClick={() => setIsCloud(true)}
                        className={`px-4 py-1 text-xs font-medium rounded-md transition-all ${isCloud ? 'bg-blue-500/20 text-blue-400' : 'text-gray-500 hover:text-white'}`}
                    >
                        Cloud Fallback
                    </button>
                </div>
            </div>

            <div className="relative h-40 border border-white/5 rounded-lg bg-black overflow-hidden flex items-center justify-center">
                {/* Device Boundary */}
                <div className="absolute inset-4 border-2 border-dashed border-gray-700 rounded-lg flex flex-col justify-between p-2">
                    <span className="text-[10px] text-gray-600 font-mono uppercase">Device Sandbox</span>
                </div>

                {/* User Data Particle */}
                <motion.div
                    animate={{
                        x: isCloud ? [0, 100, 200] : [0, 50, 0],
                        opacity: isCloud && 200 ? 0 : 1
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white] z-10 relative"
                />

                {/* Wall or Tunnel */}
                <div className="absolute right-10 top-0 bottom-0 w-2 bg-gray-800 flex items-center justify-center">
                    <motion.div
                        animate={{ height: isCloud ? "20%" : "100%" }}
                        className={`w-full bg-gray-700 transition-all duration-500 ${isCloud ? 'bg-blue-500/20' : 'bg-green-500/20'}`}
                    />
                </div>

                <div className="absolute right-2 text-xs text-gray-500 rotate-90">INTERNET</div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">
                {isCloud ? "Data is E2E encrypted before leaving the device." : "Data remains strictly within the OS sandbox."}
            </p>
        </div>
    );
};
