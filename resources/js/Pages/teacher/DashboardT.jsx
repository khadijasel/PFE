import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Layout from '../Shared/Layout';
import { FaLightbulb, FaUserGraduate, FaGraduationCap, FaProjectDiagram, FaCheckSquare, FaTrash, FaPlus } from 'react-icons/fa';
import CalendarComponent from '../Shared/Components/Calendar';
import { Link } from '@inertiajs/react';

export default function TeacherDashboard() {
    const teacher = {
        name: "Dr. Martin Lefebvre",
        id: "ENS001",
        department: "Informatique"
    };

    const supervisedProjects = [
        { id: 1, title: "Système de recommandation basé sur l'IA pour une plateforme e-commerce" },
        { id: 2, title: "Développement d'un chatbot pour le service client utilisant le NLP" },
        { id: 3, title: "Optimisation des performances d'une application web à grande échelle" }
    ];

    const upcomingJuries = [
        { id: 1, projectTitle: "Système de détection de fraude bancaire", date: "2023-07-20" },
        { id: 2, projectTitle: "Plateforme de e-learning adaptative", date: "2023-07-25" },
        { id: 3, projectTitle: "Application de réalité augmentée pour l'éducation", date: "2023-08-05" }
    ];

    const initialTodos = [
        { id: 1, task: "Project proposal", completed: false },
        { id: 2, task: "Valider project proposal", completed: true },
        { id: 3, task: "Monitor supervised project", completed: false },
    ];

    const [todos, setTodos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), task: newTodo.trim(), completed: false }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <Layout>
            <Head title="Dashboard Enseignant" />
            <div className="max-w-7xl mx-auto p-6">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <FaLightbulb className="text-3xl text-blue-500" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Bienvenue, {teacher.name}!
                            </h2>
                            <p className="text-gray-600">
                                Explorez les features pour gérer vos informations et accéder aux ressources utiles
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <Link href="/teacher/pfe-ideas" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex flex-col items-center text-center">
                                    <FaLightbulb className="text-4xl text-blue-500 mb-3" />
                                    <h3 className="font-semibold">Liste des idées PFE</h3>
                                </div>
                            </Link>
                            <Link href="/teacher/students" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex flex-col items-center text-center">
                                    <FaUserGraduate className="text-4xl text-green-500 mb-3" />
                                    <h3 className="font-semibold">Liste des étudiants</h3>
                                </div>
                            </Link>
                            <Link href="/teacher/defense" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex flex-col items-center text-center">
                                    <FaGraduationCap className="text-4xl text-yellow-500 mb-3" />
                                    <h3 className="font-semibold">Soutenance</h3>
                                </div>
                            </Link>
                            <Link href="/teacher/supervised-projects" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex flex-col items-center text-center">
                                    <FaProjectDiagram className="text-4xl text-purple-500 mb-3" />
                                    <h3 className="font-semibold">Projets supervisés</h3>
                                </div>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-4">Projets supervisés</h3>
                                <ul className="space-y-3">
                                    {supervisedProjects.map((project) => (
                                        <li key={project.id} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                                            <FaProjectDiagram className="text-purple-500 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">{project.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-4">Jurys à venir</h3>
                                <ul className="space-y-3">
                                    {upcomingJuries.map((jury) => (
                                        <li key={jury.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                            <span className="text-sm">{jury.projectTitle}</span>
                                            <span className="text-xs text-gray-500 font-medium px-2 py-1 bg-gray-200 rounded-full">
                                                {jury.date}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Calendrier</h3>
                            <div className="h-[300px]">
                                <CalendarComponent />
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">TO DO</h3>
                            <div className="flex items-center mb-4">
                                <input
                                    type="text"
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)}
                                    className="flex-grow px-4 py-2 border rounded-l-lg"
                                    placeholder="Ajouter une tâche..."
                                />
                                <button onClick={addTodo} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg">
                                    <FaPlus />
                                </button>
                            </div>
                            <ul className="space-y-3">
                                {todos.map((todo) => (
                                    <li key={todo.id} className="flex items-center gap-3">
                                        <div
                                            className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer
                                                ${todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}
                                            onClick={() => toggleTodo(todo.id)}
                                        >
                                            {todo.completed && <FaCheckSquare className="text-white text-sm" />}
                                        </div>
                                        <span className={`flex-grow text-sm ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                            {todo.task}
                                        </span>
                                        <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-600">
                                            <FaTrash />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
