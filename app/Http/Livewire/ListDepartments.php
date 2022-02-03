<?php

namespace App\Http\Livewire;

use App\Models\Department;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class ListDepartments extends Component
{
    public $searchTerm; 
    public $departments;

    public function render()
    {
        
        $company = Auth::user()->companies()->first();

        $this->departments = $company->departments()
            ->where('name', 'like', '%' . $this->searchTerm . '%')
            ->get();

        return view('livewire.list-departments');
    }
}
