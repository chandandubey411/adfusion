import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Stats />
            <Services />
            <Portfolio />
            <WhyChooseUs />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Home;
