import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProfessionalById } from '../services/api';

// We will create these template components next
import TemplateOne from '../templates/TemplateOne';
import TemplateTwo from '../templates/TemplateTwo';

const PortfolioPage = () => {
    const { id } = useParams();
    const [professional, setProfessional] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProfessional = async () => {
            try {
                const data = await getProfessionalById(id);
                setProfessional(data);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchProfessional();
    }, [id]);

    if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading Portfolio...</div>;
    if (error) return <div style={{ textAlign: 'center', padding: '50px' }}>Could not load portfolio.</div>;
    if (!professional) return null;

    // The core logic: render template based on data
    switch (professional.templateId) {
        case 1:
            return <TemplateOne data={professional} />;
        case 2:
            return <TemplateTwo data={professional} />;
        default:
            return <div>Unknown Template ID</div>;
    }
};

export default PortfolioPage;