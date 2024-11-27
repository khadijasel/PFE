<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;



Route::get('/profile', function () {
    return Inertia::render('Shared/Profile'); // Utilisez le bon chemin vers votre composant React
})->name('profile');

// Route::get('/company/propose-pfe', [PFEController::class, 'create'])->name('company.propose-pfe');
// Route::post('/company/propose-pfe', [PFEController::class, 'store']);




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

Route::get('/propose-pfe', function () {
    return Inertia::render('company/propose-pfe');
})->name('company.propose-pfe');

Route::get('/offers', function () {
    return Inertia::render('company/offers');
})->name('company.offers');
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
        Route::get('/choose-pfe', function () {
            return Inertia::render('etudiant/choose-pfe');
        })->name('student.choose-pfe');
        Route::get('/my-pfe', function () {
            return Inertia::render('etudiant/my-pfe');
        })->name('student.my-pfe');

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
Route::get('/index', [UserController::class, 'index'])->name('users.index');