import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '../Shared/Layout';
import CalendarComponent from '../Shared/Components/Calendar';
import { FaUserGraduate, FaChalkboardTeacher, FaBuilding, FaClipboardCheck, FaWpforms, FaEnvelope } from 'react-icons/fa';
import { Link } from '@inertiajs/react';

export default function AdminDashboard() {
    const stats = {
        students: 450,
        teachers: 30,
        companies: 25,
    };

    const recentActivities = [
        { id: 1, description: "Nouvelle entreprise partenaire ajoutée : DataTech Solutions", date: "2023-06-30" },
        { id: 2, description: "Validation de 15 nouveaux sujets de PFE", date: "2023-06-29" },
        { id: 3, description: "Mise à jour du règlement des PFE", date: "2023-06-28" },
        { id: 4, description: "Attribution des jurys pour la session de soutenances de juillet", date: "2023-06-27" },
        { id: 5, description: "Ouverture des inscriptions pour les PFE de l'année prochaine", date: "2023-06-26" }
    ];

    const calendarEvents = [
        {
            id: 1,
            title: 'Réunion de coordination PFE',
            start: new Date(2023, 6, 5, 10, 0),
            end: new Date(2023, 6, 5, 11, 30),
        },
        {
            id: 2,
            title: 'Date limite de soumission des sujets',
            start: new Date(2023, 6, 15),
            end: new Date(2023, 6, 15),
            allDay: true,
        },
    ];

    return (
        <Layout>
            <Head title="Dashboard Administrateur" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Tableau de bord administrateur
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            <div className="bg-white shadow rounded-lg p-4 flex items-center">
                                <FaUserGraduate className="text-4xl text-blue-500 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Étudiants</h3>
                                    <p className="text-3xl font-bold">{stats.students}</p>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-lg p-4 flex items-center">
                                <FaChalkboardTeacher className="text-4xl text-green-500 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Enseignants</h3>
                                    <p className="text-3xl font-bold">{stats.teachers}</p>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-lg p-4 flex items-center">
                                <FaBuilding className="text-4xl text-yellow-500 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Entreprises</h3>
                                    <p className="text-3xl font-bold">{stats.companies}</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-white shadow rounded-lg p-4 flex items-center">
                                <FaWpforms className="text-4xl text-purple-500 mr-4" />
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold mb-2">Gestion des formulaires</h3>
                                    <Link
                                        href="/admin/FormManagement"
                                        className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Gérer les formulaires
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-lg p-4 flex items-center">
                                <FaEnvelope className="text-4xl text-indigo-500 mr-4" />
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold mb-2">Gestion des emails</h3>
                                    <Link
                                        href="/admin/EmailManagement"
                                        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Gérer les templates
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Activités récentes</h3>
                            <ul className="space-y-2">
                                {recentActivities.map((activity) => (
                                    <li key={activity.id} className="flex justify-between items-center border-b pb-2">
                                        <span className="text-sm">{activity.description}</span>
                                        <span className="text-xs text-gray-500">{activity.date}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white shadow rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-4">Calendrier des événements</h3>
                            <div className="h-[300px]">
                                <CalendarComponent events={calendarEvents} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
