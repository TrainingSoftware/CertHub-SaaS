<?php

namespace App\Http\Livewire;

use App\Models\Location;
use Livewire\Component;
use Livewire\WithPagination;

class ListCourseMetas extends Component
{
    use WithPagination;
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
             return in_array($t->lid,$locations->toArray());
         });

    }
    public function render()
    {


        $items = $this->qualification->courseMetas();

        if($this->location != ""){
            $items = $this->qualification->courseMetas()->where('location_id',$this->location);
        }
        if($this->dateEnd != null && $this->dateStart != null){
            $start =date("Y-m-d",strtotime($this->dateStart));
            $end = date("Y-m-d",strtotime($this->dateEnd));
            $items = $this->qualification->courseMetas()->whereBetween('date',[$start,$end]);
        }
        return view('livewire.list-course-metas',[
            'courseMetas' => $items->paginate(10)
        ]);
    }
}
