<?php

namespace App\Http\Livewire;

use App\Models\Qualification;
use App\Traits\Sortable;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ListQualifications extends Component
{
    use WithPagination,Sortable;
    protected $paginationTheme = 'bootstrap';
    public $qualificationType;
    public $provider;
    public $searchTerm;
    public $expiryStart;
    public $expiryEnd;
    public $qualificationTypes;
    public $providers;


    public function mount()
    {
         $company = Auth::user()->companies()->first();
         $this->qualificationTypes = $company->qualificationTypes->filter(function($t) use ($company){
            return in_array($t->id,$company->qualifications()->pluck('qualificationtype_id')->toArray());
         });
         $this->providers = $company->providers->filter(function($t) use ($company){
            return in_array($t->id,$company->qualifications()->pluck('provider_id')->toArray());
         });
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
        if($this->expiryStart != "" && $this->expiryEnd != ""){
            $newStart = date('Y-m-d',strtotime($this->expiryStart));
            $newEnd = date('Y-m-d',strtotime($this->expiryEnd));
            $qualifications
                ->whereBetween('expiry_date',[$newStart,$newEnd]);
        }


        return view('livewire.list-qualifications',[
            'qualifications' => $this->sortField != null ? $qualifications->orderBy($this->sortField,$this->sortDirection)->paginate(10) : $qualifications->paginate(10)
        ]);
    }
}
