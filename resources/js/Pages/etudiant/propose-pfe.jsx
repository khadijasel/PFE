import React, { useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import Layout from '../Shared/Layout';

const ProposePFE = () => {
    const { data, setData, put, post, processing, errors } = useForm({
        titre: '',
        resume: '',
        technologies: '',
        besoins_materiel: '',
        type_pfe: 'Classique',
        email: '',
    });

    const { props } = usePage();
    const { proposition, success } = props;

    // Remplir le formulaire avec les données existantes si elles sont disponibles
    useEffect(() => {
        if (proposition) {
            setData({
                titre: proposition.titre,
                resume: proposition.resume,
                technologies: proposition.technologies,
                besoins_materiel: proposition.besoins_materiel,
                type_pfe: proposition.type_pfe,
                email: proposition.email || '',
            });
        }
    }, [proposition]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (proposition) {
            put(route('student.propose-pfe.update', proposition.id)); // PUT pour mise à jour
        } else {
            post(route('student.propose-pfe.store')); // POST pour ajout
        }
    };

    return (
        <Layout>
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-semibold mb-6 text-gray-800">
                    {proposition ? 'Modifier le sujet de PFE' : 'Proposer un sujet de PFE'}
                </h1>

                {/* Message de succès */}
                {success && (
                    <div className="mb-4 p-4 bg-green-500 text-white rounded-md">
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Champ Titre */}
                    <div>
                        <label htmlFor="titre" className="block text-sm font-medium text-gray-700">Titre</label>
                        <input
                            id="titre"
                            type="text"
                            name="titre"
                            value={data.titre}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                        {errors.titre && <div className="text-red-500 text-sm mt-2">{errors.titre}</div>}
                    </div>

                    {/* Champ Résumé */}
                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Résumé</label>
                        <textarea
                            id="resume"
                            name="resume"
                            value={data.resume}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                        {errors.resume && <div className="text-red-500 text-sm mt-2">{errors.resume}</div>}
                    </div>

                    {/* Champ Technologies */}
                    <div>
                        <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">Technologies</label>
                        <input
                            id="technologies"
                            type="text"
                            name="technologies"
                            value={data.technologies}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                        {errors.technologies && <div className="text-red-500 text-sm mt-2">{errors.technologies}</div>}
                    </div>

                    {/* Champ Besoins Matériel */}
                    <div>
                        <label htmlFor="besoins_materiel" className="block text-sm font-medium text-gray-700">Besoins Matériel</label>
                        <textarea
                            id="besoins_materiel"
                            name="besoins_materiel"
                            value={data.besoins_materiel}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Champ Type PFE */}
                    <div>
                        <label htmlFor="type_pfe" className="block text-sm font-medium text-gray-700">Type de PFE</label>
                        <select
                            id="type_pfe"
                            name="type_pfe"
                            value={data.type_pfe}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        >
                            <option value="Classique">Classique</option>
                            <option value="Innovant">Innovant</option>
                            <option value="Recherche">Recherche</option>
                        </select>
                    </div>

                    {/* Champ Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                        {errors.email && <div className="text-red-500 text-sm mt-2">{errors.email}</div>}
                    </div>

                    {/* Bouton Soumettre ou Mettre à jour */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            {processing ? 'En cours...' : proposition ? 'Mettre à jour' : 'Soumettre'}
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default ProposePFE;
