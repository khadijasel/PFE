import React, { useState } from 'react';
import Layout from '../Shared/Layout'; // Assurez-vous que le chemin est correct
import SoftwareEngineeringDashboard from './SoftwareEngineeringDashboard';
import NetworkIssDashboard from './NetworkIssDashboard';
import ArtificialIntelligenceDashboard from './ArtificialIntelligenceDashboard';
import InformationSystemDashboard from './InformationSystemDashboard';

export default function DashboardMain() {
  const [activeSpeciality, setActiveSpeciality] = useState('software-engineering');

  const renderDashboard = () => {
    switch(activeSpeciality) {
      case 'software-engineering':
        return <SoftwareEngineeringDashboard />;
      case 'network-iss':
        return <NetworkIssDashboard />;
      case 'artificial-intelligence':
        return <ArtificialIntelligenceDashboard />;
      case 'information-system':
        return <InformationSystemDashboard />;
      default:
        return <div>Please select a speciality</div>;
    }
  };

  return (
    <Layout> {/* Intégration du Layout ici */}
      <div className="flex min-h-screen bg-gray-100">
        {/* Barre latérale */}
        <Sidebar userRole="admin" />

        {/* Contenu principal */}
        <div className="flex-1">
          <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveSpeciality('software-engineering')}
                  className={`px-3 py-4 text-sm font-medium border-b-2 ${
                    activeSpeciality === 'software-engineering'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Software Engineering
                </button>
                <button
                  onClick={() => setActiveSpeciality('network-iss')}
                  className={`px-3 py-4 text-sm font-medium border-b-2 ${
                    activeSpeciality === 'network-iss'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Network and ISS
                </button>
                <button
                  onClick={() => setActiveSpeciality('artificial-intelligence')}
                  className={`px-3 py-4 text-sm font-medium border-b-2 ${
                    activeSpeciality === 'artificial-intelligence'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Artificial Intelligence
                </button>
                <button
                  onClick={() => setActiveSpeciality('information-system')}
                  className={`px-3 py-4 text-sm font-medium border-b-2 ${
                    activeSpeciality === 'information-system'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Information System
                </button>
              </div>
            </div>
          </div>

          {/* Rendu dynamique du tableau de bord sélectionné */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderDashboard()}
          </main>
        </div>
      </div>
    </Layout> 
  );
}
