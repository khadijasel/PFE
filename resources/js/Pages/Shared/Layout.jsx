import React from 'react';
import { usePage } from '@inertiajs/react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

export default function Layout({ children }) {
    const auth = {
        user: {
            name: 'John Doe',
            role: 'superiorTeacher'
            
            
            
             // Vous pouvez changer ce rôle pour 'teacher' ou 'student'
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar userRole={auth.user.role} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header userName={auth.user.name} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
