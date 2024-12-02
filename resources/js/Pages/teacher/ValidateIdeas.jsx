import React, { useState } from 'react';

export default function ValidateIdeas() {
    // Mock data for projects
    const [projects, setProjects] = useState([
        {
            id: 1,
            type: 'teacher',
            proposerName: 'John Doe',
            submissionDate: '2024-11-30',
            description: 'A machine learning project focused on data analysis.',
            projectType: 'Research',
            domain: 'Artificial Intelligence',
        },
        {
            id: 2,
            type: 'student',
            proposerName: 'Jane Smith',
            submissionDate: '2024-11-28',
            description: 'Developing a web app for real-time chat.',
            projectType: 'Application Development',
            domain: 'Web Technology',
        },
    ]);

    // Handle actions
    const handleAction = (id, action) => {
        const actionMessages = {
            validate: 'Projet validé avec succès!',
            refuse: 'Projet refusé.',
            modification: 'Demande de modification envoyée.',
        };

        // Perform action (for now, just log and update state)
        console.log(`Action: ${action} on project ID: ${id}`);
        alert(actionMessages[action]);

        // Remove project from the list after an action
        setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Validation des Propositions de Projets</h1>
            {projects.length === 0 ? (
                <p className="text-gray-600">Aucune proposition de projet à valider.</p>
            ) : (
                <div className="space-y-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white shadow rounded-lg p-4 border border-gray-200"
                        >
                            <p>
                                <span className="font-semibold">Type:</span> {project.type === 'teacher' ? 'Proposé par un enseignant' : 'Proposé par un étudiant'}
                            </p>
                            <p>
                                <span className="font-semibold">Proposé par:</span> {project.proposerName}
                            </p>
                            <p>
                                <span className="font-semibold">Date de soumission:</span> {project.submissionDate}
                            </p>
                            <p>
                                <span className="font-semibold">Description:</span> {project.description}
                            </p>
                            <p>
                                <span className="font-semibold">Type de projet:</span> {project.projectType}
                            </p>
                            <p>
                                <span className="font-semibold">Domaine:</span> {project.domain}
                            </p>
                            <div className="mt-4 flex space-x-4">
                                <button
                                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                                    onClick={() => handleAction(project.id, 'validate')}
                                >
                                    Valider
                                </button>
                                <button
                                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                    onClick={() => handleAction(project.id, 'refuse')}
                                >
                                    Refuser
                                </button>
                                <button
                                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                                    onClick={() => handleAction(project.id, 'modification')}
                                >
                                    Demander Modification
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
