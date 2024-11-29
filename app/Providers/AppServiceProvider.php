<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Inertia::share('auth', function () {
            if (Auth::check()) {
                return [
                    'user' => [
                        'nom' => Auth::user()->nom,
                        'type_utilisateur' => Auth::user()->type_utilisateur,
                    ],
                ];
            }
            return null;
        });
    }
}