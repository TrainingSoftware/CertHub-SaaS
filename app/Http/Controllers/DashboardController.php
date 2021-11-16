<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $thisMonth = Carbon::now();
        $nextMonth = Carbon::now()->addMonth();
        $thisQuarter = Carbon::now()->addMonth(2);
        $nextQuarterStart = Carbon::now()->addMonth(3);
        $nextQuarterEnd = Carbon::now()->addMonth(5);
        $startOfYear = Carbon::now()->startOfYear();
        $endOfYear = Carbon::now()->endOfYear();

        // get current company
        $company = Auth::user()->companies()->first();

        // Count qualifications
        $qualifications = \App\Models\Qualification::where('company_id', '=', $company->id)
            ->count();

        // Count employees
        $employees = \App\Models\Employee::where('company_id', '=', $company->id)
            ->count();

        // Count qualification types
        $qualificationtypes = \App\Models\QualificationType::where('company_id', '=', $company->id)
            ->count();

        // Count providers
        $providers = \App\Models\Provider::where('company_id', '=', $company->id)
            ->count();

        // Count departments
        $departments = \App\Models\Department::where('company_id', '=', $company->id)
            ->count();

        // get qualifications expiring this quarter
        $upcomingRenewals = \App\Models\Qualification::where('company_id', '=', $company->id)
            ->whereBetween('expiry_date', array(
                $thisMonth->startOfMonth(),
                $thisQuarter->endOfMonth()
                )
            )->get();

        // get qualifications expiring this quarter
        $thisQuarterTrainingSpend = \App\Models\Qualification::where('company_id', '=', $company->id)
            ->whereBetween('expiry_date', array(
                    $thisMonth->startOfMonth(),
                    $thisQuarter->endOfMonth()
                )
            )->sum('price');

        // count qualifications expiring in current month
        $upcomingRenewalsCount = \App\Models\Qualification::where('company_id', '=', $company->id)
            ->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year)
            ->count();

        // sum current month training spend
        $monthlyTrainingSpend = \App\Models\Qualification::where('company_id', '=', $company->id)
            ->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year)
            ->sum('price');

        // sum next month training spend
        $nextMonthTrainingSpend = \App\Models\Qualification::where('company_id', '=', $company->id)
            ->whereMonth('expiry_date', $nextMonth->month)
            ->whereYear('expiry_date', $nextMonth->year)
            ->sum('price');

        // sum third month training spend
        $thirdMonthTrainingSpend = \App\Models\Qualification::where('company_id', '=', $company->id)
            ->whereMonth('expiry_date', $thisQuarter->month)
            ->whereYear('expiry_date', $thisQuarter->year)
            ->sum('price');

        // get latest updated employees
        $latestEmployees = \App\Models\Employee::where('company_id', '=', $company->id)
            ->take(5)
            ->get()
            ->sortByDesc('updated_at');

        // get latest updated qualifications
        $latestQualifications = \App\Models\Qualification::where('company_id', '=', $company->id)
            ->take(5)
            ->get()
            ->sortByDesc('updated_at');

        $qualificationSpendByMonth = \App\Models\Qualification::where('company_id', '=', $company->id)
            ->groupBy('created_at');

        return view('home', [
            'thisMonth' => $thisMonth,
            'nextMonth' => $nextMonth,
            'thisQuarter' => $thisQuarter,
            'nextQuarterStart' => $nextQuarterStart,
            'nextQuarterEnd' => $nextQuarterEnd,
            'upcomingRenewals' => $upcomingRenewals,
            'upcomingRenewalsCount' => $upcomingRenewalsCount,
            'startOfYear' => $startOfYear,
            'endOfYear' => $endOfYear,
            'monthlyTrainingSpend' => $monthlyTrainingSpend,
            'nextMonthTrainingSpend' => $nextMonthTrainingSpend,
            'thirdMonthTrainingSpend' => $thirdMonthTrainingSpend,
            'latestEmployees' => $latestEmployees,
            'latestQualifications' => $latestQualifications,
            'qualificationSpendByMonth' => $qualificationSpendByMonth,
            'qualifications' => $qualifications,
            'employees' => $employees,
            'qualificationtypes' => $qualificationtypes,
            'providers' => $providers,
            'departments' => $departments,
            'thisQuarterTrainingSpend' => $thisQuarterTrainingSpend
        ]);
    }
}
