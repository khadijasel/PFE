import React, { useState } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { FaBell, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const { auth } = usePage().props;
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const staticNotifications = [
        { id: 1, message: "Nouvelle proposition de PFE soumise", time: "Il y a 5 minutes" },
        { id: 2, message: "Votre PFE a été approuvé", time: "Il y a 1 heure" },
        { id: 3, message: "Rappel: Date limite de soumission dans 3 jours", time: "Il y a 2 heures" },
    ];

    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route('logout'));
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        setShowProfileMenu(false);
    };

    const toggleProfileMenu = () => {
        setShowProfileMenu(!showProfileMenu);
        setShowNotifications(false);
    };

    return (
        <header className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <button
                            onClick={toggleNotifications}
                            className="text-white hover:text-blue-200 focus:outline-none transition duration-150 ease-in-out relative"
                        >
                            <FaBell className="h-5 w-5" />
                            {staticNotifications.length > 0 && (
                                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
                                    {staticNotifications.length}
                                </span>
                            )}
                        </button>
                        <AnimatePresence>
                            {showNotifications && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-2 z-10"
                                >
                                    {staticNotifications.length > 0 ? (
                                        staticNotifications.map((notification) => (
                                            <div key={notification.id} className="px-4 py-3 hover:bg-gray-100 transition duration-150 ease-in-out">
                                                <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="px-4 py-3 text-sm text-gray-700">
                                            Vous n'avez pas de nouvelles notifications.
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="relative">
                        <button
                            onClick={toggleProfileMenu}
                            className="flex items-center text-sm font-medium text-white hover:text-blue-200 focus:outline-none transition duration-150 ease-in-out"
                        >
                            <img
                                src="/images/profile.jpg"
                                alt="Profile"
                                className="w-10 h-10 rounded-full mr-3 border-2 border-white"
                            />
                            <span className="text-base">{auth.user ? auth.user.name : ''}</span>
                        </button>
                        <AnimatePresence>
                            {showProfileMenu && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-10"
                                >
                                    <Link
                                        href={route('profile')}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                                    >
                                        <FaUserCircle className="inline-block mr-2" />
                                        Profile
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                                    >
                                        <FaSignOutAlt className="inline-block mr-2" />
                                        Déconnexion
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </header>
    );
}

