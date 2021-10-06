<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth
Route::get('/', function () {
    return view('auth.login');
});

Route::get('/register', function () {
    return view('auth.register');
});

Route::get('/password-reset', function () {
    return view('auth.password-reset');
});

Route::get('/set-password', function () {
    return view('auth.set-password');
});

Route::get('/verify', function () {
    return view('auth.verify-email');
});

// Dashboard
Route::get('/dashboard', function () {
    return view('dashboard');
});
