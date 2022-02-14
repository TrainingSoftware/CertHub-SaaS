<?php

namespace App\Http\Livewire\Employee;

use App\Models\Employee;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Request;

class Tenders extends Component
{
    public $searchTerm;
    public $employee;

    public function mount(Employee $employee){
        $this->employee = $employee;
    }
    public function render()
    {
        $company = Auth::user()->companies()->first();

        $this->tenders = $this->employee->tenders()
            ->where('name', 'like', '%' . $this->searchTerm . '%')
            ->get();

        return view('livewire.employee.tenders');
    }
}
