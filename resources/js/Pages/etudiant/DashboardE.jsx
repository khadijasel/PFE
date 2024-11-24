import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '../Shared/Layout';

export default function StudentDashboard() {
    const student = {
        name: "Alice Dupont",
        id: "ETU001",
        option: "Génie Logiciel"
    };

    const notifications = [
        { id: 1, message: "Votre proposition de PFE a été acceptée." },
        { id: 2, message: "Rappel : La date limite de soumission du rapport est dans 2 semaines." },
        { id: 3, message: "Nouvelle offre de PFE disponible dans votre domaine." }
    ];

    const currentPFE = {
        title: "Développement d'une application mobile de gestion de tâches",
        description: "Création d'une application mobile cross-platform pour la gestion de tâches et de projets, utilisant React Native et Firebase."
    };

    const upcomingDeadlines = [
        { id: 1, title: "Soumission du rapport intermédiaire", date: "2023-07-15" },
        { id: 2, title: "Présentation mi-parcours", date: "2023-07-30" },
        { id: 3, title: "Remise du code source", date: "2023-08-15" }
    ];

    return (
        <Layout>
            <Head title="Dashboard Étudiant" />
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Bienvenue, {student.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Notifications</h3>
                        <ul className="space-y-2">
                            {notifications.map((notification) => (
                                <li key={notification.id} className="text-sm text-gray-600">{notification.message}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Mon PFE</h3>
                        {currentPFE ? (
                            <div>
                                <p className="font-medium">{currentPFE.title}</p>
                                <p className="text-sm text-gray-600 mt-2">{currentPFE.description}</p>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-600">Aucun PFE assigné pour le moment.</p>
                        )}
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Échéances à venir</h3>
                        <ul className="space-y-2">
                            {upcomingDeadlines.map((deadline) => (
                                <li key={deadline.id} className="flex justify-between items-center">
                                    <span className="text-sm">{deadline.title}</span>
                                    <span className="text-xs text-gray-500">{deadline.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

