import React from 'react';
import PageHero from '../components/ui/PageHero';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Stats from '../components/sections/Stats';

const AboutPage = () => {
    return (
        <>
            <PageHero
                title="About"
                highlight="AdFusion"
                subtitle="We are a premier digital marketing agency dedicated to helping brands thrive in the digital era — combining data-driven strategies with creative excellence."
                breadcrumb="About Us"
            />
            <About />
            <WhyChooseUs />
            <Stats />
        </>
    );
};

export default AboutPage;
