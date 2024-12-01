import React, { useState } from 'react';
import Layout from '../Shared/Layout';


export default function SoftwareEngineeringDashboard() {
  const [activeTab, setActiveTab] = useState('students');
  const [files, setFiles] = useState({
    students: [],
    professors: [],
    companies: []
  });
  const [students, setStudents] = useState([
    { id: 1, nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@email.com', option: 'GL', moyenne: '14.5' },
    { id: 2, nom: 'Martin', prenom: 'Marie', email: 'marie.martin@email.com', option: 'GL', moyenne: '16.2' },
    { id: 3, nom: 'Bernard', prenom: 'Paul', email: 'paul.bernard@email.com', option: 'GL', moyenne: '15.8' },
  ]);
  const [professors, setProfessors] = useState([
    { id: 1, nom: 'Smith', prenom: 'John', email: 'john.smith@univ.com', dateRecrutement: '2015-09-01', grade: 'Professeur' },
    { id: 2, nom: 'Johnson', prenom: 'Emily', email: 'emily.johnson@univ.com', dateRecrutement: '2018-01-15', grade: 'Maître de conférences' },
  ]);
  const [companies, setCompanies] = useState([
    { id: 1, email: 'contact@techcorp.com', nom: 'Dubois', prenom: 'Pierre', denomination: 'TechCorp' },
    { id: 2, email: 'info@innovatech.com', nom: 'Lefebvre', prenom: 'Sophie', denomination: 'InnovaTech' },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [newEntry, setNewEntry] = useState({});

  const handleFileChange = (type) => (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        setFiles(prev => ({
          ...prev,
          [type]: [...prev[type], { file, content }]
        }));
      };
      reader.readAsText(file);
    }
  };

  const handleRemoveFile = (type, fileName) => {
    setFiles(prev => ({
      ...prev,
      [type]: prev[type].filter(fileObj => fileObj.file.name !== fileName)
    }));
  };

  const handleDownloadFile = (fileObj) => {
    const blob = new Blob([fileObj.content], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileObj.file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleEdit = (id) => {
    setEditingId(id);
    let entryToEdit;
    switch (activeTab) {
      case 'students':
        entryToEdit = students.find(student => student.id === id);
        break;
      case 'professors':
        entryToEdit = professors.find(professor => professor.id === id);
        break;
      case 'companies':
        entryToEdit = companies.find(company => company.id === id);
        break;
    }
    setNewEntry({ ...entryToEdit });
  };

  const handleSave = (id) => {
    if (id) {
      switch (activeTab) {
        case 'students':
          setStudents(students.map(student => 
            student.id === id ? { ...student, ...newEntry, option: 'GL' } : student
          ));
          break;
        case 'professors':
          setProfessors(professors.map(professor => 
            professor.id === id ? { ...professor, ...newEntry } : professor
          ));
          break;
        case 'companies':
          setCompanies(companies.map(company => 
            company.id === id ? { ...company, ...newEntry } : company
          ));
          break;
      }
    } else {
      const newId = Math.max(...(activeTab === 'students' ? students : activeTab === 'professors' ? professors : companies).map(e => e.id)) + 1;
      switch (activeTab) {
        case 'students':
          setStudents([...students, { id: newId, ...newEntry, option: 'GL' }]);
          break;
        case 'professors':
          setProfessors([...professors, { id: newId, ...newEntry }]);
          break;
        case 'companies':
          setCompanies([...companies, { id: newId, ...newEntry }]);
          break;
      }
    }
    setEditingId(null);
    setNewEntry({});
  };

  const handleDelete = (id) => {
    switch (activeTab) {
      case 'students':
        setStudents(students.filter(student => student.id !== id));
        break;
      case 'professors':
        setProfessors(professors.filter(professor => professor.id !== id));
        break;
      case 'companies':
        setCompanies(companies.filter(company => company.id !== id));
        break;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({ ...prev, [name]: value }));
  };

  const renderTable = () => {
    let data, columns;
    switch (activeTab) {
      case 'students':
        data = students;
        columns = ['NOM', 'PRENOM', 'EMAIL', 'OPTION', 'MOYENNE'];
        break;
      case 'professors':
        data = professors;
        columns = ['NOM', 'PRENOM', 'EMAIL', 'DATE DE RECRUTEMENT', 'GRADE'];
        break;
      case 'companies':
        data = companies;
        columns = ['EMAIL', 'NOM', 'PRENOM', 'DENOMINATION'];
        break;
    }

    return (
      <div style={{ overflowX: 'auto', marginTop: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{column}</th>
              ))}
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr key={entry.id}>
                {columns.map(column => (
                  <td key={column} style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {editingId === entry.id && column.toLowerCase() !== 'option' ? (
                      <input
                        type="text"
                        name={column.toLowerCase().replace(/ /g, '')}
                        value={newEntry[column.toLowerCase().replace(/ /g, '')] || ''}
                        onChange={handleInputChange}
                        style={{ width: '100%' }}
                      />
                    ) : (
                      entry[column.toLowerCase().replace(/ /g, '')]
                    )}
                  </td>
                ))}
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {editingId === entry.id ? (
                    <button onClick={() => handleSave(entry.id)}>Save</button>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(entry.id)}>Edit</button>
                      <button onClick={() => handleDelete(entry.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderNewEntryForm = () => {
    let fields;
    switch (activeTab) {
      case 'students':
        fields = ['nom', 'prenom', 'email', 'moyenne'];
        break;
      case 'professors':
        fields = ['nom', 'prenom', 'email', 'daterecrutement', 'grade'];
        break;
      case 'companies':
        fields = ['email', 'nom', 'prenom', 'denomination'];
        break;
    }

    return (
      <div style={{ marginTop: '20px' }}>
        <h3>Add New {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (fields.every(field => newEntry[field] && newEntry[field].trim() !== '')) {
            handleSave();
          } else {
            alert('Please fill in all fields');
          }
        }}>
          {fields.map(field => (
            <input
              key={field}
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              placeholder={field.toUpperCase()}
              value={newEntry[field] || ''}
              onChange={handleInputChange}
              style={{ marginRight: '10px', marginBottom: '10px' }}
              required
            />
          ))}
          <button type="submit">Add {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}</button>
        </form>
      </div>
    );
  };

  return (
    <Layout>

    <div style={{ padding: '24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '24px' }}>
        {[
          { title: 'Students', count: students.length },
          { title: 'Companies', count: companies.length },
          { title: 'Professors', count: professors.length },
          { title: 'PFE', count: 55 }
        ].map((item, index) => (
          <div key={index} style={{ background: 'white', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '16px', fontWeight: 500 }}>{item.title}</span>
              <span style={{ fontSize: '24px', fontWeight: 700 }}>{item.count}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>Import and Manage CSV Files</h2>

        <div style={{ borderBottom: '1px solid #ccc', marginBottom: '16px' }}>
          <button
            onClick={() => setActiveTab('students')}
            style={{ padding: '8px 16px', background: activeTab === 'students' ? '#f0f0f0' : 'transparent', border: 'none', cursor: 'pointer' }}
          >
            Students
          </button>
          <button
            onClick={() => setActiveTab('professors')}
            style={{ padding: '8px 16px', background: activeTab === 'professors' ? '#f0f0f0' : 'transparent', border: 'none', cursor: 'pointer' }}
          >
            Professors
          </button>
          <button
            onClick={() => setActiveTab('companies')}
            style={{ padding: '8px 16px', background: activeTab === 'companies' ? '#f0f0f0' : 'transparent', border: 'none', cursor: 'pointer' }}
          >
            Companies
          </button>
        </div>

        <div>
          <label htmlFor={`${activeTab}Csv`} style={{ display: 'block', marginBottom: '8px' }}>Import {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} CSV</label>
          <input id={`${activeTab}Csv`} type="file" accept=".csv" onChange={handleFileChange(activeTab)} style={{ marginBottom: '16px' }} />
          {files[activeTab].map((fileObj, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
              <span 
                onClick={() => handleDownloadFile(fileObj)} 
                style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
              >
                {fileObj.file.name}
              </span>
              <button onClick={() => handleRemoveFile(activeTab, fileObj.file.name)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                ✖
              </button>
            </div>
          ))}
        </div>

        {renderTable()}
        {renderNewEntryForm()}
      </div>
    </div>
    </Layout>
  );
}

