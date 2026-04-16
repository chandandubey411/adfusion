import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyCTA from '../ui/StickyCTA';

const ServicePageLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark-900 text-white selection:bg-gold-500 selection:text-black">
            <Navbar />

            {/* Back Button */}
            <div className="container mx-auto px-6 pt-32 pb-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors group px-4 py-2 rounded-full border border-white/5 hover:border-gold-500/30 bg-white/0 hover:bg-gold-500/5"
                >
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium uppercase tracking-wider">Back to Services</span>
                </Link>
            </div>

            <main className="pb-32">
                {children}
            </main>

            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-400 origin-left z-[101]"
                style={{ scaleX: 0 }} // This would normally be handled by useScroll but I'll skip complex scroll for now or implement if needed
            />

            <StickyCTA />

            {/* Floating WhatsApp Button (Standard) */}
            <a
                href="https://wa.me/918882722731"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 left-8 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
            >
                <MessageCircle size={28} />
                <span className="absolute left-full ml-4 px-4 py-2 bg-dark-800 border border-white/10 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Chat with an expert
                </span>
            </a>

            <Footer />
        </div>
    );
};

export default ServicePageLayout;
