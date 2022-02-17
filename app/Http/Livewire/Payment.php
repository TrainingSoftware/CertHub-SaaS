<?php

namespace App\Http\Livewire;

use App\Models\Plan;
use Livewire\Component;

class Payment extends Component
{
    public $intent;
    public $amount;
    public $quantity = 1;
    public $plan;
    public function mount(){
        $this->plan = Plan::where('identifier', request('plan'))
            ->orWhere('identifier', 'basic')
            ->first();

    }
    public function render()
    {

        $this->intent = auth()->user()->companies()->first()->createSetupIntent()->toArray();

        return view('livewire.payment');
    }
    public function updateQuantity()
    {

        $this->amount =  $this->quantity * $this->plan->price;
    }
}
