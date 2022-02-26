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
    public function deactivate()
    {
        $user  = Auth::user();
        $user->update(['status' => false]);
        Auth::logout();
        return redirect()->route('login')->with('error', 'Your Account has been deactivated.');

    }
    public function deactivated()
    {
        return view('settings.deactivated');
    }
    public function cancel()
    {
       $company=  Auth::user()->companies()->first();
       $company->subscription('default')->cancel();
       return redirect()->back()->with('success','Subscription cancelled');
    }
}
