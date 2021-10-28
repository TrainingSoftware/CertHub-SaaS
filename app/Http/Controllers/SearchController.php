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
        // get current logged in user
        $user = Auth::user();

        $search = $request->input('q');

        //get all the qualifications
        $employees = \App\Models\Employee::query()
            ->where('firstname','like','%'.$search.'%')
            ->orWhere('lastname','like','%'.$search.'%')
            ->orWhere('email','like','%'.$search.'%')
            ->orderBy('id')
            ->paginate(6);

        return view('search', [
            'employees' => $employees,
            'query' => $search
        ]);
    }
}
