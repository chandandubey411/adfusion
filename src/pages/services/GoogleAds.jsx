import React from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    Target,
    TrendingUp,
    BarChart3,
    Globe,
    Zap,
    CheckCircle2,
    ArrowRight,
    Youtube,
    Layout,
    ShoppingBag,
    MousePointer2,
    MessageCircle
} from 'lucide-react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';

const whyGoogleAds = [
    {
        icon: Search,
        title: 'High-Intent Traffic',
        description: 'Reach users who are actively searching for your services or products.'
    },
    {
        icon: Target,
        title: 'Keyword Precision Targeting',
        description: 'Target specific keywords to capture ready-to-buy customers.'
    },
    {
        icon: TrendingUp,
        title: 'Measurable ROI',
        description: 'Track every click, lead, and conversion with detailed performance data.'
    },
    {
        icon: BarChart3,
        title: 'Real-Time Optimization',
        description: 'Continuously monitor and optimize campaigns for better results.'
    },
    {
        icon: Globe,
        title: 'Local & Global Reach',
        description: 'Run campaigns for local businesses or expand nationwide and internationally.'
    },
    {
        icon: Zap,
        title: 'Scalable Growth',
        description: 'Increase ad spend strategically on high-performing campaigns.'
    }
];

const googleServices = [
    'Search Ads Campaigns',
    'Display Ads',
    'YouTube Ads',
    'Shopping Ads',
    'Keyword Research & Strategy',
    'Conversion Tracking Setup',
    'A/B Testing',
    'Performance Reporting & Optimization'
];

const processSteps = [
    { number: '1', title: 'Market & Keyword Research', desc: 'Identifying high-value search terms and competitor gaps.' },
    { number: '2', title: 'Campaign Strategy Development', desc: 'Crafting the roadmap for structured ad accounts and bidding.' },
    { number: '3', title: 'Ad Copy & Creative Setup', desc: 'Developing compelling ads that drive higher click-through rates.' },
    { number: '4', title: 'Campaign Launch', desc: 'Strategically deploying ads with precision targeting and tracking.' },
    { number: '5', title: 'Optimization & Bid Management', desc: 'Refining bids and placements to maximize budget efficiency.' },
    { number: '6', title: 'Performance Reporting', desc: 'Transparent analysis of ROI, leads, and growth metrics.' }
];

const expectedResults = [
    'Quality Leads',
    'Increased Sales',
    'Higher Click-Through Rates',
    'Lower Cost Per Conversion',
    'Consistent Business Growth'
];

const Counter = ({ target, label }) => (
    <div className="text-center group">
        <div className="text-4xl md:text-5xl font-black text-gold-500 mb-2 group-hover:scale-110 transition-transform duration-500">{target}</div>
        <div className="text-gray-400 text-sm uppercase tracking-widest">{label}</div>
    </div>
);

