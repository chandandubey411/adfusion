import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Star, Phone, Globe, BarChart3, TrendingUp, Search } from 'lucide-react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';

const benefits = [
    {
        icon: MapPin,
        title: 'Enhanced Local Visibility',
        description: 'Appear in "near me" searches and Google Maps results. Capture high-intent local customers actively looking for your services.'
    },
    {
        icon: Star,
        title: 'Build Trust & Credibility',
        description: 'Showcase verified business details, customer reviews, ratings, and real images to build strong brand credibility.'
    },
    {
        icon: Phone,
        title: 'Increase Calls & Enquiries',
        description: 'Enable one-tap call, website visit, and direction features to convert searches into real leads instantly.'
    },
    {
        icon: Globe,
        title: 'Higher Website Traffic',
        description: 'Drive targeted traffic directly from Google Search results to your website.'
    },
    {
        icon: BarChart3,
        title: 'Reputation Management',
        description: 'Monitor and respond to customer reviews professionally to maintain a positive brand image.'
    },
    {
        icon: TrendingUp,
        title: 'Performance Insights',
        description: 'Track profile views, calls, direction requests, and engagement metrics to optimize growth.'
    }
];

const processSteps = [
    { number: '01', title: 'Audit', desc: 'Analyzing your current profile and performance.' },
    { number: '02', title: 'Optimization', desc: 'Fine-tuning business details and keywords.' },
    { number: '03', title: 'Content', desc: 'Planning and posting engaging updates and photos.' },
    { number: '04', title: 'Review Strategy', desc: 'Implementing systems to gather positive feedback.' },
    { number: '05', title: 'Growth Tracking', desc: 'Monitoring results and monthly reporting.' }
];

const GoogleBusinessProfile = () => {
    return (
        <ServicePageLayout>
            {/* Hero Section */}
            <section className="relative pt-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-20 h-20 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                        >
                            <Search className="text-gold-500" size={40} />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold leading-tight"
                        >
                            Google Business Profile <span className="text-gradient-gold">Optimization</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mt-6 text-xl text-gray-400 font-medium"
                        >
                            Strengthen Your Local Presence with <span className="text-white">ADFUSION</span>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 text-gray-400 text-lg leading-relaxed"
                        >
                            In today’s digital era, customers search online before making any decision. With a professionally optimized Google Business Profile, your business appears exactly where your customers are searching — on Google Search and Maps.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 rounded-3xl border border-white/5 hover:border-gold-500/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/10 transition-colors">
                                    <benefit.icon className="text-gold-500" size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gold-400 transition-colors">{benefit.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-dark-800/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold">Why Choose <span className="text-gradient-gold">ADFUSION?</span></h2>
                        <p className="mt-6 text-gray-400 text-lg">We don't just manage listings; we build digital real estate that generates consistent revenue.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            {[
                                "Expert Team of GMB Specialists",
                                "Strategic Keyword & Category Mapping",
                                "Data-Driven Performance Reporting",
                                "Custom Content & Review Strategies",
                                "Proven Track Record of Improved Rankings"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <CheckCircle2 className="text-gold-500 flex-shrink-0" size={24} />
                                    <span className="text-lg text-gray-200">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gold-500/20 to-transparent border border-white/10 flex items-center justify-center overflow-hidden">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10 font-bold select-none">
                                    ADFUSION
                                </div>
                                <Search size={120} className="text-gold-500 opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold">Our <span className="text-gradient-gold">Process</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <span className="text-6xl font-black text-white/5 absolute -top-10 left-0 leading-none">
                                    {step.number}
                                </span>
                                <div className="relative z-10 pt-4">
                                    <h4 className="text-xl font-bold text-gold-500 mb-2">{step.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-br from-gold-500/20 via-dark-800 to-transparent p-12 md:p-20 rounded-[3rem] border border-gold-500/20 text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 blur-[100px] -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700"></div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to dominate <span className="text-gold-500">Local Search?</span></h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Get your free Google Business Profile audit and start your journey to the top of Google Maps.</p>
                        <a
                            href="https://wa.me/917303405072"
                            className="inline-flex px-12 py-5 bg-gold-500 text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(212,175,55,0.3)] text-xl"
                        >
                            Get Free Consultation
                        </a>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
};

export default GoogleBusinessProfile;
