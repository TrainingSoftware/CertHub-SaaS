<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\QualificationController;
use App\Http\Controllers\QualificationTypeController;
use App\Http\Controllers\ProviderController;

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


Route::group(['middleware' => 'auth'], function () {

    Route::get('/home', function () {
        return view('home');
    });

    Route::resource('company', CompanyController::class);
    Route::resource('employees', EmployeeController::class);
    Route::resource('departments', DepartmentController::class);
    Route::resource('qualifications', QualificationController::class);
    Route::resource('qualificationtypes', QualificationTypeController::class);
    Route::resource('providers', ProviderController::class);

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
