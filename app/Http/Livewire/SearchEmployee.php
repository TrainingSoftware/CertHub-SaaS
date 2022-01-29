<?php

namespace App\Http\Livewire;

use App\Models\Employee;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class SearchEmployee extends Component
{
    public $term = "";
    
    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function render()
    {
        sleep(1);
        
        // get current company
        $company = Auth::user()->companies()->first();

        $employees = Employee::where('company_id', '=', $company->id)
            ->search($this->term)->get();

        $data = [
            'employees' => $employees,
        ];

        return view('livewire.search-employee', $data);
    }
}