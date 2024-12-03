<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Utilisateur;

class AuthController extends Controller
{
    
    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'mot_de_passe' => ['required'],
        ]);

        $user = Utilisateur::where('email', $credentials['email'])->first();

        if ($user && $credentials['mot_de_passe'] === $user->mot_de_passe) {
            Auth::login($user);
            $request->session()->regenerate();

            switch ($user->type_utilisateur) {
                case 'admin':
                    return redirect()->route('admin.dashboard');
                case 'teacher':
                case 'superiorTeacher':
                    return redirect()->route('teacher.dashboard'); 
                case 'etudiant':
                    return redirect()->route('etudiant.dashboard');
                case 'entreprise':
                    return redirect()->route('company.dashboard');
                default:
                    return redirect()->route('login')->with('error', 'Type d\'utilisateur non reconnu');
            }
        }

        return back()->withErrors([
            'email' => 'Les informations de connexion fournies ne correspondent pas à nos enregistrements.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        
        $request->session()->invalidate();
        
        $request->session()->regenerateToken();
        
        return redirect()->route('login');
    }
}

