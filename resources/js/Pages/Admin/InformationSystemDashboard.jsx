import React, { useState } from 'react';
import Layout from '../Shared/Layout';


export default function InformationSystemDashboard() {
  const [activeTab, setActiveTab] = useState('students');
  const [files, setFiles] = useState({
    students: [],
    professors: [],
    companies: []
  });

  const handleFileChange = (type) => (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles(prev => ({
        ...prev,
        [type]: [...prev[type], file]
      }));
    }
  };

  const handleRemoveFile = (type, fileName) => {
    setFiles(prev => ({
      ...prev,
      [type]: prev[type].filter(file => file.name !== fileName)
    }));
  };

  const handleDownload = (file) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderFileList = (type) => (
    <div style={{ height: '200px', width: '100%', border: '1px solid #ccc', borderRadius: '4px', padding: '16px', overflowY: 'auto' }}>
      {files[type].length === 0 ? (
        <p style={{ color: '#666' }}>No files imported yet.</p>
      ) : (
        files[type].map((file, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
            <span 
              onClick={() => handleDownload(file)} 
              style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
            >
              {file.name}
            </span>
            <button onClick={() => handleRemoveFile(type, file.name)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              ✖
            </button>
          </div>
        ))
      )}
    </div>
  );

  return (
    <Layout>
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '24px' }}>
        {[
          { title: 'Students', count: 30 },
          { title: 'Companies', count: 5},
          { title: 'Professors', count: 25 },
          { title: 'PFE', count: 15 }
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

        {activeTab === 'students' && (
          <div>
            <label htmlFor="studentCsv" style={{ display: 'block', marginBottom: '8px' }}>Import Students CSV</label>
            <input id="studentCsv" type="file" accept=".csv" onChange={handleFileChange('students')} style={{ marginBottom: '16px' }} />
            {renderFileList('students')}
          </div>
        )}
        {activeTab === 'professors' && (
          <div>
            <label htmlFor="professorCsv" style={{ display: 'block', marginBottom: '8px' }}>Import Professors CSV</label>
            <input id="professorCsv" type="file" accept=".csv" onChange={handleFileChange('professors')} style={{ marginBottom: '16px' }} />
            {renderFileList('professors')}
          </div>
        )}
        {activeTab === 'companies' && (
          <div>
            <label htmlFor="companyCsv" style={{ display: 'block', marginBottom: '8px' }}>Import Companies CSV</label>
            <input id="companyCsv" type="file" accept=".csv" onChange={handleFileChange('companies')} style={{ marginBottom: '16px' }} />
            {renderFileList('companies')}
          </div>
        )}
      </div>
    </div>
    </Layout>
  );
}