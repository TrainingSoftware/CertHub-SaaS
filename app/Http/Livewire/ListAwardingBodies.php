<?php

namespace App\Http\Livewire;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ListAwardingBodies extends Component
{
    public $searchTerm;
    use WithPagination;
    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        $company = Auth::user()->companies()->first();

        $awardingBodies = $company->awardingBodies()
            ->where('name', 'like', '%' . $this->searchTerm . '%');

        return view('livewire.list-awarding-bodies',[
            'awardingBodies' => $awardingBodies ->paginate(10)
        ]);
    }

}
