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
        Schema::create('choixes', function (Blueprint $table) {
            $table->id();
    $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Étudiant ou Enseignant
    $table->foreignId('proposition_id')->constrained('propositions_pfe')->onDelete('cascade'); // FK vers propositions_pfe
    $table->integer('ordre_preference')->nullable(); // 1 = priorité maximale
    $table->enum('statut', ['Approuvé', 'En attente', 'Refusé'])->default('En attente');
    $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('choixes');
    }
};
