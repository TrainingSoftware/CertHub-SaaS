<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserCode;
use App\Notifications\RequestAccessNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ImpersonateUserController extends Controller
{
    //
    public function generateCode(User $admin)
    {
        $user = Auth::user();
        $code = $user->generateAccessCode($admin);

        return redirect()->back()->with([
            'code' => $code,
            'success' => 'Code generated successfully'
        ]);
    }
    public function requestAccess(User $user)
    {
        $admin = Auth::user();
        $user->notify(new RequestAccessNotification($admin));
        return redirect()->back()->with('success','Access Requested Successfully');
    }
    public function show(User $user)
    {
        return view('generate.show',compact('user'));
    }
    public function loginUser(User $user)
    {
        $code = request('code');
        if($user->code->code == $code){
            Auth::login($user);
            return redirect('/home');
        }else{
            return redirect()->back()->with('error','Invalid access code for user');
        }
    }
}
