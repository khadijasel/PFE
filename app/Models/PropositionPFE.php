<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PropositionPFE extends Model
{
    protected $table = 'proposition_p_f_e_s';

    protected $fillable = [
        'user_id',
        'titre',
        'resume',
        'technologies',
        'besoins_materiel',
        'statut',
        'type_pfe',
        'email'
    ];

    public function user()
    {
        return $this->belongsTo(Utilisateur::class);
    }

    public function invitation()
    {
        return $this->hasOne(Invitation::class, 'proposition_id');
    }
}

