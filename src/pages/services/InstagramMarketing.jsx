import React from 'react';
import { motion } from 'framer-motion';
import {
    Instagram,
    CheckCircle2,
    Layout,
    Video,
    Users,
    Zap,
    Palette,
    Camera,
    Rocket,
    BarChart,
    Search
} from 'lucide-react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';

const whatWeOffer = [
    {
        icon: Palette,
        title: 'Content Strategy',
        description: 'Planned content that aligns with your brand and audience.'
    },
    {
        icon: Camera,
        title: 'Creative & Reels Marketing',
        description: 'High-quality visuals and engaging short-form content.'
    },
    {
        icon: Users,
        title: 'Audience Growth',
        description: 'Organic growth strategies and targeted promotions.'
    },
    {
        icon: Rocket,
        title: 'Performance Campaigns',
        description: 'Conversion-focused ads for leads and sales.'
    }
];

const processSteps = [
    { icon: Search, title: 'Strategy' },
    { icon: Layout, title: 'Content Creation' },
    { icon: Zap, title: 'Growth Execution' },
    { icon: BarChart, title: 'Optimization' }
];

const results = [
    'Increased Engagement',
    'Consistent Follower Growth',
    'Strong Brand Identity',
    'Higher Conversions'
];

const InstagramMarketing = () => {
    return (
        <ServicePageLayout>
            {/* Hero Section */}
            <section className="relative pt-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] mb-8"
                        >
                            <div className="w-full h-full rounded-2xl bg-dark-900 flex items-center justify-center">
                                <Instagram className="text-white" size={36} />
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black mb-6 leading-none"
                        >
                            Instagram <span className="text-gradient-gold">Marketing</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl md:text-3xl text-gold-500 font-bold uppercase tracking-widest mb-8"
                        >
                            Build Influence. Drive Engagement. Generate Sales.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
                        >
                            Turn your Instagram presence into a powerful growth engine. <br />
                            ADFUSION helps brands increase followers, boost engagement, and convert audiences into paying customers through strategic content and performance marketing.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <a
                                href="https://wa.me/917303405072"
                                className="inline-flex items-center gap-2 px-10 py-5 bg-gold-500 text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(212,175,55,0.3)] text-lg uppercase tracking-wider"
                            >
                                👉 Get Free Consultation
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: What We Offer */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whatWeOffer.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 rounded-3xl border border-white/5 hover:border-gold-500/20 transition-all group flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/10 transition-colors">
                                    <item.icon className="text-gold-500" size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Our Process */}
            <section className="py-24 bg-dark-800/20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black uppercase tracking-widest text-gold-500">Our Process</h2>
                    </div>

                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center group flex-1"
                            >
                                <div className="w-20 h-20 rounded-full bg-dark-900 border-2 border-white/5 flex items-center justify-center mb-6 group-hover:border-gold-500/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all">
                                    <step.icon className="text-gray-400 group-hover:text-gold-500 transition-colors" size={32} />
                                </div>
                                <h4 className="text-lg font-bold text-white uppercase tracking-tighter">{step.title}</h4>
                                {idx < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-10 left-[calc(100%-40px)] w-20 h-[1px] bg-white/5"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Results You Can Expect */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="glass-card p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-[80px] -mr-32 -mt-32"></div>
                        <h2 className="text-3xl font-black text-white mb-10 text-center uppercase tracking-widest">Results You Can Expect</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {results.map((result, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <CheckCircle2 className="text-gold-500 flex-shrink-0" size={24} />
                                    <span className="text-xl font-medium text-gray-200">{result}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-gold-500/10 via-gold-500/20 to-gold-500/10 p-12 md:p-20 rounded-[3rem] border border-gold-500/20 text-center relative overflow-hidden group">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to Scale Your Brand <br /> on <span className="text-gold-500 uppercase">Instagram?</span></h2>
                        <a
                            href="https://wa.me/919599799883"
                            className="inline-flex px-12 py-5 bg-gold-500 text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(212,175,55,0.2)] text-xl uppercase tracking-widest"
                        >
                            Start Growing Today
                        </a>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
};

export default InstagramMarketing;
