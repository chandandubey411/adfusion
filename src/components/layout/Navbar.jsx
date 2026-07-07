import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Globe, Instagram, Facebook, Video, Megaphone, Camera, Code, Mic2, Users, Handshake } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const services = [
    { icon: Search,     title: 'Google Listing',       slug: 'google-business-profile' },
    { icon: Globe,      title: 'Meta Marketing',        slug: 'meta-marketing' },
    { icon: Instagram,  title: 'Instagram Marketing',   slug: 'instagram-marketing' },
    { icon: Facebook,   title: 'Facebook Marketing',    slug: 'facebook-marketing' },
    { icon: Megaphone,  title: 'Google Ads',            slug: 'google-ads' },
    { icon: Video,      title: 'Reels Marketing',       slug: 'reels-marketing' },
    { icon: Camera,     title: 'Video Shoot',           slug: 'video-shoot' },
    { icon: Code,       title: 'Website Dev & SEO',     slug: 'website-development-seo' },
    { icon: Mic2,       title: 'PR Agency Program',     slug: 'pr-agency-program' },
    { icon: Users,      title: 'Influencer Marketing',  slug: 'influencer-marketing' },
    { icon: Handshake,  title: 'Influencer Collab',     slug: 'influencer-collab' },
];

const navLinks = [
    { name: 'Home',         to: '/' },
    { name: 'About',        to: '/about' },
    { name: 'Portfolio',    to: '/portfolio' },
    { name: 'Testimonials', to: '/testimonials' },
    { name: 'Contact',      to: '/contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled]           = useState(false);
    const [isMobileOpen, setIsMobileOpen]       = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileOpen(false);
        setMobileServicesOpen(false);
        setDesktopDropdownOpen(false);
    }, [location.pathname]);

    const isActive = (to) => {
        if (to === '/') return location.pathname === '/';
        return location.pathname.startsWith(to);
    };

    const isServiceActive = location.pathname.startsWith('/services');

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold font-sans tracking-tight flex-shrink-0">
                    Ad<span className="text-gold-500">Fusion</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {/* Home link */}
                    <Link
                        to="/"
                        className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all ${isActive('/') ? 'text-gold-400' : 'text-gray-300 hover:text-white'}`}
                    >
                        Home
                    </Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        ref={dropdownRef}
                        onMouseEnter={() => setDesktopDropdownOpen(true)}
                        onMouseLeave={() => setDesktopDropdownOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all ${isServiceActive ? 'text-gold-400' : 'text-gray-300 hover:text-white'}`}
                        >
                            Services
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <AnimatePresence>
                            {desktopDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                                    transition={{ duration: 0.18 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] glass-card rounded-2xl border border-white/10 p-4 shadow-2xl shadow-black/50"
                                >
                                    {/* Mega menu header */}
                                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/5">
                                        <p className="text-xs font-semibold text-gold-500 uppercase tracking-widest">All Services</p>
                                        <Link
                                            to="/services"
                                            className="text-xs text-gray-400 hover:text-gold-400 transition-colors"
                                        >
                                            View all →
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-2 gap-1">
                                        {services.map((s) => (
                                            <Link
                                                key={s.slug}
                                                to={`/services/${s.slug}`}
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gold-500/10 group transition-all"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-dark-900 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-gold-500/30 group-hover:text-gold-500 text-gray-400 transition-all">
                                                    <s.icon size={15} />
                                                </div>
                                                <span className="text-sm text-gray-300 group-hover:text-white transition-colors leading-tight">
                                                    {s.title}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Other nav links */}
                    {navLinks.slice(2).map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all ${isActive(link.to) ? 'text-gold-400' : 'text-gray-300 hover:text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* About link */}
                    <Link
                        to="/about"
                        className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all ${isActive('/about') ? 'text-gold-400' : 'text-gray-300 hover:text-white'}`}
                    >
                        About
                    </Link>

                    <Link to="/contact">
                        <Button variant="primary" className="px-5 py-2 text-sm ml-2">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {isMobileOpen
                            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={22} /></motion.div>
                            : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={22} /></motion.div>
                        }
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden bg-dark-900/98 backdrop-blur-xl border-t border-white/5"
                    >
                        <div className="container mx-auto px-6 py-6 space-y-1">
                            {/* Home */}
                            <Link
                                to="/"
                                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive('/') ? 'bg-gold-500/10 text-gold-400' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                            >
                                Home
                            </Link>

                            {/* Services accordion */}
                            <div>
                                <button
                                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${isServiceActive ? 'bg-gold-500/10 text-gold-400' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                                >
                                    Services
                                    <ChevronDown size={18} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-1 ml-4 space-y-0.5 border-l border-gold-500/20 pl-4">
                                                <Link
                                                    to="/services"
                                                    className="block px-3 py-2 rounded-lg text-sm text-gold-400 hover:bg-gold-500/10 transition-colors font-medium"
                                                >
                                                    View All Services →
                                                </Link>
                                                {services.map((s) => (
                                                    <Link
                                                        key={s.slug}
                                                        to={`/services/${s.slug}`}
                                                        className="block px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                                    >
                                                        {s.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* About */}
                            <Link
                                to="/about"
                                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive('/about') ? 'bg-gold-500/10 text-gold-400' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                            >
                                About
                            </Link>

                            {/* Portfolio */}
                            <Link
                                to="/portfolio"
                                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive('/portfolio') ? 'bg-gold-500/10 text-gold-400' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                            >
                                Portfolio
                            </Link>

                            {/* Testimonials */}
                            <Link
                                to="/testimonials"
                                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive('/testimonials') ? 'bg-gold-500/10 text-gold-400' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                            >
                                Testimonials
                            </Link>

                            {/* Contact */}
                            <Link
                                to="/contact"
                                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive('/contact') ? 'bg-gold-500/10 text-gold-400' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                            >
                                Contact
                            </Link>

                            <div className="pt-4">
                                <Link to="/contact">
                                    <Button className="w-full py-3">Get Started</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
