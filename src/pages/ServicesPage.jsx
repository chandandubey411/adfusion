import React from 'react';
import PageHero from '../components/ui/PageHero';
import Services from '../components/sections/Services';

const ServicesPage = () => {
    return (
        <>
            <PageHero
                title="Our"
                highlight="Services"
                subtitle="A comprehensive suite of digital solutions designed to elevate your brand and drive real, measurable business results."
                breadcrumb="Services"
            />
            <Services />
        </>
    );
};

export default ServicesPage;
