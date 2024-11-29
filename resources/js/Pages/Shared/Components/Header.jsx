import React from 'react';
import { Link, usePage, router } from '@inertiajs/react';

export default function Header() {
    const { auth } = usePage().props;

    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route('logout'));
    };

    return (
        <header className="bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <div className="flex items-center">
                    <Link href={route('profile')} className="flex items-center mr-4">
                        <img
                            src="/images/profile.jpg" // Remplacer par le chemin réel de la photo de profil
                            alt="Profile"
                            className="w-10 h-10 rounded-full mr-2"
                        />
                        <span className="text-white">{auth.user ? auth.user.name : ''}</span>
                    </Link>
                    <button 
                        onClick={handleLogout}
                        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
                    >
                        Déconnexion
                    </button>
                </div>
            </div>
        </header>
    );
}

