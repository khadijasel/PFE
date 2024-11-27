import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Layout from '../Shared/Layout';

export default function Offers() {
    const [pfeOffers, setPfeOffers] = useState([
        { id: 1, title: "Développement d'une application IoT", status: "Ouvert", applicants: 3, posted: "2023-06-15" },
        { id: 2, title: "Analyse de données pour l'optimisation des processus", status: "Fermé", applicants: 5, posted: "2023-06-01" },
        { id: 3, title: "Conception d'une interface utilisateur pour une application mobile", status: "Ouvert", applicants: 2, posted: "2023-06-20" },
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newOffer, setNewOffer] = useState({ title: '', status: 'Ouvert' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = pfeOffers.length + 1;
        const posted = new Date().toISOString().split('T')[0];
        setPfeOffers([...pfeOffers, { ...newOffer, id, applicants: 0, posted }]);
        setNewOffer({ title: '', status: 'Ouvert' });
        setShowForm(false);
    };

    return (
        <Layout>
            <Head title="Mes Offres de PFE" />
            <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="mb-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Mes Offres de PFE</h1>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        {showForm ? 'Annuler' : 'Nouvelle Offre'}
                    </button>
                </div>

                {showForm && (
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4">Créer une nouvelle offre</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={newOffer.title}
                                    onChange={(e) => setNewOffer({...newOffer, title: e.target.value})}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Statut</label>
                                <select
                                    id="status"
                                    value={newOffer.status}
                                    onChange={(e) => setNewOffer({...newOffer, status: e.target.value})}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                >
                                    <option value="Ouvert">Ouvert</option>
                                    <option value="Fermé">Fermé</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
                                Créer l'offre
                            </button>
                        </form>
                    </div>
                )}

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <ul className="divide-y divide-gray-200">
                        {pfeOffers.map((offer) => (
                            <li key={offer.id} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                                <div className="px-6 py-4 flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-medium text-gray-900 truncate">{offer.title}</h3>
                                        <div className="mt-2 flex items-center text-sm text-gray-500">
                                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                            </svg>
                                            {offer.applicants} candidat(s)
                                            <span className="mx-2">•</span>
                                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            Publié le {offer.posted}
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            offer.status === 'Ouvert' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            {offer.status}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}