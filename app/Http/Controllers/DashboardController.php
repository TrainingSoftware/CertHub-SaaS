<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Qualification;
use App\Models\QualificationType;
use App\Models\Employee;
use App\Models\Provider;
use App\Models\Department;

class DashboardController extends Controller
{
    public function index()
    {
        if(Auth::user()->isAdmin()){
            return redirect('activity/logs');
        }
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
        $qualifications = Qualification::whereHas('employee')->where('company_id', '=', $company->id)
            ->count();

        // Count employees
        $employees = Employee::where('company_id', '=', $company->id)
            ->count();

        // Count qualification types
        $qualificationtypes = QualificationType::where('company_id', '=', $company->id)
            ->count();

        // Count providers
        $providers = Provider::where('company_id', '=', $company->id)
            ->count();

        // Count departments
        $departments = Department::where('company_id', '=', $company->id)
            ->count();

        // get qualifications expiring this quarter
        $upcomingRenewals = Qualification::whereHas('employee')->where('company_id', '=', $company->id)
            ->whereBetween('expiry_date', array(
                $thisMonth->startOfMonth(),
                $thisQuarter->endOfMonth()
                )
            )->get();

        // get qualifications expiring this quarter
        $thisQuarterTrainingSpend = Qualification::whereHas('employee')->where('company_id', '=', $company->id)
            ->whereBetween('expiry_date', array(
                    $thisMonth->startOfMonth(),
                    $thisQuarter->endOfMonth()
                )
            )->sum('price');

        // count qualifications expiring in current month
        $upcomingRenewalsCount = Qualification::whereHas('employee')->where('company_id', '=', $company->id)
            ->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year)
            ->count();

        // sum current month training spend
        $monthlyTrainingSpend = Qualification::whereHas('employee')->where('company_id', '=', $company->id)
            ->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year)
            ->sum('price');

        // sum next month training spend
        $nextMonthTrainingSpend = Qualification::whereHas('employee')->where('company_id', '=', $company->id)
            ->whereMonth('expiry_date', $nextMonth->month)
            ->whereYear('expiry_date', $nextMonth->year)
            ->sum('price');

        // sum third month training spend
        $thirdMonthTrainingSpend = Qualification::whereHas('employee')->where('company_id', '=', $company->id)
            ->whereMonth('expiry_date', $thisQuarter->month)
            ->whereYear('expiry_date', $thisQuarter->year)
            ->sum('price');

        // get latest updated employees
        $latestEmployees = Employee::where('company_id', '=', $company->id)
            ->take(5)
            ->get()
            ->sortByDesc('updated_at');

        // get latest updated qualifications
        $latestQualifications = Qualification::whereHas('employee')->where('company_id', '=', $company->id)
            ->take(5)
            ->get()
            ->sortByDesc('updated_at');

        $qualificationSpendByMonth = Qualification::whereHas('employee')->where('company_id', '=', $company->id)
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
