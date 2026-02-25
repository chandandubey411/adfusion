import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Search,
    Check,
    Zap,
    Shield,
    BarChart,
    Smartphone,
    Layout,
    Plus,
    Minus,
    Trophy,
    Users,
    Rocket
} from 'lucide-react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import Contact from '../../components/sections/Contact';

const webPackages = [
    {
        name: 'BASIC WEBSITE',
        price: 'Bronze',
        icon: Zap,
        features: [
            '5 Page Website',
            'Responsive Design',
            'Basic SEO Setup',
            'Contact Form',
            'Speed Optimization',
            '1 Month Support'
        ],
        desc: 'Best for startups & local businesses.',
        gradient: 'from-gray-400 to-gray-600'
    },
    {
        name: 'BUSINESS WEBSITE',
        price: 'Silver',
        icon: Shield,
        popular: true,
        features: [
            'Up to 10 Pages',
            'Advanced UI/UX',
            'Blog Setup',
            'On-Page SEO',
            'Google Analytics Integration',
            'Lead Capture Optimization',
            '3 Months Support'
        ],
        desc: 'Best for growing brands.',
        gradient: 'from-gold-400 to-gold-600'
    },
    {
        name: 'PREMIUM WEBSITE',
        price: 'Gold',
        icon: Trophy,
        features: [
            'Custom Design',
            'Unlimited Pages',
            'Advanced Animations',
            'Conversion Funnel Setup',
            'Technical SEO',
            'Schema Markup',
            'Speed Optimization (90+ Score)',
            'CRM Integration',
            '6 Months Support'
        ],
        desc: 'Best for scaling businesses & enterprises.',
        gradient: 'from-gold-600 to-yellow-700'
    }
];

const seoPackages = [
    {
        name: 'BASIC SEO',
        price: 'Bronze',
        features: [
            'Keyword Research',
            'On-Page Optimization',
            'Meta Tags',
            'Google Search Console Setup',
            'Monthly Report'
        ],
        color: 'text-gray-400'
    },
    {
        name: 'BUSINESS SEO',
        price: 'Silver',
        features: [
            'Advanced Keyword Strategy',
            'Technical SEO',
            'Competitor Analysis',
            'Content Optimization',
            'Local SEO',
            'Monthly Reporting'
        ],
        color: 'text-gold-400'
    },
    {
        name: 'PREMIUM SEO',
        price: 'Gold',
        features: [
            'Complete SEO Strategy',
            'Technical + On Page + Off Page',
            'High Authority Backlinks',
            'Content Strategy',
            'Schema Implementation',
            'Conversion Optimization',
            'Weekly Reports'
        ],
        color: 'text-gold-600'
    }
];

const faqs = [
    { q: "How long does it take to build a website?", a: "A basic website typically takes 2-3 weeks, while more complex business or premium websites can take 4-8 weeks depending on requirements and feedback cycles." },
    { q: "Will my website be mobile-friendly?", a: "Absolutely! Every website we build is 100% responsive, meaning it will look and function perfectly on smartphones, tablets, and desktops." },
    { q: "Do you provide hosting and domain services?", a: "Yes, we can handle everything from domain registration to high-performance hosting setup and maintenance." },
    { q: "How soon can I see SEO results?", a: "SEO is a long-term strategy. While some technical improvements show immediate results, significant ranking growth usually takes 3-6 months depending on competition." }
];

const Counter = ({ target, label, icon: Icon }) => (
    <div className="flex flex-col items-center text-center p-8 bg-dark-800/30 rounded-3xl border border-white/5 hover:border-gold-500/20 transition-all group">
        <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Icon className="text-gold-500" size={32} />
        </div>
        <div className="text-4xl md:text-5xl font-black text-white mb-2">
            {target}
        </div>
        <div className="text-gray-400 font-medium uppercase tracking-widest text-sm">{label}</div>
    </div>
);

