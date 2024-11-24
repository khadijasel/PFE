import React from 'react';
import { Link, usePage } from '@inertiajs/react'; // Utiliser 'usePage' de '@inertiajs/react'
import { FaHome, FaUserFriends, FaCog, FaClipboardCheck } from 'react-icons/fa';

export default function Sidebar({ userRole }) {
    const { url } = usePage();

    const menuItems = {
        student: [
            { name: 'Dashboard', href: '/student/dashboard', icon: FaHome },
            { name: 'Proposer un PFE', href: '/student/propose-pfe', icon: FaClipboardCheck },
            { name: 'Choisir un PFE', href: '/student/choose-pfe', icon: FaClipboardCheck },
            { name: 'Mon PFE', href: '/student/my-pfe', icon: FaClipboardCheck },
        ],
        teacher: [
            { name: 'Dashboard', href: '/teacher/dashboard', icon: FaHome },
            { name: 'Proposer des PFE', href: '/teacher/propose-pfe', icon: FaClipboardCheck },
            { name: 'Mes encadrements', href: '/teacher/supervisions', icon: FaClipboardCheck },
            { name: 'Jurys', href: '/teacher/juries', icon: FaClipboardCheck },
        ],
        company: [
            { name: 'Dashboard', href: '/company/dashboard', icon: FaHome },
            { name: 'Proposer des PFE', href: '/company/propose-pfe', icon: FaClipboardCheck },
            { name: 'Mes offres', href: '/company/offers', icon: FaClipboardCheck },
        ],
        admin: [
            { name: 'Dashboard', href: '/admin/dashboard', icon: FaHome },
            { name: 'Gestion des utilisateurs', href: '/admin/users', icon: FaUserFriends },
            { name: 'Paramètres', href: '/admin/settings', icon: FaCog },
            { name: 'Validation des PFE', href: '/admin/validate-pfe', icon: FaClipboardCheck },
        ],
    };

    return (
        <div className="bg-gray-800 text-white w-48 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <div className="px-4 mb-10">
                <img src="/images/Logo.png" alt="Logo" className="w-24 h-auto mx-auto"/>
            </div>
            <nav className="space-y-4">
                {menuItems[userRole].map((item) => {
                    const isActive = url === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center py-3 px-4 rounded transition duration-200 ${
                                isActive ? 'bg-white text-gray-800' : 'hover:bg-gray-700 hover:text-white'
                            } text-lg`}
                        >
                            <item.icon className={`${isActive ? 'text-gray-800' : 'text-white'} mr-3`} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
