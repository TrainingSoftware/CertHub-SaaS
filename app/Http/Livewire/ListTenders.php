<?php

namespace App\Http\Livewire;

use App\Models\Tender;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class ListTenders extends Component
{
    public $searchTerm; 
    public $tenders;

    public function render()
    {
        $company = Auth::user()->companies()->first();

        $this->tenders = $company->tenders()
            ->where('name', 'like', '%' . $this->searchTerm . '%')
            ->get();

        return view('livewire.list-tenders');
    }
}
