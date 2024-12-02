import React from 'react';

const ThemeModal = ({ selectedTheme, setSelectedTheme, handleCloseModal, handleSaveChanges }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Modifier le sujet</h2>
                <label className="block mb-2 font-medium">Titre</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded mb-4"
                    value={selectedTheme.title}
                    onChange={(e) =>
                        setSelectedTheme({ ...selectedTheme, title: e.target.value })
                    }
                />
                <label className="block mb-2 font-medium">Description</label>
                <textarea
                    className="w-full p-2 border rounded mb-4"
                    value={selectedTheme.description}
                    onChange={(e) =>
                        setSelectedTheme({ ...selectedTheme, description: e.target.value })
                    }
                />
                <label className="block mb-2 font-medium">Type</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded mb-4"
                    value={selectedTheme.type}
                    onChange={(e) =>
                        setSelectedTheme({ ...selectedTheme, type: e.target.value })
                    }
                />
                <label className="block mb-2 font-medium">Options</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded mb-4"
                    value={selectedTheme.options}
                    onChange={(e) =>
                        setSelectedTheme({ ...selectedTheme, options: e.target.value })
                    }
                />
                <div className="flex justify-end space-x-2">
                    <button
                        className="bg-gray-500 text-white px-3 py-1 rounded"
                        onClick={handleCloseModal}
                    >
                        Annuler
                    </button>
                    <button
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                        onClick={handleSaveChanges}
                    >
                        Sauvegarder les modifications
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThemeModal;
