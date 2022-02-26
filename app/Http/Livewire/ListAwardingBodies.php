<?php

namespace App\Http\Livewire;

use App\Traits\Sortable;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ListAwardingBodies extends Component
{
    public $searchTerm;
    use WithPagination,Sortable;
    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        $company = Auth::user()->companies()->first();

        $awardingBodies = $company->awardingBodies()
            ->where('name', 'like', '%' . $this->searchTerm . '%');

        return view('livewire.list-awarding-bodies',[
            'awardingBodies' => $this->sortField != null ? $awardingBodies->orderBy($this->sortField,$this->sortDirection)->paginate(10):$awardingBodies ->paginate(10)
        ]);
    }

}
