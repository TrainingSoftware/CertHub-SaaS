<?php

namespace App\Http\Livewire\Employee;

use App\Models\Employee;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;
use Request;

class Tenders extends Component
{
    use WithPagination;
    public $searchTerm;
    public $employee;
    protected $paginationTheme = 'bootstrap';

    public function mount(Employee $employee){
        $this->employee = $employee;
    }
    public function render()
    {
        $company = Auth::user()->companies()->first();

        $tenders = $this->employee->tenders()
            ->where('name', 'like', '%' . $this->searchTerm . '%');

        return view('livewire.employee.tenders',[
            'tenders' => $tenders->paginate(10)
        ]);
    }
}
