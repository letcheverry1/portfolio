import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';
import BlogModal from '../components/BlogModal';
import { Section } from '../components/UI';
import { globalData } from '../data';

export default function BlogPage() {
    const [lang, setLang] = useState('en');
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <div className="bg-gray-950 min-h-screen text-gray-50 selection:bg-sky-500/30 overflow-x-hidden">
            <Navbar lang={lang} setLang={setLang} />

            <div className="pt-24">
                <Section id="blog-page" className="min-h-[80vh]">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text mb-6">
                            Engineering & Data Insights
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Exploring the intersection of industrial processes, data science, and digital transformation.
                        </p>
                    </div>

                    <BlogSection
                        posts={globalData.blogPosts}
                        lang={lang}
                        setSelectedPost={setSelectedPost}
                    />
                </Section>
            </div>

            <AnimatePresence>
                {selectedPost && (
                    <BlogModal
                        post={selectedPost}
                        lang={lang}
                        onClose={() => setSelectedPost(null)}
                    />
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
