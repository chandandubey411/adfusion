import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Mr. Chandan Dubey',
        role: 'Director, Avdesh Glass House',
        content: 'AdFusion transformed our online presence. Our leads increased by 200% in just 3 months!',
        stars: 5,
    },
    {
        name: 'Amit Patel',
        role: 'Founder, TechSolutions',
        content: 'The team is incredibly creative and data-driven. Best agency experience we have had.',
        stars: 5,
    },
    {
        name: 'Priya Sharma',
        role: 'Marketing Head, StyleHub',
        content: 'Professional, timely, and results-oriented. The new website design is stunning.',
        stars: 5,
    },
    {
        name: 'Rahul Verma',
        role: 'Owner, Verma Realty',
        content: 'Their local SEO strategy put us on the map. Highly recommend for any growing business.',
        stars: 5,
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-dark-900 overflow-hidden relative">
            <div className="absolute inset-0 bg-gold-500/5 rotate-12 scale-150 pointer-events-none" />

            <div className="container mx-auto px-6 mb-16 text-center relative z-10">
                <h2 className="text-4xl font-bold mb-4">Client <span className="text-gold-500">Stories</span></h2>
                <p className="text-gray-400">What our partners say about working with us.</p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex gap-8 animate-marquee whitespace-nowrap">
                    {/* Duplicate for infinite scroll effect */}
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="inline-block w-[500px] md:w-[800px] p-6 rounded-2xl bg-dark-800 border border-white/5 relative whitespace-normal"
                        >
                            <Quote className="text-gold-500/20 absolute top-6 right-6" size={40} />
                            <div className="flex gap-1 text-gold-500 mb-3">
                                {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-300 mb-4 italic">"{t.content}"</p>
                            <div>
                                <p className="font-bold text-white">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Styles for marquee animation */}
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
