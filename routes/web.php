<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\QualificationController;
use App\Http\Controllers\QualificationTypeController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Subscriptions\SubscriptionController;
use App\Http\Controllers\Subscriptions\PaymentController;

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

    Route::resource('company', CompanyController::class);

    Route::group(['middleware' => 'CheckUserCompany'], function () {

        Route::group(['namespace' => 'Subscriptions'], function() {
            Route::get('/plans',[SubscriptionController::class, 'index'])->name('plans');
            Route::get('/payments',[PaymentController::class, 'index'])->name('payments');
            Route::post('/payments',[PaymentController::class, 'store'])->name('payments.store');
        });

        Route::group(['middleware' => 'CheckUserSubscription'], function(){
            Route::get('/home', function () {
                return view('home');
            });
            Route::resource('employees', EmployeeController::class);
            Route::resource('departments', DepartmentController::class);
            Route::resource('qualifications', QualificationController::class);
            Route::resource('qualificationtypes', QualificationTypeController::class);
            Route::resource('providers', ProviderController::class);
            Route::resource('users', UserController::class);
        });
    });

});
