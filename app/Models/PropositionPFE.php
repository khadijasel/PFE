<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PropositionPFE extends Model
{

    protected $fillable = [
        'user_id',
        'titre',
        'resume',
        'technologies',
        'besoins_materiel',
        'statut',
        'type_pfe',
    ];

    public function auteur()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Relation : Une proposition peut avoir plusieurs choix
    public function choix()
    {
        return $this->hasMany(Choix::class);
    }

    // Relation : Une proposition peut avoir une soutenance
    public function soutenance()
    {
        return $this->hasOne(Soutenance::class);
    }
}

