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
        Schema::create('juries', function (Blueprint $table) {
            $table->id();
    $table->foreignId('soutenance_id')->constrained('soutenances')->onDelete('cascade'); // FK vers soutenances
    $table->foreignId('enseignant_id')->constrained('enseignants')->onDelete('cascade'); // FK vers enseignants
    $table->string('role'); // Président, Examinateur, Encadrant
    $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('juries');
    }
};
