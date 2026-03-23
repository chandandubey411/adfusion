import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Facebook,
    Instagram,
    Target,
    TrendingUp,
    BarChart3,
    Users,
    Zap,
    MousePointer2,
    RefreshCcw,
    Layout,
    ArrowRight,
    MessageCircle
} from 'lucide-react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';

const whyMeta = [
    {
        icon: Users,
        title: 'Massive Audience Reach',
        description: 'Access billions of active users across Facebook and Instagram platforms and scale your brand visibility instantly.'
    },
    {
        icon: Target,
        title: 'Advanced Targeting',
        description: 'Target users based on interests, behaviors, demographics, location, and previous interactions.'
    },
    {
        icon: TrendingUp,
        title: 'High ROI Campaigns',
        description: 'Strategic ad funnels designed to maximize return on ad spend (ROAS).'
    },
    {
        icon: BarChart3,
        title: 'Data-Driven Optimization',
        description: 'Continuous performance tracking and campaign optimization based on real-time data.'
    },
    {
        icon: RefreshCcw,
        title: 'Retargeting & Remarketing',
        description: 'Convert website visitors and engaged users into customers with strategic follow-up ads.'
    },
    {
        icon: Zap,
        title: 'Scalable Growth',
        description: 'Scale campaigns profitably based on performance insights and market opportunities.'
    }
];

const metaServices = [
    'Campaign Strategy & Planning',
    'Ad Copywriting & Creative Design',
    'Audience Research & Targeting',
    'Conversion Funnel Setup',
    'Meta Pixel Installation & Tracking',
    'A/B Testing',
    'Performance Optimization',
    'Detailed Reporting & Insights'
];

const processSteps = [
    { number: '1', title: 'Research & Competitor Analysis', desc: 'Understanding your market and what competitors are doing.' },
    { number: '2', title: 'Audience Strategy Development', desc: 'Defining precise target segments for maximum impact.' },
    { number: '3', title: 'Creative Design & Ad Setup', desc: 'Crafting high-converting visual and copy assets.' },
    { number: '4', title: 'Campaign Launch', desc: 'Strategically deploying ads across the Meta network.' },
    { number: '5', title: 'Optimization & Scaling', desc: 'Refining performance to lower costs and increase volume.' },
    { number: '6', title: 'Performance Reporting', desc: 'Transparent analysis of campaign results and growth.' }
];

const expectedResults = [
    'Increased Leads',
    'Higher Sales',
    'Better Brand Awareness',
    'Lower Cost Per Acquisition',
    'Measurable Growth'
];

const Counter = ({ target, label }) => (
    <div className="text-center">
        <div className="text-4xl md:text-5xl font-black text-gold-500 mb-2">{target}</div>
        <div className="text-gray-400 text-sm uppercase tracking-widest">{label}</div>
    </div>
);

