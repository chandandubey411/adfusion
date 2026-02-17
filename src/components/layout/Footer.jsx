import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <a href="#" className="text-2xl font-bold font-sans tracking-tight block mb-2">
                            Ad<span className="text-gold-500">Fusion</span>
                        </a>
                        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} AdFusion Agency. All rights reserved.</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                            <Linkedin size={20} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
