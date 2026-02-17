import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users, CheckCircle, Smartphone, ShoppingBag, Globe, Camera, Video, Music } from 'lucide-react';

const statsData = [
    { icon: Users, value: 2000, label: 'Clients Served', suffix: '+' },
    { icon: CheckCircle, value: 500, label: 'Projects Completed', suffix: '+' },
    { icon: Smartphone, value: 500, label: 'Social Handling', suffix: '+' },
    { icon: ShoppingBag, value: 200, label: 'E-commerce Sites', suffix: '+' },
    { icon: Globe, value: 1000, label: 'Static Websites', suffix: '+' },
    { icon: Camera, value: 100, label: 'Marriage Shoots', suffix: '+' },
    { icon: Video, value: 1000, label: 'Content Reels', suffix: '+' },
    { icon: Music, value: 50, label: 'Songs Shoots', suffix: '+' },
];

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-10px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

    useEffect(() => {
        if (inView) {
            const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const StatCard = ({ stat, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative bg-dark-800/50 backdrop-blur-sm border border-gold-500/10 p-6 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-300"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-4 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-colors duration-300">
                    <stat.icon size={24} />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                </h3>

                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider group-hover:text-gold-400 transition-colors">
                    {stat.label}
                </p>
            </div>
        </motion.div>
    );
};

const Stats = () => {
    return (
        <section className="py-20 bg-dark-900 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4"
                    >
                        Our <span className="text-gold-500">Achievements</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg"
                    >
                        Real numbers that reflect our growth, experience, and impact in digital marketing and media production.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statsData.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
