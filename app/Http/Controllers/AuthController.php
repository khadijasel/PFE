<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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
            'password' => ['required'],
        ]);

        if (Auth::attempt(['email' => $credentials['email'], 'mot_de_passe' => $credentials['password']])) {
            $request->session()->regenerate();

            $user = Auth::user();
            switch ($user->type_utilisateur) {
                case 'admin':
                    return redirect()->route('admin.dashboard');
                case 'enseignant':
                    return redirect()->route('teacher.dashboard');
                case 'etudiant':
                    return redirect()->route('student.dashboard');
                case 'entreprise':
                    return redirect()->route('company.dashboard');
                default:
                    return redirect()->route('login');
            }
        }

        return back()->withErrors([
            'email' => 'Les informations d\'identification fournies ne correspondent pas à nos enregistrements.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}

