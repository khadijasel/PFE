<?php

namespace App\Http\Controllers;

use App\Models\PropositionPFE;
use App\Models\Invitation;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PropositionController extends Controller
{
    public function create()
    {
        $proposition = PropositionPFE::where('user_id', Auth::id())->first();
        return Inertia::render('etudiant/propose-pfe', [
            'proposition' => $proposition
        ]);
    }

    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'resume' => 'required|string',
            'technologies' => 'required|string',
            'besoins_materiel' => 'nullable|string',
            'type_pfe' => 'required|in:Classique,Innovant,recherche',
            'email' => 'nullable|email|exists:utilisateurs,email'
        ]);

        // Create the proposition
        $proposition = PropositionPFE::create([
            'user_id' => Auth::id(),
            'titre' => $validated['titre'],
            'resume' => $validated['resume'],
            'technologies' => $validated['technologies'],
            'besoins_materiel' => $validated['besoins_materiel'],
            'statut' => 'En attente',
            'type_pfe' => $validated['type_pfe'],
            'email' => $validated['email'] ?? null
        ]);

        // If binome email is provided, create an invitation
        if ($validated['email']) {
            $binome = Utilisateur::where('email', $validated['email'])->first();
            
            if ($binome) {
                Invitation::create([
                    'sender_id' => Auth::id(),
                    'receiver_id' => $binome->id,
                    'proposition_id' => $proposition->id,
                    'status' => 'pending'
                ]);
            }
        }

        return Inertia::render('etudiant/propose-pfe', [
            'proposition' => $proposition,
            'success' => 'Proposition de PFE soumise avec succès'
        ]);
    }

    public function update(Request $request, $id)
    {
        $proposition = PropositionPFE::findOrFail($id);

        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'resume' => 'required|string',
            'technologies' => 'required|string',
            'besoins_materiel' => 'nullable|string',
            'type_pfe' => 'required|in:Classique,Innovant,recherche',
            'email' => 'nullable|email|exists:utilisateurs,email'
        ]);

        $proposition->update($validated);

        return Inertia::render('etudiant/propose-pfe', [
            'proposition' => $proposition,
            'success' => 'Proposition de PFE mise à jour avec succès'
        ]);
    }
}

