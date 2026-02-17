import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../ui/Button';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-black pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16">

                    <div>
                        <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">Get in Touch</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Let's Build Something <br /><span className="text-gradient-gold">Great Together</span></h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Ready to accelerate your growth? Send us a message and let's discuss how we can help you achieve your goals.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-dark-800 p-3 rounded-lg text-gold-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Phone</h3>
                                    <p className="text-gray-400 hover:text-white transition-colors">7295043391</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-dark-800 p-3 rounded-lg text-gold-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Email</h3>
                                    <p className="text-gray-400 hover:text-white transition-colors">hello@adfusion.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-dark-800 p-3 rounded-lg text-gold-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Office</h3>
                                    <p className="text-gray-400">Shop No. 12-14, 1st Floor, Niti Khand-3, Indirapuram</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-10 rounded-3xl space-y-6"
                    >
                        <h3 className="text-2xl font-bold mb-2">Send a Message</h3>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Name</label>
                                <input type="text" className="w-full bg-dark-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Phone</label>
                                <input type="tel" className="w-full bg-dark-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="+91..." />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Email</label>
                            <input type="email" className="w-full bg-dark-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Service Interested In</label>
                            <select className="w-full bg-dark-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors">
                                <option>Digital Marketing</option>
                                <option>Web Development</option>
                                <option>Branding</option>
                                <option>Video Production</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Message</label>
                            <textarea rows="4" className="w-full bg-dark-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="Tell us about your project..." />
                        </div>

                        <Button className="w-full py-4 text-lg">Send Message <Send size={18} /></Button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