const MetaMarketing = () => {
    return (
        <ServicePageLayout>
            {/* Hero Section */}
            <section className="relative pt-12 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex gap-4 mb-8"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center">
                                <Facebook className="text-[#1877F2]" size={32} />
                            </div>
                            <div className="w-14 h-14 rounded-xl bg-[#E4405F]/10 border border-[#E4405F]/20 flex items-center justify-center">
                                <Instagram className="text-[#E4405F]" size={32} />
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black leading-tight"
                        >
                            Meta Marketing <span className="text-gradient-gold">Services</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mt-6 text-2xl md:text-3xl text-gold-500 font-bold tracking-tight uppercase"
                        >
                            Scale Your Brand with Strategic Meta Advertising
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl"
                        >
                            In today’s competitive digital world, your customers spend hours daily on Facebook and Instagram. Meta Marketing allows your brand to appear directly in front of your ideal audience with precision targeting and high-converting ad strategies.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 text-white text-lg font-medium"
                        >
                            At <span className="text-gold-500 font-bold">ADFUSION</span>, we create performance-driven Meta campaigns that generate leads, sales, and brand awareness — not just impressions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 flex flex-wrap justify-center gap-6"
                        >
                            <a
                                href="https://wa.me/917303405072"
                                className="px-10 py-5 bg-gold-500 text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(212,175,55,0.3)] text-lg uppercase tracking-wide"
                            >
                                Get Free Consultation
                            </a>
                            <a
                                href="https://wa.me/919599799883"
                                className="px-10 py-5 border border-gold-500/30 text-gold-500 font-black rounded-full hover:bg-gold-500/5 hover:border-gold-500 transition-all text-lg uppercase tracking-wide"
                            >
                                Talk to Expert
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Meta Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black">Why Meta Marketing is <span className="text-gold-500 uppercase">Powerful</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyMeta.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-10 rounded-3xl border border-white/5 hover:border-gold-500/20 transition-all group relative overflow-hidden"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/10 transition-colors">
                                    <item.icon className="text-gold-500" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gold-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>

                                {/* Background glow hover effect */}
                                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gold-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Meta Services */}
            <section className="py-24 bg-dark-800/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Our Meta <br /><span className="text-gradient-gold">Marketing Services</span></h2>
                            <p className="text-xl text-gray-400 mb-10">We provide end-to-end management of your social media advertising to ensure consistent growth and high conversion rates.</p>
                            <div className="relative">
                                <div className="aspect-video rounded-2xl bg-gradient-to-br from-gold-500/10 to-transparent border border-white/10 flex items-center justify-center group overflow-hidden">
                                    <Target size={120} className="text-gold-500/20 group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 flex items-center justify-center px-8 text-center bg-dark-900/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <p className="text-gold-400 text-lg font-bold uppercase tracking-widest">Performance-Driven Strategy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {metaServices.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-500/20 transition-all"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="text-gold-500" size={16} />
                                    </div>
                                    <span className="text-gray-200 font-medium text-sm">{service}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black pb-2">Our <span className="text-gold-500 uppercase">Process</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative p-8 rounded-3xl bg-dark-800/20 border border-white/5 group hover:border-gold-500/30 transition-all"
                            >
                                <span className="text-[120px] font-black text-white/[0.03] absolute top-0 right-8 leading-none select-none group-hover:text-gold-500/[0.05] transition-colors">
                                    {step.number}
                                </span>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-gold-500 text-black flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-gold-500/20">
                                        0{step.number}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{step.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Counters */}
            <section className="py-24 bg-gold-500/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <Counter target="200%" label="Avg ROAS Increase" />
                        <Counter target="50k+" label="Daily Leads" />
                        <Counter target="15M+" label="Monthly Impressions" />
                        <Counter target="72%" label="Lower CPA" />
                    </div>
                </div>
            </section>

            {/* Results You Can Expect */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black">What You Can Expect <br /><span className="text-gold-500 font-bold uppercase">from ADFUSION</span></h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {expectedResults.map((result, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-6 p-8 rounded-[2rem] bg-dark-800/40 border border-white/5 group hover:bg-gold-500/5 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="text-black" size={24} />
                                    </div>
                                    <span className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">{result}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-dark-800/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <div className="h-full border-l-4 border-gold-500 pl-12">
                                <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase leading-tight">Why Choose <br /><span className="text-gold-500 uppercase">ADFUSION</span></h2>
                                <p className="text-xl text-gray-300 leading-relaxed font-medium">
                                    We don’t just run ads — we build growth systems. Our team combines creative storytelling with performance marketing strategies to ensure your brand stands out and converts.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="glass-card p-10 rounded-[2.5rem] border border-gold-500/20 relative">
                                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-black">
                                    <MessageCircle size={32} />
                                </div>
                                <p className="text-lg text-gray-200 italic mb-8">
                                    "ADFUSION transformed our Instagram presence from a feed of posts into a revenue machine. Their Meta strategy is unlike anything we've seen before."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-500/30"></div>
                                    <div>
                                        <p className="font-bold text-gold-500 uppercase">Sarah J.</p>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest">E-commerce Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 p-12 md:p-24 rounded-[4rem] text-black text-center relative overflow-hidden group shadow-[0_30px_100px_rgba(212,175,55,0.2)]">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="relative z-10"
                        >
                            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none uppercase">Ready to Scale Your <br /> Business with <span className="underline decoration-black decoration-8 underline-offset-8">Meta Ads?</span></h2>
                            <p className="text-xl md:text-2xl font-bold mb-14 max-w-3xl mx-auto opacity-80 uppercase tracking-wide">Let’s create high-performing campaigns that turn clicks into customers.</p>
                            <a
                                href="https://wa.me/919599799883"
                                className="inline-flex items-center gap-4 px-14 py-6 bg-black text-white font-black rounded-full hover:scale-105 transition-transform shadow-2xl text-xl uppercase tracking-widest group"
                            >
                                Get Free Strategy Consultation
                                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </a>
                        </motion.div>

                        {/* Decorative floating shapes */}
                        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-black/10 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-black/5 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
};

export default MetaMarketing;
