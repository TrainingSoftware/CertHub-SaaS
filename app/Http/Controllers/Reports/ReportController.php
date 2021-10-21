<?php

namespace App\Http\Controllers\Reports;

use App\Http\Resources\Qualification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
class ReportController extends Controller
{
    public function index()
    {
        $thisMonth = Carbon::now();
        $nextMonth = Carbon::now()->addMonth();
        $thisQuarter = Carbon::now()->addMonth(2);
        $nextQuarterStart = Carbon::now()->addMonth(3);
        $nextQuarterEnd = Carbon::now()->addMonth(5);

        return view('reports.index', [
            'thisMonth' => $thisMonth,
            'nextMonth' => $nextMonth,
            'thisQuarter' => $thisQuarter,
            'nextQuarterStart' => $nextQuarterStart,
            'nextQuarterEnd' => $nextQuarterEnd
        ]);
    }


    public function thisMonth()
    {
        // get current logged in user
        $user = Auth::user();

        // get the current date
        $thisMonth = Carbon::now();

        // get qualifications expiring in current month
        $qualifications = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year)
            ->get();

        // sum qualifications expiring in current month
        $qualificationsPrice = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year)
            ->sum('price');

        // Count qualifications expiring in current month
        $qualificationsCount = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year)
            ->count();

        return view('reports.qualifications.this-month', [
            'thisMonth' => $thisMonth,
            'qualifications' => $qualifications,
            'qualificationsPrice' => $qualificationsPrice,
            'qualificationsCount' => $qualificationsCount
        ]);
    }


    public function nextMonth()
    {
        // get current logged in user
        $user = Auth::user();

        // get the next month
        $nextMonth = Carbon::now()->addMonth();

        // get qualifications expiring next month
        $qualifications = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereMonth('expiry_date', $nextMonth->month)
            ->whereYear('expiry_date', $nextMonth->year)
            ->get();

        // sum qualifications expiring next month
        $qualificationsPrice = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereMonth('expiry_date', $nextMonth->month)
            ->whereYear('expiry_date', $nextMonth->year)
            ->sum('price');

        // count qualifications expiring next month
        $qualificationsCount = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereMonth('expiry_date', $nextMonth->month)
            ->whereYear('expiry_date', $nextMonth->year)
            ->count();

        return view('reports.qualifications.next-month', [
            'nextMonth' => $nextMonth,
            'qualifications' => $qualifications,
            'qualificationsPrice' => $qualificationsPrice,
            'qualificationsCount' => $qualificationsCount
        ]);
    }


    public function thisQuarter()
    {
        // get current logged in user
        $user = Auth::user();

        // get the dates
        $start = Carbon::now()->startOfMonth();
        $end = Carbon::now()->endOfMonth()->addMonths(2);

        // get qualifications expiring this quarter
        $qualifications = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereBetween('expiry_date', array($start, $end))
            ->get();

        // sum qualifications expiring this quarter
        $qualificationsPrice = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereBetween('expiry_date', array($start, $end))
            ->sum('price');

        // count qualifications expiring this quarter
        $qualificationsCount = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereBetween('expiry_date', array($start, $end))
            ->count();

        return view('reports.qualifications.this-quarter', [
            'start' => $start,
            'end' => $end,
            'qualifications' => $qualifications,
            'qualificationsPrice' => $qualificationsPrice,
            'qualificationsCount' => $qualificationsCount
        ]);
    }


    public function nextQuarter()
    {
        // get current logged in user
        $user = Auth::user();

        // get the dates
        $start = Carbon::now()->startOfMonth()->addMonths(3);
        $end = Carbon::now()->endOfMonth()->addMonths(5);

        // get qualifications expiring next quarter
        $qualifications = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereBetween('expiry_date', array($start, $end))
            ->get();

        // sum qualifications expiring next quarter
        $qualificationsPrice = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereBetween('expiry_date', array($start, $end))
            ->sum('price');

        // count qualifications expiring next quarter
        $qualificationsCount = \App\Models\Qualification::where('user_id', '=', $user->id)
            ->whereBetween('expiry_date', array($start, $end))
            ->count();

        return view('reports.qualifications.next-quarter', [
            'start' => $start,
            'end' => $end,
            'qualifications' => $qualifications,
            'qualificationsPrice' => $qualificationsPrice,
            'qualificationsCount' => $qualificationsCount
        ]);
    }


}
