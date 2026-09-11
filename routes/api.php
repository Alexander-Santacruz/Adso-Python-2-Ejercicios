<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AreaController;
use App\Http\Controllers\ComputerController;
use App\Http\Controllers\ApprenticeController;

Route::get('/adminsena', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'API de AdminSena funcionando correctamente en Laravel 🚀',
        'autor' => 'David Alexander Chango Santacruz'
    ]);
});

Route::apiResource('areas', AreaController::class);
Route::apiResource('computers', ComputerController::class);
Route::apiResource('apprentices', ApprenticeController::class);
