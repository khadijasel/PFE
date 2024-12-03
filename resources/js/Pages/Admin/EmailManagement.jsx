import React, { useState } from 'react';
import Layout from '../Shared/Layout';


const EmailManagement = () => {
    const [activeTab, setActiveTab] = useState("compose");
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const [isAddingTemplate, setIsAddingTemplate] = useState(false);
    const [editingTemplate, setEditingTemplate] = useState(null);
    const [newTemplate, setNewTemplate] = useState({ name: '', subject: '', content: '' });

    // Mock data for emails
    const [emails, setEmails] = useState([
        { id: 1, subject: "Project Submission Reminder", recipient: "All Students", sentDate: "2023-06-15", template: "Reminder" },
        { id: 2, subject: "Defense Schedule Announcement", recipient: "Graduating Class", sentDate: "2023-06-10", template: "Announcement" },
        { id: 3, subject: "New Company Partnership", recipient: "Faculty", sentDate: "2023-06-05", template: "Newsletter" },
    ]);

    // Mock data for email templates
    const [emailTemplates, setEmailTemplates] = useState([
        { id: 1, name: "Reminder", subject: "Important Reminder: [Event]", content: "Dear [Recipient],\n\nThis is a friendly reminder about [Event]. Please ensure you [Action Required] by [Date].\n\nBest regards,\n[Your Name]" },
        { id: 2, name: "Announcement", subject: "Announcement: [Topic]", content: "Dear [Recipient],\n\nWe are pleased to announce [Announcement Details].\n\nIf you have any questions, please don't hesitate to contact us.\n\nBest regards,\n[Your Name]" },
        { id: 3, name: "Newsletter", subject: "Monthly Newsletter - [Month Year]", content: "Dear [Recipient],\n\nHere are the highlights for this month:\n\n1. [Highlight 1]\n2. [Highlight 2]\n3. [Highlight 3]\n\nThank you for your continued support.\n\nBest regards,\n[Your Name]" },
    ]);

    const filteredEmails = emails.filter(email =>
        email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.recipient.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDropdownToggle = (id) => {
        setOpenDropdownId(openDropdownId === id ? null : id);
    };

    const handleDeleteEmail = (id) => {
        setEmails(emails.filter(email => email.id !== id));
        setOpenDropdownId(null);
    };

    const handleAddTemplate = () => {
        setIsAddingTemplate(true);
        setEditingTemplate(null);
        setNewTemplate({ name: '', subject: '', content: '' });
    };

    const handleEditTemplate = (template) => {
        setEditingTemplate(template);
        setNewTemplate({ ...template });
        setIsAddingTemplate(false);
    };

    const handleDeleteTemplate = (id) => {
        setEmailTemplates(emailTemplates.filter(template => template.id !== id));
    };

    const handleSaveTemplate = (e) => {
        e.preventDefault();
        if (editingTemplate) {
            setEmailTemplates(emailTemplates.map(template =>
                template.id === editingTemplate.id ? { ...template, ...newTemplate } : template
            ));
        } else {
            const newId = Math.max(...emailTemplates.map(t => t.id)) + 1;
            setEmailTemplates([...emailTemplates, { ...newTemplate, id: newId }]);
        }
        setIsAddingTemplate(false);
        setEditingTemplate(null);
        setNewTemplate({ name: '', subject: '', content: '' });
    };

    return (
        <Layout>
        <div className="p-8 space-y-8 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Email Management</h1>
            </div>

            <div className="bg-white rounded-lg shadow">
                <div className="flex border-b">
                    <button
                        className={`px-4 py-2 ${activeTab === "compose" ? "bg-gray-200 font-semibold" : ""}`}
                        onClick={() => setActiveTab("compose")}
                    >
                        Compose
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === "sent" ? "bg-gray-200 font-semibold" : ""}`}
                        onClick={() => setActiveTab("sent")}
                    >
                        Sent Emails
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === "templates" ? "bg-gray-200 font-semibold" : ""}`}
                        onClick={() => setActiveTab("templates")}
                    >
                        Email Templates
                    </button>
                </div>

                <div className="p-6">
                    {activeTab === "compose" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Compose New Email</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block mb-1">Recipient</label>
                                    <select className="w-full p-2 border rounded">
                                        <option value="">Select recipient group</option>
                                        <option value="all-students">All Students</option>
                                        <option value="graduating-class">Graduating Class</option>
                                        <option value="faculty">Faculty</option>
                                        <option value="companies">Partner Companies</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-1">Subject</label>
                                    <input type="text" className="w-full p-2 border rounded" placeholder="Enter email subject" />
                                </div>
                                <div>
                                    <label className="block mb-1">Content</label>
                                    <textarea className="w-full p-2 border rounded" rows="10" placeholder="Enter email content"></textarea>
                                </div>
                                <div>
                                    <label className="block mb-1">Template</label>
                                    <select 
                                        className="w-full p-2 border rounded"
                                        onChange={(e) => setSelectedTemplate(emailTemplates.find(t => t.id.toString() === e.target.value) || null)}
                                    >
                                        <option value="">Select a template (optional)</option>
                                        {emailTemplates.map((template) => (
                                            <option key={template.id} value={template.id.toString()}>{template.name}</option>
                                        ))}
                                    </select>
                                </div>
                                {selectedTemplate && (
                                    <div className="p-4 border rounded-md bg-gray-100">
                                        <h4 className="font-medium mb-2">Template Preview</h4>
                                        <p className="text-sm mb-1"><strong>Subject:</strong> {selectedTemplate.subject}</p>
                                        <p className="text-sm whitespace-pre-wrap">{selectedTemplate.content}</p>
                                    </div>
                                )}
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send Email</button>
                            </form>
                        </div>
                    )}

                    {activeTab === "sent" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Sent Emails</h2>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Search emails..."
                                    className="w-full p-2 border rounded"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="space-y-4 max-h-96 overflow-y-auto">
                                {filteredEmails.map((email) => (
                                    <div key={email.id} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div>
                                            <h3 className="font-medium">{email.subject}</h3>
                                            <p className="text-sm text-gray-600">To: {email.recipient}</p>
                                            <p className="text-sm text-gray-600">Sent: {email.sentDate}</p>
                                        </div>
                                        <div className="relative">
                                            <button 
                                                className="px-2 py-1 bg-gray-200 rounded"
                                                onClick={() => handleDropdownToggle(email.id)}
                                            >
                                                •••
                                            </button>
                                            {openDropdownId === email.id && (
                                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                                                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                                        View
                                                    </button>
                                                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                                        Resend
                                                    </button>
                                                    <button 
                                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                                                        onClick={() => handleDeleteEmail(email.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "templates" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Email Templates</h2>
                            <button 
                                className="px-4 py-2 bg-black  text-white rounded hover:bg-white-600 mb-4"
                                onClick={handleAddTemplate}
                            >
                                Create New Template
                            </button>
                            <div className="space-y-4 max-h-96 overflow-y-auto">
                                {emailTemplates.map((template) => (
                                    <div key={template.id} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div>
                                            <h3 className="font-medium">{template.name}</h3>
                                            <p className="text-sm text-gray-600">{template.subject}</p>
                                        </div>
                                        <div>
                                            <button 
                                                className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
                                                onClick={() => handleEditTemplate(template)}
                                            >
                                                Edit 
                                            </button>
                                            <button 
                                                className="px-2 py-1 bg-red-500 text-white rounded"
                                                onClick={() => handleDeleteTemplate(template.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {(isAddingTemplate || editingTemplate) && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">
                            {editingTemplate ? 'Edit Template' : 'Create New Template'}
                        </h2>
                        <form onSubmit={handleSaveTemplate} className="space-y-4">
                            <div>
                                <label className="block mb-1">Template Name</label>
                                <input 
                                    type="text" 
                                    value={newTemplate.name}
                                    onChange={(e) => setNewTemplate({...newTemplate, name: e.target.value})}
                                    className="w-full p-2 border rounded" 
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Subject</label>
                                <input 
                                    type="text" 
                                    value={newTemplate.subject}
                                    onChange={(e) => setNewTemplate({...newTemplate, subject: e.target.value})}
                                    className="w-full p-2 border rounded" 
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Content</label>
                                <textarea 
                                    value={newTemplate.content}
                                    onChange={(e) => setNewTemplate({...newTemplate, content: e.target.value})}
                                    className="w-full p-2 border rounded" 
                                    rows="6"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button 
                                    type="button" 
                                    onClick={() => {
                                        setIsAddingTemplate(false);
                                        setEditingTemplate(null);
                                    }}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    {editingTemplate ? 'Save Changes' : 'Create Template'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
        </Layout>
    );
};

export default EmailManagement;

