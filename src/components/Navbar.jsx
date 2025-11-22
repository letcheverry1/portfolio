import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { translations } from '../data';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ lang, setLang }) {
    const t = translations[lang].nav;
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/90 backdrop-blur-md py-4 shadow-lg border-b border-sky-500/10' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-sky-400">LE.</Link>
                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                    {['about', 'engineering', 'data', 'projects', 'contact'].map((key) => (
                        isHome ? (
                            <a key={key} href={`#${key}`} className="hover:text-sky-400 transition-colors relative group">
                                {t[key]}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full"></span>
                            </a>
                        ) : (
                            <Link key={key} to={`/#${key}`} className="hover:text-sky-400 transition-colors relative group">
                                {t[key]}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full"></span>
                            </Link>
                        )
                    ))}
                    {/* Blog Link - Opens in new tab */}
                    <a
                        href="/blog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-400 transition-colors relative group"
                    >
                        {t.blog}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full"></span>
                    </a>
                </div>
                <button
                    onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
                    className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 hover:border-sky-400 text-xs font-mono transition-colors hover:bg-sky-500/10 text-sky-400"
                >
                    <Globe size={14} />
                    {lang.toUpperCase()}
                </button>
            </div>
        </nav>
    );
}
