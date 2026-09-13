<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\AuthController;

Route::get('/adminsena', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'API de AdminSena funcionando correctamente en Laravel 🚀',
        'autor' => 'David Alexander Chango Santacruz'
    ]);
});

// Autenticación y Registro de Usuarios
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/categories', [CategoryController::class, 'index']);
Route::post('/categories', [CategoryController::class, 'store']);

Route::get('/courses', [CourseController::class, 'index']);
Route::post('/courses', [CourseController::class, 'store']);

// Ruta comodín SPA para React
Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
