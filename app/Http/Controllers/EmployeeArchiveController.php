<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeeArchiveController extends Controller
{
    public function archive(Request $request, Employee $employee)
    {
        $employee->update([
            'is_archived' => 1
        ]);
        return redirect()->refresh()
            ->with('success', 'Employee has been successfully archived');
    }

    public function archived(Request $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        $search = $request->input('q');

        // get employees that belong to authenticated user
        $employees = $company->employees()
            ->where('is_archived', '=', 1)
            //->where('firstname','like','%'.$search.'%')
            //->orWhere('lastname','like','%'.$search.'%')
            //->orWhere('email','like','%'.$search.'%')
            ->paginate(10);

        return view('employees.archived', compact('employees'));
    }
}
