import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, BarChart3 } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Animated Grid / Particles Pattern (CSS based for performance) */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                        </span>
                        #1 Digital Growth Agency
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Grow Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Brand</span> with
                        <br />
                        <span className="text-gradient-gold">AdFusion</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        We craft premium digital experiences and high-converting marketing campaigns that elevate your business to the next level.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <Button className="w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Get Started <ArrowRight size={20} />
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Case Studies
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center justify-center md:justify-start gap-8 opacity-70">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-dark-900 flex items-center justify-center text-xs font-bold text-gray-500">
                                    User
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full bg-gold-500 text-dark-900 flex items-center justify-center text-xs font-bold">
                                2k+
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Trusted by 2000+ Brands</p>
                    </div>
                </motion.div>

                {/* Visual / 3D Element Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Floating Cards simulating 3D */}
                    <div className="relative w-full h-[500px]">
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute top-10 right-10 z-20"
                        >
                            <div className="glass-card p-4 rounded-2xl flex items-center gap-4 w-48 shadow-2xl shadow-gold-500/10">
                                <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">ROI Growth</p>
                                    <p className="text-xl font-bold text-white">+245%</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [15, -15, 15] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="absolute bottom-20 left-10 z-30"
                        >
                            <div className="glass-card p-4 rounded-2xl flex items-center gap-4 w-52 shadow-2xl shadow-purple-500/10">
                                <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Conversion Rate</p>
                                    <p className="text-xl font-bold text-white">8.5%</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Central visual (Abstract glowing sphere or similar) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-gold-500 to-amber-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-gold-500/30 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full" />

                        {/* 360 Text Central Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] animate-float tracking-wider">
                                360°
                            </h1>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
