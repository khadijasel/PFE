import React, { useState } from 'react';
import ThemeModal from './ThemeModal';

const MyThemes = () => {
    const themes = [
        {
            title: 'Application de réalité augmentée',
            description: 'Développer un système de recommandation basé sur l\'IA pour une plateforme e-commerce',
            type: 'Innovant',
            options: 'IA, E-commerce',
        },
        {
            title: 'Analyse de données massives',
            description: 'Développer un système d\'analyse de données massives pour prédire les tendances du marché',
            type: 'Classique',
            options: 'Big Data, Machine Learning',
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState(null);

    const handleModifierClick = (theme) => {
        setSelectedTheme(theme);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTheme(null);
    };

    const handleSaveChanges = () => {
        console.log('Changes saved:', selectedTheme);
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {themes.map((theme, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
                        <h3 className="font-bold text-lg">{theme.title}</h3>
                        <p className="text-gray-600 mt-2">{theme.description}</p>
                        <p className="text-sm mt-2">Type: {theme.type}</p>
                        <p className="text-sm">Options: {theme.options}</p>
                        <div className="flex justify-end space-x-2 mt-4">
                            <button
                                className="bg-gray-500 text-white px-3 py-1 rounded"
                                onClick={() => handleModifierClick(theme)}
                            >
                                Modifier
                            </button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded">
                                Supprimer
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <ThemeModal
                    selectedTheme={selectedTheme}
                    setSelectedTheme={setSelectedTheme}
                    handleCloseModal={handleCloseModal}
                    handleSaveChanges={handleSaveChanges}
                />
            )}
        </div>
    );
};

export default MyThemes;
