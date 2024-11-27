import React from 'react';

export default function SelectedChoicesPopup({ isOpen, onClose, selectedChoices, removeChoice, moveChoice, handleSubmit }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
                <div className="mt-3">
                    <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">Vos Choix</h3>
                    <div className="mt-2 px-7 py-3">
                        {selectedChoices.length === 0 ? (
                            <p className="text-center text-gray-500">Vous n'avez pas encore fait de choix.</p>
                        ) : (
                            <ul className="divide-y divide-gray-200">
                                {selectedChoices.map((choice, index) => (
                                    <li key={choice.id} className="py-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                                                    {index + 1}
                                                </span>
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-900">{choice.title}</h4>
                                                    <p className="text-sm text-gray-500">
                                                        {choice.supervisor}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <button 
                                                    className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 mr-2"
                                                    onClick={() => moveChoice(index, -1)}
                                                    disabled={index === 0}
                                                >
                                                    ↑
                                                </button>
                                                <button 
                                                    className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 mr-2"
                                                    onClick={() => moveChoice(index, 1)}
                                                    disabled={index === selectedChoices.length - 1}
                                                >
                                                    ↓
                                                </button>
                                                <button 
                                                    className="text-red-600 hover:text-red-700 focus:outline-none focus:text-red-700"
                                                    onClick={() => removeChoice(choice.id)}
                                                >
                                                    Supprimer
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="items-center px-4 py-3">
                        <button
                            className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                            onClick={handleSubmit}
                        >
                            Envoyer la Liste
                        </button>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button
                            className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={onClose}
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

