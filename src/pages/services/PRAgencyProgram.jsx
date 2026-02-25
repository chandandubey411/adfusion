import React from 'react';
import { motion } from 'framer-motion';
import {
    Mic2,
    Users,
    Newspaper,
    Trophy,
    TrendingUp,
    Globe,
    CheckCircle2,
    BarChart3,
    Search,
    Send,
    ArrowRight,
    MessageCircle,
    Star,
    Sparkles
} from 'lucide-react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import Contact from '../../components/sections/Contact';

const whyPR = [
    {
        icon: Newspaper,
        title: 'Media Visibility',
        desc: 'Gain exposure across trusted media platforms and global news outlets.'
    },
    {
        icon: Trophy,
        title: 'Brand Authority',
        desc: 'Position your business as a recognized and respected industry leader.'
    },
    {
        icon: Sparkles,
        title: 'Strategic Storytelling',
        desc: 'Craft compelling narratives that resonate with your audience and build trust.'
    },
    {
        icon: Globe,
        title: 'Wider Market Reach',
        desc: 'Expand your brand visibility far beyond traditional paid advertising.'
    },
    {
        icon: Users,
        title: 'Strong Public Image',
        desc: 'Build lasting credibility and a premium reputation in the marketplace.'
    },
    {
        icon: TrendingUp,
        title: 'Long-Term Impact',
        desc: 'PR creates sustainable brand equity and value that grows over time.'
    }
];

const prServices = [
    'Press Release Creation',
    'Media Outreach & Distribution',
    'Online Publication Placements',
    'Brand Story Development',
    'Reputation Management',
    'Influencer & Media Coordination',
    'Interview & Feature Arrangements',
    'Performance Reporting'
];

const processSteps = [
    { number: '1', title: 'Brand Analysis & Positioning', desc: 'Analyzing your industry landscape and defining your unique brand voice.' },
    { number: '2', title: 'Story & PR Strategy Development', desc: 'Crafting the narrative that will capture media attention and audience trust.' },
    { number: '3', title: 'Media Outreach', desc: 'Connecting with key journalists, editors, and industry influencers.' },
    { number: '4', title: 'Publication & Coverage', desc: 'Securing placements in high-authority media outlets and platforms.' },
    { number: '5', title: 'Monitoring & Reporting', desc: 'Tracking media impact and providing detailed performance insights.' }
];

const results = [
    'Increased Brand Credibility',
    'Strong Media Presence',
    'Higher Public Trust',
    'Improved Brand Authority',
    'Long-Term Reputation Growth'
];

const Counter = ({ target, label }) => (
    <div className="text-center group">
        <div className="text-4xl md:text-5xl font-black text-gold-500 mb-2 group-hover:scale-110 transition-transform duration-500">{target}</div>
        <div className="text-gray-400 text-sm uppercase tracking-widest">{label}</div>
    </div>
);

const PRAgencyProgram = () => {
    return (
        <ServicePageLayout>
            {/* Hero Section */}
            <section className="relative pt-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-24 h-24 rounded-[2rem] bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(212,175,55,0.1)]"
                        >
                            <Mic2 className="text-gold-500" size={48} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black leading-none mb-8"
                        >
                            PR Agency <br />
                            <span className="text-gradient-gold">Program Services</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl md:text-3xl text-gold-500 font-bold tracking-tight uppercase mb-8"
                        >
                            Build Authority. Gain Media Exposure. Elevate Your Brand.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
                        >
                            Strong public relations position your brand as credible, trustworthy, and industry-leading. Strategic media placements and brand storytelling increase visibility and long-term authority.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-white text-lg font-medium mb-12"
                        >
                            At <span className="text-gold-500 font-bold uppercase tracking-wide">ADFUSION</span>, we design PR strategies that strengthen brand reputation, secure media coverage, and create lasting market impact.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 bg-gold-500 text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(212,175,55,0.3)] text-lg uppercase tracking-widest"
                            >
                                Get Free Consultation
                            </button>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 border border-gold-500/30 text-gold-500 font-black rounded-full hover:bg-gold-500/5 hover:border-gold-500 transition-all text-lg uppercase tracking-widest"
                            >
                                Talk to PR Expert
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why PR Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase">Why PR is <span className="text-gold-500">Powerful</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyPR.map((item, index) => (
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
                                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight group-hover:text-gold-400 transition-colors font-bold">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PR Agency Services */}
            <section className="py-24 bg-dark-800/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight uppercase">Our PR Agency <br /><span className="text-gradient-gold">Services</span></h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-bold border-l-4 border-gold-500 pl-8">
                                We provide high-impact PR solutions that connect your brand with leading media voices, ensuring measurable authority and trust building.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {prServices.map((service, idx) => (
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

            {/* Our Process Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black uppercase">Our <span className="text-gold-500">Process</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-20 gap-x-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pt-12"
                            >
                                <span className="text-[100px] font-black text-white/[0.02] absolute -top-8 -left-2 leading-none select-none">
                                    0{step.number}
                                </span>
                                <div className="relative z-10 p-6 rounded-[2rem] bg-dark-800/20 border border-white/5 group hover:border-gold-500/30 transition-all h-full">
                                    <div className="w-12 h-12 rounded-2xl bg-gold-500 text-black flex items-center justify-center font-black text-xl mb-6 shadow-xl shadow-gold-500/20">
                                        {step.number}
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{step.title}</h4>
                                    <p className="text-gray-400 leading-relaxed text-xs">{step.desc}</p>
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
                            <Counter target="200+" label="Media Partners" />
                            <Counter target="50M+" label="Reach Gained" />
                            <Counter target="95%" label="Author Score" />
                            <Counter target="4x" label="Trust Increase" />
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
                            <p className="text-xl text-gray-300 leading-relaxed font-bold border-l-4 border-gold-500 pl-12 uppercase tracking-tight">
                                We don’t just distribute press releases — we build powerful brand narratives. Our PR strategies combine media expertise and strategic communication to ensure your brand earns the visibility it deserves.
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="glass-card p-12 rounded-[3rem] border border-gold-500/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 text-gold-500/20">
                                    <MessageCircle size={80} />
                                </div>
                                <div className="relative z-10">
                                    <p className="text-2xl text-gray-200 italic font-medium leading-relaxed mb-10">
                                        "ADFUSION's PR program transformed our brand from an unknown startup to a recognized industry voice. Their media connections are unmatched."
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-black font-black text-2xl shadow-xl">
                                            JS
                                        </div>
                                        <div>
                                            <p className="font-black text-white text-xl uppercase tracking-tighter">James S.</p>
                                            <p className="text-gold-500 font-bold uppercase tracking-widest text-xs">CEO, TechFrontier</p>
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
                            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none uppercase">Ready to Build a <br /> <span className="underline decoration-black decoration-[12px] underline-offset-[16px]">Powerful Brand Presence?</span></h2>
                            <p className="text-xl md:text-2xl font-black mb-16 max-w-3xl mx-auto opacity-90 uppercase tracking-widest leading-tight">Let’s create strategic PR campaigns that position your brand for long-term success.</p>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center gap-6 px-16 py-7 bg-black text-white font-black rounded-full hover:scale-105 transition-transform shadow-2xl text-xl uppercase tracking-widest group"
                            >
                                Start Your PR Strategy Today
                                <ArrowRight size={28} className="group-hover:translate-x-3 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Contact defaultService="PR Agency Program" />
        </ServicePageLayout>
    );
};

export default PRAgencyProgram;
