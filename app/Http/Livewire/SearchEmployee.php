<?php

namespace App\Http\Livewire;

use App\Models\Employee;
use App\Models\Tender;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class SearchEmployee extends Component
{
    public $searchTerm = "";
    public $employees;
    public $selectedEmployees = [];
    public Tender $tender;



    public function render()
    {

        $company = Auth::user()->companies()->first();

        $this->employees = $company->employees()
            ->where('firstname', 'like', '%' . $this->searchTerm . '%')
            ->orWhere('lastname', 'like', '%' . $this->searchTerm . '%')
            ->get();

        return view('livewire.search-employee');
    }



    public function attachEmployee($id)
    {
        try {
            Tender::findOrFail($id)->employees()->attach($this->selectedEmployees);

        }catch (QueryException $exception){
            return redirect()->to('/tenders/' . $this->tender->id)
            ->with('error', 'Employee already added');
        }

        return redirect()->to('/tenders/' . $this->tender->id)
            ->with('success', 'Employees successfully added');

    }
}
