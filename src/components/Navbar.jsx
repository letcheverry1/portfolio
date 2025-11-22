import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { translations } from '../data';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ lang, setLang }) {
    const t = translations[lang].nav;
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when a link is clicked
    const handleLinkClick = () => setMobileMenuOpen(false);

    // Logic: If menu is open OR user scrolled, use solid background. Otherwise transparent.
    const navBackground = (scrolled || mobileMenuOpen)
        ? 'bg-gray-950 shadow-lg border-b border-slate-800'
        : 'bg-transparent';

    const NavLink = ({ itemKey, mobile = false }) => {
        const className = mobile
            ? "hover:text-sky-400 transition-colors capitalize"
            : "hover:text-sky-400 transition-colors capitalize relative group";

        const content = (
            <>
                {t[itemKey]}
                {!mobile && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full"></span>}
            </>
        );

        if (isHome) {
            return (
                <a href={`#${itemKey}`} onClick={mobile ? handleLinkClick : undefined} className={className}>
                    {content}
                </a>
            );
        } else {
            return (
                <Link to={`/#${itemKey}`} onClick={mobile ? handleLinkClick : undefined} className={className}>
                    {content}
                </Link>
            );
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground} py-4`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold font-mono text-sky-400 z-50 relative" onClick={handleLinkClick}>LE.</Link>

                {/* Desktop Menu (Hidden on Mobile) */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                    {['about', 'engineering', 'data', 'projects'].map((key) => (
                        <NavLink key={key} itemKey={key} />
                    ))}
                    {/* Blog Link (New Tab) */}
                    <a
                        href="/blog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-400 transition-colors relative group"
                    >
                        {t.blog}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full"></span>
                    </a>

                    <NavLink itemKey="contact" />
                </div>

                {/* Desktop Language Toggle */}
                <div className="hidden md:flex">
                    <button
                        onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
                        className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 hover:border-sky-400 text-xs font-mono transition-colors hover:bg-sky-500/10 text-sky-400"
                    >
                        <Globe size={14} />
                        {lang.toUpperCase()}
                    </button>
                </div>

                {/* Mobile Toggle Button (Visible on Mobile Only) */}
                <div className="flex items-center gap-4 md:hidden z-50">
                    {/* Mobile Lang Toggle */}
                    <button
                        onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
                        className="text-sky-400 text-xs font-mono border border-slate-700 px-2 py-1 rounded"
                    >
                        {lang.toUpperCase()}
                    </button>
                    <button
                        className="text-slate-300 hover:text-sky-400 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay (Full Screen) */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 h-screen w-screen bg-gray-950 z-40 flex flex-col items-center justify-center gap-8 md:hidden pt-20"
                        >
                            <div className="flex flex-col items-center gap-8 text-2xl font-medium text-slate-300">
                                {['about', 'engineering', 'data', 'projects'].map((key) => (
                                    <NavLink key={key} itemKey={key} mobile={true} />
                                ))}
                                <a
                                    href="/blog"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLinkClick}
                                    className="hover:text-sky-400 transition-colors"
                                >
                                    {t.blog}
                                </a>
                                <NavLink itemKey="contact" mobile={true} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
