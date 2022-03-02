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

    public function index()
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get employees that belong to authenticated user
        $departments = $company->departments;

        return view('departments.index', compact('departments'));
    }


    public function create()
    {
        return view('departments.create');
    }


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


        return redirect('/departments/' . $department->id)
            ->with('success', 'Department successfully created');
    }


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


    public function update(DepartmentUpdateRequest $request, Department $department)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validated();

        // update department with validated data
        $department->update($updateData);



        return redirect()->refresh()
            ->with('success', 'Department has been successfully updated');
    }


    public function destroy(Department $department)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('delete', $department)) {

            // delete department
            $department->delete();

            return redirect('/departments')->with('success', 'Department has been deleted');

        } else {

            return abort(403);
        }
    }
}
