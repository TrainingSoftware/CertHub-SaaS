<?php

namespace App\Http\Livewire;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Livewire\WithPagination;
use Livewire\Component;

class ListEmployees extends Component
{
    public $term = "";
    use WithPagination;

    public function render()
    {
        sleep(1);
        
        $company = Auth::user()->companies()->first();

        $employees = Employee::where('company_id', '=', $company->id)
            ->search($this->term)
            ->get();

        $employeesOnLoad = Employee::where('company_id', '=', $company->id)
            ->paginate(10);

        $data = [
            'employees' => $employees,
            'employeesOnLoad' => $employeesOnLoad
        ];

        return view('livewire.list-employees', $data);
    }
}
