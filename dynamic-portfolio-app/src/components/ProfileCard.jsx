import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileCard.module.css';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const ProfileCard = ({ professional }) => {
    const { id, hero, about, skills } = professional;

    // Truncate bio for card view
    const truncatedBio = about.bio.length > 100 ? about.bio.substring(0, 100) + '...' : about.bio;

    return (
        <div className={styles.card}>
            <img src={hero.profileImage || 'https://i.imgur.com/V4RclNb.png'} alt={hero.name} className={styles.profileImage} />
            
            <div className={styles.info}>
                <h3 className={styles.name}>{hero.name}</h3>
                <div className={styles.titleTag}>{hero.title}</div>
            </div>

            <div className={styles.locationRating}>
                <span><FaMapMarkerAlt /> {about.location}</span>
                <span><FaStar className={styles.starIcon} /> 4.8</span>
            </div>
            
            <p className={styles.bio}>{truncatedBio}</p>

            <div className={styles.skills}>
                {skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className={styles.skillTag}>{skill.name}</span>
                ))}
                {skills.length > 3 && <span className={styles.skillTag}>+{skills.length - 3}</span>}
            </div>

            <Link to={`/portfolio/${id}`} className={styles.contactBtn}>
                View Portfolio
            </Link>
        </div>
    );
};

export default ProfileCard;