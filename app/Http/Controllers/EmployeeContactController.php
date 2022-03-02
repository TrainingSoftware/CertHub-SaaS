<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeContactCreateRequest;
use App\Http\Requests\EmployeeContactUpdateRequest;
use App\Models\Contact;
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

        return redirect()->back()->with('success','Employee Contact created successfully');
    }
    public function edit(Employee $employee ,Contact $contact)
    {
        return view('employees.contact.edit',compact('contact','employee'));
    }
    public function update(EmployeeContactUpdateRequest $request,Employee $employee,Contact $contact)
    {
        $data = $request->validated();
        $contact->update($data);

        return redirect()->back()->with('success','Contact updated successfully');
    }
    public function destroy(Employee $employee,Contact $contact)
    {
        $contact->delete();
        return redirect(route('employee.contacts',$employee))->with('success','contact deleted successfully');
    }
}
