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

        $yearlyTrainingSpend = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereBetween('expiry_date', array($startOfYear, $endOfYear))
            ->sum('price');

        $monthlyTrainingSpend = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year)
            ->sum('price');

        return view('home', [
            'thisMonth' => $thisMonth,
            'nextMonth' => $nextMonth,
            'thisQuarter' => $thisQuarter,
            'nextQuarterStart' => $nextQuarterStart,
            'nextQuarterEnd' => $nextQuarterEnd,
            'upcomingRenewals' => $upcomingRenewals,
            'startOfYear' => $startOfYear,
            'endOfYear' => $endOfYear,
            'yearlyTrainingSpend' => $yearlyTrainingSpend,
            'monthlyTrainingSpend' => $monthlyTrainingSpend
        ]);
    }
}
