import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="flex h-screen">
            {/* Left side - Login Form */}
            <div className="w-1/2 flex items-center justify-center p-12">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-8">Connexion</h1>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 bg-gray-100 border border-transparent rounded focus:outline-none focus:border-gray-300"
                                placeholder="Entrer votre email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                            />
                            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm mb-2">Mot de passe</label>
                            <input
                                type="password"
                                className="w-full p-2 bg-gray-100 border border-transparent rounded focus:outline-none focus:border-gray-300"
                                placeholder="Entrer votre mot de passe"
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                            />
                            {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition-colors"
                        >
                            Se connecter
                        </button>
                    </form>
                </div>
            </div>

            {/* Right side - Background Image */}
            <div className="w-1/2 relative bg-gray-800">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-8 left-0 right-0 flex justify-center">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                            </svg>
                        </div>
                        <h2 className="text-white text-2xl font-bold">BORCELLE</h2>
                    </div>
                </div>
                <img
                    src="/images/background.png"
                    alt="Graduation celebration"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}