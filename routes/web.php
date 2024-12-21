<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PropositionController;
use App\Http\Controllers\ValidateIdeasController;

Route::middleware(['auth', 'check.user.type:admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () { 
        return Inertia::render('Admin/DashboardA'); 
    })->name('admin.dashboard'); 
    Route::get('/dashboardMain', function () {
        return Inertia::render('Admin/DashboardMain');  // Fichier DashboardMain.jsx
    })->name('admin.dashboard.main');
    
        // Route pour Artificial Intelligence Dashboard
        Route::get('/ArtificialIntelligenceDashboard', function () {
            return Inertia::render('Admin/ArtificialIntelligenceDashboard');
        })->name('admin.dashboard.ai');
    
        // Route pour Information System Dashboard
        Route::get('/InformationSystemDashboard', function () {
            return Inertia::render('Admin/InformationSystemDashboard');
        })->name('admin.dashboard.informationSystem');
    
        // Route pour Network Dashboard
        Route::get('/NetworkIssDashboard', function () {
            return Inertia::render('Admin/NetworkIssDashboard');
        })->name('admin.dashboard.network');
    
        // Route pour Software Engineering Dashboard
        Route::get('/SoftwareEngineeringDashboard', function () {
            return Inertia::render('Admin/SoftwareEngineeringDashboard');
        })->name('admin.dashboard.softwareEngineering');
       
        Route::get('/DocumentManagement',function(){
            return Inertia::render('Admin/DocumentManagement');
        })->name('admin.dashboard.document');
        Route::get('/Companies',function(){
            return Inertia::render('Admin/Companies');
        })->name('admin.dashboard.Companies');
    
        Route::get('/DefenseSchedulingInterface',function(){
            return Inertia::render('Admin/DefenseSchedulingInterface');
        })->name('admin.dashboard.Defense');
    
      
        Route::get('/FormManagement',function(){
            return Inertia::render('Admin/FormManagement');
        })->name('admin.dashboard.Form');
    
        Route::get('/EmailManagement',function(){
            return Inertia::render('Admin/EmailManagement');
        })->name('admin.dashboard.Email');
       
    
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

Route::middleware(['auth', 'check.user.type:teacher,superiorTeacher'])->prefix('teacher')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('teacher/DashboardT');
    })->name('teacher.dashboard');
    Route::get('/propose-pfe', function () {
        return Inertia::render('teacher/propose-pfe');
    })->name('teacher.propose-pfe');
    Route::get('/PFYIdeas', function () {
        return Inertia::render('teacher/PFYIdeas'); 
    })->name('teacher.dashboard.PFYIdeas');

    Route::get('/StudentsList', function () {
        return Inertia::render('teacher/StudentsList'); 
    })->name('teacher.dashboard.StudentsList');

    Route::get('/SupervisedProjects', function () {
        return Inertia::render('teacher/SupervisedProjects'); 
    })->name('teacher.dashboard.SupervisedProjects');

    Route::get('/Juries', function () {
        return Inertia::render('teacher/Juries'); 
    })->name('teacher.dashboard.Juries');

    Route::get('/Soutenance', function () {
        return Inertia::render('teacher/Soutenance'); 
    })->name('teacher.dashboard.Soutenance');

    Route::get('/ProposeThemeForm', function () {
        return Inertia::render('teacher/ProposeThemeForm'); 
    })->name('teacher.dashboard.ProposeThemeForm');

    Route::get('/ValidateIdeas', function () {
        return Inertia::render('teacher/ValidateIdeas');
    })->name('teacher.dashboard.ValidateIdeas');
    Route::get('/ValidateIdeas', [ValidateIdeasController::class, 'index'])->name('teacher.dashboard.ValidateIdeas');
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
    Route::get('/DashboardE', [UtilisateurController::class, 'dashboard'])->name('DashboardE');
    Route::get('/propose-pfe', [PropositionController::class, 'create'])->name('student.propose-pfe');
    Route::post('/propose-pfe', [PropositionController::class, 'store'])->name('student.propose-pfe.store');
    Route::put('/propose-pfe/{id}', [PropositionController::class, 'update'])->name('student.propose-pfe.update');
    Route::post('/invitation/{id}/respond', [PropositionController::class, 'respondToInvitation'])->name('student.invitation.respond');
    Route::post('/invitation/{id}/cancel', [PropositionController::class, 'cancelInvitation'])->name('student.invitation.cancel');
});

Route::middleware(['auth'])->get('/profile', function () {
    return Inertia::render('Shared/Profile');
})->name('profile');

// Keep these routes outside the auth middleware
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login')->middleware('guest');
Route::post('/login', [AuthController::class, 'login'])->name('login.submit')->middleware('guest');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/index', function () {
    return Inertia::render('Index'); // Rendre le composant Welcome
})->name('Index');

// Redirect root to login if not authenticated
Route::get('/', function () {
    return Auth::check() ? redirect()->route('profile') : redirect()->route('login');
});