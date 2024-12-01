<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/profile', function () {
    return Inertia::render('Shared/Profile'); // Utilisez le bon chemin vers votre composant React
})->name('profile');



Route::get('/', function () {
    return Inertia::render('auth/Login');
});


Route::prefix('admin')->group(function () {
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

Route::prefix('company')->group(function () {
Route::get('/dashboard', function () {
    return Inertia::render('company/DashboardC');
})->name('company.dashboard');
});

Route::prefix('teacher')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('teacher/DashboardT');
    })->name('teacher.dashboard');
    });

Route::prefix('student')->group(function () {
    Route::get('/dashboard', function () {
            return Inertia::render('etudiant/DashboardE');
        })->name('student.dashboard');
        });

/*Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');
/*****controlleur**** */
//Route::post('/login', [LoginController::class, 'store']);

/*Route::get('users',function(){
    $username = 'samir';
    return view('users',compact('username'));
});*/
