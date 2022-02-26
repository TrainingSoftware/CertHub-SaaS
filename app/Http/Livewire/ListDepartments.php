<?php

namespace App\Http\Livewire;

use App\Models\Department;
use App\Traits\Sortable;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ListDepartments extends Component
{
    use WithPagination,Sortable;
    public $searchTerm;
    protected $paginationTheme = 'bootstrap';


    public function render()
    {

        $company = Auth::user()->companies()->first();

        $departments = $company->departments()
            ->where('name', 'like', '%' . $this->searchTerm . '%');

        return view('livewire.list-departments',[
            'departments' => $this->sortField !=null ? $departments->orderBy($this->sortField,$this->sortDirection)->paginate(10) :$departments->paginate(10)
        ]);
    }
}
