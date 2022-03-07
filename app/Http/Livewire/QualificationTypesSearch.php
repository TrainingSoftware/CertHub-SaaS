<?php

namespace App\Http\Livewire;

use App\Models\ExternalQualificationType;
use App\Models\QualificationType;
use Livewire\Component;

class QualificationTypesSearch extends Component
{
    public $qualificationTypes;
    public $searchTerm;
    public $selected = 'Custom';
    public $courses;
    public function render()
    {
        if($this->searchTerm != ''){
            $this->courses = ExternalQualificationType::where('name', 'like', '%' . $this->searchTerm . '%')
                ->pluck('name','id')->toArray();
            $this->qualificationTypes = QualificationType::where('name', 'like', '%' . $this->searchTerm . '%')
                ->pluck('name','id')->toArray();
        }
        return view('livewire.qualification-types-search',[
            'courses' => $this->courses,
            'qualificationTypes' => $this->qualificationTypes
        ]);
    }
    public function updateQualificationType($key,$value,$source)
    {
      $this->emit('qualificationSelected',$key,$value,$source);
    }
    public function openLibrary()
    {
        $this->selected = "Library";
    }
    public function openCustom()
    {
        $this->selected ='Custom';
    }
}
