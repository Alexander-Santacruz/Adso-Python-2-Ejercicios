<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\AreaController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\ApprenticeController;
use App\Http\Controllers\TrainingCenterController;
use App\Http\Controllers\ComputerController;

Route::get('/adminsena', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'API de AdminSena funcionando correctamente en Laravel 🚀',
        'autor' => 'David Alexander Chango Santacruz'
    ]);
});

Route::get('/categories', [CategoryController::class, 'index']);
Route::post('/categories', [CategoryController::class, 'store']);

Route::get('/courses', [CourseController::class, 'index']);
Route::post('/courses', [CourseController::class, 'store']);

Route::get('/areas', [AreaController::class, 'index']);
Route::post('/areas', [AreaController::class, 'store']);

Route::get('/instructors', [InstructorController::class, 'index']);
Route::post('/instructors', [InstructorController::class, 'store']);

Route::get('/apprentices', [ApprenticeController::class, 'index']);
Route::post('/apprentices', [ApprenticeController::class, 'store']);

Route::get('/training-centers', [TrainingCenterController::class, 'index']);
Route::post('/training-centers', [TrainingCenterController::class, 'store']);

Route::get('/computers', [ComputerController::class, 'index']);
Route::post('/computers', [ComputerController::class, 'store']);
