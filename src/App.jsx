import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-gold-500 selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gold-500 text-dark-900 shadow-lg transition-all duration-300 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
      >
        <ArrowUp size={24} />
      </button>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/917295043391"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 p-3 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </div>
  );
}

export default App;
