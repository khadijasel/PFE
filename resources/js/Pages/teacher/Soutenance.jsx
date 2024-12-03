import React, { useState, useEffect } from 'react';

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
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Soutenance de Projet</h1>
            {project ? (
                <div className="border p-4 rounded">
                    <h2 className="text-lg font-semibold">{project.projectName}</h2>
                    <p>Étudiants : {project.students.join(', ')}</p>
                    <p>Date de début : {project.startDate}</p>
                    <p>Date de fin : {project.endDate}</p>
                    <p>Status : {status}</p>
                    <div className="mt-4">
                        <input
                            type="date"
                            value={defenseDate}
                            onChange={(e) => setDefenseDate(e.target.value)}
                            className="border p-2 rounded w-full"
                        />
                        <button
                            onClick={handleValidationClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                        >
                            Valider la soutenance
                        </button>
                    </div>
                </div>
            ) : (
                <p>Aucun projet sélectionné pour la soutenance.</p>
            )}
        </div>
    );
};

export default Soutenance;
