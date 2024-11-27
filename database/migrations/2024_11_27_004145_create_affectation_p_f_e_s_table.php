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
        Schema::create('affectation_p_f_e_s', function (Blueprint $table) {
            $table->id();
            $table->foreignId('proposition_id')->constrained('propositions_pfe')->onDelete('cascade'); // FK vers propositions_pfe
            $table->foreignId('etudiant_id')->constrained('etudiants')->onDelete('cascade'); // FK vers etudiants
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('affectation_p_f_e_s');
    }
};
