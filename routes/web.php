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

Route::get('/', function () {
    return view('landing');
});


Route::group(['middleware' => ['web', 'auth:web']], function () {

    Route::get('/home', function () {
        return view('home');
    });

    // Employees
    Route::get('/employees', function () {
        return view('employees.index');
    });

    // Employees
    Route::get('/qualifications', function () {
        return view('qualifications.index');
    });

    Route::get('/qualifications/create', function () {
        return view('qualifications.create');
    });

    // Profile
    Route::get('/profile', function () {
        return view('profile.index');
    });

    Route::get('/profile/settings', function () {
        return view('profile.settings');
    });

    Route::get('/profile/billing', function () {
        return view('profile.billing');
    });

    Route::get('/profile/invoices', function () {
        return view('profile.invoices');
    });

    Route::get('/profile/api', function () {
        return view('profile.api');
    });
});
