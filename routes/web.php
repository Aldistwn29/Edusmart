<?php

use App\Http\Controllers\Guru\ClassroomController;
use App\Http\Controllers\Guru\GuruDashboard;
use App\Http\Controllers\Guru\SubjectController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Siswa\InsightController;
use App\Http\Controllers\Siswa\MaterialController;
use App\Http\Controllers\Siswa\QuizController;
use App\Http\Controllers\Siswa\SiswaDashboard;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// route dashboard guru
Route::middleware(['role:teacher'])
    ->prefix('teacher')
    ->name('teacher.')
    ->group(function () {
        Route::get('/dashboard', [GuruDashboard::class, 'index'])->name('dashboard');
        Route::resource('subjects', SubjectController::class)
            ->only(['index', 'create', 'store']);
        Route::resource('classrooms', ClassroomController::class)
            ->only(['index', 'create', 'store']);
        Route::resource('quizzes', QuizController::class)
            ->only(['index', 'create', 'store']);
    });

Route::middleware(['role:student'])
    ->prefix('student')
    ->name('student.')
    ->group(function () {
        Route::get('/dashboard', [SiswaDashboard::class, 'index'])
            ->name('dashboard');
        Route::resource('materials', MaterialController::class)
            ->only(['index', 'show']);
        Route::resource('quizzes', QuizController::class)
            ->only(['index', 'show']);
        // Chatbot
        Route::get('/insight', [InsightController::class, 'index'])
            ->name('insight');

    });

// route profile
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
