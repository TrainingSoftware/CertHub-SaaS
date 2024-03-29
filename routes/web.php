<?php

use App\Http\Controllers\ActivityLogController;
use App\Http\Controllers\EmployeeContactController;
use App\Http\Controllers\ImpersonateUserController;
use App\Http\Controllers\TenderContactController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\QualificationController;
use App\Http\Controllers\QualificationTypeController;
use App\Http\Controllers\AwardingBodyController;
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
use App\Http\Controllers\TenderExportController;
use App\Http\Controllers\ProviderLookupController;
use App\Http\Controllers\QrCodeController;
use App\Http\Controllers\SettingController;
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

Route::post('employee/reset-password',[EmployeeController::class, 'resetPassword'])->name('employee.resetPassword');

Route::get('/employee/{employee}', [EmployeeController::class, 'show'])->name('employee.public')->middleware('signed');

Route::group(['middleware' => ['auth','verified']], function () {

    Route::resource('company', CompanyController::class);

    Route::group(['middleware' => 'CheckUserCompany'], function () {

        Route::group(['namespace' => 'Subscriptions'], function() {
            Route::get('/plans',[SubscriptionController::class, 'index'])->name('plans');
            Route::get('/payments',[PaymentController::class, 'index'])->name('payments');
            Route::post('/payments',[PaymentController::class, 'store'])->name('payments.store');
            Route::post('/payments/add-card',[PaymentController::class,'newCard'])->name('payments.add_card');
            Route::post('/payments/default',[PaymentController::class,'setAsDefault'])->name('payments.default');
            Route::post('/payments/delete',[PaymentController::class,'deleteCard'])->name('payments.delete');
            Route::post('/upgrade',[PaymentController::class,'upgrade'])->name('payments.upgrade');
        });

        Route::group(['middleware' => 'CheckUserSubscription'], function(){

            Route::post('/employees/unarchive', [EmployeeController::class, 'unarchive'])->name('employee.unarchive');
            Route::get('/employees/archived', [EmployeeController::class, 'archived'])->name('employee.archived');
            Route::get('/home', [DashboardController::class, 'index'])->name('home');

            Route::resource('employees', EmployeeController::class);
            Route::get('/employees/{employee}/qualifications', [EmployeeController::class, 'qualifications'])->name('employee.qualifications');
            Route::get('/employees/{employee}/contacts', [EmployeeController::class, 'contacts'])->name('employee.contacts');
            Route::post('/employees/{employee}/contacts/store',[EmployeeContactController::class,'store'])->name('employee.contacts.store');
            Route::get('/employees/{employee}/contacts/{contact}',[EmployeeContactController::class,'edit'])->name('employee.contact.edit');
            Route::patch('/employees/{employee}/contacts/{contact}',[EmployeeContactController::class,'update'])->name('employee.contact.update');
            Route::delete('/employees/{employee}/contacts/{contact}',[EmployeeContactController::class,'destroy'])->name('employee.contact.destroy');

            Route::get('/activity/logs',[ActivityLogController::class,'index'])->name('activity.logs');

            Route::get('employee/reset-password/{token}',[EmployeeController::class, 'showResetPassword'])->name('employee.show-reset-password');
            Route::get('/employees/{employee}/send-welcome-mail', [EmployeeController::class, 'sendWelcomeEmail'])->name('employee.welcome-mail');
            Route::get('/employees/{employee}/send-reset-link', [EmployeeController::class, 'sendResetLink'])->name('employee.send-reset-link');
            Route::get('/employees/{employee}/tenders', [EmployeeController::class, 'tenders'])->name('employee.tenders');
            Route::post('/employees/{employee}/archive', [EmployeeController::class, 'archive'])->name('employee.archive');
            Route::get('/import/employees', [EmployeeController::class, 'importLanding'])->name('employee.landing');
            Route::get('/import/employees/export', [EmployeeController::class, 'export'])->name('employee.export');
            Route::post('/import/employees/import', [EmployeeController::class, 'import'])->name('employee.import');
            Route::get('/employees/{employee}/qualifications/export', [EmployeeQualificationPortfolioController::class, 'generatePortfolio'])->name('employee.portfolio');
            Route::get('/employees/{employee}/qr-code', [QrCodeController::class, 'employeeQrCode'])->name('employee.qrcode');

            Route::resource('departments', DepartmentController::class);

            Route::get('qualifications/fullcalendar',[QualificationController::class,'fullcalendar'])->name('qualifications.fullcalendar');
            Route::resource('qualifications', QualificationController::class);
            Route::post('upload',[UploadController::class, 'uploadQualificationFile'])->name('upload.qualification.file');
            Route::post('qualifications/{qualification}/sendSMS',[SendSMSController::class, 'sendQualificationSMS'])->name('send.sms');

            Route::resource('qualificationtypes', QualificationTypeController::class);
            Route::post('/qualificationtypes/bulk',[QualificationTypeController::class,'bulk'])->name('qualificationtypes.bulk');
            Route::resource('providers', ProviderController::class);
             Route::post('/providers/bulk',[ProviderController::class,'bulk'])->name('providers.bulk');
            Route::get('/providers/{provider}/qualifications',[ProviderController::class, 'qualifications'])->name('providerQualifications');
            Route::get('/import-provider', [ProviderLookupController::class, 'getCompanyDetails'])->name('importProvider');

            Route::resource('awarding-bodies', AwardingBodyController::class);
             Route::post('/awarding-bodies/bulk',[AwardingBodyController::class,'bulk'])->name('awarding-bodies.bulk');
            Route::get('/tenders/map',[TenderController::class, 'map'])->name('tenders.map');
            Route::resource('tenders', TenderController::class);
            Route::get('/tenders/{tender}/employees',[TenderController::class, 'employees'])->name('tenders.employees');
            Route::get('/tenders/{tender}/renewals',[TenderController::class, 'renewals'])->name('tenders.renewals');
            Route::get('/tenders/{tender}/export', [TenderExportController::class, 'generateExport'])->name('tender.export');
            Route::get('/tenders/{tender}/contacts',[TenderContactController::class,'index'])->name('tenders.contact');
            Route::post('/tenders/{tender}/contacts',[TenderContactController::class,'store'])->name('tenders.contact.store');
            Route::get('/tenders/{tender}/contacts/{contact}',[TenderContactController::class,'edit'])->name('tenders.contact.edit');
            Route::patch('/tenders/{tender}/contacts/{contact}',[TenderContactController::class,'update'])->name('tenders.contact.update');
            Route::delete('/tenders/{tender}/contacts/{contact}',[TenderContactController::class,'destroy'])->name('tenders.contact.destroy');
            Route::group(['prefix'=>'settings'], function() {
                Route::get('user/{user}/request-access',[ImpersonateUserController::class,'requestAccess'])->name('user.request-access');
                Route::get('generate/code/{user}',[ImpersonateUserController::class,'show'])->name('generate.show');
                Route::post('generate/code/{admin}',[ImpersonateUserController::class,'generateCode'])->name('generate.code');
                Route::post('impersonate/login/{user}',[ImpersonateUserController::class,'loginUser'])->name('impersonate.login');
                Route::resource('users', UserController::class);
                Route::post('/deactivated', [SettingController::class, 'deactivated'])->name('settings.deactivated');
                Route::post('/deactivate', [SettingController::class, 'deactivate'])->name('settings.deactivate');
                Route::post('/subscription/cancel', [SettingController::class, 'cancel'])->name('settings.subscription.cancel');
                Route::get('/billing', [SettingController::class, 'billing'])->name('settings.billing');
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
                Route::get('6', [ReportController::class, 'thisYearProvider']);
            });

            Route::group(['prefix'=>'training'], function() {
                Route::get('', [TrainingController::class, 'index']);
                Route::post('/filter',[TrainingController::class,'filter'])->name('training.filter');
                Route::get('/search',[TrainingController::class,'search'])->name('training.search');
                Route::get('/cpd/{cpd}',[TrainingController::class,'cpd'])->name('training.cpd');
                Route::get('/nvq/{nvq}',[TrainingController::class,'nvq'])->name('training.nvq');
                Route::get('/commercial/{course}',[TrainingController::class,'commercial'])->name('training.commercial');
                Route::post('/{course}/coursemeta',[TrainingController::class,'coursemeta'])->name('training.coursemeta.search');
                Route::get('/order',[TrainingController::class,'order'])->name('training.order');


            });

            Route::get('/billing-portal', function (Request $request) {
                return Auth::user()->companies()->first()->redirectToBillingPortal(route('home'));
            });

        });
    });
});

Route::prefix('portal')->name('portal.')->group(function() {
    Route::view('/login', 'portal/login')->name('login');
    Route::get('/company',[PortalController::class,'login.show']);

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
