<?php

namespace App\Http\Controllers\API;

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
        $user = Auth::user();
        $departments = $user->departments;
        return $this->sendResponse(DepartmentResource::collection($departments), 'Departments fetched.');
    }


    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'body' => '',
            'user_id' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        $department = Department::create($input);
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


    public function update(Request $request, Department $department)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'body' => '',
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }

        $department->name = $input['name'];
        $department->body = $input['body'];
        $department->user_id = $input['user_id'];

        $department->save();

        return $this->sendResponse(new DepartmentResource($department), 'Department updated.');
    }

    public function destroy(Department $department)
    {
        $department->delete();
        return $this->sendResponse([], 'Department deleted.');
    }
}
