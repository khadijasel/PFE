import React from 'react';

const StudentThemes = () => {
    const themes = [
        {
            title: 'Système de recommandation IA',
            proposer: 'khadija seladji',
            description: 'Développer un système de recommandation basé sur l\'IA pour une plateforme e-commerce',
            type: 'Classique',
            options: 'IA, E-commerce',
        },
        {
            title: 'Application de réalité augmentée',
            proposer: 'merwa madani',
            description: 'Développer un système de recommandation basé sur l\'IA pour une plateforme e-commerce',
            type: 'Innovant',
            options: 'IA, E-commerce',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {themes.map((theme, index) => (
                <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
                    <h3 className="font-bold text-lg">{theme.title}</h3>
                    <p className="text-gray-600">Proposé par: {theme.proposer}</p>
                    <p className="text-gray-600 mt-2">{theme.description}</p>
                    <p className="text-sm mt-2">Type: {theme.type}</p>
                    <p className="text-sm">Options: {theme.options}</p>
                    <button className="mt-4 bg-black text-white px-4 py-2 rounded">
                        Encadré
                    </button>
                </div>
            ))}
        </div>
    );
};

export default StudentThemes;
