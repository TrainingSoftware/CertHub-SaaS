<?php

namespace App\Http\Livewire\Employee;

use App\Models\Employee;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Request;

class Tenders extends Component
{
    public $searchTerm; 
    public $employees;

    public function render(Request $request, Employee $employee)
    {
        
        $company = Auth::user()->companies()->first();

        $this->tenders = $employee->tenders()
            ->where('name', 'like', '%' . $this->searchTerm . '%')
            ->get();

        return view('livewire.employee.tenders');
    }
}
