import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

const PageLayout = ({ children }) => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 500);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-dark-900 text-white selection:bg-gold-500 selection:text-black">
            <ScrollToTop />
            <Navbar />
            <main>{children}</main>
            <Footer />

            {/* Scroll to Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gold-500 text-dark-900 shadow-lg transition-all duration-300 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={22} />
            </button>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919599799778"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 left-8 z-50 p-3.5 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={26} />
                <span className="absolute left-full ml-3 px-3 py-1.5 bg-dark-800 border border-white/10 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Chat with us
                </span>
            </a>
        </div>
    );
};

export default PageLayout;
