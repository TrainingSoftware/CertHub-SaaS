<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeContactCreateRequest;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeeContactController extends Controller
{
    //
    public function store(EmployeeContactCreateRequest $request, Employee $employee)
    {
        $company = Auth::user()->companies()->first();
        $data = $request->validated();
        $data['company_id'] = $company->id;
        $contact = $employee->contacts()->create($data);
         activity('contacts')
                ->performedOn($employee)
                ->causedBy(Auth::user())
                ->log('Contact Added By ' . Auth::user()->name);
         return redirect()->back()->with('success','Employee Contact created successfully');
    }
}
