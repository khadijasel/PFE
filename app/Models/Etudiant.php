<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    protected $fillable = ['user_id', 'option_master', 'moyenne_master1', 'binome_id'];

    public function user()
    {
        return $this->belongsTo(Utilisateur::class);
    }

    public function choix()
    {
        return $this->hasMany(Choix::class);
    }

    public function affectations()
    {
        return $this->hasMany(AffectationPFE::class);
    }

    public function binome()
    {
        return $this->belongsTo(Etudiant::class, 'binome_id');
    }
}