const GoogleAds = () => {
    return (
        <ServicePageLayout>
            {/* Hero Section */}
            <section className="relative pt-12 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex gap-4 mb-10"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#4285F4]/10 border border-[#4285F4]/20 flex items-center justify-center shadow-[0_0_30px_rgba(66,133,244,0.1)]">
                                <Search className="text-[#4285F4]" size={36} />
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-[#FBBC05]/10 border border-[#FBBC05]/20 flex items-center justify-center shadow-[0_0_30px_rgba(251,188,5,0.1)]">
                                <Zap className="text-[#FBBC05]" size={36} />
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-9xl font-black leading-tight mb-8"
                        >
                            Google Ads <br />
                            <span className="text-gradient-gold">Services</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl md:text-3xl text-gold-500 font-bold tracking-tight uppercase mb-8"
                        >
                            Reach High-Intent Customers at the Right Moment
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-10"
                        >
                            Google Ads allows your business to appear exactly when customers are actively searching for your products or services. With strategic keyword targeting and conversion-focused campaigns, you can drive qualified traffic and measurable results.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-white text-lg font-medium mb-12 max-w-2xl"
                        >
                            At <span className="text-gold-500 font-bold uppercase tracking-widest">ADFUSION</span>, we build high-performance Google Ads campaigns designed to maximize ROI, reduce cost per acquisition, and scale your business efficiently.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <a
                                href="https://wa.me/917303405072"
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
            </section>

            {/* Why Google Ads Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase">Why Google Ads <br /><span className="text-gold-500">is Powerful</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyGoogleAds.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-gold-500/20 transition-all group relative overflow-hidden"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-gold-500/10 transition-colors">
                                    <item.icon className="text-gold-500" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight group-hover:text-gold-400 transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Google Ads Services */}
            <section className="py-24 bg-dark-800/30 border-y border-white/5 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight uppercase">Our Google Ads <br /><span className="text-gradient-gold">Services</span></h2>
                            <p className="text-xl text-gray-400 leading-relaxed mb-8">We provide full-funnel management from search to shopping, ensuring your brand dominates every relevant Google platform.</p>
                            <div className="grid grid-cols-2 gap-8 mt-12">
                                <div className="p-6 rounded-2xl bg-dark-900 border border-white/5 flex flex-col items-center text-center">
                                    <Youtube className="text-[#FF0000] mb-4" size={32} />
                                    <p className="font-bold text-sm uppercase tracking-widest text-[#FF0000]">YouTube Marketing</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-dark-900 border border-white/5 flex flex-col items-center text-center">
                                    <ShoppingBag className="text-gold-500 mb-4" size={32} />
                                    <p className="font-bold text-sm uppercase tracking-widest text-gold-500">Shopping Ads</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {googleServices.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-dark-900 border border-white/5 hover:border-gold-500/20 transition-all group shadow-xl"
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
            <section className="py-24 relative overflow-hidden">
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
                                className="relative group pt-16"
                            >
                                <span className="text-[160px] font-black text-white/[0.02] absolute -top-8 -left-4 leading-none select-none group-hover:text-gold-500/[0.03] transition-colors">
                                    0{step.number}
                                </span>
                                <div className="relative z-10 p-10 rounded-[2.5rem] bg-dark-900 border border-white/5 group-hover:border-gold-500/20 transition-all h-full shadow-2xl">
                                    <div className="w-16 h-16 rounded-2xl bg-gold-500 text-black flex items-center justify-center font-black text-2xl mb-8 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                                        {step.number}
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter leading-tight group-hover:text-gold-400 transition-colors">{step.title}</h4>
                                    <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-24 bg-dark-800/20 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 leading-tight">What You Can Expect <br /><span className="text-gold-500">from ADFUSION</span></h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto mb-24 p-12 bg-dark-900 rounded-[3rem] border border-white/5 shadow-2xl">
                            <Counter target="450%" label="Max ROAS Achieved" />
                            <Counter target="2k+" label="Daily Enquiries" />
                            <Counter target="0.8s" label="Avg Click Time" />
                            <Counter target="60%" label="CPA Reduction" />
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {expectedResults.map((result, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-6 p-8 rounded-[2rem] bg-dark-900 border border-white/5 group hover:bg-gold-500/5 transition-all shadow-xl"
                            >
                                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 shadow-lg shadow-gold-500/20 transition-transform">
                                    <CheckCircle2 className="text-black" size={24} />
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
                            <div className="inline-block p-4 rounded-2xl bg-gold-500/10 border border-gold-500/20 mb-8">
                                <Zap className="text-gold-500" size={32} />
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none uppercase">Why Choose <br /><span className="text-gold-500">ADFUSION</span></h2>
                            <p className="text-2xl text-gray-300 leading-relaxed font-bold border-l-8 border-gold-500 pl-10 pt-4 pb-4">
                                We don’t just manage ads — we create performance-driven growth strategies. Our team combines data analytics, smart bidding, and compelling ad creatives to deliver campaigns that generate real revenue.
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="glass-card p-12 rounded-[3.5rem] border border-gold-500/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 text-gold-500/10 scale-[3]">
                                    <MessageCircle size={80} />
                                </div>
                                <div className="relative z-10">
                                    <p className="text-2xl text-gray-200 italic font-medium leading-relaxed mb-10">
                                        "ADFUSION's Google Ads strategy didn't just bring more clicks, it brought the *right* clicks. Our cost per lead dropped by 50% in just two months."
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-black font-black text-2xl shadow-xl">
                                            RD
                                        </div>
                                        <div>
                                            <p className="font-black text-white text-xl uppercase tracking-tighter">Rahul D.</p>
                                            <p className="text-gold-500 font-bold uppercase tracking-widest text-xs">CEO, TechStore India</p>
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
                    <div className="bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 p-12 md:p-24 rounded-[4rem] text-black text-center relative overflow-hidden group shadow-[0_30px_100px_rgba(212,175,55,0.3)]">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none uppercase">Ready to Dominate <br /> Search Results with <span className="underline decoration-black decoration-[14px] underline-offset-[20px]">Google Ads?</span></h2>
                            <p className="text-xl md:text-3xl font-black mb-16 max-w-4xl mx-auto opacity-90 uppercase tracking-[0.2em] leading-relaxed">Let’s build high-performing campaigns that turn searches into sales.</p>
                            <a
                                href="https://wa.me/919599799883"
                                className="inline-flex items-center gap-6 px-16 py-8 bg-black text-white font-black rounded-full hover:scale-105 transition-transform shadow-3xl text-2xl uppercase tracking-[0.1em] group"
                            >
                                Get Free Strategy Consultation
                                <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform duration-500" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
};

export default GoogleAds;
