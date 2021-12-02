<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeeArchiveController extends Controller
{
    public function archive(Request $request, Employee $employee)
    {
        $employee->archive();
        return redirect('/employees')
            ->with('success', 'Employee has been successfully archived');
    }

    public function unarchive(Request $request, Employee $employee)
    {
        $employee->unArchive();
        return redirect('/employees/'. $employee->id)
            ->with('success', 'Employee has been successfully archived');
    }

    public function archived(Request $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get employees that are archived and belong to authenticated user
        $employees = $company->employees()->onlyArchived()
            ->paginate(10);

        return view('employees.archive', compact('employees'));
    }
}
