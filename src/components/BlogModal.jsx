import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function BlogModal({ post, lang, onClose }) {
    if (!post) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-gray-950/80 backdrop-blur-md"
                onClick={onClose}
            ></div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-gray-800 border border-gray-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-700/50 hover:bg-slate-700 rounded-full text-gray-400 hover:text-white transition-colors z-30"
                >
                    <X size={20} />
                </button>

                <div className="h-64 relative">
                    <img src={post.image} alt={post.title[lang]} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                        <span className="text-sky-400 font-mono text-xs bg-sky-900/30 px-2 py-1 rounded border border-sky-500/30">
                            {post.category}
                        </span>
                    </div>
                </div>
                <div className="p-8">
                    <div className="flex items-center gap-4 text-slate-500 text-xs font-mono mb-4">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime[lang]}</span>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-100 mb-6">{post.title[lang]}</h2>

                    <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed">
                        <p>{post.content[lang]}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
