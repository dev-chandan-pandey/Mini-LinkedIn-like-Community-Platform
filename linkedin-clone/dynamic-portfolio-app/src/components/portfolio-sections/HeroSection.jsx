// src/components/portfolio-sections/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const HeroSection = ({ data }) => {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${data.hero.profileImage})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.experienceTag}>11+ Years Experience</div>
        <h1>{data.hero.name}</h1>
        <h2>{data.hero.title}</h2>
        <div className={styles.location}>
          <FaMapMarkerAlt /> {data.about.location}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;