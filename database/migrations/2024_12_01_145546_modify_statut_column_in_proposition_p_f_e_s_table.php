<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('proposition_p_f_e_s', function (Blueprint $table) {
            $table->string('statut', 20)->change();
        });
    }

    public function down()
    {
        Schema::table('proposition_p_f_e_s', function (Blueprint $table) {
            $table->string('statut')->change();
        });
    }
};

