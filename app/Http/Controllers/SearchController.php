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

        $query = $request->input('q');

        //get all the qualifications
        $employees = \App\Models\Employee::query()
            ->where('user_id', '=', $user->id)
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
