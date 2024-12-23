<?php

namespace App\Http\Controllers;

use App\Models\PropositionPFE;
use App\Models\Invitation;
use App\Models\Utilisateur;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PropositionController extends Controller
{
    public function create()
    {
        $user = Auth::user();
        $proposition = PropositionPFE::where('user_id', $user->id)
            ->orWhere('email', $user->email)
            ->first();

        $pendingInvitation = Invitation::where('receiver_id', $user->id)
            ->where('status', 'pending')
            ->with(['sender', 'proposition'])
            ->first();

        $sentInvitations = Invitation::where('sender_id', $user->id)
            ->where('status', 'pending')
            ->with(['receiver', 'proposition'])
            ->get();

        $teachers = Utilisateur::whereIn('type_utilisateur', ['teacher', 'superiorTeacher'])
            ->join('enseignants', 'utilisateurs.id', '=', 'enseignants.user_id')
            ->select('utilisateurs.id', 'utilisateurs.nom', 'utilisateurs.prenom', 'utilisateurs.type_utilisateur', 'enseignants.grade', 'enseignants.responsable_specialite')
            ->get()
            ->map(function ($teacher) {
                return [
                    'id' => $teacher->id,
                    'name' => $teacher->nom . ' ' . $teacher->prenom,
                    'grade' => $teacher->grade,
                    'isResponsable' => $teacher->type_utilisateur === 'superiorTeacher',
                    'specialite' => $teacher->responsable_specialite
                ];
            });

        return Inertia::render('etudiant/propose-pfe', [
            'proposition' => $proposition,
            'pendingInvitation' => $pendingInvitation,
            'sentInvitations' => $sentInvitations,
            'teachers' => $teachers
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'resume' => 'required|string',
            'technologies' => 'required|string',
            'besoins_materiel' => 'nullable|string',
            'type_pfe' => 'required|in:Classique,Innovant,recherche',
            'email' => 'nullable|email|exists:utilisateurs,email',
            'encadrant_souhaite' => 'nullable|exists:utilisateurs,id'
        ]);

        $user = Auth::user();
        $proposition = PropositionPFE::updateOrCreate(
            ['user_id' => $user->id],
            [
                'titre' => $validated['titre'],
                'resume' => $validated['resume'],
                'technologies' => $validated['technologies'],
                'besoins_materiel' => $validated['besoins_materiel'],
                'statut' => 'En attente',
                'type_pfe' => $validated['type_pfe'],
                'email' => $validated['email'],
                'encadrants' => $validated['encadrant_souhaite'] ? json_encode([$validated['encadrant_souhaite']]) : null,
            ]
        );

        if ($validated['email']) {
            $binome = Utilisateur::where('email', $validated['email'])->first();
            if ($binome) {
                $invitation = Invitation::updateOrCreate(
                    [
                        'sender_id' => $user->id,
                        'receiver_id' => $binome->id,
                        'proposition_id' => $proposition->id,
                    ],
                    ['status' => 'pending']
                );

                Notification::create([
                    'user_id' => $binome->id,
                    'type_notification' => 'invitation',
                    'contenu' => 'Vous avez été invité à collaborer sur un PFE.'
                ]);
            }
        }

        return redirect()->route('student.propose-pfe')->with('success', 'Proposition de PFE soumise avec succès');
    }

    public function update(Request $request, $id)
{
    $proposition = PropositionPFE::findOrFail($id);

    // Vérification des permissions
    if ($proposition->user_id !== Auth::id() && $proposition->email !== Auth::user()->email) {
        abort(403, 'Unauthorized action.');
    }

    // Validation des données
    $validated = $request->validate([
        'titre' => 'required|string|max:255',
        'resume' => 'required|string',
        'technologies' => 'required|string',
        'besoins_materiel' => 'nullable|string',
        'type_pfe' => 'required|in:Classique,Innovant,recherche',
        'encadrant_souhaite' => 'nullable|exists:utilisateurs,id', // Validation de l'encadrant souhaité
    ]);

    // Mise à jour des données, y compris la transformation d'encadrant_souhaite
    $proposition->update([
        'titre' => $validated['titre'],
        'resume' => $validated['resume'],
        'technologies' => $validated['technologies'],
        'besoins_materiel' => $validated['besoins_materiel'],
        'type_pfe' => $validated['type_pfe'],
        'encadrants' => $validated['encadrant_souhaite'] ? json_encode([$validated['encadrant_souhaite']]) : $proposition->encadrants,
    ]);

    return redirect()->route('student.propose-pfe')->with('success', 'Proposition de PFE mise à jour avec succès');
}


    public function respondToInvitation(Request $request, $id)
    {
        $invitation = Invitation::findOrFail($id);
        $invitation->status = $request->status;
        $invitation->save();

        if ($request->status === 'accepted') {
            $proposition = $invitation->proposition;
            $proposition->email = Auth::user()->email;
            $proposition->save();

            Notification::create([
                'user_id' => $invitation->sender_id,
                'type_notification' => 'invitation_accepted',
                'contenu' => 'Votre invitation pour le PFE a été acceptée.'
            ]);

            return redirect()->route('student.propose-pfe')->with('success', 'Invitation acceptée avec succès');
        } else {
            $proposition = $invitation->proposition;

            Notification::create([
                'user_id' => $invitation->sender_id,
                'type_notification' => 'invitation_rejected',
                'contenu' => 'Votre invitation pour le PFE a été refusée.'
            ]);

            $invitation->delete();
            $proposition->delete();

            return redirect()->route('student.propose-pfe')->with('success', 'Invitation refusée avec succès');
        }
    }

    public function cancelInvitation($id)
    {
        $invitation = Invitation::findOrFail($id);

        if ($invitation->sender_id !== Auth::id()) {
            abort(403, 'Unauthorized action.');
        }

        $invitation->delete();

        Notification::create([
            'user_id' => $invitation->receiver_id,
            'type_notification' => 'invitation_cancelled',
            'contenu' => 'Une invitation pour un PFE a été annulée.'
        ]);

        return redirect()->route('student.propose-pfe')->with('success', 'Invitation annulée avec succès');
    }

    public function createTeacher()
    {
        $user = Auth::user();
        $propositions = PropositionPFE::where('user_id', $user->id)->get();

        return Inertia::render('teacher/propose-pfe', [
            'propositions' => $propositions
        ]);
    }

    public function storeTeacher(Request $request)
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'resume' => 'required|string',
            'technologies' => 'required|string',
            'besoins_materiel' => 'nullable|string',
            'type_pfe' => 'required|in:Classique,Innovant,Recherche',
            'option' => 'required|in:GL,IA,RSD,SIC',
            'coencadrant' => 'nullable|string'
        ]);

        $user = Auth::user();
        $proposition = new PropositionPFE([
            'user_id' => $user->id,
            'titre' => $validated['titre'],
            'resume' => $validated['resume'],
            'technologies' => $validated['technologies'],
            'besoins_materiel' => $validated['besoins_materiel'],
            'statut' => 'En attente', 
            'type_pfe' => $validated['type_pfe'],
            'encadrants' => json_encode([$user->id]),
            'coencadrants' => $validated['coencadrant'] ? json_encode([$validated['coencadrant']]) : null
        ]);

        $proposition->save();

        return redirect()->route('teacher.propose-pfe')->with('success', 'Proposition de PFE soumise avec succès');
    }

    public function getPFYIdeas()
    {
        $user = Auth::user();
        $themes = PropositionPFE::where('user_id', $user->id)->get();

        return Inertia::render('teacher/PFYIdeas', [
            'themes' => $themes
        ]);
    }
}

