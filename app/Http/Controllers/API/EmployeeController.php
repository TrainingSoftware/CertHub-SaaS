<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\EmployeeCreateRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use App\Http\Resources\EmployeeCollection;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Validator;
use App\Models\Employee;
use App\Http\Resources\Employee as EmployeeResource;

class EmployeeController extends BaseController
{

    public function index()
    {
        $company = Auth::user()->companies()->first();

        // get employees that belong to authenticated user
        $employees = $company->employees()
            ->paginate(10);

        return $this->sendResponse(new EmployeeCollection($employees), 'Employees fetched.');
    }


    public function store(EmployeeCreateRequest $request)
    {
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


    public function update(EmployeeUpdateRequest $request, Employee $employee)
    {
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validated();

        // update department with validated data
        $employee->update($updateData);

        // log the provider on successful update
        activity('employee')
            ->performedOn($employee)
            ->causedBy($user);

        return $this->sendResponse(new EmployeeResource($employee), 'Employee updated.');
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();
        return $this->sendResponse([], 'Employee deleted.');
    }
}
