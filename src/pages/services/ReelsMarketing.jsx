import React from 'react';
import { motion } from 'framer-motion';
import {
    Video,
    Rocket,
    TrendingUp,
    Target,
    Users,
    Zap,
    CheckCircle2,
    ArrowRight,
    Camera,
    Palette,
    Play,
    MessageCircle,
    BarChart3,
    Film
} from 'lucide-react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';

const whyReels = [
    {
        icon: Video,
        title: 'High Engagement Format',
        description: 'Short-form videos naturally attract more engagement and interaction.'
    },
    {
        icon: Rocket,
        title: 'Massive Organic Reach',
        description: 'Reels are prioritized by platform algorithms for wider visibility.'
    },
    {
        icon: TrendingUp,
        title: 'Faster Brand Growth',
        description: 'Build brand awareness quickly with consistent, strategic content.'
    },
    {
        icon: Target,
        title: 'Targeted Audience Exposure',
        description: 'Reach the right audience using smart content positioning and paid boosts.'
    },
    {
        icon: MessageCircle,
        title: 'Stronger Audience Connection',
        description: 'Visual storytelling builds deeper trust and brand recall.'
    },
    {
        icon: Zap,
        title: 'Lead & Sales Generation',
        description: 'Turn views into inquiries, leads, and conversions.'
    }
];

const reelsServices = [
    'Content Strategy Planning',
    'Trend Research & Script Planning',
    'Professional Video Editing',
    'Hook & CTA Optimization',
    'Caption & Hashtag Strategy',
    'Paid Boosting Campaigns',
    'Performance Tracking',
    'Growth Optimization'
];

const processSteps = [
    { number: '1', title: 'Trend & Competitor Research', desc: 'Analyzing what works in your niche and current viral trends.' },
    { number: '2', title: 'Content Planning & Scripting', desc: 'Crafting the roadmap for high-retention video stories.' },
    { number: '3', title: 'Reels Creation & Editing', desc: 'Professional production with high-impact visuals and audio.' },
    { number: '4', title: 'Publishing & Promotion', desc: 'Optimized posting schedules and strategic boosts for reach.' },
    { number: '5', title: 'Performance Analysis', desc: 'Deep dive into views, engagement, and conversion metrics.' },
    { number: '6', title: 'Optimization & Scaling', desc: 'Refining content based on data to maximize growth.' }
];

const results = [
    'Increased Engagement',
    'Higher Reach',
    'Stronger Brand Awareness',
    'More Inquiries',
    'Consistent Audience Growth'
];

const Counter = ({ target, label }) => (
    <div className="text-center group">
        <div className="text-4xl md:text-5xl font-black text-gold-500 mb-2 group-hover:scale-110 transition-transform duration-500">{target}</div>
        <div className="text-gray-400 text-sm uppercase tracking-widest">{label}</div>
    </div>
);

