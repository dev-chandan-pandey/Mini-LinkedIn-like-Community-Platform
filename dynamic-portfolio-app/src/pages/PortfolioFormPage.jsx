import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './PortfolioFormPage.module.css';
import { createProfessional } from '../services/api';
import Header from '../components/Header';

const formSections = [
    'Basic Details', 'About', 'Skills', 'Services', 'Portfolio'
];

const PortfolioFormPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(formSections[0]);

    const [formData, setFormData] = useState({
        templateId: 1,
        hero: { name: '', title: '', profileImage: '' },
        about: { bio: '', email: '', phone: '', location: '' },
        skills: [{ name: '', level: 50 }],
        services: [{ title: '', description: '' }],
        portfolio: [{ title: '', description: '', image: '' }],
    });

    useEffect(() => {
        if (location.state?.templateId) {
            setFormData(prev => ({ ...prev, templateId: location.state.templateId }));
        }
    }, [location.state]);

    const handleInputChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };
    
    const handleArrayChange = (section, index, field, value) => {
        const updatedArray = [...formData[section]];
        updatedArray[index][field] = value;
        setFormData(prev => ({ ...prev, [section]: updatedArray }));
    };

    const addItem = (section) => {
        const newItem = section === 'skills' ? { name: '', level: 50 } :
                        section === 'services' ? { title: '', description: '' } :
                        { title: '', description: '', image: '' };
        setFormData(prev => ({
            ...prev,
            [section]: [...prev[section], newItem]
        }));
    };

    const removeItem = (section, index) => {
        setFormData(prev => ({
            ...prev,
            [section]: prev[section].filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProfessional(formData);
            alert('Profile created successfully!');
            // Later, we will navigate to the professionals list page
            navigate('/professionals');
        } catch (error) {
            alert('Failed to create profile. Please check the console.');
        }
    };

    const renderSection = () => {
        switch (activeTab) {
            case 'Basic Details':
                return (
                    <div>
                        <h3>Basic Company Details</h3>
                        <input type="text" placeholder="Your company name (used in URL)" value={formData.hero.name} onChange={(e) => handleInputChange('hero', 'name', e.target.value)} required />
                        <input type="text" placeholder="Your Title (e.g., Software Engineer)" value={formData.hero.title} onChange={(e) => handleInputChange('hero', 'title', e.target.value)} required />
                        <input type="text" placeholder="Profile Image URL" value={formData.hero.profileImage} onChange={(e) => handleInputChange('hero', 'profileImage', e.target.value)} />
                    </div>
                );
            case 'About':
                return (
                    <div>
                        <h3>About You</h3>
                        <textarea placeholder="Your Bio" value={formData.about.bio} onChange={(e) => handleInputChange('about', 'bio', e.target.value)}></textarea>
                        <input type="email" placeholder="Email" value={formData.about.email} onChange={(e) => handleInputChange('about', 'email', e.target.value)} required />
                        <input type="tel" placeholder="Phone Number" value={formData.about.phone} onChange={(e) => handleInputChange('about', 'phone', e.target.value)} />
                        <input type="text" placeholder="Location (e.g., San Francisco, CA)" value={formData.about.location} onChange={(e) => handleInputChange('about', 'location', e.target.value)} />
                    </div>
                );
            case 'Skills':
                return (
                    <div>
                        <h3>Your Skills</h3>
                        {formData.skills.map((skill, index) => (
                            <div key={index} className={styles.arrayItem}>
                                <input type="text" placeholder="Skill (e.g., React)" value={skill.name} onChange={(e) => handleArrayChange('skills', index, 'name', e.target.value)} />
                                <input type="range" min="0" max="100" value={skill.level} onChange={(e) => handleArrayChange('skills', index, 'level', parseInt(e.target.value))} />
                                <span>{skill.level}%</span>
                                <button type="button" onClick={() => removeItem('skills', index)} className={styles.removeBtn}>Remove</button>
                            </div>
                        ))}
                        <button type="button" onClick={() => addItem('skills')} className={styles.addBtn}>Add Skill</button>
                    </div>
                );
            // Add cases for 'Services' and 'Portfolio' similarly
            default:
                return null;
        }
    };

    return (
        <>
        <Header/>
        <div className={styles.pageContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.tabs}>
                    {formSections.map(tab => (
                        <button
                            key={tab}
                            type="button"
                            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className={styles.formContent}>
                    {renderSection()}
                </div>
                <div className={styles.formActions}>
                    <button type="submit" className={styles.submitBtn}>Create Profile</button>
                </div>
            </form>
        </div>
        </>
    );
};

export default PortfolioFormPage;