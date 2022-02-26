<?php

namespace App\Http\Livewire;

use App\Models\Tender;
use App\Traits\Sortable;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ListTenders extends Component
{
    use WithPagination,Sortable;
    protected $paginationTheme = 'bootstrap';
    public $searchTerm;
    public $start;
    public $end;

    public function render()
    {
        $company = Auth::user()->companies()->first();
        $tenders = $company->tenders();
        if($this->searchTerm !=''){
             $tenders->where('name', 'like', '%' . $this->searchTerm . '%');
        }
        if($this->start != "" && $this->end != ""){

            $newStart = date('Y-m-d',strtotime($this->start));
            $newEnd = date('Y-m-d',strtotime($this->end));
            $tenders->whereDate('end_date','>=',$newEnd)->whereDate('start_date','<=',$newStart);
        }


        return view('livewire.list-tenders',[
            'tenders' => $this->sortField != null ? $tenders->orderBy($this->sortField,$this->sortDirection)->paginate(10) : $tenders->paginate(10)
        ]);
    }
}
