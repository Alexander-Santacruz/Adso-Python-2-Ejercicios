<?php

use Illuminate\Support\Facades\Route;

Route::get('/adminsena', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'API de AdminSena funcionando correctamente en Laravel 🚀',
        'autor' => 'David Alexander Chango Santacruz'
    ]);
});

// Endpoints API basados en el frontend de AdminSena
Route::apiResource('areas', App\Http\Controllers\AreaController::class);
Route::apiResource('apprentices', App\Http\Controllers\ApprenticeController::class);
Route::apiResource('courses', App\Http\Controllers\CourseController::class);
Route::apiResource('teachers', App\Http\Controllers\TeacherController::class);
Route::apiResource('computers', App\Http\Controllers\ComputerController::class);
Route::apiResource('training-centers', App\Http\Controllers\TrainingCenterController::class);
