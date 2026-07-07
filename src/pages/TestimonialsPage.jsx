import React from 'react';
import PageHero from '../components/ui/PageHero';
import Testimonials from '../components/sections/Testimonials';

const TestimonialsPage = () => {
    return (
        <>
            <PageHero
                title="Client"
                highlight="Stories"
                subtitle="Don't just take our word for it — hear from the brands and businesses we've helped achieve exceptional results."
                breadcrumb="Testimonials"
            />
            <Testimonials />
        </>
    );
};

export default TestimonialsPage;
