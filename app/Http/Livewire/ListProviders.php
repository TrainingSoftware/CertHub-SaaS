<?php

namespace App\Http\Livewire;

use App\Models\Provider;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class ListProviders extends Component
{
    public $searchTerm; 
    public $providers;

    public function render()
    {
        $company = Auth::user()->companies()->first();

        $this->providers = $company->providers()
            ->where('name', 'like', '%' . $this->searchTerm . '%')
            ->get();

        return view('livewire.list-providers');
    }
}
