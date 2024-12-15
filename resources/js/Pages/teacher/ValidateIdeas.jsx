import React from 'react';
import Layout from '../Shared/Layout';
import { usePage } from '@inertiajs/react';

export default function ValidateIdeas() {
    const { propositions = [], error } = usePage().props;

    console.log('Page props:', usePage().props);
    console.log('Propositions:', propositions);
    console.log('Error:', error);

    return (
        <Layout>
            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Validation des Propositions de Projets</h1>
                
                {/* Debugging information */}
                <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
                    <h2 className="font-bold">Debugging Info:</h2>
                    <p>Number of propositions: {propositions.length}</p>
                    <p>Type of propositions: {typeof propositions}</p>
                    <p>Error: {error || 'No error'}</p>
                </div>

                {error && (
                    <div className="mb-4 p-4 bg-red-100 border border-red-400 rounded text-red-700">
                        {error}
                    </div>
                )}

                {propositions.length === 0 ? (
                    <p className="text-gray-600">Aucune proposition de projet à valider.</p>
                ) : (
                    <div className="space-y-4">
                        {propositions.map((proposition) => (
                            <div
                                key={proposition.id}
                                className="bg-white shadow rounded-lg p-4 border border-gray-200"
                            >
                                <p><span className="font-semibold">Titre:</span> {proposition.titre}</p>
                                <p><span className="font-semibold">Résumé:</span> {proposition.resume}</p>
                                <p><span className="font-semibold">Technologies:</span> {proposition.technologies}</p>
                                <p><span className="font-semibold">Besoins matériels:</span> {proposition.besoins_materiel}</p>
                                <p><span className="font-semibold">Statut:</span> {proposition.statut}</p>
                                <p><span className="font-semibold">Type de PFE:</span> {proposition.type_pfe}</p>
                                <p><span className="font-semibold">Email:</span> {proposition.email}</p>
                                {proposition.observation && (
                                    <p><span className="font-semibold">Observation:</span> {proposition.observation}</p>
                                )}
                                {proposition.user && (
                                    <p><span className="font-semibold">Proposé par:</span> {proposition.user.nom} {proposition.user.prenom}</p>
                                )}
                                <p><span className="font-semibold">Date de soumission:</span> {new Date(proposition.created_at).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
}

