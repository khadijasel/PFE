<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Utilisateur; // Assurez-vous d'utiliser le bon modèle
use Illuminate\Support\Facades\Hash;

class UtilisateurTableSeeder extends Seeder
{
    public function run()
    {
          Utilisateur::create([
            'type_utilisateur' => 'etudiant',
            'nom' => 'merwa',
            'prenom' => 'madani',
            'email' => 'madanimerwaamina@gmail.com',
            'mot_de_passe' => Hash::make('password'),
        ]);
    }
}
