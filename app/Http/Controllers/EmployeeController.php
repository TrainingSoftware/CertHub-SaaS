<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeCreateRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use App\Models\Employee;
use App\Models\Department;
use App\Models\Qualification;
use Illuminate\Http\Request;
use App\Exports\EmployeeExport;
use App\Imports\EmployeeImport;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

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

        // get employees that belong to authenticated user
        $employees = $company->employees()
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
     */

    public function store(EmployeeCreateRequest $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

        // create employee with validated data
        $employee = $company->employees()->create(array_merge($storeData, [
            'password' => Hash::make(Str::random(40))
        ]));

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
    public function show(Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

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
    public function edit(Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

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
            return abort(403);
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EmployeeUpdateRequest $request, Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validated();

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
    public function destroy(Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('delete', $employee)) {

            // delete department
            $employee->delete();

            // log the department on successful deletion
            activity('employee')
                ->performedOn($employee)
                ->causedBy($user)
                ->log('Employee deleted by ' . $user->name);

                return redirect('/employees')->with('success', 'Employee has been deleted');

        } else {

            return abort(403);
        }
        
    }

    /**
     * Show qualifications that belong to employee.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function qualifications(Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $employee)) {
            return view('employees.qualifications')
                ->with('employee', $employee);
        } else {
            return abort(403);
        }
    }

    /**
     * Show contacts that belong to employee.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function contacts(Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

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

    public function files(Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

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