const WebsiteDevSEO = () => {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <ServicePageLayout>
            {/* Hero Section */}
            <section className="relative pt-12 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square bg-gold-500/5 blur-[120px] rounded-full -z-10"></div>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.span
                            initial={{ opacity: 0, tracking: '0.2em' }}
                            animate={{ opacity: 1, tracking: '0.1em' }}
                            className="text-gold-500 font-bold uppercase mb-6"
                        >
                            High-Performance Digital Solutions
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black leading-none mb-8"
                        >
                            Website Development <br />
                            <span className="text-gradient-gold">& SEO Services</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed"
                        >
                            We design conversion-focused, lightning-fast websites that not only look stunning but rank on search engines and generate leads.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Counter target="150+" label="Projects Delivered" icon={Layout} />
                        <Counter target="98%" label="Client Satisfaction" icon={Users} />
                        <Counter target="2M+" label="Leads Generated" icon={Rocket} />
                    </div>
                </div>
            </section>

            {/* Web Dev Packages */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Website Development <span className="text-gold-500">Packages</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Choose the perfect plan to elevate your brand's digital presence.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {webPackages.map((pkg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative p-8 rounded-[2.5rem] bg-dark-800/40 border transition-all duration-500 group overflow-hidden ${pkg.popular ? 'border-gold-500 shadow-[0_0_50px_rgba(212,175,55,0.15)] scale-105 z-10' : 'border-white/5 hover:border-white/20'}`}
                            >
                                {pkg.popular && (
                                    <div className="absolute top-6 right-8 bg-gold-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                                        Most Popular
                                    </div>
                                )}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-8 shadow-lg`}>
                                    <pkg.icon className="text-black" size={28} />
                                </div>
                                <h3 className="text-2xl font-black mb-2 text-white">{pkg.name}</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">{pkg.desc}</p>

                                <div className="space-y-4 mb-10">
                                    {pkg.features.map((feat, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-3">
                                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center">
                                                <Check className="text-gold-500" size={12} strokeWidth={4} />
                                            </div>
                                            <span className="text-gray-300 text-sm">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => {
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${pkg.popular ? 'bg-gold-500 text-black shadow-lg hover:shadow-gold-500/20 hover:-translate-y-1' : 'bg-white/5 text-white hover:bg-white/10'}`}
                                >
                                    Get Started
                                </button>

                                {/* Background glow hover effect */}
                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gold-500/5 blur-[60px] rounded-full transition-all group-hover:scale-150"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Section */}
            <section className="py-24 bg-dark-800/20 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Search Engine <span className="text-gold-500">Optimization</span></h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">Boost your organic rankings and dominate search results with our technical-first SEO strategies.</p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-gray-300">
                                    <BarChart size={14} className="text-gold-500" /> Technical SEO
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-gray-300">
                                    <Smartphone size={14} className="text-gold-500" /> Mobile SEO
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-gray-300">
                                    <Check size={14} className="text-gold-500" /> On-Page SEO
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {seoPackages.map((pkg, idx) => (
                                <div key={idx} className="glass-card p-6 rounded-3xl border border-white/5 hover:border-gold-500/30 transition-all hover:bg-gold-500/5">
                                    <h4 className={`text-sm font-black uppercase tracking-widest mb-4 ${pkg.color}`}>{pkg.name}</h4>
                                    <ul className="space-y-3">
                                        {pkg.features.map((f, i) => (
                                            <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1"></div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold">Frequently Asked <span className="text-gold-500">Questions</span></h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="border border-white/5 rounded-2xl overflow-hidden hover:border-gold-500/20 transition-all"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full p-6 flex items-center justify-between text-left bg-dark-800/20 hover:bg-dark-800/40 transition-colors"
                                >
                                    <span className="font-bold text-lg text-white">{faq.q}</span>
                                    {openFaq === idx ? <Minus className="text-gold-500" /> : <Plus className="text-gold-500" />}
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-gray-400 leading-relaxed text-sm bg-dark-800/20">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gold-500 p-12 md:p-20 rounded-[4rem] text-black text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 relative z-10 leading-none">BUILD YOUR <br /> DIGITAL EMPIRE.</h2>
                        <p className="text-xl font-medium mb-12 max-w-2xl mx-auto relative z-10">Don’t settle for a basic website. Get a high-performance machine that works for you 24/7.</p>
                        <button
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex px-12 py-5 bg-black text-white font-black rounded-full hover:scale-105 transition-transform shadow-2xl relative z-10 text-xl"
                        >
                            Start Your Project
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Contact defaultService="Web Development" />
        </ServicePageLayout>
    );
};

export default WebsiteDevSEO;
