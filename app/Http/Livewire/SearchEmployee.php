<?php

namespace App\Http\Livewire;

use App\Models\Employee;
use App\Models\Tender;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class SearchEmployee extends Component
{
    public $term = "";
    public $selectedEmployees = [];
    public Tender $tender;



    public function render()
    {
        sleep(1);
        
        $company = Auth::user()->companies()->first();

        $employees = Employee::where('company_id', '=', $company->id)
            ->search($this->term)->get();

        $data = [
            'employees' => $employees,
        ];

        return view('livewire.search-employee', $data);
    }       



    public function attachEmployee($id) 
    {
        
        Tender::findOrFail($id)->employees()->attach($this->selectedEmployees);

        return redirect()->to('/tenders/' . $this->tender->id)
            ->with('success', 'Employees successfully added');;

    }
}