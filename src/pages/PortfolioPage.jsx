import React from 'react';
import PageHero from '../components/ui/PageHero';
import Portfolio from '../components/sections/Portfolio';

const PortfolioPage = () => {
    return (
        <>
            <PageHero
                title="Our"
                highlight="Work"
                subtitle="Explore our latest projects and see how we've helped brands grow their digital presence and achieve measurable results."
                breadcrumb="Portfolio"
            />
            <Portfolio />
        </>
    );
};

export default PortfolioPage;
