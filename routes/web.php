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
});


Route::prefix('superiorTeacher')->group(function () {
    Route::get('/ValidateIdeas', function () {
        return Inertia::render('/superiorTeacher/ValidateIdeas'); 
    })->name('superiorTeacher.ValidateIdeas');
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
