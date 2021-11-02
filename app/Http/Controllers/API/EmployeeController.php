<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\Employee;
use App\Http\Resources\Employee as EmployeeResource;

class EmployeeController extends BaseController
{

    public function index()
    {
        $user = Auth::user();
        $employees = $user->employees;
        return $this->sendResponse(EmployeeResource::collection($employees), 'Employees fetched.');
    }


    public function store(Request $request)
    {
        $user = Auth::user();

        $input = $request->all();
        $validator = Validator::make($input, [
            'title' => '',
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'email',
            'phone' => '',
            'position' => '',
            'dob' => '',
            'gender' => '',
            'line_1' => '',
            'line_2' => '',
            'line_3' => '',
            'town' => '',
            'city' => '',
            'county' => '',
            'postcode' => '',
            'start_date' => '',
            'end_date' => '',
            'salary' => '',
            'employment' => '',
            'department_id' => '',
            'user_id' => ''
        ]);
        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        $employee = $user->employees()->create($input);
        return $this->sendResponse(new EmployeeResource($employee), 'Employee created.');
    }


    public function show($id)
    {
        $employee = Employee::find($id);
        if (is_null($employee)) {
            return $this->sendError('Employee does not exist.');
        }
        return $this->sendResponse(new EmployeeResource($employee), 'Employee fetched.');
    }


    public function update(Request $request, Employee $employee)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'title' => '',
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'email',
            'phone' => '',
            'position' => '',
            'dob' => '',
            'gender' => '',
            'line_1' => '',
            'line_2' => '',
            'line_3' => '',
            'town' => '',
            'city' => '',
            'county' => '',
            'postcode' => '',
            'start_date' => '',
            'end_date' => '',
            'salary' => '',
            'employment' => '',
            'department_id' => 'required',
            'user_id' => ''
        ]);

        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }

        $employee->title = $input['title'];
        $employee->firstname = $input['firstname'];
        $employee->lastname = $input['lastname'];
        $employee->email = $input['email'];
        $employee->phone = $input['phone'];
        $employee->position = $input['position'];
        $employee->dob = $input['dob'];
        $employee->gender = $input['gender'];
        $employee->line_1 = $input['line_1'];
        $employee->line_2 = $input['line_2'];
        $employee->line_3 = $input['line_3'];
        $employee->town = $input['town'];
        $employee->city = $input['city'];
        $employee->county = $input['county'];
        $employee->postcode = $input['postcode'];
        $employee->start_date = $input['start_date'];
        $employee->end_date = $input['end_date'];
        $employee->salary = $input['salary'];
        $employee->employment = $input['employment'];
        $employee->department_id = $input['department_id'];
        $employee->user_id = $input['user_id'];

        $employee->save();

        return $this->sendResponse(new EmployeeResource($employee), 'Employee updated.');
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();
        return $this->sendResponse([], 'Employee deleted.');
    }
}
