import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TemplateSelectionPage.module.css';
import Header from '../components/Header';


// Image URLs for the templates. Replace with your actual image files if you have them locally.
const template1_preview = 'https://i.imgur.com/i32a22X.png'; // From image_9b6189.png
const template2_preview = 'https://i.imgur.com/9t4sr4k.png'; // From image_9b6189.png

const TemplateSelectionPage = () => {
    const navigate = useNavigate();

    const handleSelectTemplate = (templateId) => {
        // We will navigate to the create form page, passing the chosen templateId
        // navigate('/create', { state: { templateId } });
        alert(`You selected Template ${templateId}. Navigation to the form page is not yet implemented.`);
          navigate('/create', { state: { templateId } });
    };

    return (
        <>
           <Header/>
       
        <div className={styles.pageContainer}>
         
            <div className={styles.header}>
                <h1>Choose Your <span className={styles.highlight}>Template</span></h1>
                <p>Select a professional template that best represents your style and customize it to your needs</p>
            </div>
            <div className={styles.templateGrid}>
                {/* Template 1 Card */}
                <div className={styles.templateCard}>
                    <img src={template1_preview} alt="Template 1 Preview" className={styles.previewImage}/>
                    <div className={styles.cardContent}>
                        <h3>Template 1</h3>
                        <p>Modern and clean design with yellow hero section and professional layout</p>
                        <h4>Key Features:</h4>
                        <ul className={styles.featuresList}>
                            <li>Yellow Hero Section</li>
                            <li>Grid Portfolio</li>
                            <li>Testimonials Carousel</li>
                            <li>Contact Form</li>
                        </ul>
                        <div className={styles.buttonGroup}>
                            <button className={styles.btnCustomize} onClick={() => handleSelectTemplate(1)}>Customize This Template</button>
                            <button className={styles.btnPreview}>Preview</button>
                        </div>
                    </div>
                </div>

                {/* Template 2 Card */}
                <div className={styles.templateCard}>
                    <img src={template2_preview} alt="Template 2 Preview" className={styles.previewImage}/>
                    <div className={styles.cardContent}>
                        <h3>Template 2</h3>
                        <p>Split-screen layout with timeline skills and masonry portfolio grid</p>
                        <h4>Key Features:</h4>
                        <ul className={styles.featuresList}>
                            <li>Split Hero Layout</li>
                            <li>Timeline Skills</li>
                            <li>Masonry Portfolio</li>
                            <li>Blog Section</li>
                        </ul>
                        <div className={styles.buttonGroup}>
                             <button className={styles.btnCustomize} onClick={() => handleSelectTemplate(2)}>Customize This Template</button>
                             <button className={styles.btnPreview}>Preview</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         </>
    );
};

export default TemplateSelectionPage;