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
        // get current logged in user
        $user = Auth::user();

        // get employees that belong to authenticated user
        $departments = $user->departments;

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
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validate([
            'name' => 'required',
            'body' => 'max:1000|nullable'
        ]);

        // create department with validated data
        $department = $user->departments()->create($storeData);

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
    public function show($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load department
        $department = Department::find($id);

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
    public function edit($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load department
        $department = Department::findOrFail($id);

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
    public function update(Request $request, $id)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validate([
            'name' => 'required',
            'body' => 'nullable'
        ]);

        // find department and update with validated data
        $department = Department::whereId($id)->update($updateData);

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
    public function destroy($id)
    {
        // get current logged in user
        $user = Auth::user();

        // find department
        $department = Department::findOrFail($id);

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
