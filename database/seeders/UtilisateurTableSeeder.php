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

        Utilisateur::create([
            'type_utilisateur' => 'teacher',
            'nom' => 'seladji',
            'prenom' => 'khadija',
            'email' => 'khadijaseladji@gmail.com',
            'mot_de_passe' => Hash::make('password'),
        ]);

        Utilisateur::create([
            'type_utilisateur' => 'superiorTeacher',
            'nom' => 'romaissa',
            'prenom' => 'hamadouche',
            'email' => 'romaissa@gmail.com',
            'mot_de_passe' => Hash::make('password'),
        ]);

        Utilisateur::create([
            'type_utilisateur' => 'company',
            'nom' => 'company',
            'prenom' => 'name',
            'email' => 'company@gmail.com',
            'mot_de_passe' => Hash::make('password'),
        ]);

        Utilisateur::create([
            'type_utilisateur' => 'admin',
            'nom' => 'admin',
            'prenom' => 'principal',
            'email' => 'adminprincipal@gmail.com',
            'mot_de_passe' => Hash::make('password'),
        ]);

        Utilisateur::create([
            'type_utilisateur' => 'etudiant',
            'nom' => 'radjaa',
            'prenom' => 'abbou',
            'email' => 'radjaabbou@gmail.com',
            'mot_de_passe' => Hash::make('password'),
        ]);
    }
}
