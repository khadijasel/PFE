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
            'nom' => 'Dupont',
            'prenom' => 'Jean',
            'email' => 'jean.dupont@example.com',
            'mot_de_passe' => Hash::make('password'),
        ]);

        Utilisateur::create([
            'type_utilisateur' => 'enseignant',
            'nom' => 'Durand',
            'prenom' => 'Marie',
            'email' => 'marie.durand@example.com',
            'mot_de_passe' => Hash::make('password'),
        ]);

        Utilisateur::create([
            'type_utilisateur' => 'admin',
            'nom' => 'Admin',
            'prenom' => 'Principal',
            'email' => 'admin@example.com',
            'mot_de_passe' => Hash::make('password'),
        ]);

        Utilisateur::create([
            'type_utilisateur' => 'company',
            'nom' => 'Marja',
            'prenom' => 'Principal',
            'email' => 'company@example.com',
            'mot_de_passe' => Hash::make('password'),
        ]);
    }
}
