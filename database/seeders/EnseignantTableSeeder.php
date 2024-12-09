<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Utilisateur;
use App\Models\Enseignant;
use Illuminate\Support\Facades\DB;

class EnseignantTableSeeder extends Seeder
{
    public function run()
    {
        // Fetch all users of type 'teacher' or 'superiorTeacher'
        $teachers = Utilisateur::whereIn('type_utilisateur', ['teacher', 'superiorTeacher'])->get();

        foreach ($teachers as $teacher) {
            $enseignant = new Enseignant();
            $enseignant->user_id = $teacher->id;
            $enseignant->date_recrutement = now()->subYears(rand(1, 20)); // Random recruitment date between 1 and 20 years ago
            $enseignant->grade = $this->getRandomGrade();
            
            // If the teacher is a superiorTeacher, assign a random speciality
            if ($teacher->type_utilisateur === 'superiorTeacher') {
                $enseignant->responsable_specialite = $this->getRandomSpeciality();
            }

            $enseignant->save();
        }
    }

    private function getRandomGrade()
    {
        $grades = ['Professeur', 'Maître de conférences A', 'Maître de conférences B', 'Maître assistant A', 'Maître assistant B'];
        return $grades[array_rand($grades)];
    }

    private function getRandomSpeciality()
    {
        $specialities = ['GL', 'IA', 'RSD', 'SIC'];
        return $specialities[array_rand($specialities)];
    }
}