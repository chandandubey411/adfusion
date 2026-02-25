import React from 'react';
import { motion } from 'framer-motion';
import {
    Facebook,
    Target,
    TrendingUp,
    BarChart3,
    Users,
    Zap,
    MousePointer2,
    RefreshCcw,
    CheckCircle2,
    ArrowRight,
    Search,
    Funnel,
    MessageCircle
} from 'lucide-react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';

const whyFacebook = [
    {
        icon: Users,
        title: 'Massive User Base',
        description: 'Reach a diverse and highly active audience across multiple demographics.'
    },
    {
        icon: Target,
        title: 'Precision Targeting',
        description: 'Target users based on interests, behaviors, demographics, and custom audiences.'
    },
    {
        icon: Zap,
        title: 'Cost-Effective Advertising',
        description: 'Optimize campaigns to achieve maximum ROI with controlled ad spend.'
    },
    {
        icon: BarChart3,
        title: 'Advanced Analytics',
        description: 'Track campaign performance with detailed insights and measurable metrics.'
    },
    {
        icon: RefreshCcw,
        title: 'Retargeting Capabilities',
        description: 'Re-engage website visitors and previous customers to boost conversions.'
    },
    {
        icon: TrendingUp,
        title: 'Scalable Campaign Growth',
        description: 'Scale winning campaigns efficiently based on performance data.'
    }
];

const fbServices = [
    'Campaign Strategy & Planning',
    'Ad Creative & Copywriting',
    'Audience Research & Custom Targeting',
    'Facebook Pixel Setup & Tracking',
    'Conversion Funnel Optimization',
    'A/B Testing',
    'Performance Monitoring',
    'Detailed Reporting & Insights'
];

const processSteps = [
    { number: '1', title: 'Research & Market Analysis', desc: 'Analyzing your industry and audience for competitive advantage.' },
    { number: '2', title: 'Audience & Funnel Strategy', desc: 'Building the roadmap for consistent lead flow and sales.' },
    { number: '3', title: 'Ad Creative Development', desc: 'Creating thumb-stopping visuals and high-converting copy.' },
    { number: '4', title: 'Campaign Launch', desc: 'Deploying targeted ads across the Facebook ecosystem.' },
    { number: '5', title: 'Optimization & Scaling', desc: 'Fine-tuning metrics to maximize growth and profitability.' },
    { number: '6', title: 'Performance Reporting', desc: 'Clear, data-driven insights on campaign performance.' }
];

const results = [
    'Increased Website Traffic',
    'Higher Lead Generation',
    'Improved Conversion Rates',
    'Lower Cost Per Acquisition',
    'Consistent Business Growth'
];

const Counter = ({ target, label }) => (
    <div className="text-center group">
        <div className="text-4xl md:text-5xl font-black text-gold-500 mb-2 group-hover:scale-110 transition-transform duration-500">{target}</div>
        <div className="text-gray-400 text-sm uppercase tracking-widest">{label}</div>
    </div>
);

