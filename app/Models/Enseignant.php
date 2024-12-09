<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Enseignant extends Model
{
    protected $fillable = ['user_id', 'date_recrutement', 'grade'];

    public function user()
    {
        return $this->belongsTo(Utilisateur::class);
    }

    public function propositions()
    {
        return $this->hasMany(PropositionPFE::class);
    }

    public function jurys()
    {
        return $this->hasMany(Jury::class);
    }
}
