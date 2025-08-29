import React, { useState, useEffect } from 'react';
import { getProfessionals } from '../services/api';
import ProfileCard from '../components/ProfileCard';
import styles from './ProfessionalsListPage.module.css';
import { Link } from 'react-router-dom';

const ProfessionalsListPage = () => {
    const [professionals, setProfessionals] = useState([]);
    const [filteredProfessionals, setFilteredProfessionals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfessionals = async () => {
            try {
                const data = await getProfessionals();
                setProfessionals(data);
                setFilteredProfessionals(data);
            } catch (error) {
                console.error("Could not fetch professionals.");
            } finally {
                setLoading(false);
            }
        };
        fetchProfessionals();
    }, []);

    useEffect(() => {
        const results = professionals.filter(prof => 
            prof.hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prof.hero.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProfessionals(results);
    }, [searchTerm, professionals]);

    if (loading) {
        return <div className={styles.centered}>Loading profiles...</div>;
    }

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <h1>Meet Our Professionals</h1>
                    <p>Meet the experts shaping the future of drone tech</p>
                    <div className={styles.underline}></div>
                </div>
                <Link to="/create" className={styles.listProfileBtn}>List your Profile</Link>
            </header>
            
            <main className={styles.mainContent}>
                <div className={styles.filterBar}>
                    <input 
                        type="text" 
                        placeholder="Search professionals..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {/* Add dropdowns here if needed for role/location */}
                </div>

                {filteredProfessionals.length > 0 ? (
                    <div className={styles.grid}>
                        {filteredProfessionals.map(prof => (
                            <ProfileCard key={prof.id} professional={prof} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.centered}>No professionals found.</div>
                )}
            </main>
        </div>
    );
};

export default ProfessionalsListPage;