<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingController extends Controller
{
    public function billing()
    {
        $plan  = Plan::first();
        return view('settings.billing',compact('plan'));
    }
}
