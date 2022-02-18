<?php

namespace App\Exports;

use App\Models\Employee;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings as headings;

class EmployeeExport implements FromCollection, headings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        // get current logged in user
        $company = Auth::user()->companies()->first();

        $employees = $company->employees;

        return $employees;
    }

    public function headings(): array
    {
        return [
            'id',
            'title',
            'firstname',
            'lastname',
            'email',
            'phone',
            'position',
            'dob',
            'gender',
            'line_1',
            'line_2',
            'line_3',
            'town',
            'city',
            'county',
            'postcode',
            'start_date',
            'end_date',
            'salary',
            'employment',
        ];
    }
}
