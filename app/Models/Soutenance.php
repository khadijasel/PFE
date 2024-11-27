<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Soutenance extends Model
{
   

    protected $fillable = [
        'proposition_id',
        'salle',
        'date',
        'heure',
    ];

    // Relation : Une soutenance est liée à une proposition
    public function proposition()
    {
        return $this->belongsTo(PropositionPFE::class, 'proposition_id');
    }

    // Relation : Une soutenance peut avoir plusieurs jurys
    public function jurys()
    {
        return $this->hasMany(Jury::class);
    }
}
