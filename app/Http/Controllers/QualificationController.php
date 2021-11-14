<?php

namespace App\Http\Controllers;

use App\Models\Qualification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;

class QualificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get current logged in user
        $user = Auth::user();

        // get qualifications that belong to authenticated user
        $qualifications = $user->qualifications;

        return view('qualifications.index', compact('qualifications'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // get current logged in user
        $user = Auth::user();

        // get employee with concatenated first & last name, id
        $employees = \App\Models\Employee::where('user_id', '=', $user->id)
            ->select(DB::raw("CONCAT(firstname,' ',lastname) AS name"),'id')
            ->pluck('name', 'id');

        // get qualification types with name, id
        $qualificationtypes = \App\Models\QualificationType::where('user_id', '=', $user->id)
        ->pluck('name', 'id');

        // get providers with name, id
        $providers = \App\Models\Provider::where('user_id', '=', $user->id)
        ->pluck('name', 'id');

        return view('qualifications.create', compact('employees', 'qualificationtypes', 'providers'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validate([
            'employee_id' => 'required',
            'qualificationtype_id' => 'required',
            'provider_id' => 'required',
            'regno' => 'required|string',
            'expiry_date' => 'required|date'

        ]);

        // create qualifications with validated data
        $qualification = $user->qualifications()->create($storeData);

        // log the qualification on successful creation
        if ($qualification){
            activity('qualification')
                ->performedOn($qualification)
                ->causedBy($user)
                ->log('Qualification created by ' . $user->name);
        }

        return redirect('/qualifications/' . $qualification->id)
            ->with('success', 'Qualification successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load qualification
        $qualification = Qualification::find($id);

        if ($user->can('view', $qualification)) {
            return view('qualifications.show')
                ->with('qualification', $qualification);
        } else {
            echo 'This qualification does not belong to you.';
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load qualification
        $qualification = Qualification::findOrFail($id);

        // get providers with name, id
        $providers = \App\Models\Provider::where('user_id', '=', $user->id)
            ->pluck('name', 'id');

        // get employee with concatenated first & last name, id
        $employees = \App\Models\Employee::where('user_id', '=', $user->id)
            ->select(DB::raw("CONCAT(firstname,' ',lastname) AS name"),'id')
            ->pluck('name', 'id');

        // get qualification types with name, id
        $qualificationtypes = \App\Models\QualificationType::where('user_id', '=', $user->id)
            ->pluck('name', 'id');

        if ($user->can('update', $qualification)) {
            return view('qualifications.edit', compact('qualification','employees', 'qualificationtypes', 'providers'));
        } else {
            echo 'This qualification does not belong to you.';
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validate([
            'employee_id' => 'required',
            'qualificationtype_id' => 'required',
            'provider_id' => 'required',
            'regno' => 'required|string',
            'expiry_date' => 'required|date',
            'slug' => 'string',
            'price' => 'numeric',
        ]);

        // find qualification
        $qualification = Qualification::findOrFail($id);

        // update qualification with validated data
        if(!$qualification->expiry_date->isPast()){
            $qualification->update($updateData);
        }

        // log the qualification on successful update
        activity('qualification')
            ->performedOn($qualification)
            ->causedBy($user)
            ->log('Qualification updated by ' . $user->name);

        return redirect()->refresh()
            ->with('success', 'Qualification has been successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // find employee
        $qualification = Qualification::findOrFail($id);

        // delete employee
        $qualification->delete();

        return redirect('/qualifications')->with('success', 'Qualification has been deleted');
    }
}
