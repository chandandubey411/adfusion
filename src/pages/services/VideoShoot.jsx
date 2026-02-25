import React from 'react';
import { motion } from 'framer-motion';
import {
    Video,
    Camera,
    Film,
    Monitor,
    Smartphone,
    Rocket,
    Star,
    CheckCircle2,
    Play,
    Zap,
    Users,
    Clapperboard,
    Palette,
    ArrowRight
} from 'lucide-react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';

const whyVideoMatters = [
    {
        icon: Camera,
        title: 'High-Quality Production',
        description: 'Cinematic visuals that enhance brand perception and build instant trust.'
    },
    {
        icon: Star,
        title: 'Strong Brand Positioning',
        description: 'Professional storytelling that communicates your message clearly and effectively.'
    },
    {
        icon: Smartphone,
        title: 'Social Media Ready Content',
        description: 'Optimized videos for Instagram, Facebook, YouTube, and high-impact Reels.'
    },
    {
        icon: Zap,
        title: 'Increased Engagement',
        description: 'Video content drives higher interaction and longer audience retention rates.'
    },
    {
        icon: Clapperboard,
        title: 'Corporate & Promotional Shoots',
        description: 'Perfect for ads, product showcases, and professional business promotions.'
    },
    {
        icon: TrendingUp,
        title: 'Better Conversion Rates',
        description: 'Well-produced videos help convert passive viewers into active customers.'
    }
];

// Reusing TrendingUp icon from other imports for consistency
import { TrendingUp } from 'lucide-react';

const videoServices = [
    'Brand Promotional Videos',
    'Product Shoots',
    'Corporate Shoots',
    'Reels & Short-Form Content',
    'Event Coverage',
    'Script & Concept Development',
    'Professional Editing',
    'Color Grading & Final Delivery'
];

const processSteps = [
    { number: '1', title: 'Concept & Planning', desc: 'Defining the vision, goals, and visual style for your project.' },
    { number: '2', title: 'Script & Shot Design', desc: 'Crafting the narrative and planning every cinematic angle.' },
    { number: '3', title: 'Professional Shooting', desc: 'Capturing high-end visuals with professional equipment and lighting.' },
    { number: '4', title: 'Editing & Post Production', desc: 'Polishing the story with elite editing, sound, and transitions.' },
    { number: '5', title: 'Final Delivery & Optimization', desc: 'Delivering high-quality files ready for all platforms and growth.' }
];

const results = [
    'Premium Brand Image',
    'High Engagement Content',
    'Stronger Audience Connection',
    'Increased Social Media Reach',
    'Higher Conversion Potential'
];

const Counter = ({ target, label }) => (
    <div className="text-center group">
        <div className="text-4xl md:text-5xl font-black text-gold-500 mb-2 group-hover:scale-110 transition-transform duration-500">{target}</div>
        <div className="text-gray-400 text-sm uppercase tracking-widest leading-tight">{label}</div>
    </div>
);

