<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{
    protected $fillable = ['type_utilisateur', 'nom', 'prenom', 'email', 'mot_de_passe'];

    public function etudiant()
    {
        return $this->hasOne(Etudiant::class);
    }

    public function enseignant()
    {
        return $this->hasOne(Enseignant::class);
    }

    public function entreprise()
    {
        return $this->hasOne(Entreprise::class);
    }

    public function administration()
    {
        return $this->hasOne(Administration::class);
    }

    public function propositions()
    {
        return $this->hasMany(PropositionPFE::class);
    }

    public function choix()
    {
        return $this->hasMany(Choix::class);
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }
}

