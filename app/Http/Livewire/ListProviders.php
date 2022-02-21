<?php

namespace App\Http\Livewire;

use App\Models\Provider;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ListProviders extends Component
{
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    public $searchTerm;

    public function render()
    {
        $company = Auth::user()->companies()->first();

        $providers = $company->providers()
            ->where('name', 'like', '%' . $this->searchTerm . '%');

        return view('livewire.list-providers',[
            'providers' => $providers->paginate(10)
        ]);
    }
}
