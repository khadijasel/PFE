import React from 'react';
import { useForm, Head } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        mot_de_passe: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login.submit'));
    };

    return (
        <>
            <Head title="Connexion" />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6">Connexion</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                            </div>
                            <div>
                                <label htmlFor="mot_de_passe" className="block text-sm font-medium text-gray-700">
                                    Mot de passe
                                </label>
                                <input
                                    id="mot_de_passe"
                                    type="password"
                                    value={data.mot_de_passe}
                                    onChange={e => setData('mot_de_passe', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                {errors.mot_de_passe && <div className="text-red-500 text-sm mt-1">{errors.mot_de_passe}</div>}
                            </div>
                            <button 
                                type="submit" 
                                disabled={processing}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                            >
                                {processing ? 'Connexion...' : 'Se connecter'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

