import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, Users, Shield, Rocket } from 'lucide-react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';

const serviceData = {
    'meta-marketing': { title: 'Meta Marketing', desc: 'Comprehensive marketing strategies across the Meta ecosystem including Facebook, Instagram, and WhatsApp.' },
    'instagram-marketing': { title: 'Instagram Marketing', desc: 'Grow your following and engagement with curated content and strategic growth tactics.' },
    'facebook-marketing': { title: 'Facebook Marketing', desc: 'Targeted ad campaigns designed to reach your ideal audience and drive conversions.' },
    'google-ads': { title: 'Google Ads', desc: 'High-ROI PPC campaigns to drive immediate traffic and sales through Search, Display, and Video.' },
    'reels-marketing': { title: 'Reels Marketing', desc: 'Viral short-form video content production and strategy to boost brand awareness.' },
    'video-shoot': { title: 'Video Shoot', desc: 'Professional video production for ads, products, and brand stories with high-end equipment.' },
    'pr-agency-program': { title: 'PR Agency Program', desc: 'Strategic public relations to build brand authority and manage media presence.' },
    'influencer-marketing': { title: 'Influencer Marketing', desc: 'Connect with industry influencers to amplify your brand message to a wider audience.' },
    'influencer-collab': { title: 'Influencer Collab', desc: 'Manage and negotiate high-impact collaborations that deliver real business impact.' }
};

const GenericService = () => {
    const { slug } = useParams();
    const service = serviceData[slug] || { title: 'Service Details', desc: 'Premium digital solutions for your business.' };

    return (
        <ServicePageLayout>
            <section className="pt-12">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-8 uppercase"
                        >
                            {service.title} <span className="text-gradient-gold">Services</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 leading-relaxed mb-12"
                        >
                            {service.desc}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {[
                            { icon: Target, title: 'Strategic Planning', desc: 'Data-driven approaches tailored to your business goals.' },
                            { icon: TrendingUp, title: 'Growth Focus', desc: 'Focus on ROI and scalable business results.' },
                            { icon: Zap, title: 'Fast Execution', desc: 'Quick turnaround and agile implementation.' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-10 rounded-3xl border border-white/5 hover:border-gold-500/30 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-8">
                                    <item.icon className="text-gold-500" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-dark-800/40 border border-white/5 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 blur-[100px] -mr-48 -mt-48"></div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build your <span className="text-gold-500">Success Story.</span></h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">Contact us today for a personalized strategy tailored to your brand's unique needs.</p>
                        <a
                            href="https://wa.me/917303405072"
                            className="inline-flex px-12 py-5 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-black rounded-full hover:scale-105 transition-transform shadow-xl uppercase tracking-widest"
                        >
                            Get Free Consultation
                        </a>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
};

export default GenericService;
