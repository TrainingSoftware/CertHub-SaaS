<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use PDF;

class EmployeeQualificationPortfolioController extends Controller
{
    public function generatePortfolio(Employee $employee)
    {
        view()->share('employee',$employee);

        $pdf = PDF::loadView('employees.portfolio', $employee);

        return $pdf->download($employee->firstname . '_' . $employee->lastname . '_CertHub_Portfolio.pdf');
    }
}
