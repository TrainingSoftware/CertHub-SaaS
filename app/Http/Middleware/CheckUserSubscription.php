<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(Auth::user()->isAdmin()){
            return $next($request);
        }
        if (Auth::user() && ! Auth::user()->companies()->first()->subscribed('default')) {
            return redirect('/payments?plan=standard');
        }

        return $next($request);

    }
}
