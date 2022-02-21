<?php

namespace App\Http\Livewire;

use App\Models\QualificationType;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ListQualificationTypes extends Component
{
    public $searchTerm;
    use WithPagination;
    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        $company = Auth::user()->companies()->first();

        $qualificationtypes = $company->qualificationtypes()
            ->where('name', 'like', '%' . $this->searchTerm . '%');

        return view('livewire.list-qualification-types',[
            'qualificationtypes' => $qualificationtypes->paginate(10)
        ]);
    }

}
