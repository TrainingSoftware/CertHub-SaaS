<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        // get current logged in user
        $user = Auth::user();

        // get employees that belong to authenticated user
        $employees = $user->employees;

        return view('employees.index', compact('employees'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('employees.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'phone' => 'required|numeric|digits:11'
        ]);

        // create employee with validated data
        $employee = $user->employees()->create($storeData);

        // log the provider on successful creation
        if ($employee){
            activity('employee')
                ->performedOn($employee)
                ->causedBy($user)
                ->log('Employee created by ' . $user->name);
        }

        return redirect('/employees/' . $employee->id )
            ->with('success', 'Employee successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load employee
        $employee = Employee::find($id);

        if ($user->can('view', $employee)) {
            return view('employees.show')
                ->with('employee', $employee);
        } else {
            echo 'This employee does not belong to you.';
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load employee
        $employee = Employee::findOrFail($id);

        // get departments
        $departments = Department::pluck('name', 'id');

        // define genders
        $genders = array([
            '' => 'Select gender',
            'Male' => 'Male',
            'Female' => 'Female'
        ]);

        if ($user->can('update', $employee)) {
            return view('employees.edit', compact('employee', 'departments', 'genders'));
        } else {
            echo 'This employee does not belong to you.';
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validate([
            'firstname' => 'required',
            'lastname'  => 'required',
            'email' => 'required|email',
            'phone' => 'required|numeric|digits:11',
            'position' => 'string|nullable',
            'dob' => 'date|nullable',
            'gender' => 'string|nullable',
            'line_1' => 'string|nullable',
            'line_2' => 'string|nullable',
            'line_3' => 'string|nullable',
            'town' => 'string|nullable',
            'city' => 'string|nullable',
            'county' => 'string|nullable',
            'postcode' => 'string|nullable',
            'start_date' => 'date|nullable',
            'end_date' => 'date|nullable',
            'salary' => 'numeric|nullable',
            'employment' => 'string|nullable',
            'department_id' => 'exists:departments,id|int',
        ]);

        // find employee and update with validated data
        $employee = Employee::whereId($id)->update($updateData);

        // log the provider on successful update
        activity('employee')
            ->performedOn($employee)
            ->causedBy($user)
            ->log('Employee updated by ' . $user->name);

        return redirect()->refresh()
            ->with('success', 'Employee has been successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // find employee
        $employee = Employee::findOrFail($id);

        // delete employee
        $employee->delete();

        return redirect('/employees')->with('success', 'Employee has been deleted');
    }
}
