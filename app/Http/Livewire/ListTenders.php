<?php

namespace App\Http\Livewire;

use App\Models\Tender;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class ListTenders extends Component
{
    public $searchTerm;
    public $tenders;
    public $start;
    public $end;

    public function render()
    {
        $company = Auth::user()->companies()->first();
        $tenders = $company->tenders();
        if($this->searchTerm !=''){
            $this->tenders = $tenders->where('name', 'like', '%' . $this->searchTerm . '%');
        }
        if($this->start != ""){

            $newStart = date('Y-m-d',strtotime($this->start));

             $tenders->whereDate('start_date','<=',$newStart);
        }
        if($this->end != ""){
            $newEnd = date('Y-m-d',strtotime($this->end));
             $tenders->whereDate('end_date','>=',$newEnd);
        }
        $this->tenders = $tenders->get();
        return view('livewire.list-tenders');
    }
}
