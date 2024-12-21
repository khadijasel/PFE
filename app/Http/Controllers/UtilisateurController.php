<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Utilisateur;

class UtilisateurController extends Controller
{
    public function dashboard()
    {
        $user = Auth::user();
        return Inertia::render('etudiant/DashboardE', [
            'user' => $user
        
        ]);
    }
}

