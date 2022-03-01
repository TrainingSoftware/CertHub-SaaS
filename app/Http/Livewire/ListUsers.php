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
        if(Auth::user()->isAdmin()){
            $this->users = User::all();
            if($this->searchTerm != ""){
                $this->users = User::where('name', 'like', '%' . $this->searchTerm . '%')
                ->get();
            }
            return view('livewire.list-users');
        }
        $company = Auth::user()->companies()->first();

        $this->users = $company->users()
            ->where('name', 'like', '%' . $this->searchTerm . '%')
            ->get();

        return view('livewire.list-users');
    }
}
