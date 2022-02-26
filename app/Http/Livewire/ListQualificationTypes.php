<?php

namespace App\Http\Livewire;

use App\Models\QualificationType;
use App\Traits\Sortable;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ListQualificationTypes extends Component
{
    public $searchTerm;
    use WithPagination,Sortable;
    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        $company = Auth::user()->companies()->first();

        $qualificationtypes = $company->qualificationtypes()
            ->where('name', 'like', '%' . $this->searchTerm . '%');

        return view('livewire.list-qualification-types',[
            'qualificationtypes' => $this->sortField != null ? $qualificationtypes->orderBy($this->sortField,$this->sortDirection)->paginate(10) :$qualificationtypes->paginate(10)
        ]);
    }

}
