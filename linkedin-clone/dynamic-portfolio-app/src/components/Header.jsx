import React, { useState } from 'react'
import styles from '../pages/ProfessionalsListPage.module.css';
import { Link } from 'react-router-dom';
export default function Header() {
 
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

        </div>
    )
}
