import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { ExternalLink } from 'lucide-react';


const categories = ['All', 'Websites', 'Marketing', 'Branding', 'Ads'];

const projects = [
    { id: 1, title: 'Pankaj Electronics', category: 'Websites', image: '/projects/pankajelectronics.png', link: 'https://www.npen.in/' },
    { id: 2, title: 'Growth X', category: 'Marketing', gradient: 'bg-gradient-to-tr from-blue-900 to-indigo-900', link: '#' },
    { id: 3, title: 'Neon Tech', category: 'Branding', gradient: 'bg-gradient-to-tr from-purple-900 to-fuchsia-900', link: '#' },
    { id: 4, title: 'AQUA SPA', category: 'Websites', image: '/projects/aquaspa.png', link: 'https://aquaspa.in/' },
    { id: 5, title: 'Ad Campaign Q1', category: 'Ads', gradient: 'bg-gradient-to-tr from-red-900 to-orange-800', link: '#' },
    { id: 6, title: 'FinSights', category: 'Branding', gradient: 'bg-gradient-to-tr from-slate-800 to-zinc-700', link: '#' },
    { id: 7, title: 'The Interior Hub', category: 'Websites', image: '/projects/interiorhub.png', link: 'https://www.theinteriorshub.in/' },
    { id: 8, title: 'Avdesh Glass House', category: 'Websites', image: '/projects/avdheshglasshouse.png', link: 'https://www.avdeshglasshouse.co.in/' },
];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

    return (
        <section id="portfolio" className="py-20 bg-dark-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Our <span className="text-gold-500">Work</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-8">
                        Explore our latest projects and see how we've helped brands grow.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === cat
                                    ? 'bg-gold-500 text-dark-900 border-gold-500'
                                    : 'bg-transparent text-gray-400 border-gray-800 hover:border-gold-500/50 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                                onClick={() => window.open(project.link, '_blank')}
                            >
                                {/* Project Image Placeholder */}
                                <div
                                    className={`absolute inset-0 transition-transform duration-500 group-hover:scale-110 ${project.gradient ? project.gradient : 'bg-cover bg-center'}`}
                                    style={project.image ? { backgroundImage: `url(${project.image})` } : {}}
                                ></div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                                    <p className="text-gold-500 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
                                    <Button variant="outline" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 scale-90">
                                        View Project <ExternalLink size={16} />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
