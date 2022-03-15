<?php

namespace App\Http\Livewire;

use App\Models\Course;
use App\Models\CourseCategory;
use App\Models\CPD;
use App\Models\CPDCategory;
use App\Models\Location;
use App\Models\NVQ;
use App\Models\NVQCategory;
use Livewire\Component;

class TrainingFilter extends Component
{
    public $courseType;
    public $categoryType = [];
    public $category;
    public $actualCourses = [];
    public $locations = [];
    public $selectedCourse;
    public $course;
    public function render()
    {

        if($this->courseType == "cpd"){
            $this->dispatchBrowserEvent('reApplySelect2');
            $this->categoryType = CPDCategory::whereHas('courses')->get();
        }
        if($this->courseType == "nvq"){
            $this->dispatchBrowserEvent('reApplySelect2');
            $this->categoryType = NVQCategory::whereHas('courses')->get();
        }
        if($this->courseType == "commercial"){
            $this->dispatchBrowserEvent('reApplySelect2');
            $this->categoryType = CourseCategory::whereHas('courses')->get();
        }
        if($this->courseType == "commercial" && $this->category != ""){
            $this->dispatchBrowserEvent('reApplySelect2');
            $this->actualCourses = Course::where('category_id',$this->category)->get();
        }
        if($this->courseType == "nvq" && $this->category != ""){
            $this->dispatchBrowserEvent('reApplySelect2');
            $this->actualCourses = NVQ::where('card_type_id',$this->category)->get();
        }
        if($this->courseType == "cpd" && $this->category != ""){
            $this->dispatchBrowserEvent('reApplySelect2');
            $this->actualCourses = CPD::where('cpd_category_id',$this->category)->get();
        }
        if($this->courseType == "commercial" && $this->category != "" && $this->selectedCourse != ""){
            $this->dispatchBrowserEvent('reApplySelect2');
            $locations = Location::whereHas('courseMetas')->get();
            $courseMetas = Course::find($this->selectedCourse)->courseMetas()->pluck('location_id')->toArray();

            $this->locations= $locations->filter(function($t) use ($courseMetas){
                 return in_array($t->id,$courseMetas);
            });
        }

        return view('livewire.training-filter',[
            'courseType' => $this->courseType
        ]);
    }
}