const VideoShoot = () => {
    return (
        <ServicePageLayout>
            {/* Hero Section */}
            <section className="relative pt-12 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-24 h-24 rounded-[2.5rem] bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(212,175,55,0.15)] relative group"
                        >
                            <div className="absolute inset-0 bg-gold-500/20 blur-2xl group-hover:blur-3xl transition-all rounded-full opacity-40"></div>
                            <Clapperboard className="text-gold-500 relative z-10" size={48} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-9xl font-black leading-tight mb-8"
                        >
                            Professional <br />
                            <span className="text-gradient-gold uppercase">Video Shoot</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl md:text-3xl text-gold-500/80 font-bold tracking-tight uppercase mb-8"
                        >
                            Create Impactful Visual Content That Elevates Your Brand
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-10"
                        >
                            High-quality video content builds trust, captures attention, and strengthens brand identity. From promotional shoots to social media content, professional visuals make your business stand out.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-white text-lg font-medium mb-12 max-w-2xl"
                        >
                            At <span className="text-gold-500 font-black uppercase tracking-widest">ADFUSION</span>, we deliver cinematic, brand-focused video production designed to engage your audience and drive real results.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <a
                                href="https://wa.me/919599799883"
                                className="px-12 py-5 bg-gold-500 text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_15px_45px_rgba(212,175,55,0.4)] text-lg uppercase tracking-widest"
                            >
                                Get Free Consultation
                            </a>
                            <a
                                href="https://wa.me/919599799883"
                                className="px-12 py-5 border border-gold-500/40 text-gold-400 font-black rounded-full hover:bg-gold-500/10 hover:border-gold-500 transition-all text-lg uppercase tracking-widest"
                            >
                                Book a Shoot
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-gold-500/5 blur-[150px] rounded-full"></div>
            </section>

            {/* Why Video Matters Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Why Professional <br /><span className="text-gold-500">Video Content Matters</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyVideoMatters.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-12 rounded-[2.5rem] border border-white/5 hover:border-gold-500/20 transition-all group relative overflow-hidden h-full"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-gold-500/10 transition-all group-hover:scale-110">
                                    <item.icon className="text-gold-500" size={32} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter leading-tight group-hover:text-gold-400 transition-colors uppercase">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm font-medium">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Video Services */}
            <section className="py-24 bg-dark-800/40 border-y border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight uppercase">Our Video <br /><span className="text-gradient-gold">Shoot Services</span></h2>
                            <p className="text-xl text-gray-300 leading-relaxed mb-12 font-medium border-l-4 border-gold-500 pl-8">We don’t just shoot videos — we create visual brand experiences that leave a lasting impression on your audience.</p>
                            <div className="grid grid-cols-2 gap-6 mt-16">
                                <div className="p-8 rounded-3xl bg-dark-900 border border-white/5 flex flex-col items-center text-center group hover:border-gold-500/30 transition-all">
                                    <Camera className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
                                    <p className="font-black text-xs uppercase tracking-widest text-white">4K Production</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-dark-900 border border-white/5 flex flex-col items-center text-center group hover:border-gold-500/30 transition-all">
                                    <Palette className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
                                    <p className="font-black text-xs uppercase tracking-widest text-white">Color Grading</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {videoServices.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-center gap-5 p-6 rounded-[2rem] bg-dark-900 border border-white/5 hover:border-gold-500/30 transition-all group"
                                >
                                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500 transition-all duration-500 shadow-lg shadow-black/40">
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
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Our <span className="text-gold-500">Process</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group pt-12 flex flex-col h-full"
                            >
                                <span className="text-[140px] font-black text-white/[0.02] absolute top-0 -left-4 leading-none select-none pointer-events-none group-hover:text-gold-500/[0.03] transition-colors">
                                    0{step.number}
                                </span>
                                <div className="relative z-10 p-10 rounded-[3rem] bg-dark-900 border border-white/5 group-hover:border-gold-500/20 transition-all flex flex-col h-full shadow-2xl relative">
                                    <div className="w-14 h-14 rounded-2xl bg-gold-500 text-black flex items-center justify-center font-black text-2xl mb-8 shadow-[0_10px_30px_rgba(212,175,55,0.3)] group-hover:rotate-12 transition-transform">
                                        {step.number}
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-gold-400 transition-colors">{step.title}</h4>
                                    <p className="text-gray-400 leading-relaxed text-xs font-medium">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-24 bg-dark-800/40 relative border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 leading-tight">What You Can Expect <br /><span className="text-gold-500">from ADFUSION</span></h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto mb-24 p-12 bg-dark-900 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gold-500/[0.01] blur-3xl rounded-full"></div>
                            <Counter target="4K+" label="Resolution" />
                            <Counter target="10x" label="Brand Appeal" />
                            <Counter target="80%" label="Higher Re-touch" />
                            <Counter target="1M+" label="Visual Impressions" />
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {results.map((result, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-8 p-10 rounded-[3rem] bg-dark-900 border border-white/5 group hover:bg-gold-500/[0.02] hover:border-gold-500/20 transition-all shadow-xl"
                            >
                                <div className="w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 group-hover:rotate-[360deg] transition-all duration-700 shadow-lg shadow-gold-500/20">
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
                            <h2 className="text-5xl md:text-8xl font-black mb-12 leading-none uppercase tracking-tight">Why Choose <br /><span className="text-gold-500">ADFUSION</span></h2>
                            <p className="text-2xl text-gray-300 leading-relaxed font-bold border-l-8 border-gold-500 pl-12 pt-8 pb-8 bg-dark-800/20 rounded-r-3xl pr-8">
                                We don’t just shoot videos — we create visual brand experiences. Our creative team combines storytelling, cinematography, and strategic marketing to deliver content that leaves a lasting impression.
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="glass-card p-14 rounded-[4.5rem] border border-gold-500/10 relative overflow-hidden group shadow-3xl">
                                <div className="absolute top-0 right-0 p-12 text-gold-500/[0.03] transition-all duration-1000 group-hover:rotate-45 group-hover:scale-150">
                                    <Film size={150} />
                                </div>
                                <div className="relative z-10">
                                    <p className="text-2xl text-gray-100 italic font-medium leading-relaxed mb-12">
                                        "The video quality from ADFUSION is simply world-class. They captured our brand essence perfectly, and our promotional video went viral in days."
                                    </p>
                                    <div className="flex items-center gap-7">
                                        <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-gold-500 to-gold-700 flex items-center justify-center text-black font-black text-2xl shadow-2xl p-6">
                                            VK
                                        </div>
                                        <div>
                                            <p className="font-black text-white text-2xl uppercase tracking-tighter">Vikram K.</p>
                                            <p className="text-gold-500 font-black uppercase tracking-[0.3em] text-[10px] mt-1 opacity-80">Managing Director, Elite Lifestyle</p>
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
                    <div className="bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 p-14 md:p-28 rounded-[5rem] text-black text-center relative overflow-hidden group shadow-[0_50px_100px_rgba(212,175,55,0.25)]">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-10"></div>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <h2 className="text-5xl md:text-9xl font-black mb-12 leading-none uppercase tracking-tighter">Ready to Elevate <br /> Your Brand with <span className="underline decoration-black decoration-[18px] underline-offset-[28px]">Videos?</span></h2>
                            <p className="text-xl md:text-3xl font-black mb-20 max-w-4xl mx-auto opacity-90 uppercase tracking-[0.4em] leading-relaxed">Let’s create powerful visual content that captures attention and drives growth.</p>
                            <a
                                href="https://wa.me/919599799883"
                                className="inline-flex items-center gap-8 px-16 py-8 bg-black text-white font-black rounded-full hover:scale-105 transition-transform shadow-3xl text-2xl uppercase tracking-[0.1em] group"
                            >
                                Book Your Video Shoot Today
                                <ArrowRight size={38} className="group-hover:translate-x-5 transition-transform duration-700" />
                            </a>
                        </motion.div>

                        {/* Interactive floating lens effect */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-black/5 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
};

export default VideoShoot;
