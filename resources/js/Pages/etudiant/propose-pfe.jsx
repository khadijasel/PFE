import React, { useEffect, useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import Layout from '../Shared/Layout';
import { FaLightbulb, FaCode, FaTools, FaGraduationCap, FaEnvelope, FaCheck, FaUserPlus, FaTimesCircle, FaTimes } from 'react-icons/fa';

const ProposePFE = () => {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        id: '',
        titre: '',
        resume: '',
        technologies: '',
        besoins_materiel: '',
        type_pfe: 'Classique',
        email: '',
    });

    const { proposition, success, pendingInvitation, sentInvitations } = usePage().props;
    const [showInvitationDetails, setShowInvitationDetails] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (proposition && !isEditing) {
            setData({
                id: proposition.id,
                titre: proposition.titre || '',
                resume: proposition.resume || '',
                technologies: proposition.technologies || '',
                besoins_materiel: proposition.besoins_materiel || '',
                type_pfe: proposition.type_pfe || 'Classique',
                email: proposition.email || '',
            });
            setIsEditing(true);
        }
    }, [proposition, setData, isEditing]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.id) {
            put(route('student.propose-pfe.update', data.id), {
                preserveState: true,
                preserveScroll: true,
            });
        } else {
            post(route('student.propose-pfe.store'), {
                preserveState: true,
                preserveScroll: true,
                onSuccess: (page) => {
                    setData('id', page.props.proposition.id);
                    setIsEditing(true);
                },
            });
        }
    };

    const handleInvitationResponse = (invitationId, status) => {
        post(route('student.invitation.respond', { id: invitationId, status: status }), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleCancelInvitation = (invitationId) => {
        if (confirm('Êtes-vous sûr de vouloir annuler cette invitation ?')) {
            post(route('student.invitation.cancel', invitationId), {
                preserveState: true,
                preserveScroll: true,
            });
        }
    };

    const inputClass = "mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-base text-gray-700";
    const labelClass = "block font-medium text-base text-gray-700 mb-2";

    return (
        <Layout>
            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
                <div className="max-w-4xl mx-auto">
                    {pendingInvitation && (
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4" role="alert">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <FaUserPlus className="h-5 w-5 text-blue-400" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-blue-700">
                                        Vous avez été invité à collaborer sur un PFE par {pendingInvitation.sender.name}
                                    </p>
                                    <button
                                        onClick={() => setShowInvitationDetails(!showInvitationDetails)}
                                        className="text-blue-600 hover:text-blue-800 underline mt-1"
                                    >
                                        {showInvitationDetails ? "Masquer les détails" : "Voir les détails"}
                                    </button>
                                    {showInvitationDetails && (
                                        <div className="mt-2">
                                            <h4 className="font-bold">{pendingInvitation.proposition.titre}</h4>
                                            <p>{pendingInvitation.proposition.resume}</p>
                                            <p><strong>Technologies:</strong> {pendingInvitation.proposition.technologies}</p>
                                        </div>
                                    )}
                                    <div className="mt-2">
                                        <button
                                            onClick={() => handleInvitationResponse(pendingInvitation.id, 'accepted')}
                                            className="mr-2 bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded text-xs"
                                        >
                                            Accepter
                                        </button>
                                        <button
                                            onClick={() => handleInvitationResponse(pendingInvitation.id, 'rejected')}
                                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-xs"
                                        >
                                            Refuser
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {sentInvitations && sentInvitations.length > 0 && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Invitations envoyées</h3>
                            {sentInvitations.map((invitation) => (
                                <div key={invitation.id} className="flex justify-between items-center mb-2">
                                    <span>{invitation.receiver.name}</span>
                                    <button
                                        onClick={() => handleCancelInvitation(invitation.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4" role="alert">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <FaCheck className="h-5 w-5 text-green-400" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-green-700">{success}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                {isEditing ? 'Modifier votre proposition de PFE' : 'Proposer un sujet de PFE'}
                            </h3>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                            <form onSubmit={handleSubmit} className="space-y-6 sm:px-6 sm:py-5">
                                <div>
                                    <label htmlFor="titre" className={labelClass}>
                                        <FaLightbulb className="inline-block mr-2 text-indigo-500" />
                                        Titre
                                    </label>
                                    <input
                                        id="titre"
                                        type="text"
                                        name="titre"
                                        value={data.titre}
                                        onChange={handleChange}
                                        className={inputClass}
                                        required
                                    />
                                    {errors.titre && <div className="text-red-500 mt-1">{errors.titre}</div>}
                                </div>

                                <div>
                                    <label htmlFor="resume" className={labelClass}>
                                        <FaGraduationCap className="inline-block mr-2 text-indigo-500" />
                                        Résumé
                                    </label>
                                    <textarea
                                        id="resume"
                                        name="resume"
                                        value={data.resume}
                                        onChange={handleChange}
                                        rows="4"
                                        className={inputClass}
                                        required
                                    />
                                    {errors.resume && <div className="text-red-500 mt-1">{errors.resume}</div>}
                                </div>
    <div>
    <label htmlFor="technologies" className={labelClass}>
        <FaCode className="inline-block mr-2 text-indigo-500" />
        Technologies
    </label>
    <input
        id="technologies"
        type="text"
        name="technologies"
        value={data.technologies}
        onChange={handleChange}
        className={inputClass}
        required
    />
    {errors.technologies && <div className="text-red-500 mt-1">{errors.technologies}</div>}
</div>

<div>
    <label htmlFor="type_pfe" className={labelClass}>
        <FaGraduationCap className="inline-block mr-2 text-indigo-500" />
        Type de PFE
    </label>
    <select
        id="type_pfe"
        name="type_pfe"
        value={data.type_pfe}
        onChange={handleChange}
        className={inputClass}
        required
    >
        <option value="Classique">Classique</option>
        <option value="Innovant">Innovant</option>
        <option value="Recherche">Recherche</option>
    </select>
</div>

<div>
    <label htmlFor="besoins_materiel" className={labelClass}>
        <FaTools className="inline-block mr-2 text-indigo-500" />
        Besoins Matériel
    </label>
    <textarea
        id="besoins_materiel"
        name="besoins_materiel"
        value={data.besoins_materiel}
        onChange={handleChange}
        rows="3"
        className={inputClass}
    />
    {errors.besoins_materiel && <div className="text-red-500 mt-1">{errors.besoins_materiel}</div>}
</div>

{!proposition && (
    <div>
        <label htmlFor="email" className={labelClass}>
            <FaEnvelope className="inline-block mr-2 text-indigo-500" />
            Email du binôme (optionnel)
        </label>
        <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className={inputClass}
        />
        {errors.email && <div className="text-red-500 mt-1">{errors.email}</div>}
    </div>
)}

<div className="pt-5">
    <div className="flex justify-end">
        <button
            type="submit"
            disabled={processing}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {processing ? 'Traitement...' : (isEditing ? 'Mettre à jour' : 'Soumettre')}
        </button>
    </div>
</div>
</form>
</div>
</div>
</div>
</div>
</Layout>
);
};

export default ProposePFE;

