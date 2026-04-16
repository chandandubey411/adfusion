import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/918882722731?text=Hello%20ADFUSION,%20I'm%20interested%20in%20your%20services!", "_blank");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-4 md:pb-6 pointer-events-none"
                >
                    <div className="container mx-auto max-w-4xl pointer-events-auto">
                        <div className="bg-dark-800/80 backdrop-blur-xl border border-gold-500/20 rounded-full p-2 md:p-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4">
                            <div className="hidden md:flex flex-col ml-6 text-left">
                                <span className="text-white font-bold text-sm tracking-wide">Ready to Scale?</span>
                                <span className="text-gray-400 text-xs text-nowrap">Let's build something world-class together.</span>
                            </div>

                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <button
                                    onClick={handleWhatsAppClick}
                                    className="flex-1 md:flex-none px-6 md:px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-gold-500/20 text-sm md:text-base flex items-center justify-center gap-2"
                                >
                                    Get Free Consultation
                                </button>

                                <a
                                    href="https://wa.me/918882722731"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-[#25D366] text-white rounded-full hover:scale-110 transition-transform shadow-lg shadow-[#25D366]/20 md:hidden"
                                >
                                    <MessageSquare size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;
