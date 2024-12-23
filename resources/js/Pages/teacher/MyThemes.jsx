import React, { useState } from 'react';
import ThemeModal from './ThemeModal';

const MyThemes = ({ themes = [] }) => {
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
        // Here you would typically make an API call to update the theme
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Mes Thèmes de PFE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {themes && themes.length > 0 ? (
                    themes.map((theme) => (
                        <div key={theme.id} className="border rounded-lg p-4 shadow-sm bg-white">
                            <h3 className="font-bold text-lg">{theme.titre}</h3>
                            <p className="text-gray-600 mt-2">{theme.resume}</p>
                            <p className="text-sm mt-2">Type: {theme.type_pfe}</p>
                            <p className="text-sm">Options: {theme.option}</p>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                    onClick={() => handleModifierClick(theme)}
                                >
                                    Modifier
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-2 text-center">Aucun thème n'a été trouvé.</p>
                )}
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

