<?php

namespace App\Http\Livewire;

use App\Models\Employee;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class GlobalSearch extends Component
{
    public $searchTerm;
    public $employees;

    public function render()
    {

        $company = Auth::user()->companies()->first();

        $this->employees = $company->employees()
            ->where(function($q){
                $q->where('firstname', 'like', '%' . $this->searchTerm . '%')
                ->orWhere('lastname', 'like', '%' . $this->searchTerm . '%')
                ->orWhere('email', 'like', '%' . $this->searchTerm . '%');
            })->get();

        return view('livewire.global-search');
    }
}
