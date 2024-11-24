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
