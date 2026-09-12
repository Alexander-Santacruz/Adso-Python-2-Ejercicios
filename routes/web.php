<?php

use Illuminate\Support\Facades\Route;

// Rutas de la API de Laravel
Route::get('/adminsena', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'API de AdminSena funcionando correctamente en Laravel 🚀',
        'autor' => 'David Alexander Chango Santacruz'
    ]);
});

Route::get('categories', [App\Http\Controllers\CategoryController::class, 'index']);
Route::post('categories', [App\Http\Controllers\CategoryController::class, 'store']);
Route::get('courses', [App\Http\Controllers\CourseController::class, 'index']);
Route::post('courses', [App\Http\Controllers\CourseController::class, 'store']);

// Ruta comodín para que el Frontend de React (SPA) maneje las vistas en XAMPP
Route::get('/{any?}', function () {
    $path = public_path('index.html');
    if (File::exists($path)) {
        return File::get($path);
    }
    abort(404);
})->where('any', '.*');
