<?php

namespace App\Http\Livewire;

use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;
use Spatie\Activitylog\Models\Activity;

class ListActivityLogs extends Component
{
    use WithPagination;
    public $searchTerm;
    public $subjects;
    public $subject;
    public $action;
    public $user;
    public $users;
    protected $paginationTheme = 'bootstrap';
    public function mount()
    {
       $this->subjects =  Activity::all()->groupBy('log_name')->keys();
       $this->users = User::whereHas('activity')->pluck('name','id');

    }
    public function render()
    {

        $activites = Activity::query();

        if($this->subject != ""){
            $activites->where('log_name','=',$this->subject);

        }
        if($this->user != ""){
            $activites->where('causer_id',$this->user);
        }
        if($this->action !=""){
            $activites->where('event', $this->action);
        }

        return view('livewire.list-activity-logs',[
            'activities' => $activites->paginate(10)
        ]);
    }
}
