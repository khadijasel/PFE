<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sender_id')->constrained('utilisateurs')->onDelete('cascade');
            $table->foreignId('receiver_id')->constrained('utilisateurs')->onDelete('cascade');
            $table->foreignId('proposition_id')->constrained('proposition_p_f_e_s')->onDelete('cascade');
            $table->enum('status', ['pending', 'accepted', 'rejected'])->default('pending');
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('invitations');
    }
    
};
