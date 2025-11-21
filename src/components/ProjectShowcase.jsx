import React from 'react';
import { Layers } from 'lucide-react';

export default function ProjectShowcase() {
    return (
        <div className="relative w-full h-[350px] md:h-[450px] bg-slate-900/80 rounded-xl border-2 border-sky-500/30 overflow-hidden group">
            {/* Background Grid/Overlay Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c4a6e_1px,transparent_1px),linear-gradient(to_bottom,#0c4a6e_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>

            {/* The Render Image */}
            {/* NOTE: Ensure the image 'jabonera-render.png' is uploaded to the /public folder */}
            <video
                src="/jabonera-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-contain p-6 z-0 opacity-90"
            />

            {/* Tech Overlays & Labels */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                <span className="text-xs font-mono text-sky-300 tracking-widest uppercase">CAD_MODEL_VIEW.se</span>
            </div>
            <div className="absolute bottom-4 right-4 z-20 bg-sky-900/80 border border-sky-500/50 px-3 py-1.5 rounded-md backdrop-blur-md">
                <span className="text-xs font-bold text-sky-300 flex items-center gap-2">
                    <Layers size={14} /> Solid Edge Render
                </span>
            </div>
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-sky-500 rounded-tl-md z-20 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sky-500 rounded-br-md z-20 opacity-50"></div>
        </div>
    );
}
