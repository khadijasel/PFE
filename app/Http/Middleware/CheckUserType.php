<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUserType
{
    public function handle(Request $request, Closure $next, ...$types)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $user = Auth::user();
        if (in_array($user->type_utilisateur, $types)) {
            return $next($request);
        }
        $routeMap = [
            'admin' => 'admin.dashboard',
            'teacher' => 'teacher.dashboard',
            'etudiant' => 'student.dashboard',
            'entreprise' => 'company.dashboard'
        ];

        $route = $routeMap[$user->type_utilisateur] ?? 'login';

        return redirect()->route($user->type_utilisateur . '.dashboard')->with('error', 'Accès non autorisé.');
    }
}