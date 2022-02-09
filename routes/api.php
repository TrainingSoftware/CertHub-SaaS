<?php

use App\Http\Controllers\API\TenderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CompanyController;
use App\Http\Controllers\API\EmployeeController;
use App\Http\Controllers\API\DepartmentController;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\QualificationController;
use App\Http\Controllers\API\QualificationTypeController;
use App\Http\Controllers\API\ProviderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::post('login', [AuthController::class, 'signin']);
Route::post('register', [AuthController::class, 'signup']);

Route::middleware('auth:sanctum')->group(function () {
    Route::resource('companies', CompanyController::class);
    Route::resource('employees', EmployeeController::class);
    Route::resource('departments', DepartmentController::class);
    Route::resource('contacts', ContactController::class);
    Route::resource('qualifications', QualificationController::class);
    Route::resource('qualificationtypes', QualificationTypeController::class);
    Route::resource('providers', ProviderController::class);
    Route::resource('tenders', TenderController::class);
    Route::post('/tenders/{tender}/employees/add',[TenderController::class,'attachEmployee']);
    Route::post('/tenders/{tender}/employees/remove',[TenderController::class,'dettachEmployee']);
});
