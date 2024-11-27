import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '../Shared/Layout';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';

export default function MyPFE() {
    const pfe = {
        title: "Développement d'une application mobile de gestion de tâches",
        description: "Ce projet vise à créer une application mobile intuitive pour la gestion de tâches personnelles et professionnelles, en utilisant React Native et Firebase.",
        supervisor: "Dr. Martin",
        status: "En cours",
        startDate: "2023-09-01",
        endDate: "2024-06-30",
        milestones: [
            { id: 1, title: "Proposition de projet", date: "2023-09-15", completed: true },
            { id: 2, title: "Rapport initial", date: "2023-11-01", completed: true },
            { id: 3, title: "Présentation mi-parcours", date: "2024-02-15", completed: false },
            { id: 4, title: "Soumission du code", date: "2024-05-30", completed: false },
            { id: 5, title: "Soutenance finale", date: "2024-06-30", completed: false },
        ]
    };

    return (
        <Layout>
            <Head title="Mon PFE" />
            <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-lg p-6 mb-6">
                    <h1 className="text-3xl font-bold text-white mb-2">{pfe.title}</h1>
                    <p className="text-blue-300">{pfe.description}</p>
                </div>
                
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Détails du projet</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">Superviseur</h3>
                                <p className="text-gray-600">{pfe.supervisor}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">Statut</h3>
                                <span className="px-2 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
                                    {pfe.status}
                                </span>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">Date de début</h3>
                                <p className="text-gray-600">{pfe.startDate}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">Date de fin prévue</h3>
                                <p className="text-gray-600">{pfe.endDate}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="px-6 py-4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Jalons</h2>
                        <div className="space-y-4">
                            {pfe.milestones.map((milestone) => (
                                <div key={milestone.id} className="flex items-center bg-gray-50 rounded-lg p-4 transition duration-300 ease-in-out hover:shadow-md">
                                    {milestone.completed ? (
                                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4" />
                                    ) : (
                                        <ClockIcon className="h-6 w-6 text-yellow-500 mr-4" />
                                    )}
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-medium text-gray-700">{milestone.title}</h3>
                                        <p className="text-sm text-gray-500">{milestone.date}</p>
                                    </div>
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                        milestone.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {milestone.completed ? 'Complété' : 'En attente'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
