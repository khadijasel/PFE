<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('proposition_p_f_e_s', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Auteur (enseignant, étudiant, entreprise)
            $table->string('titre');
            $table->text('resume');
            $table->string('technologies');
            $table->string('besoins_materiel')->nullable();
            $table->enum('statut', ['Validé', 'En attente', 'Rejeté'])->default('En attente');
            $table->enum('type_pfe', ['Classique', 'Innovant', 'Stage']);
            $table->string('email')->nullable(); // Ajoute la colonne email
            $table->text('observation')->nullable(); // Ajout pour stocker les observations du responsable
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proposition_p_f_e_s');
    }
};
