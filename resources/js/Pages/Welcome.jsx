import React, { useState } from 'react';
import { Head } from '@inertiajs/react';

export default function Welcome() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    // Simuler une requête de soumission
    setTimeout(() => {
      if (email === '') {
        setErrors({ email: 'L\'adresse email est requise.' });
      } else {
        setErrors({});
        alert('Email envoyé avec succès !');
      }
      setProcessing(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen relative bg-gray-900 flex flex-col items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-[url('/graduates-bg.jpg')] bg-cover bg-center"
        style={{ filter: 'brightness(0.3)' }}
        aria-hidden="true"
      />

      <Head title="Bienvenue | BORCELLE" />

      <div className="relative z-10 w-full max-w-md space-y-8 text-center">
        <div className="flex justify-center">
          <div className="bg-white p-2 rounded-lg">
            <svg
              className="w-8 h-8 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14v7"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-4 text-white">
          <h1 className="text-3xl font-bold tracking-tight">
            Bienvenue sur BORCELLE !
          </h1>
          <p className="text-sm text-gray-300">
            Simplifiez la gestion de vos Projets de Fin d'Études grâce à un espace collaboratif dédié.
          </p>
          <p className="text-sm text-gray-300">
            Un email contenant votre mot de passe vous a été envoyé pour accéder à votre compte.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-auto rounded-lg border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Entrer votre email"
              aria-label="Adresse email"
            />
            <button
              type="submit"
              disabled={processing}
              className="flex-none rounded-lg bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {processing ? 'Envoi...' : 'Envoyer'}
            </button>
          </div>
          {errors.email && (
            <p className="text-sm text-red-400" role="alert">{errors.email}</p>
          )}
        </form>
      </div>
    </main>
  );
}
