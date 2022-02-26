<?php

namespace App\Http\Livewire;

use App\Models\Employee;
use App\Traits\Sortable;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ListEmployees extends Component
{
    use WithPagination,Sortable;
    public $searchTerm;
    public $department;
    public $departments;
    protected $paginationTheme = 'bootstrap';

    public function mount()
    {
         $company = Auth::user()->companies()->first();

         $employees= $company->employees()->whereHas('department')->pluck('department_id');

         $this->departments = $company->departments->filter(function($t) use ($employees){
             return in_array($t->id,$employees->toArray());
         });

    }

    public function render()
    {

        $company = Auth::user()->companies()->first();
        $employees = $company->employees();
        if($this->searchTerm != ""){
            $employees->where(function($q){
                $q->where('firstname', 'like', '%' . $this->searchTerm . '%')
                ->orWhere('lastname', 'like', '%' . $this->searchTerm . '%')
                ->orWhere('email', 'like', '%' . $this->searchTerm . '%');
            });
        }
        if($this->department != ""){
            $employees->where('department_id',$this->department);
        }

        return view('livewire.list-employees',[
            'employees' =>$this->sortField != null ?
                        $employees->orderBy($this->sortField,$this->sortDirection)->paginate(10) : $employees->paginate(10)
        ]);
    }
}
