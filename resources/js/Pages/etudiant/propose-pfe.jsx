import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import Layout from '../Shared/Layout';

export default function ProposePFE() {
    const { data, setData, post, processing, errors } = useForm({
        student1Name: '',
        student2Name: '',
        option: 'GL',
        title: '',
        description: '',
        technologies: '',
        hardwareNeeds: '',
        isStartup: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/student/propose-pfe'); // Mettre à jour cette route si nécessaire
    };

    return (
        <Layout>
            <Head title="Proposer un PFE" />
            <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Proposer un PFE</h2>
                <p className="text-sm text-gray-600 mb-4">Veuillez remplir le formulaire ci-dessous pour proposer un sujet de PFE. Si vous choisissez un binôme, il recevra une notification pour valider la collaboration.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="student1Name" className="block text-sm font-medium text-gray-700">Nom et prénom (Étudiant 1)</label>
                        <input
                            type="text"
                            id="student1Name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={data.student1Name}
                            onChange={e => setData('student1Name', e.target.value)}
                        />
                        {errors.student1Name && <div className="text-red-500 text-sm mt-1">{errors.student1Name}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="student2Name" className="block text-sm font-medium text-gray-700">Nom et prénom (Étudiant 2 - Binôme)</label>
                        <input
                            type="text"
                            id="student2Name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={data.student2Name}
                            onChange={e => setData('student2Name', e.target.value)}
                        />
                        {errors.student2Name && <div className="text-red-500 text-sm mt-1">{errors.student2Name}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="option" className="block text-sm font-medium text-gray-700">Option</label>
                        <select
                            id="option"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={data.option}
                            onChange={e => setData('option', e.target.value)}
                        >
                            <option value="GL">GL</option>
                            <option value="IA">IA</option>
                            <option value="RSD">RSD</option>
                            <option value="SIC">SIC</option>
                        </select>
                        {errors.option && <div className="text-red-500 text-sm mt-1">{errors.option}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Intitulé du PFE</label>
                        <input
                            type="text"
                            id="title"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                        />
                        {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Résumé</label>
                        <textarea
                            id="description"
                            rows="4"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                        ></textarea>
                        {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">Technologies utilisées</label>
                        <input
                            type="text"
                            id="technologies"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={data.technologies}
                            onChange={e => setData('technologies', e.target.value)}
                        />
                        {errors.technologies && <div className="text-red-500 text-sm mt-1">{errors.technologies}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="hardwareNeeds" className="block text-sm font-medium text-gray-700">Besoins matériels</label>
                        <textarea
                            id="hardwareNeeds"
                            rows="3"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={data.hardwareNeeds}
                            onChange={e => setData('hardwareNeeds', e.target.value)}
                        ></textarea>
                        {errors.hardwareNeeds && <div className="text-red-500 text-sm mt-1">{errors.hardwareNeeds}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="isStartup" className="block text-sm font-medium text-gray-700">Projet innovant (startup) ?</label>
                        <select
                            id="isStartup"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={data.isStartup}
                            onChange={e => setData('isStartup', e.target.value)}
                        >
                            <option value="">Sélectionnez</option>
                            <option value="yes">Oui</option>
                            <option value="no">Non</option>
                        </select>
                        {errors.isStartup && <div className="text-red-500 text-sm mt-1">{errors.isStartup}</div>}
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                            disabled={processing}
                        >
                            Soumettre la proposition
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
