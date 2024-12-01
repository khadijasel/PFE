import React, { useState } from 'react';
import Layout from '../Shared/Layout';


const DocumentManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ id: null, name: '', type: '', file: null, status: '' });
    const [documents, setDocuments] = useState([
        { id: 1, name: "Final Project Report", type: "Report", author: "Thanaa", dateUploaded: "17/11/2024", status: "approved" },
        { id: 2, name: "AI Research Thesis", type: "Thesis", author: "Marwa", dateUploaded: "17/11/2024", status: "Under Review" },
        { id: 3, name: "Network Security Presentation", type: "Presentation", author: "Khadija", dateUploaded: "17/11/2024", status: "Under Review" }
    ]);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.id) {
            setDocuments(documents.map(doc => 
                doc.id === formData.id ? { ...doc, name: formData.name, type: formData.type, status: formData.status } : doc
            ));
        } else {
            const newDoc = { 
                id: documents.length + 1,
                name: formData.name,
                type: formData.type,
                author: "You", 
                dateUploaded: new Date().toLocaleDateString(), 
                status: formData.status || "Under Review" 
            };
            setDocuments([...documents, newDoc]);
        }
        setIsModalOpen(false);
        setFormData({ id: null, name: '', type: '', file: null, status: '' });
    };

    const handleDelete = (id) => {
        setDocuments(documents.filter(doc => doc.id !== id));
    };

    const handleEdit = (doc) => {
        setFormData({ id: doc.id, name: doc.name, type: doc.type, file: null, status: doc.status });
        setIsModalOpen(true);
    };

    const filteredDocuments = documents.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
        <div className="p-6 bg-white rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Documents</h1>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-black text-white px-4 py-2 rounded-lg"
                >
                    Add New Document
                </button>
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border rounded-lg bg-gray-50"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left border-b">
                            <th className="pb-3 text-gray-600">Document Name</th>
                            <th className="pb-3 text-gray-600">Type</th>
                            <th className="pb-3 text-gray-600">Author</th>
                            <th className="pb-3 text-gray-600">Date Uploaded</th>
                            <th className="pb-3 text-gray-600">Status</th>
                            <th className="pb-3 text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDocuments.map((doc) => (
                            <tr key={doc.id} className="border-b">
                                <td className="py-4">{doc.name}</td>
                                <td className="py-4">{doc.type}</td>
                                <td className="py-4">{doc.author}</td>
                                <td className="py-4">{doc.dateUploaded}</td>
                                <td className="py-4">{doc.status}</td>
                                <td className="py-4 relative">
                                    <button 
                                        className="text-gray-500 hover:text-gray-700"
                                        onClick={() => setSelectedDocument(doc.id)}
                                    >
                                        ⋮
                                    </button>
                                    {selectedDocument === doc.id && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                                             <button 
                                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                                onClick={() => handleView(doc.id)}
                                            >
                                                View
                                            </button>
                                            <button 
                                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                                onClick={() => handleDelete(doc.id)}
                                            >
                                                Delete
                                            </button>
                                            <button 
                                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                                onClick={() => handleEdit(doc)}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">{formData.id ? 'Edit Document' : 'Add New Document'}</h2>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                Quitter
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Document Name"
                                className="w-full mb-4 px-3 py-2 border rounded"
                                required
                            />
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                className="w-full mb-4 px-3 py-2 border rounded"
                                required
                            >
                                <option value="">Select a Type</option>
                                <option value="Report">Report</option>
                                <option value="Thesis">Thesis</option>
                                <option value="Presentation">Presentation</option>
                            </select>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="w-full mb-4 px-3 py-2 border rounded"
                                required
                            >
                                <option value="">Select a Status</option>
                                <option value="Under Review">Under Review</option>
                                <option value="Approved">Approved</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                            {!formData.id && (
                                <input
                                    type="file"
                                    onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                                    className="w-full mb-4"
                                    required
                                />
                            )}
                            <button type="submit" className="w-full bg-black text-white py-2 rounded">
                                {formData.id ? 'Save Changes' : 'Upload'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
        </Layout>
    );
};

export default DocumentManagement;

