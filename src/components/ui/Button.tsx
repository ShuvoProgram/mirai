"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "outline" | "ghost";
    onClick?: () => void;
    className?: string;
}

export const Button = ({ children, variant = "primary", onClick, className = "" }: ButtonProps) => {
    const baseStyle = "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 border cursor-pointer";
    const variants = {
        primary: "bg-white text-black border-transparent hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]",
        outline: "bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40",
        ghost: "text-gray-400 hover:text-white bg-transparent border-transparent hover:bg-white/5"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </motion.button>
    );
};
