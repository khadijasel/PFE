import React from 'react';
import Layout from '../Shared/Layout';

const StudentsList = () => {
    const students = [
        {
            name: 'Khadija Seladji',
            email: 'khadija.seladji@example.com',
            speciality: 'GL',
            grade: '13.65',
        },
        {
            name: 'Hamaddouche Romaissa',
            email: 'romaissa.hamaddouche@example.com',
            speciality: 'AI',
            grade: '10.11',
        },
        {
            name: 'Amine Benali',
            email: 'amine.benali@example.com',
            speciality: 'SIC',
            grade: '15.45',
        },
    ];

    return (
        <Layout>
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Students List</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="rechercher un étudiant"
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <table className="w-full border border-gray-200 text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 border border-gray-200">Nom</th>
                        <th className="p-3 border border-gray-200">Email</th>
                        <th className="p-3 border border-gray-200">Speciality</th>
                        <th className="p-3 border border-gray-200">Moyenne</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100">
                    {students.map((student, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="p-3 border border-gray-200">{student.name}</td>
                            <td className="p-3 border border-gray-200">{student.email}</td>
                            <td className="p-3 border border-gray-200">{student.speciality}</td>
                            <td className="p-3 border border-gray-200">{student.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
        </Layout>
    );
};

export default StudentsList;