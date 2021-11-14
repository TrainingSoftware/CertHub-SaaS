<?php

namespace App\Imports;

use App\Models\Employee;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\ToModel;

class EmployeeImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        // get auth user id
        $user = Auth::id();

        return new Employee([
            'title' => $row[0],
            'firstname' => $row[1],
            'lastname' => $row[2],
            'email' => $row[3],
            'phone' => $row[4],
            'position' => $row[5],
            'gender' => $row[6],
            'line_1' => $row[7],
            'line_2' => $row[8],
            'line_3' => $row[9],
            'town' => $row[10],
            'city' => $row[11],
            'county' => $row[12],
            'postcode' => $row[13],
            'employment' => $row[14],
            'user_id' => $user
        ]);
    }
}
