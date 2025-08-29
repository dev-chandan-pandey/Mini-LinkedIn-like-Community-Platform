import React from 'react';
// You would import the same section components here
import HeroSection from '../components/portfolio-sections/HeroSection';
import SkillsSection from '../components/portfolio-sections/SkillsSection';

const TemplateOne = ({ data }) => {
    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <h1>Template 1</h1>
            <h2>{data.hero.name}</h2>
            <p>This is where the layout for template 1 would be rendered.</p>
            <p>It would reuse the same section components but arrange them differently.</p>
        </div>
    );
};

export default TemplateOne;