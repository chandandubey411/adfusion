import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Award, Clock, Users } from 'lucide-react';

const features = [
    { icon: Target, title: 'Result-Driven', description: 'We focus on metrics that matter - ROI, conversions, and growth.' },
    { icon: Lightbulb, title: 'Creative Strategy', description: 'Innovative approaches that set your brand apart from the noise.' },
    { icon: TrendingUp, title: 'ROI Focused', description: 'Every campaign is optimized to maximize your return on investment.' },
    { icon: Users, title: 'Experienced Team', description: 'A diverse team of experts dedicated to your success.' },
    { icon: Clock, title: 'On-Time Delivery', description: 'We value your time and consistently meet project deadlines.' },
    { icon: Award, title: 'Award Winning', description: 'Recognized for excellence in digital marketing and design.' },
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-dark-800 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Why Choose <span className="text-gold-500">AdFusion?</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We don't just run ads; we build brands. Our holistic approach to digital marketing ensures that every touchpoint with your customer is impactful and consistent.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Data-Driven Decision Making",
                                "Transparent Reporting & Analytics",
                                "Customized Strategies for Every Client"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500">
                                        <div className="w-3 h-3 bg-gold-500 rounded-full" />
                                    </div>
                                    <span className="text-lg font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-dark-900 border border-white/5 p-6 rounded-xl hover:border-gold-500/30 transition-colors group"
                            >
                                <div className="mb-4 text-gray-400 group-hover:text-gold-500 transition-colors">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
