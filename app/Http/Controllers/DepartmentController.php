<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Pagination;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get employees that belong to authenticated user
        $departments = $company->departments;

        return view('departments.index', compact('departments'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('departments.create');
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
            'name' => 'required',
            'body' => 'max:1000|nullable'
        ]);

        // create department with validated data
        $department = $company->departments()->create($storeData);

        // log the department on successful creation
        if ($department){
            activity('department')
                ->performedOn($department)
                ->causedBy($user)
                ->log('Department created by ' . $user->name);
        }

        return redirect('/departments/' . $department->id)
            ->with('success', 'Department successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $department)) {
            return view('departments.show')
                ->with('department', $department);
        } else {
            echo 'This department does not belong to you.';
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Department $department)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('update', $department)) {
            return view('departments.edit', compact('department'));
        } else {
            echo 'This department does not belong to you.';
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Department $department)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validate([
            'name' => 'required',
            'body' => 'nullable'
        ]);

        // update department with validated data
        $department->update($updateData);

        // log the department on successful update
        activity('department')
            ->performedOn($department)
            ->causedBy($user)
            ->log('Department updated by ' . $user->name);

        return redirect()->refresh()
            ->with('success', 'Department has been successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $department)
    {
        // get current logged in user
        $user = Auth::user();

        // delete department
        $department->delete();

        // log the department on successful deletion
        activity('department')
            ->performedOn($department)
            ->causedBy($user)
            ->log('Department updated by ' . $user->name);

        return redirect('/departments')->with('success', 'Department has been deleted');
    }
}
