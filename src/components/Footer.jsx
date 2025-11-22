import React from 'react';

export default function Footer() {
    return (
        <footer className="py-8 text-center text-gray-500 text-xs font-mono bg-gray-950 border-t border-gray-800">
            <p>© {new Date().getFullYear()} Lautaro E. Etcheverry. All Rights Reserved.</p>
            <p className="mt-2 opacity-50">v1.0.0 • React + Tailwind + Motion</p>
        </footer>
    );
}
