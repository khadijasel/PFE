import React, { useState } from 'react';
import Layout from '../Shared/Layout';

const SupervisedProjects = () => {
    const [projects, setProjects] = useState([
        {
            projectName: 'Application de réalité augmentée',
            students: ['Khadija Seladji', 'Hamaddouche Romaissa'],
            startDate: '12/01/2025',
            endDate: '12/06/2025',
        },
        {
            projectName: 'Application mobile',
            students: ['Khadija Seladji', 'Hamaddouche Romaissa'],
            startDate: '01/01/2025',
            endDate: '06/01/2025',
        },
        {
            projectName: 'Machine Learning AI',
            students: ['Khadija Seladji', 'Hamaddouche Romaissa'],
            startDate: '10/01/2025',
            endDate: '04/01/2025',
        },
    ]);

    const handleDefenseClick = (project) => {
        // Store project data in localStorage
        localStorage.setItem('defenseProject', JSON.stringify(project));

        // Redirect using window.location.href for PHP routes
        window.location.href = '/soutenance';  // Adjust this path based on your actual PHP route
        alert('Projet informatif marqué prêt pour la soutenance');
    };

    return (
        <Layout>
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Supervised Projects</h1>
            {/* Search input and table header */}
            <table className="w-full border border-gray-200 text-left">
                <thead className="bg-gray-100">
                    <tr >
                        <th className="p-3 border border-gray-200">Projet</th>
                        <th className="p-3 border border-gray-200">Étudiants</th>
                        <th className="p-3 border border-gray-200">Date Début</th>
                        <th className="p-3 border border-gray-200">Date de Fin</th>
                        <th className="p-3 border border-gray-200">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100">
                    {projects.map((project, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="p-3 border border-gray-200">{project.projectName}</td>
                            <td className="p-3 border border-gray-200">
                                {project.students.join(', ')}
                            </td>
                            <td className="p-3 border border-gray-200">{project.startDate}</td>
                            <td className="p-3 border border-gray-200">{project.endDate}</td>
                            <td className="p-3 border border-gray-200">
                                <button
                                    onClick={() => handleDefenseClick(project)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                >
                                    Prêt pour la soutenance
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </Layout>
    );
};

export default SupervisedProjects;
