<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Choix extends Model
{

    protected $fillable = [
        'user_id',
        'proposition_id',
        'ordre_preference',
        'statut',
    ];

    // Relation : Un choix appartient à un utilisateur
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'user_id');
    }

    // Relation : Un choix est lié à une proposition
    public function proposition()
    {
        return $this->belongsTo(PropositionPFE::class, 'proposition_id');
    }
}
