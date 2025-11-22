import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogSection({ posts, lang, setSelectedPost }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
            >
                <h3 className="text-sky-400 font-mono text-xl mb-4">03. Insights</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Latest Articles</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedPost(post)}
                        className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-sky-500/10 flex flex-col h-full cursor-pointer"
                    >
                        {/* Image */}
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors"></div>
                            <img
                                src={post.image}
                                alt={post.title[lang]}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 z-20">
                                <span className="bg-sky-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                                    {post.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-mono">
                                <div className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={12} />
                                    {post.readTime[lang]}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-sky-400 transition-colors line-clamp-2">
                                {post.title[lang]}
                            </h3>

                            <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                                {post.excerpt[lang]}
                            </p>

                            <div className="pt-4 border-t border-slate-800">
                                <button className="text-sky-400 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read Article <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </>
    );
}
