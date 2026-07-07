import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import PageLayout from './components/layout/PageLayout';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import Terms from './pages/Terms';

// Service detail pages (each manages its own layout internally)
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

// Utilities
import ScrollToTop from './components/common/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* ── Standard pages wrapped in shared PageLayout ── */}
                <Route path="/" element={<PageLayout><Home /></PageLayout>} />
                <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
                <Route path="/services" element={<PageLayout><ServicesPage /></PageLayout>} />
                <Route path="/portfolio" element={<PageLayout><PortfolioPage /></PageLayout>} />
                <Route path="/testimonials" element={<PageLayout><TestimonialsPage /></PageLayout>} />
                <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />
                <Route path="/terms-and-conditions" element={<PageLayout><Terms /></PageLayout>} />

                {/* ── Service detail pages (self-contained with ServicePageLayout) ── */}
                <Route path="/services/google-business-profile"  element={<GoogleBusinessProfile />} />
                <Route path="/services/website-development-seo"  element={<WebsiteDevSEO />} />
                <Route path="/services/meta-marketing"           element={<MetaMarketing />} />
                <Route path="/services/instagram-marketing"      element={<InstagramMarketing />} />
                <Route path="/services/facebook-marketing"       element={<FacebookMarketing />} />
                <Route path="/services/google-ads"               element={<GoogleAds />} />
                <Route path="/services/reels-marketing"          element={<ReelsMarketing />} />
                <Route path="/services/video-shoot"              element={<VideoShoot />} />
                <Route path="/services/pr-agency-program"        element={<PRAgencyProgram />} />
                <Route path="/services/influencer-marketing"     element={<InfluencerMarketing />} />
                <Route path="/services/:slug"                    element={<GenericService />} />
            </Routes>
        </Router>
    );
}

export default App;
