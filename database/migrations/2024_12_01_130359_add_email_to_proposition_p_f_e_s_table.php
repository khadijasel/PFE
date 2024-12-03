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
        Schema::table('proposition_p_f_e_s', function (Blueprint $table) {
            $table->string('email')->nullable(); // Ajoute la colonne email
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('proposition_p_f_e_s', function (Blueprint $table) {
            $table->dropColumn('email');
        });
    }
};
