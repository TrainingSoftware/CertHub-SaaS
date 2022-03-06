<?php

namespace App\Http\Livewire;

use App\Models\ExternalQualificationType;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Livewire\Component;

class QualificationCreate extends Component
{
    public $employees;
    public $providers;
    public $employee_id;
    public $provider_id;
    public $qualificationtype_id;
    public $regno;
    public $expiry_date;
    public $grade;
    public $qualificationTypes = [];
    public $list;
    public function render()
    {
        $company = Auth::user()->companies()->first();

        $courses = ExternalQualificationType::all()->pluck('name','id')->toArray();
        $qualificationTypes=  \App\Models\QualificationType::where('company_id', '=', $company->id)->pluck('name','id')->toArray();
        $this->employees = \App\Models\Employee::where('company_id', '=', $company->id)
            ->select(DB::raw("CONCAT(firstname,' ',lastname) AS name"),'id')
            ->get();
        if($this->list === "custom"){
            $this->qualificationTypes = $qualificationTypes;
        }
        if($this->list === "library"){
            $this->qualificationTypes = $courses;
        }


        $this->providers = \App\Models\Provider::where('company_id', '=', $company->id)->get();
        return view('livewire.qualification-create');
    }

    public function hydrate()
    {
        $this->emit('select2');
    }
}
