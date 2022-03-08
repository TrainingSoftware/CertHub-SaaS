<?php

namespace App\Http\Livewire;

use App\Models\Location;
use App\Traits\Sortable;
use Livewire\Component;
use Livewire\WithPagination;

class ListCourseMetas extends Component
{
    use WithPagination,Sortable;
    public $qualification;
    public $location;
    public $dateStart;
    public $dateEnd;
    protected $paginationTheme = 'bootstrap';
    public $locations;

    public function mount()
    {

         $locations = $this->qualification->courseMetas()->pluck('location_id');

         $this->locations= Location::all()->filter(function($t) use ($locations){
             return in_array($t->id,$locations->toArray());
         });

    }
    public function render()
    {

        $items = $this->qualification->courseMetas();

        if($this->location != ""){
            $items->where('location_id',$this->location);
        }
        if($this->dateEnd != null && $this->dateStart != null){
            $start =date("Y-m-d",strtotime($this->dateStart));
            $end = date("Y-m-d",strtotime($this->dateEnd));
            $items->whereBetween('date',[$start,$end]);
        }
        return view('livewire.list-course-metas',[
            'courseMetas' => $this->sortField != null ? $items->orderBy($this->sortField,$this->sortDirection)->paginate(10) : $items->paginate(10)
        ]);
    }
}
