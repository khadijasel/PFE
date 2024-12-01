<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entreprise extends Model
{
    protected $fillable = ['user_id', 'nom_entreprise','denomation'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function propositions()
    {
        return $this->hasMany(PropositionPFE::class);
    }
}