<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Utilisateur;
use Illuminate\Support\Facades\Hash;

class UtilisateurTableSeeder extends Seeder
{
    public function run()
    {
          
        Utilisateur::create([
            'type_utilisateur' => 'etudiant',
            'nom' => 'alis',
            'prenom' => 'kazi',
            'email' => 'aliskazi@gmail.com',
            'mot_de_passe' => Hash::make('password'),
        ]);
       
    }
}
