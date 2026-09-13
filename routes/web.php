<?php

use Illuminate\Support\Facades\Route;

// Rutas API
Route::get('/adminsena', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'API de AdminSena funcionando correctamente en Laravel 🚀',
        'autor' => 'David Alexander Chango Santacruz'
    ]);
});

Route::post('/register', [App\Http\Controllers\AuthController::class, 'register']);
Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']);

Route::get('/categories', [App\Http\Controllers\CategoryController::class, 'index']);
Route::post('/categories', [App\Http\Controllers\CategoryController::class, 'store']);

Route::get('/courses', [App\Http\Controllers\CourseController::class, 'index']);
Route::post('/courses', [App\Http\Controllers\CourseController::class, 'store']);

// Ruta comodín para que Laravel devuelva la vista principal de la aplicación
Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
