<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    use HasFactory;

    protected $fillable = [
        'sender_id',
        'receiver_id',
        'proposition_id',
        'status',
    ];

    public function sender()
    {
        return $this->belongsTo(Utilisateur::class, 'sender_id');
    }

    public function receiver()
    {
        return $this->belongsTo(Utilisateur::class, 'receiver_id');
    }

    public function proposition()
    {
        return $this->belongsTo(PropositionPFE::class, 'proposition_id');
    }
}
