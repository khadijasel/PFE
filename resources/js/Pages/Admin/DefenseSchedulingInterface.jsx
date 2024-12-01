import { useState } from 'react';
import Layout from '../Shared/Layout';

const defenses = [
  { id: 1, studentName: "Alice Johnson", projectTitle: "AI in Healthcare", date: new Date(2023, 5, 15, 10, 0), location: "Room A101", specialty: "Artificial Intelligence" },
  { id: 2, studentName: "Bob Smith", projectTitle: "Secure Network Protocols", date: new Date(2023, 5, 16, 14, 30), location: "Room B205", specialty: "Network and ISS" },
  { id: 3, studentName: "Charlie Brown", projectTitle: "Mobile App for Education", date: new Date(2023, 5, 17, 11, 0), location: "Room C303", specialty: "Software Engineering" },
  { id: 4, studentName: "Diana Ross", projectTitle: "Data Mining in Social Networks", date: new Date(2023, 5, 18, 9, 0), location: "Room A102", specialty: "Information Systeme" },
];

export default function DefenseSchedulingInterface() {
  const [date, setDate] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [newDefense, setNewDefense] = useState({
    studentName: '',
    projectTitle: '',
    date: '',
    time: '',
    location: '',
    specialty: ''
  });

  const filteredDefenses = defenses.filter(defense =>
    (!date || defense.date.toISOString().split('T')[0] === date) &&
    (!specialty || defense.specialty === specialty)
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add new defense to the list
    const newDefenseItem = { ...newDefense, id: defenses.length + 1, date: new Date(`${newDefense.date}T${newDefense.time}`) };
    defenses.push(newDefenseItem);
    setShowForm(false); // Hide the form after submission
    setNewDefense({
      studentName: '',
      projectTitle: '',
      date: '',
      time: '',
      location: '',
      specialty: ''
    }); // Reset form fields
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDefense((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <div className="p-8 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Defense Scheduling</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-black text-white px-4 py-2 rounded"
          >
            + Add New Defense
          </button>
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

        {/* New Defense Form */}
        {showForm && (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold">Add New Defense</h2>
            <div className="space-y-2">
              <label className="block">Student Name</label>
              <input
                type="text"
                name="studentName"
                value={newDefense.studentName}
                onChange={handleInputChange}
                className="border px-4 py-2 rounded w-full"
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
              />
            </div>
            <div className="space-y-2">
              <label className="block">Date (jj/mm/aaaa)</label>
              <input
                type="date"
                name="date"
                value={newDefense.date}
                onChange={handleInputChange}
                className="border px-4 py-2 rounded w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="block">Time (--:--)</label>
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
            <div className="space-y-2">
              <label className="block">Specialty</label>
              <select
                name="specialty"
                value={newDefense.specialty}
                onChange={handleInputChange}
                className="border px-4 py-2 rounded w-full"
              >
                <option value="">Select specialty</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Network and ISS">Network and ISS</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Information Systeme">Information Systeme</option>
              </select>
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
        )}

        {/* Defense List */}
        <div className="grid gap-4 bg-white p-4 rounded-lg shadow">
          {filteredDefenses.map((defense) => (
            <div key={defense.id} className="border rounded-lg p-4 shadow">
              <h2 className="font-bold">{defense.studentName}</h2>
              <p>{defense.projectTitle}</p>
              <p><strong>Specialty:</strong> {defense.specialty}</p>
              <p><strong>Date:</strong> {defense.date.toDateString()}</p>
              <p><strong>Time:</strong> {defense.date.toLocaleTimeString()}</p>
              <p><strong>Location:</strong> {defense.location}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
