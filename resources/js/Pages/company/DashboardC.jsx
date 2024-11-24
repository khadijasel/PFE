import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '../Shared/Layout';
import { FaBriefcase, FaUserGraduate, FaChartLine, FaFileAlt } from 'react-icons/fa';

export default function CompanyDashboard() {
    const company = {
        name: "TechInnovate SA",
        id: "ENT001",
        sector: "Technologies de l'Information"
    };

    const stats = {
        totalInternships: 15,
        activeInternships: 3,
        completedInternships: 12,
        proposedProjects: 3
    };

    const proposedProjects = [
        { id: 1, title: "Développement d'un tableau de bord IoT pour l'industrie 4.0", status: "En attente" },
        { id: 2, title: "Création d'une plateforme de gestion de la relation client basée sur l'IA", status: "Approuvé" },
        { id: 3, title: "Implémentation d'un système de sécurité basé sur la blockchain", status: "En révision" }
    ];

    const activeInternships = [
        { id: 1, studentName: "Sophie Martin", projectTitle: "Optimisation des algorithmes de machine learning", progress: 75 },
        { id: 2, studentName: "Lucas Dubois", projectTitle: "Développement d'une API RESTful pour les services cloud", progress: 50 },
        { id: 3, studentName: "Emma Petit", projectTitle: "Conception d'une architecture microservices", progress: 30 }
    ];

    return (
        <Layout>
            <Head title="Dashboard Entreprise" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Bienvenue, {company.name}
                    </h2>
                    <span className="text-sm text-gray-500">ID: {company.id} | Secteur: {company.sector}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white shadow rounded-lg p-6 flex items-center">
                        <FaBriefcase className="text-3xl text-blue-500 mr-4" />
                        <div>
                            <p className="text-sm text-gray-500">Total des stages</p>
                            <p className="text-2xl font-semibold">{stats.totalInternships}</p>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 flex items-center">
                        <FaUserGraduate className="text-3xl text-green-500 mr-4" />
                        <div>
                            <p className="text-sm text-gray-500">Stages actifs</p>
                            <p className="text-2xl font-semibold">{stats.activeInternships}</p>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 flex items-center">
                        <FaChartLine className="text-3xl text-purple-500 mr-4" />
                        <div>
                            <p className="text-sm text-gray-500">Stages complétés</p>
                            <p className="text-2xl font-semibold">{stats.completedInternships}</p>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 flex items-center">
                        <FaFileAlt className="text-3xl text-yellow-500 mr-4" />
                        <div>
                            <p className="text-sm text-gray-500">Projets proposés</p>
                            <p className="text-2xl font-semibold">{stats.proposedProjects}</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Projets proposés</h3>
                        <div className="space-y-4">
                            {proposedProjects.map((project) => (
                                <div key={project.id} className="border-l-4 border-blue-500 pl-4">
                                    <h4 className="font-semibold">{project.title}</h4>
                                    <p className="text-sm text-gray-500">Statut: {project.status}</p>
                                </div>
                            ))}
                        </div>
                        <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                            Proposer un nouveau PFE
                        </button>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Stages en cours</h3>
                        <div className="space-y-4">
                            {activeInternships.map((internship) => (
                                <div key={internship.id} className="border-b pb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-semibold">{internship.studentName}</h4>
                                        <span className="text-sm text-gray-500">{internship.progress}% complété</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{internship.projectTitle}</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-green-600 h-2.5 rounded-full" style={{width: `${internship.progress}%`}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
                            Gérer les offres de stage
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}