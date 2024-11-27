<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jury extends Model
{

    protected $fillable = [
        'soutenance_id',
        'enseignant_id',
        'role',
    ];

    // Relation : Un jury appartient à une soutenance
    public function soutenance()
    {
        return $this->belongsTo(Soutenance::class, 'soutenance_id');
    }

    // Relation : Un jury est lié à un enseignant
    public function enseignant()
    {
        return $this->belongsTo(Enseignant::class, 'enseignant_id');
    }
}