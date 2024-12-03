import React, { useState } from 'react';
import Layout from '../Shared/Layout';


const FormManagement = () => {
    const [forms, setForms] = useState([
        { id: 1, name: "Proposition de PFE ", status: "Actif", deadline: "2023-07-15", audience: "Enseignant" },
        { id: 2, name: "Proposition de PFE ", status: "Inactif", deadline: "2023-07-20", audience: "Étudiant" },
        { id: 3, name: "Proposition de PFE ", status: "Actif", deadline: "2023-07-25", audience: "Entreprise" },
        { id: 4, name: "Choix des projets ", status: "Inactif", deadline: "2023-08-10", audience: "Étudiant" },
        { id: 5, name: "Fiche de vœux ", status: "Inactif", deadline: "2023-09-01", audience: "Enseignant" },
    ]);

    const [editingForm, setEditingForm] = useState(null);
    const [isAddingForm, setIsAddingForm] = useState(false);
    const [newForm, setNewForm] = useState({ name: '', deadline: '', status: 'Inactif', audience: '' });

    const toggleStatus = (id) => {
        setForms(forms.map(form => 
            form.id === id ? { ...form, status: form.status === "Actif" ? "Inactif" : "Actif" } : form
        ));
    };

    const handleEdit = (form) => {
        setEditingForm(form);
    };

    const handleSave = (e) => {
        e.preventDefault();
        setForms(forms.map(form => 
            form.id === editingForm.id ? editingForm : form
        ));
        setEditingForm(null);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const id = Math.max(...forms.map(form => form.id)) + 1;
        setForms([...forms, { ...newForm, id }]);
        setNewForm({ name: '', deadline: '', status: 'Inactif', audience: '' });
        setIsAddingForm(false);
    };

    return (
        <Layout>
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Gestion des Formulaires</h1>
                    <button 
                        onClick={() => setIsAddingForm(true)}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Ajouter un formulaire
                    </button>
                </div>
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 text-left">Nom du Formulaire</th>
                            <th className="p-2 text-left">Statut</th>
                            <th className="p-2 text-left">Date Limite</th>
                            <th className="p-2 text-left">Désigné à</th>
                            <th className="p-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forms.map(form => (
                            <tr key={form.id} className="border-b">
                                <td className="p-2">{form.name}</td>
                                <td className="p-2">
                                    <span className={`px-2 py-1 rounded ${form.status === "Actif" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                                        {form.status}
                                    </span>
                                </td>
                                <td className="p-2">{form.deadline}</td>
                                <td className="p-2">{form.audience}</td>
                                <td className="p-2">
                                    <button 
                                        onClick={() => toggleStatus(form.id)}
                                        className={`mr-2 px-3 py-1 rounded ${form.status === "Actif" ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
                                    >
                                        {form.status === "Actif" ? "Désactiver" : "Activer"}
                                    </button>
                                    <button 
                                        onClick={() => handleEdit(form)}
                                        className="px-3 py-1 bg-blue-500 text-white rounded"
                                    >
                                        Modifier
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {editingForm && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                        <form onSubmit={handleSave} className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Modifier le Formulaire</h2>
                            <div className="mb-4">
                                <label className="block mb-2">Nom du Formulaire</label>
                                <input 
                                    type="text" 
                                    value={editingForm.name} 
                                    onChange={(e) => setEditingForm({...editingForm, name: e.target.value})}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Date Limite</label>
                                <input 
                                    type="date" 
                                    value={editingForm.deadline} 
                                    onChange={(e) => setEditingForm({...editingForm, deadline: e.target.value})}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Désigné à</label>
                                <select 
                                    value={editingForm.audience} 
                                    onChange={(e) => setEditingForm({...editingForm, audience: e.target.value})}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Sélectionner</option>
                                    <option value="Étudiant">Étudiant</option>
                                    <option value="Enseignant">Enseignant</option>
                                    <option value="Entreprise">Entreprise</option>
                                </select>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={() => setEditingForm(null)} className="mr-2 px-4 py-2 bg-gray-300 rounded">Annuler</button>
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Enregistrer</button>
                            </div>
                        </form>
                    </div>
                )}

                {isAddingForm && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                        <form onSubmit={handleAdd} className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Ajouter un Nouveau Formulaire</h2>
                            <div className="mb-4">
                                <label className="block mb-2">Nom du Formulaire</label>
                                <input 
                                    type="text" 
                                    value={newForm.name} 
                                    onChange={(e) => setNewForm({...newForm, name: e.target.value})}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Date Limite</label>
                                <input 
                                    type="date" 
                                    value={newForm.deadline} 
                                    onChange={(e) => setNewForm({...newForm, deadline: e.target.value})}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Désigné à</label>
                                <select 
                                    value={newForm.audience} 
                                    onChange={(e) => setNewForm({...newForm, audience: e.target.value})}
                                    className="w-full p-2 border rounded"
                                    required
                                >
                                    <option value="">Sélectionner</option>
                                    <option value="Étudiant">Étudiant</option>
                                    <option value="Enseignant">Enseignant</option>
                                    <option value="Entreprise">Entreprise</option>
                                </select>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={() => setIsAddingForm(false)} className="mr-2 px-4 py-2 bg-gray-300 rounded">Annuler</button>
                                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Ajouter</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
        </Layout>
    );
};

export default FormManagement;

