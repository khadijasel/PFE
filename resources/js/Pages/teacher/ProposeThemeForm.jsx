import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const ProposePFE = () => {
    const [form, setForm] = useState({
        titre: '',
        resume: '',
        technologies: '',
        besoins_materiel: '',
        type_pfe: 'Classique',
        option: 'GL',
        coencadrant: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('teacher.propose-pfe.store'), form);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Proposer un sujet de PFE</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="titre" className="block text-sm font-medium text-gray-700">
                            Titre
                        </label>
                        <input
                            type="text"
                            id="titre"
                            name="titre"
                            value={form.titre}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border border-gray-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                            Résumé
                        </label>
                        <textarea
                            id="resume"
                            name="resume"
                            value={form.resume}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border border-gray-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
                            Technologies
                        </label>
                        <input
                            type="text"
                            id="technologies"
                            name="technologies"
                            value={form.technologies}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border border-gray-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="besoins_materiel" className="block text-sm font-medium text-gray-700">
                            Besoins matériel
                        </label>
                        <textarea
                            id="besoins_materiel"
                            name="besoins_materiel"
                            value={form.besoins_materiel}
                            onChange={handleChange}
                            rows={3}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border border-gray-300"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="type_pfe" className="block text-sm font-medium text-gray-700">
                                Type de PFE
                            </label>
                            <select
                                id="type_pfe"
                                name="type_pfe"
                                value={form.type_pfe}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border border-gray-300"
                            >
                                <option value="Classique">Classique</option>
                                <option value="Innovant">Innovant</option>
                                <option value="Recherche">Recherche</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="option" className="block text-sm font-medium text-gray-700">
                                Option
                            </label>
                            <select
                                id="option"
                                name="option"
                                value={form.option}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border border-gray-300"
                            >
                                <option value="GL">GL</option>
                                <option value="IA">IA</option>
                                <option value="RSD">RSD</option>
                                <option value="SIC">SIC</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="coencadrant" className="block text-sm font-medium text-gray-700">
                            Co-encadrant
                        </label>
                        <input
                            type="text"
                            id="coencadrant"
                            name="coencadrant"
                            value={form.coencadrant}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border border-gray-300"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Soumettre la proposition
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProposePFE;

