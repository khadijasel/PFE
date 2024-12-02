import React, { useState, useEffect } from 'react';
import Layout from '../Shared/Layout';

const Soutenance = () => {
    const [project, setProject] = useState(null);
    const [defenseDate, setDefenseDate] = useState('');
    const [status, setStatus] = useState('En attente de validation');

    useEffect(() => {
        const storedProject = JSON.parse(localStorage.getItem('defenseProject'));
        if (storedProject) setProject(storedProject);
    }, []);

    const handleValidationClick = () => {
        setStatus('Validé par l\'administration');
    };

    return (
        <Layout>
        <div className="p-6 bg-gray-100">
            <h1 className="text-xl font-bold mb-4">Soutenance de Projet</h1>
            {project ? (
                <div className="border p-4 rounded">
                    <h2 className="text-lg font-semibold">{project.projectName}</h2>
                    <p>Étudiants : {project.students.join(', ')}</p>
                    <p>Date de début : {project.startDate}</p>
                    <p>Date de fin : {project.endDate}</p>
                    <p>Status : {status}</p>
                    
                </div>
            ) : (
                <p>Aucun projet sélectionné pour la soutenance.</p>
            )}
        </div>
        </Layout>
    );
};

export default Soutenance;