const FacebookMarketing = () => {
    return (
        <ServicePageLayout>
            {/* Hero Section */}
            <section className="relative pt-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-24 h-24 rounded-[2rem] bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(24,119,242,0.1)]"
                        >
                            <Facebook className="text-[#1877F2]" size={48} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-9xl font-black leading-none mb-8"
                        >
                            Facebook <br />
                            <span className="text-gradient-gold">Marketing</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl md:text-3xl text-gold-500 font-bold tracking-tight uppercase mb-8"
                        >
                            Drive Targeted Traffic & High-Converting Campaigns
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
                        >
                            Facebook remains one of the most powerful platforms for targeted digital advertising. With advanced audience segmentation and strategic campaign execution, your brand can reach the right people at the right time.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-white text-lg font-medium mb-12"
                        >
                            At <span className="text-gold-500 font-bold uppercase tracking-wide">ADFUSION</span>, we create performance-focused Facebook campaigns that generate quality leads, increase conversions, and maximize return on ad spend.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <a
                                href="https://wa.me/919599799883"
                                className="px-10 py-5 bg-gold-500 text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(212,175,55,0.3)] text-lg uppercase tracking-widest"
                            >
                                Get Free Consultation
                            </a>
                            <a
                                href="https://wa.me/919599799883"
                                className="px-10 py-5 border border-gold-500/30 text-gold-500 font-black rounded-full hover:bg-gold-500/5 hover:border-gold-500 transition-all text-lg uppercase tracking-widest"
                            >
                                Talk to Expert
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Facebook Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase">Why Facebook Marketing <br /><span className="text-gold-500">is Powerful</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyFacebook.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-gold-500/20 transition-all group relative"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-gold-500/10 transition-colors">
                                    <item.icon className="text-gold-500" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight group-hover:text-gold-400 transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Facebook Services */}
            <section className="py-24 bg-dark-800/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">Our Facebook <br /><span className="text-gradient-gold uppercase">Services</span></h2>
                            <p className="text-xl text-gray-400 leading-relaxed">We deliver high-impact advertising strategies that connect your brand with millions of potential customers, ensuring measurable business growth.</p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {fbServices.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-dark-900 border border-white/5 hover:border-gold-500/20 transition-all group"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="text-gold-500" size={20} />
                                    </div>
                                    <span className="text-gray-200 font-bold uppercase tracking-tighter text-sm">{service}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black uppercase">Our <span className="text-gold-500">Process</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pt-12"
                            >
                                <span className="text-[140px] font-black text-white/[0.02] absolute -top-8 -left-4 leading-none select-none">
                                    0{step.number}
                                </span>
                                <div className="relative z-10 p-8 rounded-[2rem] bg-dark-800/20 border border-white/5 group hover:border-gold-500/30 transition-all h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-gold-500 text-black flex items-center justify-center font-black text-2xl mb-8 shadow-xl shadow-gold-500/20">
                                        {step.number}
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{step.title}</h4>
                                    <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-24 bg-dark-800/40 relative overflow-hidden border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">What You Can Expect <br /><span className="text-gold-500">from ADFUSION</span></h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto mb-20 p-12 bg-dark-900/50 rounded-[3rem] border border-white/5">
                            <Counter target="3.5x" label="Avg ROAS" />
                            <Counter target="120+" label="Ad Creatives" />
                            <Counter target="85%" label="Lead Quality" />
                            <Counter target="40%" label="Lower CPL" />
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {results.map((result, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-6 p-8 rounded-[2rem] bg-dark-900 border border-white/5 group hover:bg-gold-500/5 transition-all"
                            >
                                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 group-hover:rotate-[360deg] transition-transform duration-700 shadow-lg shadow-gold-500/10">
                                    <CheckCircle2 className="text-black" size={24} />
                                </div>
                                <span className="text-2xl font-extrabold text-white group-hover:text-gold-400 transition-colors uppercase tracking-tight">{result}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-20 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-none uppercase">Why Choose <br /><span className="text-gold-500">ADFUSION</span></h2>
                            <p className="text-xl text-gray-300 leading-relaxed font-bold border-l-4 border-gold-500 pl-12">
                                We don’t just run ads — we build strategic growth systems. Our team blends creative storytelling with data-driven marketing to deliver campaigns that convert and scale profitably.
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="glass-card p-12 rounded-[3rem] border border-gold-500/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 text-gold-500/20">
                                    <MessageCircle size={80} />
                                </div>
                                <div className="relative z-10">
                                    <p className="text-2xl text-gray-200 italic font-medium leading-relaxed mb-10">
                                        "ADFUSION's Facebook strategy tripled our qualified leads within the first month. Their precision targeting is a game changer for our business."
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-black font-black text-2xl shadow-xl">
                                            MK
                                        </div>
                                        <div>
                                            <p className="font-black text-white text-xl uppercase tracking-tighter">Mark K.</p>
                                            <p className="text-gold-500 font-bold uppercase tracking-widest text-xs">Director of Marketing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 p-12 md:p-24 rounded-[4rem] text-black text-center relative overflow-hidden group shadow-[0_20px_80px_rgba(212,175,55,0.2)]">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="relative z-10"
                        >
                            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none uppercase">Ready to Grow Your <br /> Business with <span className="underline decoration-black decoration-[12px] underline-offset-[16px]">Facebook Ads?</span></h2>
                            <p className="text-xl md:text-2xl font-black mb-16 max-w-3xl mx-auto opacity-90 uppercase tracking-widest">Let’s create high-performing campaigns that turn engagement into real revenue.</p>
                            <a
                                href="https://wa.me/919599799883"
                                className="inline-flex items-center gap-6 px-16 py-7 bg-black text-white font-black rounded-full hover:scale-105 transition-transform shadow-2xl text-xl uppercase tracking-widest group"
                            >
                                Get Free Strategy Consultation
                                <ArrowRight size={28} className="group-hover:translate-x-3 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
};

export default FacebookMarketing;
