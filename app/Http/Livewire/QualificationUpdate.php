<?php

namespace App\Http\Livewire;

use Livewire\Component;

class QualificationUpdate extends Component
{
    public $qualification;
    public $qualificationtype;
    public $qualificationtype_id;
    public $list;
    protected $listeners = ['qualificationSelected'];


    public function mount()
    {
        $this->qualificationtype = $this->qualification->qualificationtype->name;
        $this->qualificationtype_id = $this->qualification->qualificationtype->id;
    }
    public function render()
    {
        return view('livewire.qualification-update');
    }
     public function qualificationSelected($key,$value,$source)
    {
        $this->qualificationtype = $value;
        $this->qualificationtype_id = $key;
        $this->list = $source;
    }
}
