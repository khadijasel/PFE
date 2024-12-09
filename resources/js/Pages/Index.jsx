import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';

export default function Index({ flash, errors }) {
    const { data, setData, post, processing, reset } = useForm({
        csv_file: null,
    });
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData('csv_file', file);
        setFileName(file ? file.name : '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('import.csv'), {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                reset('csv_file');
                setFileName('');
            },
        });
    };

    return (
        <>
            <Head title="Importation d'utilisateurs" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-semibold mb-6">Importer des utilisateurs</h1>
                            
                            {flash.success && (
                                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                                    {flash.success}
                                </div>
                            )}

                            {flash.error && (
                                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                                    {flash.error}
                                </div>
                            )}

                            {Object.keys(errors).length > 0 && (
                                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                                    <h2 className="font-bold mb-2">Erreurs de validation:</h2>
                                    <ul className="list-disc list-inside">
                                        {Object.entries(errors).map(([key, value]) => (
                                            <li key={key}>{value}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="csv_file">
                                        Fichier CSV
                                    </label>
                                    <input
                                        type="file"
                                        id="csv_file"
                                        onChange={handleFileChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        accept=".csv"
                                    />
                                    {fileName && <p className="mt-2 text-sm text-gray-600">Fichier sélectionné : {fileName}</p>}
                                    {errors.csv_file && <p className="text-red-500 text-xs italic">{errors.csv_file}</p>}
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                        disabled={processing}
                                    >
                                        {processing ? 'Importation en cours...' : 'Importer'}
                                    </button>
                                </div>
                            </form>

                            <div className="mt-8">
                                <h2 className="text-lg font-semibold mb-2">Format du fichier CSV attendu:</h2>
                                <p className="text-sm text-gray-600">
                                    Le fichier CSV doit contenir 5 colonnes dans l'ordre suivant, sans ligne d'en-tête:
                                </p>
                                <ol className="list-decimal list-inside text-sm text-gray-600 mt-2">
                                    <li>ID</li>
                                    <li>Type d'utilisateur</li>
                                    <li>Nom</li>
                                    <li>Prénom</li>
                                    <li>Email</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

