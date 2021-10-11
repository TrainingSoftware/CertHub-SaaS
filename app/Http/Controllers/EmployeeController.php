<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Pagination;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = Employee::all();
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
        $storeData = $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'phone' => 'required|numeric|digits:11',
            'user_id' => 'required|exists:users,id'
        ]);

        $employee = Employee::create($storeData);

        return redirect('/employees/' . $employee->id )
            ->with('success', 'Employee successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employee = Employee::find($id);

        return view('employees.show')
            ->with('employee', $employee);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $employee = Employee::findOrFail($id);
        $departments = \App\Models\Department::pluck('name', 'id');
        $genders = array([
            '' => 'Select gender',
            'male' => 'Male',
            'female' => 'Female'
        ]);
        return view('employees.edit', compact('employee', 'departments', 'genders'));
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

        Employee::whereId($id)->update($updateData);

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
        $employee = Employee::findOrFail($id);
        $employee->delete();

        return redirect('/employees')->with('success', 'Employee has been deleted');
    }
}
