<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function billing()
    {
        return view('settings.billing');
    }

    public function deactivated()
    {
        return view('subscriptions.deactivated');
    }
}
