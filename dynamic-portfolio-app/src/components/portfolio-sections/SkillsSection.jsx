// src/components/portfolio-sections/SkillsSection.jsx
import React from 'react';
import styles from './SkillsSection.module.css';

const SkillsSection = ({ data }) => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>My <span className={styles.highlight}>Skills</span></h2>
        <div className={styles.grid}>
          {data.skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillInfo}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;