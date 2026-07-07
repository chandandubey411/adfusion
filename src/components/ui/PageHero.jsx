import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, highlight, subtitle, breadcrumb }) => {
    return (
        <section className="relative pt-36 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900 -z-10">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-900/8 rounded-full blur-[100px]" />
            </div>

            {/* Grid dot pattern */}
            <div className="absolute inset-0 opacity-[0.07] -z-10" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '36px 36px'
            }} />

            {/* Horizontal accent line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Breadcrumb */}
                {breadcrumb && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6"
                    >
                        <Link to="/" className="flex items-center gap-1 hover:text-gold-500 transition-colors">
                            <Home size={14} />
                            Home
                        </Link>
                        <ChevronRight size={14} className="text-gray-700" />
                        <span className="text-gray-400">{breadcrumb}</span>
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                >
                    {title}{' '}
                    {highlight && (
                        <span className="text-gradient-gold">{highlight}</span>
                    )}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
