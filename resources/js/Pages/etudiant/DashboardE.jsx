import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '../Shared/Layout';
import { FaGraduationCap, FaClipboardList, FaCog, FaCheckCircle, FaChevronRight, FaPlusCircle } from 'react-icons/fa';
import CalendarComponent from '../Shared/Components/Calendar';

export default function StudentDashboard() {
    const student = {
        name: "Marwa",
        id: "ETU001",
        option: "Génie Logiciel"
    };

    const [todos, setTodos] = useState([
        { id: 1, task: "Soumis le projet", completed: true },
        { id: 2, task: "Élaborer un plan de recherche", completed: false },
        { id: 3, task: "Revoir les annales", completed: false }
    ]);
    const [newTodo, setNewTodo] = useState('');

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), task: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    // Calculate progress percentages for the circle
    const progress = {
        done: (todos.filter(todo => todo.completed).length / todos.length) * 100,
        todo: (todos.filter(todo => !todo.completed).length / todos.length) * 100
    };
    progress.inProgress = 100 - progress.done - progress.todo;

    return (
        <Layout>
            <Head title="Dashboard Étudiant" />
            <div className="max-w-7xl mx-auto p-6">
                {/* Welcome Header */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Welcome back, {student.name}!
                            </h2>
                            <p className="text-gray-600">
                                Explore the features to manage your information and access useful resources!
                            </p>
                        </div>
                        <img 
                            src="/images/rapa.png" 
                            alt="Graduation"
                            className="h-20 object-contain"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {/* Status of Steps */}
                            <Link href="/student/steps" className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                                <FaClipboardList className="text-4xl text-blue-500 mb-3" />
                                <h3 className="font-semibold text-sm text-center">Status of steps</h3>
                                <FaChevronRight className="mt-2 text-gray-400" />
                            </Link>

                            {/* My Project */}
                            <Link href="/student/project" className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                                <FaCog className="text-4xl text-gray-600 mb-3" />
                                <h3 className="font-semibold text-sm text-center">My project</h3>
                                <FaChevronRight className="mt-2 text-gray-400" />
                            </Link>

                            {/* Defense */}
                            <Link href="/student/defense" className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                                <FaGraduationCap className="text-4xl text-green-500 mb-3" />
                                <h3 className="font-semibold text-sm text-center">Defense</h3>
                                <FaChevronRight className="mt-2 text-gray-400" />
                            </Link>
                        </div>

                        {/* Progress Circle */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="relative w-64 h-64 mx-auto">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#E5E7EB"
                                        strokeWidth="10"
                                    />
                                    {/* Done segment */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#10B981"
                                        strokeWidth="10"
                                        strokeDasharray={`${progress.done} ${100 - progress.done}`}
                                        strokeDashoffset="25"
                                        strokeLinecap="round"
                                    />
                                    {/* In Progress segment */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#3B82F6"
                                        strokeWidth="10"
                                        strokeDasharray={`${progress.inProgress} ${100 - progress.inProgress}`}
                                        strokeDashoffset={`${-progress.done + 25}`}
                                        strokeLinecap="round"
                                    />
                                    {/* Todo segment */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#F59E0B"
                                        strokeWidth="10"
                                        strokeDasharray={`${progress.todo} ${100 - progress.todo}`}
                                        strokeDashoffset={`${-(progress.done + progress.inProgress) + 25}`}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <span className="text-3xl font-bold text-gray-700">Progress</span>
                                    <span className="text-lg text-gray-500">{Math.round(progress.done)}% Complete</span>
                                </div>
                            </div>
                            <div className="flex justify-center gap-6 mt-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                    <span className="text-sm font-medium">Done</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                    <span className="text-sm font-medium">In Progress</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                                    <span className="text-sm font-medium">To do</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Calendar */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Février</h3>
                            <div className="h-[300px]">
                                <CalendarComponent />
                            </div>
                        </div>

                        {/* TO DO */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">TO DO</h3>
                            <div className="flex gap-2 mb-4">
                                <input
                                    type="text"
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)}
                                    className="border border-gray-300 rounded-md p-2 flex-1"
                                    placeholder="Ajouter une tâche"
                                />
                                <button
                                    onClick={addTodo}
                                    className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
                                >
                                    <FaPlusCircle className="mr-2" />
                                    Ajouter
                                </button>
                            </div>
                            <ul className="space-y-3">
                                {todos.map((todo) => (
                                    <li key={todo.id} className="flex items-center gap-3">
                                        <button 
                                            onClick={() => toggleTodo(todo.id)}
                                            className={`w-5 h-5 rounded border-2 flex items-center justify-center
                                                ${todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}
                                        >
                                            {todo.completed && <FaCheckCircle className="text-white text-sm" />}
                                        </button>
                                        <span className={`text-sm ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                            {todo.task}
                                        </span>
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
