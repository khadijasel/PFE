import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

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
                <div className="max-w-md w-full">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                            Connexion
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                                {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                            </div>
                            <div>
                                <label htmlFor="mot_de_passe" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mot de passe
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="mot_de_passe"
                                        type="password"
                                        value={data.mot_de_passe}
                                        onChange={e => setData('mot_de_passe', e.target.value)}
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="••••••••"
                                    />
                                </div>
                                {errors.mot_de_passe && <div className="text-red-500 text-sm mt-1">{errors.mot_de_passe}</div>}
                            </div>
                            <div>
                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {processing ? 'Connexion...' : 'Se connecter'}
                                </button>
                            </div>
                        </form>
                        <div className="mt-6 text-center">
                            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                                Mot de passe oublié ?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

