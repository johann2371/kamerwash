<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ReviewController;

/*
|--------------------------------------------------------------------------
| AquaWash API Routes
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {
    // Auth & Profil
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);

    // Prestations de lavage
    Route::get('/services', [ServiceController::class, 'index']);
    Route::get('/services/{service:slug}', [ServiceController::class, 'show']);
    Route::get('/reviews', [ReviewController::class, 'index']);
    Route::get('/bookings/available-slots', [BookingController::class, 'availableSlots']);

    // Routes avec jeton Sanctum
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/auth/me', [AuthController::class, 'me']);
        Route::post('/auth/logout', [AuthController::class, 'logout']);

        Route::get('/bookings', [BookingController::class, 'index']);
        Route::post('/bookings', [BookingController::class, 'store']);
        Route::get('/bookings/{booking}', [BookingController::class, 'show']);
        Route::post('/bookings/{booking}/cancel', [BookingController::class, 'cancel']);
        Route::post('/bookings/{booking}/reviews', [ReviewController::class, 'store']);

        Route::get('/dashboard/stats', [DashboardController::class, 'stats']);
        Route::patch('/bookings/{booking}/status', [BookingController::class, 'updateStatus']);
    });
});

// Fallback v1 direct
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/reviews', [ReviewController::class, 'index']);
Route::get('/bookings/available-slots', [BookingController::class, 'availableSlots']);
Route::post('/bookings', [BookingController::class, 'store']);
