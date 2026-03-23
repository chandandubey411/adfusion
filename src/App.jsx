import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import GoogleBusinessProfile from './pages/services/GoogleBusinessProfile';
import WebsiteDevSEO from './pages/services/WebsiteDevSEO';
import MetaMarketing from './pages/services/MetaMarketing';
import InstagramMarketing from './pages/services/InstagramMarketing';
import FacebookMarketing from './pages/services/FacebookMarketing';
import GoogleAds from './pages/services/GoogleAds';
import ReelsMarketing from './pages/services/ReelsMarketing';
import VideoShoot from './pages/services/VideoShoot';
import PRAgencyProgram from './pages/services/PRAgencyProgram';
import InfluencerMarketing from './pages/services/InfluencerMarketing';
import GenericService from './pages/services/GenericService';
import Terms from './pages/Terms';
import ScrollToTop from './components/common/ScrollToTop';
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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-900 text-white selection:bg-gold-500 selection:text-black">
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
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
                href="https://wa.me/919599799883"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 left-8 z-50 p-3 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </>
          } />

          {/* Service Detail Pages */}
          <Route path="/services/google-business-profile" element={<GoogleBusinessProfile />} />
          <Route path="/services/website-development-seo" element={<WebsiteDevSEO />} />
          <Route path="/services/meta-marketing" element={<MetaMarketing />} />
          <Route path="/services/instagram-marketing" element={<InstagramMarketing />} />
          <Route path="/services/facebook-marketing" element={<FacebookMarketing />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/reels-marketing" element={<ReelsMarketing />} />
          <Route path="/services/video-shoot" element={<VideoShoot />} />
          <Route path="/services/pr-agency-program" element={<PRAgencyProgram />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
          <Route path="/services/:slug" element={<GenericService />} />
          <Route path="/terms-and-conditions" element={
            <>
              <Navbar />
              <Terms />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
