<?php

namespace App\Http\Livewire;

use App\Models\Employee;

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
        $employees = Employee::search($this->term)->get();

        $data = [
            'employees' => $employees,
        ];

        return view('livewire.search-employee', $data);
    }
}