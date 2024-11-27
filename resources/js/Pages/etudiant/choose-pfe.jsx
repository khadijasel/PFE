import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Layout from '../Shared/Layout';
import SelectedChoicesPopup from './SelectedchoicesPopup';

export default function ChoosePFE() {
    const enterpriseInternships = [
        { id: 1, title: "Développement d'une application mobile de gestion de tâches", supervisor: "Entreprise XYZ" },
        { id: 2, title: "Création d'un système de recommandation pour une plateforme e-commerce", supervisor: "Entreprise ABC" },
    ];

    const teacherPFEs = [
        { id: 3, title: "Implémentation d'un chatbot utilisant le traitement du langage naturel", supervisor: "Dr. Chen" },
        { id: 4, title: "Optimisation des performances d'une application web", supervisor: "Pr. Dubois" },
    ];

    const [selectedChoices, setSelectedChoices] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const addChoice = (choice) => {
        if (!selectedChoices.find(c => c.id === choice.id)) {
            setSelectedChoices([...selectedChoices, choice]);
        }
    };

    const removeChoice = (id) => {
        setSelectedChoices(selectedChoices.filter(choice => choice.id !== id));
    };

    const moveChoice = (index, direction) => {
        const newChoices = [...selectedChoices];
        const [removed] = newChoices.splice(index, 1);
        newChoices.splice(index + direction, 0, removed);
        setSelectedChoices(newChoices);
    };

    const handleSubmit = () => {
        // Implémenter la logique d'envoi
        console.log("Liste des choix envoyée :", selectedChoices);
        setIsPopupOpen(false);
    };

    const isChoiceSelected = (id) => {
        return selectedChoices.some(choice => choice.id === id);
    };

    return (
        <Layout>
            <Head title="Choisir un PFE" />
            <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-gray-900">Choisir un PFE ou un Stage</h1>
                        <button 
                            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            onClick={() => setIsPopupOpen(true)}
                        >
                            Voir et Gérer Mes Choix ({selectedChoices.length})
                        </button>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Stages Proposés par les Entreprises</h2>
                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                            <ul className="divide-y divide-gray-200">
                                {enterpriseInternships.map((internship) => (
                                    <li key={internship.id}>
                                        <div className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg leading-6 font-medium text-gray-900">{internship.title}</h3>
                                                <button 
                                                    className={`ml-2 px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white ${
                                                        isChoiceSelected(internship.id)
                                                            ? 'bg-gray-400 cursor-not-allowed'
                                                            : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                    }`}
                                                    onClick={() => addChoice(internship)}
                                                    disabled={isChoiceSelected(internship.id)}
                                                >
                                                    {isChoiceSelected(internship.id) ? 'Choisi' : 'Choisir'}
                                                </button>
                                            </div>
                                            <div className="mt-2 sm:flex sm:justify-between">
                                                <div className="sm:flex">
                                                    <p className="flex items-center text-sm text-gray-500">
                                                        Entreprise: {internship.supervisor}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sujets Proposés par les Enseignants</h2>
                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                            <ul className="divide-y divide-gray-200">
                                {teacherPFEs.map((pfe) => (
                                    <li key={pfe.id}>
                                        <div className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg leading-6 font-medium text-gray-900">{pfe.title}</h3>
                                                <button 
                                                    className={`ml-2 px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white ${
                                                        isChoiceSelected(pfe.id)
                                                            ? 'bg-gray-400 cursor-not-allowed'
                                                            : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                    }`}
                                                    onClick={() => addChoice(pfe)}
                                                    disabled={isChoiceSelected(pfe.id)}
                                                >
                                                    {isChoiceSelected(pfe.id) ? 'Choisi' : 'Choisir'}
                                                </button>
                                            </div>
                                            <div className="mt-2 sm:flex sm:justify-between">
                                                <div className="sm:flex">
                                                    <p className="flex items-center text-sm text-gray-500">
                                                        Superviseur: {pfe.supervisor}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <SelectedChoicesPopup 
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    selectedChoices={selectedChoices}
                    removeChoice={removeChoice}
                    moveChoice={moveChoice}
                    handleSubmit={handleSubmit}
                />
            </div>
        </Layout>
    );
}

