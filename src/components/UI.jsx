import React from 'react';
import { motion } from 'framer-motion';

// --- ANIMATION COMPONENTS ---
export const FadeInUp = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
    >
        {children}
    </motion.div>
);

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Section({ id, children, className = "" }) {
    return (
        <section id={id} className={`py-20 md:py-28 px-6 ${className}`}>
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
}

export function SocialLink({ icon, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 rounded-full hover:bg-sky-500/20 hover:text-sky-400 transition-all border border-gray-700 hover:border-sky-500/50 hover:-translate-y-1"
        >
            {React.cloneElement(icon, { size: 20 })}
        </a>
    );
}
