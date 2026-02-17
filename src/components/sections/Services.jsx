import React from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    Globe,
    Instagram,
    Facebook,
    Video,
    Megaphone,
    Camera,
    Code,
    Mic2,
    Users,
    Handshake
} from 'lucide-react';

const services = [
    { icon: Search, title: 'Google Listing', description: 'Optimize your local presence and get found by customers nearby.' },
    { icon: Globe, title: 'Meta Marketing', description: 'Comprehensive marketing strategies across the Meta ecosystem.' },
    { icon: Instagram, title: 'Instagram Marketing', description: 'Grow your following and engagement with curated content.' },
    { icon: Facebook, title: 'Facebook Marketing', description: 'Targeted ad campaigns to reach your ideal audience.' },
    { icon: Megaphone, title: 'Google Ads', description: 'High-ROI PPC campaigns to drive immediate traffic and sales.' },
    { icon: Video, title: 'Reels Marketing', description: 'Viral short-form video content to boost brand awareness.' },
    { icon: Camera, title: 'Video Shoot', description: 'Professional video production for ads, products, and brand stories.' },
    { icon: Code, title: 'Website Dev & SEO', description: 'High-performance websites optimized for search engines.' },
    { icon: Mic2, title: 'PR Agency Program', description: 'Strategic public relations to build brand authority.' },
    { icon: Users, title: 'Influencer Marketing', description: 'Connect with influencers to amplify your brand message.' },
    { icon: Handshake, title: 'Influencer Collab', description: 'Manage and negotiate high-impact collaborations.' },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-dark-800/50 relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-gold-500 font-medium tracking-wider uppercase text-sm"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mt-2"
                    >
                        World-Class <span className="text-gradient-gold">Services</span>
                    </motion.h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        We offer a comprehensive suite of digital solutions designed to elevate your brand and drive real business results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-card p-6 rounded-2xl group cursor-pointer hover:bg-gold-500/5 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold-500/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all">
                                <service.icon className="text-gray-300 group-hover:text-gold-500 transition-colors" size={24} />
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-gold-400 transition-colors">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
