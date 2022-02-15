<?php

namespace App\Http\Livewire;

use App\Models\Employee;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Login extends Component
{
    public $email;
    public $password;
    public $showCompany = false;
    public $company;
    public $loginError;


    public function render()
    {
        return view('livewire.login');
    }

    public function getCompany(){
         $data = $this->validate([
            'email' => 'required|email|exists:employees,email',
         ]);
         $this->company = Employee::where("email",$this->email)->get()->first()->company;
         if($this->company){
             $this->showCompany = true;
         }
    }
    public function submit()
    {
       $data = $this->validate([
           'email' => 'required|email|exists:employees,email',
           'password' => 'required'
       ]);
       $credentials = ["email" => $this->email,"password"=>$this->password];

        if (Auth::guard('portal')->attempt($credentials)) {
            // Authentication passed...
            return redirect()->intended('portal/home');
        }else{
            $this->loginError = "Invalid Credentials";
        }

    }

}
