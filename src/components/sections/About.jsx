import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, BarChart } from 'lucide-react';



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
                        className="md:w-full text-center max-w-3xl mx-auto"
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

                </div>
            </div>
        </section>
    );
};

export default About;
