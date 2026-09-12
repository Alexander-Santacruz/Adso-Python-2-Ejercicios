<?php

use Illuminate\Support\Facades\Route;

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

// Redirigir o servir index.html para React SPA
Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
