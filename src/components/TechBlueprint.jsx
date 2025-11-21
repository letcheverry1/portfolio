import React from 'react';
import { motion } from 'framer-motion';

export default function TechBlueprint() {
    return (
        <div className="w-full h-[300px] md:h-[400px] bg-slate-900 rounded-xl border border-slate-700 relative overflow-hidden flex items-center justify-center">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>

            {/* Animated CAD Drawing (SVG) */}
            <div className="relative z-10 p-8">
                <svg width="200" height="200" viewBox="0 0 100 100" className="overflow-visible">
                    {/* Gear Outline */}
                    <motion.path
                        d="M50 25 L55 15 L65 15 L70 25 L80 25 L85 35 L75 45 L80 55 L90 55 L85 65 L75 65 L70 75 L60 75 L55 85 L45 85 L40 75 L30 75 L25 65 L15 65 L10 55 L20 55 L25 45 L15 35 L20 25 L30 25 L35 15 L45 15 Z"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1, rotate: 360 }}
                        transition={{
                            pathLength: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                            opacity: { duration: 0.5 },
                            rotate: { duration: 20, ease: "linear", repeat: Infinity }
                        }}
                        style={{ originX: "50px", originY: "50px" }}
                    />

                    {/* Inner Circles */}
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="15"
                        stroke="#38bdf8"
                        strokeWidth="1"
                        fill="none"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="8"
                        stroke="#0ea5e9"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="2 2"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                        style={{ originX: "50px", originY: "50px" }}
                    />

                    {/* Dimension Lines */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        <line x1="10" y1="90" x2="90" y2="90" stroke="#64748b" strokeWidth="0.5" />
                        <line x1="10" y1="88" x2="10" y2="92" stroke="#64748b" strokeWidth="0.5" />
                        <line x1="90" y1="88" x2="90" y2="92" stroke="#64748b" strokeWidth="0.5" />
                        <text x="50" y="95" textAnchor="middle" fill="#64748b" fontSize="4" fontFamily="monospace">120mm</text>
                    </motion.g>
                </svg>
            </div>

            {/* Overlay UI Elements */}
            <div className="absolute top-4 left-4 flex flex-col gap-1">
                <div className="text-[10px] font-mono text-sky-500/70">FIG. 2.4</div>
                <div className="text-xs font-bold text-sky-400">MECHANICAL_ASSEMBLY</div>
            </div>

            <div className="absolute bottom-4 right-4 text-xs font-mono text-sky-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                CAD_VIEW_V1.0
            </div>
        </div>
    );
}
