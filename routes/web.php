<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\QualificationController;
use App\Http\Controllers\QualificationTypeController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Subscriptions\SubscriptionController;
use App\Http\Controllers\Subscriptions\PaymentController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\SendSMSController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\PortalController;
use App\Http\Controllers\APIController;
use App\Http\Controllers\TrainingController;
use App\Http\Controllers\EmployeeQualificationPortfolioController;
use App\Http\Controllers\EmployeeArchiveController;
use App\Http\Controllers\TenderController;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

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
    return view('auth.login');
});


Route::group(['middleware' => ['auth','verified']], function () {

    Route::resource('company', CompanyController::class);

    Route::group(['middleware' => 'CheckUserCompany'], function () {

        Route::group(['namespace' => 'Subscriptions'], function() {
            Route::get('/plans',[SubscriptionController::class, 'index'])->name('plans');
            Route::get('/payments',[PaymentController::class, 'index'])->name('payments');
            Route::post('/payments',[PaymentController::class, 'store'])->name('payments.store');
        });

        Route::group(['middleware' => 'CheckUserSubscription'], function(){

            Route::get('/home', [DashboardController::class, 'index'])->name('home');

            Route::resource('employees', EmployeeController::class);
            Route::get('/employees/{employee}/qualifications', [EmployeeController::class, 'qualifications'])->name('employee.qualifications');
            Route::get('/employees/{employee}/contacts', [EmployeeController::class, 'contacts'])->name('employee.contacts');
            Route::get('/employees/{employee}/files', [EmployeeController::class, 'files'])->name('employee.files');
            Route::get('/archived', [EmployeeArchiveController::class, 'archived'])->name('employee.archive.index');
            Route::post('/employees/{employee}', [EmployeeArchiveController::class, 'archive'])->name('employees.archive');
            Route::post('/employees/{employee}', [EmployeeArchiveController::class, 'unarchive'])->name('employees.unarchive');;
            Route::get('/employees/{employee}/qualifications/export', [EmployeeQualificationPortfolioController::class, 'generatePortfolio'])->name('employee.portfolio');

            Route::get('/import/employees', [EmployeeController::class, 'importLanding'])->name('employees.landing');
            Route::get('/import/employees/export', [EmployeeController::class, 'export'])->name('employees.export');
            Route::post('/import/employees/import', [EmployeeController::class, 'import'])->name('employees.import');

            Route::resource('departments', DepartmentController::class);

            Route::resource('qualifications', QualificationController::class);
            Route::post('upload',[UploadController::class, 'uploadQualificationFile'])->name('upload.qualification.file');
            Route::post('qualifications/{qualification}/sendSMS',[SendSMSController::class, 'sendQualificationSMS'])->name('send.sms');

            Route::resource('qualificationtypes', QualificationTypeController::class);

            Route::resource('providers', ProviderController::class);
            Route::get('/providers/{provider}/qualifications',[ProviderController::class, 'qualifications'])->name('providerQualifications');
            Route::get('/import-provider', [\App\Http\Controllers\ProviderLookupController::class, 'getCompanyDetails'])->name('importProvider');

            Route::resource('tenders', TenderController::class);
            Route::get('/tenders/{tender}/employees',[TenderController::class, 'employees'])->name('tenders.employees');
            Route::get('/tenders/{tender}/renewals',[TenderController::class, 'renewals'])->name('tenders.renewals');

            Route::group(['prefix'=>'settings'], function() {
                Route::resource('users', UserController::class);
                Route::get('/personal-access-tokens', [APIController::class, 'index'])->name('api');
                Route::get('/personal-access-tokens/create', [APIController::class, 'create'])->name('apiCreate');
                Route::post('/personal-access-tokens/create', [APIController::class, 'store'])->name('apiStore');
                Route::post('/personal-access-tokens/{id}/destroy', [APIController::class, 'destroy'])->name('apiDestroy');
            });

            Route::group(['prefix'=>'reports'], function() {
                Route::get('', [ReportController::class, 'index']);
                Route::get('1', [ReportController::class, 'thisMonth']);
                Route::get('2', [ReportController::class, 'nextMonth']);
                Route::get('3', [ReportController::class, 'thisQuarter']);
                Route::get('4', [ReportController::class, 'nextQuarter']);
                Route::get('5', [ReportController::class, 'thisYear']);
            });

            Route::group(['prefix'=>'training'], function() {
                Route::get('', [TrainingController::class, 'index']);
            });

            Route::get('/billing-portal', function (Request $request) {
                return Auth::user()->companies()->first()->redirectToBillingPortal(route('home'));
            });

            Route::get('/search', [SearchController::class, 'search']);

            //Route::get('/portal/{qualification}', [PortalController::class, 'show'] )->name('portal')->middleware('signed');
        });
    });
});

Route::prefix('portal')->name('portal.')->group(function() {
    Route::view('/login', 'portal/login')->name('login');

    $limiter = config('fortify.limiters.login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->middleware(array_filter([
            'guest:'.config('fortify.guard'),
            $limiter ? 'throttle:'.$limiter : null,
        ]));

    Route::view('/home', 'portal/portal')->name('home');
    Route::view('/qualifications', 'portal/qualifications/index')->name('qualifications');
    Route::view('/qualifications/{id}', 'portal/qualifications/show')->name('qualification');
    Route::view('/training', 'portal/training')->name('training');
    Route::view('/files', 'portal/files/index')->name('files');
    Route::view('/files/{id}', 'portal/file/show')->name('file');
});
