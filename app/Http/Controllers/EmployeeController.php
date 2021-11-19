<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Department;
use App\Models\Qualification;
use Illuminate\Http\Request;
use App\Exports\EmployeeExport;
use App\Imports\EmployeeImport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Auth;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        $search = $request->input('q');

        // get employees that belong to authenticated user
        $employees = $company->employees()
            ->where('is_archived', '=', 0)
            //->where('firstname','like','%'.$search.'%')
            //->orWhere('lastname','like','%'.$search.'%')
            //->orWhere('email','like','%'.$search.'%')
            ->paginate(10);

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
        // get current company
        $company = Auth::user()->companies()->first();

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
        $employee = $company->employees()->create($storeData);

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

        // define employment
        $employment = array([
            '' => 'Select employment type',
            'Employed' => 'Employed',
            'Self Employed' => 'Self Employed',
            'Contractor' => 'Contractor'
        ]);

        if ($user->can('update', $employee)) {
            return view('employees.edit', compact('employee', 'departments', 'genders', 'employment'));
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

        // find employee
        $employee = Employee::findOrFail($id);

        // update department with validated data
        $employee->update($updateData);

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

    /**
     * Show qualifications that belong to employee.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function qualifications($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load employee
        $employee = Employee::find($id);

        if ($user->can('view', $employee)) {
            return view('employees.qualifications')
                ->with('employee', $employee);
        } else {
            echo 'This employee does not belong to you.';
        }
    }

    /**
     * Show contacts that belong to employee.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function contacts($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load employee
        $employee = Employee::find($id);

        if ($user->can('view', $employee)) {
            return view('employees.contacts')
                ->with('employee', $employee);
        } else {
            echo 'This employee does not belong to you.';
        }
    }

    /**
     * Show files that belong to employee.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function files()
    {
        // get current logged in user
        $user = Auth::user();

        // load employee
        $employee = Employee::find($id);

        if ($user->can('view', $employee)) {
            return view('employees.files')
                ->with('employee', $employee);
        } else {
            echo 'This employee does not belong to you.';
        }
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function importLanding()
    {
        return view('employees.import');
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function export()
    {
        return Excel::download(new EmployeeExport, 'employees.csv');
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function import()
    {
        Excel::import(new EmployeeImport,request()->file('file'));

        return back()
            ->with('success', 'Employees successfully imported');
    }

}
