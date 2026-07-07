import React from 'react';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <WhyChooseUs />
            <Testimonials />
        </>
    );
};

export default Home;
