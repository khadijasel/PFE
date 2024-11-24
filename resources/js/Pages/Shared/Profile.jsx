import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Layout from './Layout';

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "Marwa",
        lastName: "MADANI",
        id: "37011542",
        email: "madani.marwa@univ-tlemcen.dz",
        phone: "0552270240",
        birthDate: "12/05/2002"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <Layout>
            <Head title="Profil" />
            <div className="max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        {/* Banner with pattern */}
                        <div className="h-32 w-full bg-gradient-to-r from-orange-500 via-teal-500 to-black"
                             style={{
                                 backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.1) 35px, rgba(0,0,0,0.1) 70px)"
                             }}>
                        </div>
                        
                        {/* Profile picture */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
                            <div className="relative">
                                <img
                                    src="/images/profile.jpg"
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full border-4 border-white object-cover"
                                />
                                <button className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 px-6 pb-6">
                        <h2 className="text-2xl font-bold text-center mb-8">{formData.firstName} {formData.lastName}</h2>
                        
                        <div className="max-w-2xl mx-auto">
                            <div className="border-b border-gray-200 mb-6">
                                <h3 className="text-lg font-medium mb-4">Mes informations</h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            name="id"
                                            value={formData.id}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            name="birthDate"
                                            value={formData.birthDate}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-center pt-4">
                                    <button 
                                        type={isEditing ? "submit" : "button"}
                                        onClick={!isEditing ? () => setIsEditing(true) : undefined}
                                        className="w-full max-w-md bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
                                    >
                                        {isEditing ? 'Sauvegarder' : 'Modifier'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

