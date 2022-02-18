<?php

namespace App\Http\Controllers\Subscriptions;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index() {
        $data = [
            'intent' => auth()->user()->companies()->first()->createSetupIntent()
        ];

        return view('subscriptions.payment')->with($data);
    }

    public function store(Request $request) {
        $this->validate($request, [
            'token' => 'required',
            'quantity' => 'required'
        ]);


        $plan = Plan::where('identifier', $request->plan)
            ->orWhere('identifier', 'basic')
            ->first();

        $request->user()->companies()->first()->newSubscription('default',$plan->stripe_id)->quantity($request->quantity)->create($request->token);

        return redirect('/home');
    }
}
