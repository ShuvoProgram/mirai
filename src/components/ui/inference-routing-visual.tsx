"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Cpu, Cloud, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InferenceRoutingVisualProps {
  className?: string;
  circleText?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
  lightColor?: string;
}

// Animated light component that travels along the path
const AnimatedLight = ({
  pathId,
  delay = 0,
  color = "#3B82F6"
}: {
  pathId: string;
  delay?: number;
  color?: string;
}) => {
  const controls = useAnimationControls();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const startAnimation = async () => {
      await new Promise(resolve => setTimeout(resolve, delay * 1000));
      setIsVisible(true);

      // Continuous loop
      while (true) {
        await controls.start({
          offsetDistance: "100%",
          transition: { duration: 1.5, ease: "easeInOut" }
        });
        controls.set({ offsetDistance: "0%" });
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    };

    startAnimation();
  }, [controls, delay]);

  return (
    <motion.div
      initial={{ offsetDistance: "0%" }}
      animate={controls}
      style={{
        position: "absolute",
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        offsetPath: `path("${pathId}")`,
        offsetRotate: "0deg",
        filter: "blur(4px)",
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

const InferenceRoutingVisual = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor = "#3B82F6",
}: InferenceRoutingVisualProps) => {
  const [pathsDrawn, setPathsDrawn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPathsDrawn(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // SVG path definitions
  // Top paths: Top -> Router (400, 160)
  const topPaths = {
    path1: "M 100 0 L 100 55 Q 100 75 120 75 L 385 75 Q 400 75 400 95 L 400 160",
    path2: "M 300 0 L 300 50 Q 300 70 320 70 L 385 70 Q 400 70 400 90 L 400 160",
    path3: "M 500 0 L 500 50 Q 500 70 480 70 L 415 70 Q 400 70 400 90 L 400 160",
    path4: "M 700 0 L 700 55 Q 700 75 680 75 L 415 75 Q 400 75 400 95 L 400 160",
  };

  // Bottom paths: Router (400, 160) -> Models -> SDK (400, 380)
  const bottomPaths = {
    routerToLlama: "M 400 160 C 400 220, 200 220, 200 280",
    routerToWhisper: "M 400 160 C 400 220, 600 220, 600 280",
    llamaToSdk: "M 200 280 C 200 330, 400 330, 400 380",
    whisperToSdk: "M 600 280 C 600 330, 400 330, 400 380",
    // Central direct flow for "fast path"
    centerFlow: "M 400 160 L 400 380"
  };

  return (
    <div
      className={cn(
        "relative flex w-full max-w-[800px] flex-col items-center mx-auto p-4 md:p-0",
        className
      )}
    >
      {/* Top Buttons Row - Grid for perfect alignment with SVG paths (12.5%, 37.5%, etc) */}
      <div className="grid grid-cols-4 w-full mb-[-10px] relative z-20">
        <div className="flex justify-center">
          <motion.div
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-b from-[#1a1a2e] to-[#16161a] border border-blue-500/30 text-white text-[10px] sm:text-sm shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-shadow duration-300 whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.4 }}
          >
            <ChipIcon className="block text-blue-400 w-3 h-3 sm:w-4 sm:h-4" />
            <span>{badgeTexts?.first || "NPU"}</span>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-b from-[#1a1a2e] to-[#16161a] border border-purple-500/30 text-white text-[10px] sm:text-sm shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] transition-shadow duration-300 whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <ChipIcon className="block text-purple-400 w-3 h-3 sm:w-4 sm:h-4" />
            <span>{badgeTexts?.second || "GPU"}</span>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-b from-[#1a1a2e] to-[#16161a] border border-green-500/30 text-white text-[10px] sm:text-sm shadow-[0_0_15px_rgba(34,197,94,0.15)] hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] transition-shadow duration-300 whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <CloudIconSmall className="block text-green-400 w-3 h-3 sm:w-4 sm:h-4" />
            <span>{badgeTexts?.third || "Cloud"}</span>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-b from-[#1a1a2e] to-[#16161a] border border-orange-500/30 text-white text-[10px] sm:text-sm shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] transition-shadow duration-300 whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <ZapIconSmall className="block text-orange-400 w-3 h-3 sm:w-4 sm:h-4" />
            <span>{badgeTexts?.fourth || "Fallback"}</span>
          </motion.div>
        </div>
      </div>

      {/* Unified SVG Stage - Responsive Aspect Ratio */}
      <div className="relative w-full aspect-[800/420]">
        <svg
          className="w-full h-full absolute top-0 left-0 pointer-events-none"
          viewBox="0 0 800 420"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.9)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
              <animate attributeName="y1" values="-100%;100%" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="y2" values="0%;200%" dur="1.8s" repeatCount="indefinite" />
            </linearGradient>

            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(139,92,246,0)" />
              <stop offset="50%" stopColor="rgba(139,92,246,0.9)" />
              <stop offset="100%" stopColor="rgba(139,92,246,0)" />
              <animate attributeName="y1" values="-100%;100%" dur="1.8s" begin="0.2s" repeatCount="indefinite" />
              <animate attributeName="y2" values="0%;200%" dur="1.8s" begin="0.2s" repeatCount="indefinite" />
            </linearGradient>

            <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(34,197,94,0)" />
              <stop offset="50%" stopColor="rgba(34,197,94,0.9)" />
              <stop offset="100%" stopColor="rgba(34,197,94,0)" />
              <animate attributeName="y1" values="-100%;100%" dur="1.8s" begin="0.4s" repeatCount="indefinite" />
              <animate attributeName="y2" values="0%;200%" dur="1.8s" begin="0.4s" repeatCount="indefinite" />
            </linearGradient>

            <linearGradient id="flowGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(249,115,22,0)" />
              <stop offset="50%" stopColor="rgba(249,115,22,0.9)" />
              <stop offset="100%" stopColor="rgba(249,115,22,0)" />
              <animate attributeName="y1" values="-100%;100%" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
              <animate attributeName="y2" values="0%;200%" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
            </linearGradient>

            <linearGradient id="baseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.1)" />
            </linearGradient>

            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.1)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.3)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.1)" />
            </linearGradient>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Base static paths - Top */}
          <g fill="none" strokeWidth="1.5" strokeLinecap="round">
            <motion.path d={topPaths.path1} stroke="url(#baseGradient)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1 }} />
            <motion.path d={topPaths.path2} stroke="url(#baseGradient)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} />
            <motion.path d={topPaths.path3} stroke="url(#baseGradient)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} />
            <motion.path d={topPaths.path4} stroke="url(#baseGradient)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} />
          </g>

          {/* Base static paths - Bottom */}
          {pathsDrawn && (
            <g fill="none" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
              <motion.path d={bottomPaths.routerToLlama} stroke="url(#connectionGradient)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
              <motion.path d={bottomPaths.routerToWhisper} stroke="url(#connectionGradient)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
              <motion.path d={bottomPaths.llamaToSdk} stroke="url(#connectionGradient)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
              <motion.path d={bottomPaths.whisperToSdk} stroke="url(#connectionGradient)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
              <motion.path d={bottomPaths.centerFlow} stroke="url(#connectionGradient)" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
            </g>
          )}

          {/* Animated flowing overlay paths - Top */}
          {pathsDrawn && (
            <g fill="none" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)">
              <path d={topPaths.path1} stroke="url(#flowGradient1)" />
              <path d={topPaths.path2} stroke="url(#flowGradient2)" />
              <path d={topPaths.path3} stroke="url(#flowGradient3)" />
              <path d={topPaths.path4} stroke="url(#flowGradient4)" />
            </g>
          )}

          {/* Animated glowing dots - Top */}
          {pathsDrawn && (
            <>
              <motion.circle r="4" fill="#3B82F6" filter="url(#dotGlow)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.3, ease: "linear" }} style={{ offsetPath: `path("${topPaths.path1}")` }} />
              <motion.circle r="4" fill="#8B5CF6" filter="url(#dotGlow)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.3, ease: "linear", delay: 0.5 }} style={{ offsetPath: `path("${topPaths.path2}")` }} />
              <motion.circle r="4" fill="#22C55E" filter="url(#dotGlow)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.3, ease: "linear", delay: 1 }} style={{ offsetPath: `path("${topPaths.path3}")` }} />
              <motion.circle r="4" fill="#F97316" filter="url(#dotGlow)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.3, ease: "linear", delay: 1.5 }} style={{ offsetPath: `path("${topPaths.path4}")` }} />
            </>
          )}

          {/* Animated glowing dots - Bottom Flow */}
          {pathsDrawn && (
            <>
              {/* Router to Models */}
              <motion.circle r="3" fill="#22C55E" filter="url(#dotGlow)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }} style={{ offsetPath: `path("${bottomPaths.routerToLlama}")` }} />
              <motion.circle r="3" fill="#8B5CF6" filter="url(#dotGlow)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut", delay: 0.5 }} style={{ offsetPath: `path("${bottomPaths.routerToWhisper}")` }} />

              {/* Models to SDK */}
              <motion.circle r="3" fill="#22C55E" filter="url(#dotGlow)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut", delay: 0.75 }} style={{ offsetPath: `path("${bottomPaths.llamaToSdk}")` }} />
              <motion.circle r="3" fill="#8B5CF6" filter="url(#dotGlow)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut", delay: 1.25 }} style={{ offsetPath: `path("${bottomPaths.whisperToSdk}")` }} />
            </>
          )}

          {/* Center convergence point glow (Router) */}
          {pathsDrawn && (
            <motion.circle cx="400" cy="160" r="8" fill="rgba(59,130,246,0.7)" filter="url(#dotGlow)" animate={{ r: [8, 12, 8], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
          )}
        </svg>

        {/* Router Badge - Centered */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-lg border border-white/10 bg-[#101112] px-2 sm:px-4 py-1 sm:py-2 z-20 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          style={{ top: '38%' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <SparklesIcon className="size-2 sm:size-3 text-blue-400" />
          <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs text-gray-300 whitespace-nowrap">
            {title || "Intelligent inference routing"}
          </span>
        </motion.div>

        {/* Model Badges */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 h-6 sm:h-8 rounded-full bg-gradient-to-b from-[#1a1a2e] to-[#16161a] px-2 sm:px-4 text-[10px] sm:text-sm border border-green-500/20 flex items-center gap-1 sm:gap-2 text-gray-300 shadow-[0_0_20px_rgba(34,197,94,0.1)] whitespace-nowrap"
          style={{ top: '66.6%', left: '25%' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Cpu className="size-3 sm:size-4 text-green-400" />
          <span>{buttonTexts?.first || "llama-3-8b"}</span>
        </motion.div>

        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 h-6 sm:h-8 rounded-full bg-gradient-to-b from-[#1a1a2e] to-[#16161a] px-2 sm:px-4 text-[10px] sm:text-sm border border-purple-500/20 flex items-center gap-1 sm:gap-2 text-gray-300 shadow-[0_0_20px_rgba(139,92,246,0.1)] whitespace-nowrap"
          style={{ top: '66.6%', left: '75%' }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Cloud className="size-3 sm:size-4 text-purple-400" />
          <span>{buttonTexts?.second || "whisper-v3"}</span>
        </motion.div>

        {/* SDK Core */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-30" style={{ top: '90.5%' }}>
          {/* Concentric Rings */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[60px] w-[60px] sm:h-[120px] sm:w-[120px] rounded-full border border-blue-500/20"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[90px] w-[90px] sm:h-[180px] sm:w-[180px] rounded-full border border-blue-500/10"
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2], rotate: -180 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Core */}
          <motion.div
            className="grid h-[40px] w-[40px] sm:h-[65px] sm:w-[65px] place-items-center rounded-full bg-gradient-to-b from-[#1e1e30] to-[#0f0f15] font-semibold text-[10px] sm:text-sm text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] border border-blue-500/40"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
          >
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8], textShadow: ["0 0 0px #3B82F6", "0 0 10px #3B82F6", "0 0 0px #3B82F6"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {circleText || "SDK"}
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InferenceRoutingVisual;

const ChipIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M11 9h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" />
    <path d="M3 7h2" />
    <path d="M3 12h2" />
    <path d="M3 17h2" />
    <path d="M19 7h2" />
    <path d="M19 12h2" />
    <path d="M19 17h2" />
    <path d="M7 3v2" />
    <path d="M12 3v2" />
    <path d="M17 3v2" />
    <path d="M7 19v2" />
    <path d="M12 19v2" />
    <path d="M17 19v2" />
  </svg>
);

const CloudIconSmall = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const ZapIconSmall = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>
);
