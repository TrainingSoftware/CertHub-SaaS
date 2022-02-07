<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\DepartmentCreateRequest;
use App\Http\Requests\DepartmentUpdateRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\Department;
use App\Http\Resources\Department as DepartmentResource;

class DepartmentController extends BaseController
{

    public function index()
    {
         // get current company
        $company = Auth::user()->companies()->first();

        // get employees that belong to authenticated user
        $departments = $company->departments;
        return $this->sendResponse(DepartmentResource::collection($departments), 'Departments fetched.');
    }


    public function store(DepartmentCreateRequest $request)
    {

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
        return $this->sendResponse(new DepartmentResource($department), 'Department created.');
    }


    public function show($id)
    {
        $department = Department::find($id);
        if (is_null($department)) {
            return $this->sendError('Department does not exist.');
        }
        return $this->sendResponse(new DepartmentResource($department), 'Department fetched.');
    }


    public function update(DepartmentUpdateRequest $request, Department $department)
    {
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

        return $this->sendResponse(new DepartmentResource($department), 'Department updated.');
    }

    public function destroy(Department $department)
    {
        $department->delete();
        return $this->sendResponse([], 'Department deleted.');
    }
}
