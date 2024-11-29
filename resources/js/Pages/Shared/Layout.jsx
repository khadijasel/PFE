import React from 'react';
import { usePage } from '@inertiajs/react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

export default function Layout({ children }) {
    const { auth } = usePage().props;

    // Ajout de log pour vérifier les données d'auth
    console.log("Auth props:", auth);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Passez le userRole correctement */}
            <Sidebar userRole={auth.user?.type} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header userName={auth?.user?.name} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
