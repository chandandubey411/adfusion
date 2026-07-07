import React from 'react';
import PageHero from '../components/ui/PageHero';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
    return (
        <>
            <PageHero
                title="Get in"
                highlight="Touch"
                subtitle="Ready to accelerate your growth? Reach out and let's discuss how AdFusion can help you achieve your goals."
                breadcrumb="Contact"
            />
            <Contact />
        </>
    );
};

export default ContactPage;
