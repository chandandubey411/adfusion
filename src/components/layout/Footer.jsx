import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Youtube, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const services = [
    { title: 'Google Listing',       slug: 'google-business-profile' },
    { title: 'Meta Marketing',        slug: 'meta-marketing' },
    { title: 'Instagram Marketing',   slug: 'instagram-marketing' },
    { title: 'Facebook Marketing',    slug: 'facebook-marketing' },
    { title: 'Google Ads',            slug: 'google-ads' },
    { title: 'Reels Marketing',       slug: 'reels-marketing' },
    { title: 'Video Shoot',           slug: 'video-shoot' },
    { title: 'Website Dev & SEO',     slug: 'website-development-seo' },
    { title: 'PR Agency Program',     slug: 'pr-agency-program' },
    { title: 'Influencer Marketing',  slug: 'influencer-marketing' },
];

const quickLinks = [
    { name: 'Home',             to: '/' },
    { name: 'About Us',         to: '/about' },
    { name: 'Services',         to: '/services' },
    { name: 'Portfolio',        to: '/portfolio' },
    { name: 'Testimonials',     to: '/testimonials' },
    { name: 'Contact',          to: '/contact' },
    { name: 'Terms & Conditions', to: '/terms-and-conditions' },
];

const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook,  href: '#', label: 'Facebook' },
    { icon: Twitter,   href: '#', label: 'Twitter' },
    { icon: Linkedin,  href: '#', label: 'LinkedIn' },
    { icon: Youtube,   href: '#', label: 'YouTube' },
];

const FooterLink = ({ to, children }) => (
    <Link
        to={to}
        className="flex items-center gap-2 text-gray-500 hover:text-gold-400 transition-colors group text-sm"
    >
        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-500" />
        {children}
    </Link>
);

const Footer = () => {
    return (
        <footer className="bg-black relative overflow-hidden">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">

                    {/* Col 1 — Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="text-2xl font-bold font-sans tracking-tight block mb-4">
                            Ad<span className="text-gold-500">Fusion</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Your #1 digital growth partner. We craft high-performance marketing strategies that turn brands into market leaders.
                        </p>
                        {/* Socials */}
                        <div className="flex items-center gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-lg bg-dark-800 border border-white/5 flex items-center justify-center text-gray-500 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-200"
                                >
                                    <s.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2 — Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                            <span className="w-4 h-px bg-gold-500 inline-block" />
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <FooterLink to={link.to}>{link.name}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Services */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                            <span className="w-4 h-px bg-gold-500 inline-block" />
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((s) => (
                                <li key={s.slug}>
                                    <FooterLink to={`/services/${s.slug}`}>{s.title}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Contact */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                            <span className="w-4 h-px bg-gold-500 inline-block" />
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+919599799778"
                                    className="flex items-start gap-3 text-gray-500 hover:text-gold-400 transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/10 transition-colors mt-0.5">
                                        <Phone size={14} className="text-gold-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-600 mb-0.5">Phone</p>
                                        <p className="text-sm">+91 95997 99778</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:support@adfusion.co.in"
                                    className="flex items-start gap-3 text-gray-500 hover:text-gold-400 transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/10 transition-colors mt-0.5">
                                        <Mail size={14} className="text-gold-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-600 mb-0.5">Email</p>
                                        <p className="text-sm">support@adfusion.co.in</p>
                                    </div>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-500">
                                <div className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <MapPin size={14} className="text-gold-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-600 mb-0.5">Delhi NCR Office</p>
                                    <p className="text-sm leading-relaxed">Office no-205, Shakti Khand 2, Indirapuram, Ghaziabad 201014</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-gray-500">
                                <div className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <MapPin size={14} className="text-gold-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-600 mb-0.5">Mumbai Office</p>
                                    <p className="text-sm leading-relaxed">Plot no. 9, Road No. 7, Marol MIDC, Andheri East, Mumbai 400093</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} <span className="text-gray-500">AdFusion Agency</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="/terms-and-conditions" className="text-gray-600 text-sm hover:text-gold-400 transition-colors">
                            Terms & Conditions
                        </Link>
                        <span className="w-1 h-1 rounded-full bg-gray-700" />
                        <a href="mailto:support@adfusion.co.in" className="text-gray-600 text-sm hover:text-gold-400 transition-colors">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
