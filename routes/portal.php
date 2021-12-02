<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

Route::prefix('portal')->name('portal.')->group(function() {

    Route::view('/login', 'portal/login')->name('login');

    $limiter = config('fortify.limiters.login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->middleware(array_filter([
            'guest:employee'.config('fortify.guard'),
            $limiter ? 'throttle:'.$limiter : null,
        ]));

    Route::group(['middleware' => 'CheckEmployee'], function(){
        Route::view('/home', 'portal/home')->name('home');
        Route::view('/qualifications', 'portal/qualifications/index')->name('qualifications');
        Route::view('/qualifications/{id}', 'portal/qualifications/show')->name('qualification');
        Route::view('/training', 'portal/training')->name('training');
        Route::view('/files', 'portal/files/index')->name('files');
        Route::view('/files/{id}', 'portal/file/show')->name('file');
    });
});
