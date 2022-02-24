<?php

namespace App\Http\Controllers\Subscriptions;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
    public function upgrade(Request $request)
    {
        $this->validate($request,[
            'quantity' => 'required'
        ]);


        $request->user()->companies()->first()->subscription('default')->updateQuantity($request->quantity);


        return redirect()->back()->with('success','Upgrade Successful');
    }
    public function newCard(Request $request)
    {
        $this->validate($request, [
            'token' => 'required',
        ]);
        $company = Auth::user()->companies()->first();
        $company->addPaymentMethod($request->token);
        return redirect()->back()->with('success','New Payment method added successfully');
    }
    public function deleteCard()
    {
        $cardId = request('card');
        $company = Auth::user()->companies()->first();
        $company->deletePaymentMethod($cardId);

        if($company->paymentMethods()->count() == 1){
            $getLast = $company->paymentMethods()->first();
            $company->updateDefaultPaymentMethod($getLast->id);
        }
        return redirect()->back()->with('success','Payment method deleted successfully');
    }
    public function setAsDefault()
    {
        $cardId = request('card');
        $company = Auth::user()->companies()->first();
        $company->updateDefaultPaymentMethod($cardId);
        return redirect()->back()->with('success','Payment set as default successfully');
    }
}
