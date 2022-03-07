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
    public $qualificationtype;
    public $qualificationtype_id;
    public $regno;
    public $expiry_date;
    public $courses;
    public $grade;
    public $qualificationTypes = [];
    public $list;
    protected $listeners = ['qualificationSelected'];
    public function render()
    {
        $company = Auth::user()->companies()->first();

        $courses = ExternalQualificationType::all()->pluck('name','id')->toArray();
        $qualificationTypes=  \App\Models\QualificationType::where('company_id', '=', $company->id)->pluck('name','id')->toArray();
        $this->employees = \App\Models\Employee::where('company_id', '=', $company->id)
            ->select(DB::raw("CONCAT(firstname,' ',lastname) AS name"),'id')
            ->get();
        $this->qualificationTypes = $qualificationTypes;

        $this->courses = $courses;

        $this->providers = \App\Models\Provider::where('company_id', '=', $company->id)->get();
        return view('livewire.qualification-create');
    }

    public function qualificationSelected($key,$value,$source)
    {
        $this->qualificationtype = $value;
        $this->qualificationtype_id = $key;
        $this->list = $source;
    }

}
