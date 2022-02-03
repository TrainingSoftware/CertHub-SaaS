<?php

namespace App\Http\Livewire;

use App\Models\Qualification;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class ListQualifications extends Component
{
    public $searchTerm; 
    public $qualifications;

    public function render()
    {
        $company = Auth::user()->companies()->first();

        $this->qualifications = $company->qualifications()
            ->where('employee_id', 'like', '%' . $this->searchTerm . '%')
            ->get();

        return view('livewire.list-qualifications');
    }
}
