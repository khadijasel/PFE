import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FaHome, FaUserFriends, FaCog, FaClipboardCheck, FaChevronDown, FaChevronUp, FaFileAlt, FaBuilding } from 'react-icons/fa';

export default function Sidebar({ userRole }) {
    const { url } = usePage();
    const [showSpecialities, setShowSpecialities] = useState(false);

    const menuItems = {
        etudiant: [
            { name: 'Dashboard', href: '/student/dashboard', icon: FaHome },
            { name: 'Proposer un PFE', href: '/student/propose-pfe', icon: FaClipboardCheck },
            { name: 'Choisir un PFE', href: '/student/choose-pfe', icon: FaClipboardCheck },
            { name: 'Mon PFE', href: '/student/my-pfe', icon: FaClipboardCheck },
        ],
        teacher: [
            { name: 'Dashboard', href: '/teacher/dashboard', icon: FaHome },
            { name: 'Mes encadrements', href: '/teacher/SupervisedProjects', icon: FaClipboardCheck },
            { name: 'PFYIdeas', href: '/teacher/PFYIdeas', icon: FaClipboardCheck },
            { name: 'Jurys', href: '/teacher/Juries', icon: FaClipboardCheck },
        ],
        entreprise: [
            { name: 'Dashboard', href: '/company/dashboard', icon: FaHome },
            { name: 'Proposer des PFE', href: '/company/propose-pfe', icon: FaClipboardCheck },
            { name: 'Mes offres', href: '/company/offers', icon: FaClipboardCheck },
        ],
        admin: [
            { name: 'Dashboard', href: '/admin/dashboard', icon: FaHome },
            {
                name: 'Speciality',
                href: '#',
                icon: FaUserFriends,
                subItems: [
                    { name: 'Software Engineering', href: '/admin/SoftwareEngineeringDashboard' },
                    { name: 'Network and ISS', href: '/admin/NetworkIssDashboard' },
                    { name: 'Artificial Intelligence', href: '/admin/ArtificialIntelligenceDashboard' },
                    { name: 'Information System', href: '/admin/InformationSystemDashboard' },
                ],
            },
            { name: 'Document', href: '/admin/DocumentManagement', icon: FaFileAlt },
            { name: 'Companies', href: '/admin/Companies', icon: FaBuilding },
            { name: 'Defense scheduling', href: '/admin/DefenseSchedulingInterface', icon: FaClipboardCheck },
        ],
    };

    const toggleSpecialities = () => {
        setShowSpecialities(!showSpecialities);
    };
    if (userRole === 'superiorTeacher') {
        menuItems['superiorTeacher'] = [
            ...menuItems.teacher, 
            { name: 'Validation des idées', href: '/teacher/ValidateIdeas', icon: FaClipboardCheck },
        ];
    }

    return (
        <div className="bg-gray-800 text-white w-48 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <div className="px-4 mb-10">
                <img src="/images/Logo.png" alt="Logo" className="w-24 h-auto mx-auto" />
            </div>
            <nav className="space-y-4">
                {menuItems[userRole].map((item) => {
                    const isActive = url === item.href;
                    if (userRole === 'admin' && item.name === 'Speciality') {
                        return (
                            <div key={item.name}>
                                <button
                                    onClick={toggleSpecialities}
                                    className={`flex items-center justify-between w-full py-3 px-4 rounded transition duration-200 ${
                                        isActive ? 'bg-white text-gray-800' : 'hover:bg-gray-700 hover:text-white'
                                    } text-lg`}
                                >
                                    <div className="flex items-center">
                                        <item.icon className={`${isActive ? 'text-gray-800' : 'text-white'} mr-3`} />
                                        {item.name}
                                    </div>
                                    {showSpecialities ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                                </button>
                                {showSpecialities && (
                                    <div className="ml-6 mt-2 space-y-2">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className={`block py-2 px-4 rounded transition duration-200 ${
                                                    url === subItem.href ? 'bg-white text-gray-800' : 'hover:bg-gray-700 hover:text-white'
                                                } text-sm`}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }
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
