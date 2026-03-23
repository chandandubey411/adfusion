import React from 'react';
import { motion } from 'framer-motion';

const terms = [
    {
        title: "1. Services",
        description: "We provide digital services as described on our website. By using our services, you agree to provide accurate information and cooperate as required for project completion."
    },
    {
        title: "2. No Refund Policy",
        description: "All payments made to us are non-refundable under any circumstances. Once a service is purchased or a project is initiated, no refund requests will be entertained."
    },
    {
        title: "3. Confidentiality & Credentials",
        description: "We respect your privacy and security. However:\n- We do not share any login credentials, access details, or sensitive information with anyone.\n- Clients are responsible for maintaining the confidentiality of their own credentials provided to us."
    },
    {
        title: "4. Payment Terms",
        description: "- Full or partial payment must be made in advance, as agreed.\n- Work will commence only after receiving the required payment."
    },
    {
        title: "5. Project Delivery",
        description: "We aim to deliver projects within the agreed timeline.\n- Delays caused by lack of communication or incomplete information from the client are not our responsibility."
    },
    {
        title: "6. Limitation of Liability",
        description: "We are not liable for any direct or indirect damages resulting from the use of our services."
    }
];

const Terms = () => {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden min-h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10 -z-10" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold leading-tight mb-6"
                    >
                        Terms & <span className="text-gold-500">Conditions</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl"
                    >
                        Please read these terms carefully before using our services.
                    </motion.p>
                </div>

                {/* Content Cards */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="space-y-6"
                >
                    {terms.map((term, index) => (
                        <div key={index} className="glass-card p-8 rounded-2xl border border-white/5 bg-dark-800/50 backdrop-blur-sm hover:border-gold-500/20 transition-all group duration-300">
                            <h2 className="text-2xl font-bold mb-4 text-gold-500 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all">
                                {term.title}
                            </h2>
                            <div className="text-gray-300 leading-relaxed text-[16px] space-y-3">
                                {term.description.split('\n').map((line, i) => (
                                    <div key={i} className="flex gap-3">
                                        {line.startsWith('- ') ? (
                                            <>
                                                <span className="text-gold-500 mt-1">•</span>
                                                <span className="flex-1">{line.replace('- ', '')}</span>
                                            </>
                                        ) : (
                                            <span className="flex-1">{line}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Terms;
