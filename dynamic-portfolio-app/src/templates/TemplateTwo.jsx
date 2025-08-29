import React from 'react';
import HeroSection from '../components/portfolio-sections/HeroSection';
import SkillsSection from '../components/portfolio-sections/SkillsSection';
// Import other sections like Achievements, Services, etc. once you've built them.

const TemplateTwo = ({ data }) => {
    return (
        <main>
            <HeroSection data={data} />
            <SkillsSection data={data} />
            {/* <AchievementsSection data={data} />
            <ServicesSection data={data} /> 
            */}
            {/* Add a footer component */}
        </main>
    );
};

export default TemplateTwo;