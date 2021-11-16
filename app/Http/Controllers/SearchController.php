<?php

namespace App\Http\Controllers;

use App\Http\Resources\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Database\Eloquent;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        $query = $request->input('q');

        //get all the qualifications
        $employees = \App\Models\Employee::query()
            ->where('company_id', '=', $company->id)
            ->orwhere('firstname','like','%'.$query.'%')
            ->orWhere('lastname','like','%'.$query.'%')
            ->orWhere('email','like','%'.$query.'%')
            ->orderBy('id')
            ->paginate(10);

        return view('search', [
            'employees' => $employees,
            'query' => $query
        ]);
    }
}
