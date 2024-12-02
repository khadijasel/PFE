'use client'

import { useState } from 'react';
import Layout from '../Shared/Layout';


const initialPFEs = [
  { id: 1, title: "AI in Healthcare", status: "completed", studentName: "Alice Johnson", specialty: "Artificial Intelligence", defenseScheduled: false },
  { id: 2, title: "Secure Network Protocols", status: "completed", studentName: "Bob Smith", specialty: "Network and ISS", defenseScheduled: true, date: new Date(2023, 5, 16, 14, 30), location: "Room B205" },
  { id: 3, title: "Mobile App for Education", status: "in progress", studentName: "Charlie Brown", specialty: "Software Engineering", defenseScheduled: false },
  { id: 4, title: "Data Mining in Social Networks", status: "completed", studentName: "Diana Ross", specialty: "Information Systeme", defenseScheduled: false },
];

export default function PFEDefenseManagement() {
  const [pfeList, setPFEList] = useState(initialPFEs);
  const [date, setDate] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [newDefense, setNewDefense] = useState({
    studentName: '',
    projectTitle: '',
    date: '',
    time: '',
    location: '',
    specialty: ''
  });

  const filteredPFEs = pfeList.filter(pfe =>
    (!date || (pfe.date && pfe.date.toISOString().split('T')[0] === date)) &&
    (!specialty || pfe.specialty === specialty)
  );

  const scheduledDefenses = pfeList.filter(pfe => pfe.defenseScheduled);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedPFEList = pfeList.map(pfe => 
      pfe.id === parseInt(newDefense.id) 
        ? {
            ...pfe, 
            defenseScheduled: true, 
            date: new Date(`${newDefense.date}T${newDefense.time}`),
            location: newDefense.location
          } 
        : pfe
    );
    setPFEList(updatedPFEList);
    setShowForm(false);
    setNewDefense({
      id: '',
      studentName: '',
      projectTitle: '',
      date: '',
      time: '',
      location: '',
      specialty: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDefense((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">PFE and Defense Management</h1>
        
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-2">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">Select specialty</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Network and ISS">Network and ISS</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Information Systeme">Information Systeme</option>
        </select>
        <button
          onClick={() => { setDate(''); setSpecialty(''); }}
          className="border px-4 py-2 rounded"
        >
          Clear Filters
        </button>
      </div>

      {/* PFE List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">PFE List</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Title</th>
              <th className="border p-2">Student</th>
              <th className="border p-2">Specialty</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPFEs.filter(pfe => !pfe.defenseScheduled).map((pfe) => (
              <tr key={pfe.id} className="bg-gray-100">
                <td className="border p-2">{pfe.title}</td>
                <td className="border p-2">{pfe.studentName}</td>
                <td className="border p-2">{pfe.specialty}</td>
                <td className="border p-2">{pfe.status}</td>
                <td className="border p-2">
                  {pfe.status === 'completed' && !pfe.defenseScheduled && (
                    <button
                      onClick={() => {
                        setNewDefense({
                          id: pfe.id.toString(),
                          studentName: pfe.studentName,
                          projectTitle: pfe.title,
                          specialty: pfe.specialty
                        });
                        setShowForm(true);
                      }}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Schedule Defense
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* New Defense Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-lg space-y-4">
            <h2 className="text-xl font-semibold">Schedule Defense</h2>
            <div className="space-y-2">
              <label className="block">Student Name</label>
              <input
                type="text"
                name="studentName"
                value={newDefense.studentName}
                onChange={handleInputChange}
                className="border px-4 py-2 rounded w-full"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label className="block">Project Title</label>
              <input
                type="text"
                name="projectTitle"
                value={newDefense.projectTitle}
                onChange={handleInputChange}
                className="border px-4 py-2 rounded w-full"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label className="block">Date</label>
              <input
                type="date"
                name="date"
                value={newDefense.date}
                onChange={handleInputChange}
                className="border px-4 py-2 rounded w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="block">Time</label>
              <input
                type="time"
                name="time"
                value={newDefense.time}
                onChange={handleInputChange}
                className="border px-4 py-2 rounded w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="block">Location</label>
              <input
                type="text"
                name="location"
                value={newDefense.location}
                onChange={handleInputChange}
                className="border px-4 py-2 rounded w-full"
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="border px-4 py-2 rounded bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Scheduled Defenses */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Scheduled Defenses</h2>
        <div className="grid gap-4 bg-white p-4 rounded-lg shadow">
          {scheduledDefenses.map((defense) => (
            <div key={defense.id} className="border rounded-lg p-4 shadow">
              <h2 className="font-bold">{defense.studentName}</h2>
              <p>{defense.title}</p>
              <p><strong>Specialty:</strong> {defense.specialty}</p>
              <p><strong>Date:</strong> {defense.date.toDateString()}</p>
              <p><strong>Time:</strong> {defense.date.toLocaleTimeString()}</p>
              <p><strong>Location:</strong> {defense.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
}

