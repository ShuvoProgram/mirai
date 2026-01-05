"use client";

import React from 'react';
import { Info, AlertTriangle, Check, type LucideIcon } from 'lucide-react';

interface DocNoteProps {
    type?: "info" | "warning" | "tip";
    children: React.ReactNode;
}

export const DocNote = ({ type = "info", children }: DocNoteProps) => {
    const styles: Record<string, { bg: string, border: string, icon: LucideIcon, color: string }> = {
        info: { bg: "bg-blue-500/10", border: "border-blue-500/20", icon: Info, color: "text-blue-400" },
        warning: { bg: "bg-yellow-500/10", border: "border-yellow-500/20", icon: AlertTriangle, color: "text-yellow-400" },
        tip: { bg: "bg-green-500/10", border: "border-green-500/20", icon: Check, color: "text-green-400" }
    };
    const StyleIcon = styles[type].icon;

    return (
        <div className={`p-4 rounded-xl border ${styles[type].border} ${styles[type].bg} flex gap-3 my-6`}>
            <StyleIcon className={`shrink-0 mt-0.5 ${styles[type].color}`} size={18} />
            <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
        </div>
    );
};
