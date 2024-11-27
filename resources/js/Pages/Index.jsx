import React from 'react';
import { Head } from '@inertiajs/react';

export default function Index({ users }) {
    return (
        <div>
            <Head title="Liste des Utilisateurs" />
            <h1 className="text-2xl font-bold mb-4">Liste des Utilisateurs</h1>
            <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Nom</th>
                        <th className="border px-4 py-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border px-4 py-2">{user.id}</td>
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
