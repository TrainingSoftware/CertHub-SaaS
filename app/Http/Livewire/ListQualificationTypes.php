<?php

namespace App\Http\Livewire;

use App\Models\QualificationType;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class ListQualificationTypes extends Component
{
    public $searchTerm; 
    public $qualificationtypes;

    public function render()
    {
        $company = Auth::user()->companies()->first();

        $this->qualificationtypes = $company->qualificationtypes()
            ->where('name', 'like', '%' . $this->searchTerm . '%')
            ->get();

        return view('livewire.list-qualification-types');
    }
}
