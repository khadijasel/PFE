<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PropositionPFE extends Model
{
    protected $table = 'proposition_p_f_e_s';

    /**
     * Les champs qui peuvent être remplis en masse.
     */
    protected $fillable = [
        'user_id',
        'titre',
        'resume',
        'technologies',
        'besoins_materiel',
        'statut',
        'type_pfe',
        'email',
        'observation',
        'encadrants',      // Ajout du champ encadrants
        'coencadrants',    // Ajout du champ coencadrants
    ];

    /**
     * Les champs qui doivent être castés à des types natifs.
     */
    protected $casts = [
        'encadrants' => 'array',    // Cast encadrants en tableau JSON
        'coencadrants' => 'array', // Cast coencadrants en tableau JSON
    ];

    /**
     * Relation avec le modèle utilisateur.
     */
    public function user()
    {
        return $this->belongsTo(Utilisateur::class); // Remplacez "Utilisateur" par "User" si vous utilisez le modèle par défaut
    }

    /**
     * Relation avec le modèle Invitation.
     */
    public function invitation()
    {
        return $this->hasOne(Invitation::class, 'proposition_id');
    }
}
