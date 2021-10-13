<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\Employee;
use App\Models\Department;
use App\Models\Provider;
use App\Models\Qualification;
use App\Models\QualificationType;
use App\Models\Company;

use App\Policies\EmployeePolicy;
use App\Policies\DepartmentPolicy;
use App\Policies\ProviderPolicy;
use App\Policies\QualificationPolicy;
use App\Policies\QualificationTypePolicy;
use App\Policies\Companypolicy;



class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
        Employee::class => EmployeePolicy::class,
        Department::class => DepartmentPolicy::class,
        Provider::class => ProviderPolicy::class,
        Qualification::class => QualificationPolicy::class,
        QualificationType::class => QualificationTypePolicy::class,
        Company::class => CompanyPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
    }
}