const ReelsMarketing = () => {
    return (
        <ServicePageLayout>
            {/* Hero Section */}
            <section className="relative pt-12 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-24 h-24 rounded-[2rem] bg-gradient-to-tr from-gold-500/20 to-gold-700/20 border border-gold-500/30 flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative group"
                        >
                            <div className="absolute inset-0 bg-gold-500/20 blur-2xl group-hover:blur-3xl transition-all rounded-full opacity-50"></div>
                            <Film className="text-gold-500 relative z-10" size={48} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-9xl font-black leading-tight mb-8"
                        >
                            Reels <br />
                            <span className="text-gradient-gold">Marketing</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl md:text-3xl text-gold-400 font-bold tracking-tight uppercase mb-8"
                        >
                            Short-Form Content That Captures Attention & Drives Results
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-10"
                        >
                            Reels are one of the fastest-growing content formats across Instagram and Facebook. With the right strategy and creativity, short-form videos can boost engagement, increase reach, and generate real business results.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-white text-lg font-medium mb-12 max-w-2xl"
                        >
                            At <span className="text-gold-500 font-black uppercase tracking-widest">ADFUSION</span>, we create high-impact Reels marketing strategies that help your brand stand out and convert viewers into customers.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <a
                                href="https://wa.me/919599799883"
                                className="px-12 py-5 bg-gold-500 text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_15px_45px_rgba(212,175,55,0.3)] text-lg uppercase tracking-widest"
                            >
                                Get Free Consultation
                            </a>
                            <a
                                href="https://wa.me/919599799883"
                                className="px-12 py-5 border border-gold-500/30 text-gold-500 font-black rounded-full hover:bg-gold-500/5 hover:border-gold-500 transition-all text-lg uppercase tracking-widest"
                            >
                                Talk to Expert
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 blur-[120px] -z-10 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-500/5 blur-[150px] -z-10 rounded-full"></div>
            </section>

            {/* Why Reels Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Why Reels Marketing <br /><span className="text-gold-500">is Powerful</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyReels.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-12 rounded-[2.5rem] border border-white/5 hover:border-gold-500/20 transition-all group relative overflow-hidden"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-gold-500/10 transition-colors">
                                    <item.icon className="text-gold-500" size={32} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter group-hover:text-gold-400 transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm font-medium">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Reels Services */}
            <section className="py-24 bg-dark-800/30 border-y border-white/5 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight uppercase">Our Reels <br /><span className="text-gradient-gold">Marketing Services</span></h2>
                            <p className="text-xl text-gray-300 leading-relaxed mb-10">We create scroll-stopping content systems that turn viewers into lifelong customers through strategic visual storytelling.</p>
                            <div className="flex gap-6 mt-12">
                                <div className="p-8 rounded-3xl bg-dark-900 border border-white/5 flex flex-col items-center text-center flex-1 hover:border-gold-500/20 transition-all">
                                    <Camera className="text-gold-500 mb-4" size={40} />
                                    <p className="font-black text-xs uppercase tracking-widest text-white">Visual Production</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-dark-900 border border-white/5 flex flex-col items-center text-center flex-1 hover:border-gold-500/20 transition-all">
                                    <TrendingUp className="text-gold-500 mb-4" size={40} />
                                    <p className="font-black text-xs uppercase tracking-widest text-white">Viral Growth</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {reelsServices.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-center gap-5 p-6 rounded-[2rem] bg-dark-900 border border-white/5 hover:border-gold-500/30 transition-all group"
                                >
                                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:rotate-[360deg] transition-all duration-500">
                                        <CheckCircle2 className="text-gold-500 group-hover:text-black transition-colors" size={22} />
                                    </div>
                                    <span className="text-gray-100 font-bold uppercase tracking-tight text-sm">{service}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Our <span className="text-gold-500">Process</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group pt-16"
                            >
                                <span className="text-[180px] font-black text-white/[0.02] absolute -top-12 -left-6 leading-none select-none pointer-events-none group-hover:text-gold-500/[0.04] transition-colors">
                                    0{step.number}
                                </span>
                                <div className="relative z-10 p-12 rounded-[3rem] bg-dark-900 border border-white/5 group-hover:border-gold-500/20 transition-all h-full shadow-2xl">
                                    <div className="w-16 h-16 rounded-2xl bg-gold-500 text-black flex items-center justify-center font-black text-2xl mb-8 shadow-[0_10px_30px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform">
                                        {step.number}
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-gold-400 transition-colors">{step.title}</h4>
                                    <p className="text-gray-400 leading-relaxed text-sm font-medium">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-24 bg-dark-800/40 relative border-y border-white/5 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 leading-tight">What You Can Expect <br /><span className="text-gold-500">from ADFUSION</span></h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto mb-24 p-14 bg-dark-900 rounded-[4rem] border border-white/5 shadow-2xl relative">
                            <div className="absolute inset-0 bg-gold-500/[0.02] blur-3xl rounded-full"></div>
                            <Counter target="10M+" label="Total Views" />
                            <Counter target="250k+" label="Engagement" />
                            <Counter target="500%" label="ROI Growth" />
                            <Counter target="15k+" label="Daily Reach" />
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {results.map((result, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-dark-900 border border-white/5 group hover:bg-gold-500/5 transition-all shadow-xl"
                            >
                                <div className="w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 active:scale-95 transition-all shadow-lg shadow-gold-500/20">
                                    <CheckCircle2 className="text-black" size={28} />
                                </div>
                                <span className="text-2xl font-black text-white group-hover:text-gold-400 transition-colors uppercase tracking-tight">{result}</span>
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
                            <div className="inline-block p-5 rounded-3xl bg-gold-500/10 border border-gold-500/20 mb-10">
                                <Palette className="text-gold-500" size={36} />
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none uppercase tracking-tight">Why Choose <br /><span className="text-gold-500">ADFUSION</span></h2>
                            <p className="text-2xl text-gray-300 leading-relaxed font-bold border-l-8 border-gold-500 pl-12 pt-6 pb-6">
                                We don’t just create videos — we build strategic short-form content systems. Our creative team blends trends, storytelling, and performance marketing to deliver Reels that capture attention and drive measurable growth.
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="glass-card p-14 rounded-[4rem] border border-gold-500/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 text-gold-500/5 transition-transform duration-700 group-hover:scale-125">
                                    <Play size={120} />
                                </div>
                                <div className="relative z-10">
                                    <p className="text-2xl text-gray-200 italic font-medium leading-relaxed mb-12">
                                        "ADFUSION's Reels strategy is insane. We went from 500 views to 50k+ views per video in just a few weeks. The engagement is through the roof!"
                                    </p>
                                    <div className="flex items-center gap-7">
                                        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center text-black font-black text-2xl shadow-xl p-6">
                                            AM
                                        </div>
                                        <div>
                                            <p className="font-black text-white text-2xl uppercase tracking-tighter">Alex M.</p>
                                            <p className="text-gold-500 font-black uppercase tracking-[0.2em] text-xs mt-1">Founding Partner, GlowUp</p>
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
                    <div className="bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 p-12 md:p-24 rounded-[5rem] text-black text-center relative overflow-hidden group shadow-[0_40px_100px_rgba(212,175,55,0.2)]">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')] opacity-10"></div>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <h2 className="text-5xl md:text-9xl font-black mb-12 leading-none uppercase tracking-tight">Ready to Grow with <br /> <span className="underline decoration-black decoration-[16px] underline-offset-[24px]">High-Impact Reels?</span></h2>
                            <p className="text-xl md:text-3xl font-black mb-16 max-w-4xl mx-auto opacity-80 uppercase tracking-[0.3em] leading-relaxed">Let’s create scroll-stopping content that turns viewers into customers.</p>
                            <a
                                href="https://wa.me/919599799883"
                                className="inline-flex items-center gap-8 px-16 py-8 bg-black text-white font-black rounded-full hover:scale-105 transition-transform shadow-3xl text-2xl uppercase tracking-[0.1em] group"
                            >
                                Get Free Strategy Consultation
                                <ArrowRight size={36} className="group-hover:translate-x-4 transition-transform duration-500" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
};

export default ReelsMarketing;
