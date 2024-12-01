<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CheckUserType;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Schema::defaultStringLength(191);

        Inertia::share('auth', function () {
            if (Auth::check()) {
                $user = Auth::user();
                return [
                    'user' => [
                        'nom' => $user->nom,
                        'type_utilisateur' => $user->type_utilisateur,
                    ],
                ];
            }

            return ['user' => null];
        });

        // Enregistrez le middleware ici
        $this->app['router']->aliasMiddleware('check.user.type', CheckUserType::class);
    }

    public function register()
    {
        //
    }
}