<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AffectationPFE extends Model
{

    protected $fillable = [
        'proposition_id',
        'etudiant_id',
    ];

    // Relation : Une affectation est liée à une proposition
    public function proposition()
    {
        return $this->belongsTo(PropositionPFE::class, 'proposition_id');
    }

    // Relation : Une affectation est liée à un étudiant
    public function etudiant()
    {
        return $this->belongsTo(Etudiant::class, 'etudiant_id');
    }
}
