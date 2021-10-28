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

        // get current logged in user
        $user = Auth::user();

        // Count qualifications
        $qualifications = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->count();

        // Count employees
        $employees = \App\Models\Employee::where('user_id', '=', $user->id)
            ->count();

        // Count qualification types
        $qualificationtypes = \App\Models\QualificationType::where('user_id', '=', $user->id)
            ->count();

        // Count providers
        $providers = \App\Models\Provider::where('user_id', '=', $user->id)
            ->count();

        // Count departments
        $departments = \App\Models\Department::where('user_id', '=', $user->id)
            ->count();

        // get qualifications expiring in current month
        $upcomingRenewals = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year)
            ->get();

        // count qualifications expiring in current month
        $upcomingRenewalsCount = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year)
            ->count();

        // sum current month training spend
        $monthlyTrainingSpend = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year)
            ->sum('price');

        // get latest updated employees
        $latestEmployees = \App\Models\Employee::where('user_id', '=', $user->id)
            ->take(5)
            ->get()
            ->sortByDesc('updated_at');


        // get latest updated qualifications
        $latestQualifications = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->take(5)
            ->get()
            ->sortByDesc('updated_at');

        $qualificationSpendByMonth = \App\Models\Qualification::where('user_id', '=', $user->id)
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
            'latestEmployees' => $latestEmployees,
            'latestQualifications' => $latestQualifications,
            'qualificationSpendByMonth' => $qualificationSpendByMonth,
            'qualifications' => $qualifications,
            'employees' => $employees,
            'qualificationtypes' => $qualificationtypes,
            'providers' => $providers,
            'departments' => $departments
        ]);
    }
}
