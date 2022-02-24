<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingController extends Controller
{
    public function billing()
    {
        $company = Auth::user()->companies()->first();
        $plan  = Plan::first();
        $cards = $company->paymentMethods();
        $default = $company->defaultPaymentMethod();
        $invoices = $company->invoices();
        $employeesCount = $company->employees()->count();
        $intent = auth()->user()->companies()->first()->createSetupIntent();
        return view('settings.billing',compact('plan','intent','cards','default','invoices','employeesCount'));
    }

    public function deactivated()
    {
        return view('subscriptions.deactivated');
    }
}
