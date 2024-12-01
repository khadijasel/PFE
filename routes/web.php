<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;

Route::middleware(['auth', 'check.user.type:admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () { 
        return Inertia::render('Admin/DashboardA'); 
    })->name('admin.dashboard'); 
});

Route::middleware(['auth', 'check.user.type:entreprise'])->prefix('company')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('company/DashboardC');
    })->name('company.dashboard');

    Route::get('/propose-pfe', function () {
        return Inertia::render('company/propose-pfe');
    })->name('company.propose-pfe');

    Route::get('/offers', function () {
        return Inertia::render('company/offers');
    })->name('company.offers');
});

Route::middleware(['auth', 'check.user.type:teacher'])->prefix('teacher')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('teacher/DashboardT');
    })->name('teacher.dashboard');
    Route::get('/propose-pfe', function () {
        return Inertia::render('teacher/propose-pfe');
    })->name('teacher.propose-pfe');
});

Route::middleware(['auth', 'check.user.type:etudiant'])->prefix('student')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('etudiant/DashboardE');
    })->name('etudiant.dashboard');
    Route::get('/choose-pfe', function () {
        return Inertia::render('etudiant/choose-pfe');
    })->name('student.choose-pfe');
    Route::get('/my-pfe', function () {
        return Inertia::render('etudiant/my-pfe');
    })->name('student.my-pfe');
    Route::get('/propose-pfe', function () {
        return Inertia::render('etudiant/propose-pfe');
    })->name('student.propose-pfe');
});

Route::middleware(['auth'])->get('/profile', function () {
    return Inertia::render('Shared/Profile');
})->name('profile');

// Keep these routes outside the auth middleware
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login')->middleware('guest');
Route::post('/login', [AuthController::class, 'login'])->name('login.submit')->middleware('guest');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/welcome', function () {
    return Inertia::render('Welcome'); // Rendre le composant Welcome
})->name('welcome');

// Redirect root to login if not authenticated
Route::get('/', function () {
    return Auth::check() ? redirect()->route('profile') : redirect()->route('login');
});

