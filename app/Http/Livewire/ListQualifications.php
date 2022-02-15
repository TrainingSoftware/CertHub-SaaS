<?php

namespace App\Http\Livewire;

use App\Models\Qualification;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class ListQualifications extends Component
{
    public $qualificationType;
    public $provider;
    public $searchTerm;
    public $qualifications;
    public $expiry = [];
    public $qualificationTypes;
    public $providers;

    public function mount()
    {
         $company = Auth::user()->companies()->first();
         $this->qualificationTypes = $company->qualificationTypes;
         $this->providers = $company->providers;
    }
    public function render()
    {
        $company = Auth::user()->companies()->first();
        $qualifications = $company->qualifications();
        if($this->qualificationType != ""){
            $qualifications
            ->where('qualificationtype_id',$this->qualificationType);
        }
        if($this->provider != ""){
            $qualifications
            ->where('provider_id',$this->provider);
        }
        if(count($this->expiry) > 0){

        }
        $this->qualifications = $qualifications->get();

        return view('livewire.list-qualifications');
    }
}
