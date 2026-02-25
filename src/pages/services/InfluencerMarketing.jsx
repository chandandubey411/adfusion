import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Target,
    TrendingUp,
    MessageSquare,
    ShoppingBag,
    Zap,
    CheckCircle2,
    Search,
    UserPlus,
    Layout,
    Clock,
    BarChart3,
    ArrowRight,
    MessageCircle,
    Handshake,
    Globe,
    ThumbsUp
} from 'lucide-react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import Contact from '../../components/sections/Contact';

const whyInfluencer = [
    {
        icon: Handshake,
        title: 'Authentic Brand Promotion',
        desc: 'Leverage trusted influencers to promote your brand naturally and authentically.'
    },
    {
        icon: Target,
        title: 'Targeted Audience Reach',
        desc: 'Collaborate with influencers whose audience matches your niche and demographics.'
    },
    {
        icon: Globe,
        title: 'Increased Brand Awareness',
        desc: 'Boost visibility through strategic content collaborations across platforms.'
    },
    {
        icon: ThumbsUp,
        title: 'Higher Engagement Rates',
        desc: 'Influencer content generates stronger audience interaction and brand affinity.'
    },
    {
        icon: ShoppingBag,
        title: 'Better Conversion Potential',
        desc: 'Drive purchase decisions through trusted recommendations from industry voices.'
    },
    {
        icon: Zap,
        title: 'Scalable Campaign Growth',
        desc: 'Expand campaigns effectively with a mix of micro to macro influencers.'
    }
];

const influencerServices = [
    'Influencer Research & Shortlisting',
    'Campaign Strategy Development',
    'Influencer Outreach & Negotiation',
    'Content Planning & Guidelines',
    'Performance Tracking',
    'ROI Analysis & Reporting',
    'Brand Collaboration Management',
    'Paid Amplification (if required)'
];

const processSteps = [
    { number: '1', title: 'Brand & Audience Analysis', desc: 'Defining your goals and identifying the ideal audience segments.' },
    { number: '2', title: 'Influencer Identification', desc: 'Searching and vetting the best-fit influencers for your brand.' },
    { number: '3', title: 'Campaign Planning', desc: 'Developing the message, timeline, and creative direction.' },
    { number: '4', title: 'Content Execution', desc: 'Collaborating with influencers to create high-impact content.' },
    { number: '5', title: 'Performance Monitoring', desc: 'Real-time tracking of engagement and campaign reach.' },
    { number: '6', title: 'Optimization & Reporting', desc: 'Fine-tuning strategy and delivering detailed ROI insights.' }
];

const results = [
    'Strong Brand Visibility',
    'Increased Engagement',
    'Improved Brand Trust',
    'Higher Lead Generation',
    'Measurable Campaign ROI'
];

const Counter = ({ target, label }) => (
    <div className="text-center group">
        <div className="text-4xl md:text-5xl font-black text-gold-500 mb-2 group-hover:scale-110 transition-transform duration-500">{target}</div>
        <div className="text-gray-400 text-sm uppercase tracking-widest">{label}</div>
    </div>
);

const InfluencerMarketing = () => {
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
                            <Users className="text-gold-500" size={48} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-9xl font-black leading-none mb-8 uppercase"
                        >
                            Influencer <br />
                            <span className="text-gradient-gold">Marketing Services</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl md:text-3xl text-gold-500 font-bold tracking-tight uppercase mb-8"
                        >
                            Authentic Collaborations That Drive Real Impact
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
                        >
                            Influencer marketing connects your brand with trusted voices that your audience already follows and believes in. Strategic collaborations help increase awareness, engagement, and conversions.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-white text-lg font-medium mb-12"
                        >
                            At <span className="text-gold-500 font-bold uppercase tracking-wide">ADFUSION</span>, we create data-driven influencer campaigns that amplify your brand reach and deliver measurable results.
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
                                Talk to Expert
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Influencer Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase">Why Influencer Marketing <br /><span className="text-gold-500">is Powerful</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyInfluencer.map((item, index) => (
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

            {/* Influencer Services Section */}
            <section className="py-24 bg-dark-800/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight uppercase">Our Influencer <br /><span className="text-gradient-gold">Services</span></h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-bold border-l-4 border-gold-500 pl-8 uppercase">
                                We combine data-driven strategy with human connection to deliver influencer campaigns that authentically resonate.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {influencerServices.map((service, idx) => (
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8">
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
                                <div className="relative z-10 p-8 rounded-[2rem] bg-dark-800/20 border border-white/5 group hover:border-gold-500/30 transition-all h-full">
                                    <div className="w-12 h-12 rounded-2xl bg-gold-500 text-black flex items-center justify-center font-black text-xl mb-8 shadow-xl shadow-gold-500/20">
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
                            <Counter target="500+" label="Influencer Network" />
                            <Counter target="10M+" label="Total Impression" />
                            <Counter target="12%" label="Avg Engagement" />
                            <Counter target="3.5x" label="Average ROI" />
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
                                We don’t just connect brands with influencers — we build strategic partnerships. Our team ensures every collaboration aligns with your brand values, audience, and business goals to deliver impactful results.
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="glass-card p-12 rounded-[3rem] border border-gold-500/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 text-gold-500/20">
                                    <Handshake size={80} />
                                </div>
                                <div className="relative z-10">
                                    <p className="text-2xl text-gray-200 italic font-medium leading-relaxed mb-10">
                                        "ADFUSION's influencer strategy completely changed our brand's perception. The authentic creators they brought in delivered results we couldn't achieve with ads alone."
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-black font-black text-2xl shadow-xl">
                                            RL
                                        </div>
                                        <div>
                                            <p className="font-black text-white text-xl uppercase tracking-tighter">Rachel L.</p>
                                            <p className="text-gold-500 font-bold uppercase tracking-widest text-xs">Head of Growth, GlowBeauty</p>
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
                            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none uppercase">Ready to Grow Through <br /> <span className="underline decoration-black decoration-[12px] underline-offset-[16px]">Influencer Collaborations?</span></h2>
                            <p className="text-xl md:text-2xl font-black mb-16 max-w-3xl mx-auto opacity-90 uppercase tracking-widest leading-tight">Let’s create impactful campaigns that build trust and drive conversions.</p>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center gap-6 px-16 py-7 bg-black text-white font-black rounded-full hover:scale-105 transition-transform shadow-2xl text-xl uppercase tracking-widest group"
                            >
                                Start Your Influencer Campaign Today
                                <ArrowRight size={28} className="group-hover:translate-x-3 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Contact defaultService="Influencer Marketing" />
        </ServicePageLayout>
    );
};

export default InfluencerMarketing;
