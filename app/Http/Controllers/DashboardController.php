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

        // sum yearly training spend
        $yearlyTrainingSpend = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereBetween('expiry_date', array($startOfYear, $endOfYear))
            ->sum('price');

        // sum current month training spend
        $monthlyTrainingSpend = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year)
            ->sum('price');

        // count users employees
        $countEmployees = \App\Models\Employee::where('user_id', '=', $user->id)->count();

        // get latest updated employees
        $latestEmployees = \App\Models\Employee::where('user_id', '=', $user->id)
            ->take(5)
            ->get()
            ->sortByDesc('updated_at');

        // count users qualifications
        $countQualifications = \App\Models\Qualification::where('user_id', '=', $user->id)->count();

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
            'yearlyTrainingSpend' => $yearlyTrainingSpend,
            'monthlyTrainingSpend' => $monthlyTrainingSpend,
            'countEmployees' => $countEmployees,
            'latestEmployees' => $latestEmployees,
            'countQualifications' => $countQualifications,
            'latestQualifications' => $latestQualifications,
            'qualificationSpendByMonth' => $qualificationSpendByMonth,
        ]);
    }
}
