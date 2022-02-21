<?php

namespace App\Http\Livewire;

use App\Models\Tender;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ListTenders extends Component
{
    use WithPagination;
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
            'tenders' => $tenders->paginate(10)
        ]);
    }
}
