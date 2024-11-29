<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Utilisateur extends Authenticatable
{
    use Notifiable;

    protected $table = 'utilisateurs';
    
    protected $fillable = [
        'type_utilisateur',
        'nom',
        'prenom',
        'email',
        'mot_de_passe',
    ];

    protected $hidden = [
        'mot_de_passe',
        'remember_token',
    ];

    public function getAuthPassword()
    {
        return $this->mot_de_passe;
    }
}

