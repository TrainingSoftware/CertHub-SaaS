<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepartmentCreateRequest;
use App\Http\Requests\DepartmentUpdateRequest;
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
    public function store(DepartmentCreateRequest $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

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
            return abort(403);
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
            return abort(403);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     */
    public function update(DepartmentUpdateRequest $request, Department $department)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validated();

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
     */
    public function destroy(Department $department)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('delete', $department)) {

            // delete department
            $department->delete();

            // log the department on successful deletion
            activity('department')
                ->performedOn($department)
                ->causedBy($user)
                ->log('Department deleted by ' . $user->name);

            return redirect('/departments')->with('success', 'Department has been deleted');

        } else {

            return abort(403);
        }
    }
}
