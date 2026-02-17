import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, BarChart } from 'lucide-react';

const stats = [
    { icon: Users, label: 'Clients Served', value: '250+' },
    { icon: CheckCircle, label: 'Projects Completed', value: '500+' },
    { icon: BarChart, label: 'Campaigns Run', value: '1.2k+' },
];

const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Who We Are <span className="text-gold-500">.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            AdFusion is a premier digital marketing agency dedicated to helping brands thrive in the digital era. We combine data-driven strategies with creative excellence to deliver measurable growth.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            From startups to established enterprises, we partner with visionaries to build commanding online presences that turn visitors into loyal customers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className={`glass-card p-8 rounded-2xl border-t border-white/5 ${index === 2 ? 'sm:col-span-2' : ''}`}
                            >
                                <div className="bg-gold-500/10 w-12 h-12 rounded-lg flex items-center justify-center text-gold-500 mb-4">
                                    <stat.icon size={24} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                                <p className="text-gray-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
