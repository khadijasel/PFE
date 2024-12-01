import React, { useState } from 'react';
import Layout from '../Shared/Layout';

const Companies = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({ name: '', category: '', primaryContact: '' });
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [companies, setCompanies] = useState([
        { 
            id: 1, 
            name: "EduLearn", 
            category: "Education",
            activeProjects: 2,
            primaryContact: "Romaissa@gmail.com",
            logo: "/placeholder.svg?height=50&width=50",
            description: "EduLearn is a leading educational technology company focused on innovative learning solutions.",
            internships: [
                { title: "Web Developer Intern", duration: "3 months" },
                { title: "UX/UI Design Intern", duration: "6 months" }
            ],
            proposedThemes: [
                "AI-powered adaptive learning platforms",
                "Gamification in education",
                "Virtual reality for immersive learning experiences"
            ],
            requestedInterns: 5
        },
        { 
            id: 2, 
            name: "TechCorp", 
            category: "Technology",
            activeProjects: 5,
            primaryContact: "techcorp@example.com",
            logo: "/placeholder.svg?height=50&width=50",
            description: "TechCorp is a cutting-edge technology company specializing in software development and AI solutions.",
            internships: [
                { title: "Software Engineer Intern", duration: "6 months" },
                { title: "Data Science Intern", duration: "4 months" }
            ],
            proposedThemes: [
                "Blockchain for secure data management",
                "Machine learning in healthcare",
                "IoT solutions for smart cities"
            ],
            requestedInterns: 8
        }
    ]);

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.primaryContact.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCompany = {
            id: companies.length + 1,
            ...formData,
            activeProjects: 0,
            logo: "/placeholder.svg?height=50&width=50",
            description: "",
            internships: [],
            proposedThemes: [],
            requestedInterns: 0 // Added requestedInterns field
        };
        setCompanies([...companies, newCompany]);
        setIsModalOpen(false);
        setFormData({ name: '', category: '', primaryContact: '' });
    };

    const handleViewDetails = (company) => {
        setSelectedCompany(company);
        setIsDetailsModalOpen(true);
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gray-100">
                <div className="p-6">
                    <div className="bg-white rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold">Companies</h1>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
                            >
                                <span>+</span> Add New Company
                            </button>
                        </div>

                        <div className="mb-6">
                            <div className="relative">
                                <input
                                    type="search"
                                    placeholder="Search companies..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-2 pl-10 border rounded-lg bg-gray-50"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {filteredCompanies.map((company) => (
                                <div key={company.id} className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <img 
                                            src={company.logo} 
                                            alt={company.name} 
                                            className="w-12 h-12 rounded-full bg-gray-200"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold">{company.name}</h3>
                                            <p className="text-gray-500">{company.category}</p>
                                            <div className="mt-2 space-y-1">
                                                <p>Active Projects: {company.activeProjects}</p>
                                                <p>Primary Contact: {company.primaryContact}</p>
                                                <p>Requested Interns: {company.requestedInterns}</p>
                                            </div>
                                        </div>
                                        <button 
                                            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                                            onClick={() => handleViewDetails(company)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">Add New Company</h2>
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    Close
                                </button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Company Name"
                                    className="w-full mb-4 px-3 py-2 border rounded"
                                    required
                                />
                                <input
                                    type="text"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    placeholder="Category"
                                    className="w-full mb-4 px-3 py-2 border rounded"
                                    required
                                />
                                <input
                                    type="email"
                                    value={formData.primaryContact}
                                    onChange={(e) => setFormData({ ...formData, primaryContact: e.target.value })}
                                    placeholder="Primary Contact Email"
                                    className="w-full mb-4 px-3 py-2 border rounded"
                                    required
                                />
                                <button type="submit" className="w-full bg-black text-white py-2 rounded">
                                    Add Company
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {isDetailsModalOpen && selectedCompany && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto">
                        <div className="bg-white rounded-lg p-6 w-full max-w-2xl m-4">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold">{selectedCompany.name}</h2>
                                <button 
                                    onClick={() => setIsDetailsModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    Close
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold">Company Details</h3>
                                    <p><strong>Category:</strong> {selectedCompany.category}</p>
                                    <p><strong>Active Projects:</strong> {selectedCompany.activeProjects}</p>
                                    <p><strong>Primary Contact:</strong> {selectedCompany.primaryContact}</p>
                                    <p><strong>Requested Interns:</strong> {selectedCompany.requestedInterns}</p>
                                    <p><strong>Description:</strong> {selectedCompany.description}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Internships</h3>
                                    <ul className="list-disc pl-5">
                                        {selectedCompany.internships.map((internship, index) => (
                                            <li key={index}>
                                                {internship.title} - {internship.duration}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Proposed Themes</h3>
                                    <ul className="list-disc pl-5">
                                        {selectedCompany.proposedThemes.map((theme, index) => (
                                            <li key={index}>{theme}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Companies;

