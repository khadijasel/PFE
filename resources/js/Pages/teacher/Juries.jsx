import React, { useState } from 'react';

const Juries = () => {
  // Données fictives représentant les soutenances
  const presentations = [
    { id: 1, title: 'Système de Surveillance', studentName: 'Ali Ahmed', date: '2024-05-10', time: '10:00' },
    { id: 2, title: 'Application Web PFE', studentName: 'Sophie Martin', date: '2024-05-12', time: '14:00' },
    { id: 3, title: 'Gestion Documentaire', studentName: 'Karim Ben', date: '2024-05-15', time: '09:30' },
  ];

  // État pour stocker les soutenances sélectionnées
  const [selectedSoutenances, setSelectedSoutenances] = useState([]);

  // Gère la sélection/désélection d'une soutenance
  const handleSelect = (id) => {
    if (selectedSoutenances.includes(id)) {
      setSelectedSoutenances(selectedSoutenances.filter((soutenanceId) => soutenanceId !== id));
    } else {
      setSelectedSoutenances([...selectedSoutenances, id]);
    }
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ color: '#003366', textAlign: 'center', marginBottom: '20px' }}>Choisir des Soutenances pour être Jury</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {presentations.map((presentation) => (
          <li key={presentation.id} style={{ 
            backgroundColor: '#f9f9f9', 
            border: '1px solid #ccc', 
            padding: '15px', 
            borderRadius: '8px', 
            marginBottom: '20px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
          }}>
            <strong style={{ color: '#003366', fontSize: '18px' }}>{presentation.title}</strong><br />
            <span style={{ color: '#666' }}>Étudiant : <strong style={{ color: '#000' }}>{presentation.studentName}</strong></span><br />
            <span style={{ color: '#666' }}>Date : {presentation.date}</span><br />
            <span style={{ color: '#666' }}>Heure : {presentation.time}</span><br />
            <button 
              onClick={() => handleSelect(presentation.id)} 
              style={{ 
                marginTop: '10px', 
                padding: '8px 12px', 
                backgroundColor: selectedSoutenances.includes(presentation.id) ? 'black' : '#003366', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                fontWeight: 'bold' 
              }}
            >
              {selectedSoutenances.includes(presentation.id) ? 'Désélectionner' : 'Choisir comme Jury'}
            </button>
          </li>
        ))}
      </ul>
      {selectedSoutenances.length > 0 && (
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#003366', fontSize: '16px' }}>
          Vous avez choisi les soutenances ID: <strong>{selectedSoutenances.join(', ')}</strong>
        </p>
      )}
    </div>
  );
};

export default Juries;
