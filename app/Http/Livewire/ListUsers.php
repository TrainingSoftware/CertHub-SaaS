<?php

namespace App\Http\Livewire;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class ListUsers extends Component
{
    public $searchTerm; 
    public $users;

    public function render()
    {
        $company = Auth::user()->companies()->first();

        $this->users = $company->users()
            ->where('name', 'like', '%' . $this->searchTerm . '%')
            ->get();

        return view('livewire.list-users');
    }
}
