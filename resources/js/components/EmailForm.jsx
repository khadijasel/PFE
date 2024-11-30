import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';



function EmailForm({ flash }) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        Inertia.post('/send-password', { email }, {
            onError: (errors) => {
                setError(errors.email || 'Une erreur est survenue.');
            },
        });
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2>Recevez un mot de passe temporaire</h2>
            {flash.message && <p style={{ color: 'green' }}>{flash.message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>Adresse e-mail :</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Entrez votre adresse e-mail"
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Envoyer
                </button>
            </form>
        </div>
    );
}

export default EmailForm;
