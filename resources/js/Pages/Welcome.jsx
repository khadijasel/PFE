import React from 'react';

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">PFE Manager</h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Bienvenue sur PFE Manager
          </h2>
          <p className="text-xl text-gray-600">
            La plateforme de gestion des projets de fin d'études pour les étudiants, enseignants et entreprises.
          </p>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
          &copy; 2023 PFE Manager. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
