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
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get qualifications that belong to authenticated user
        $qualifications = $company->qualifications;

        return view('qualifications.index', compact('qualifications'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get employee with concatenated first & last name, id
        $employees = \App\Models\Employee::where('company_id', '=', $company->id)
            ->select(DB::raw("CONCAT(firstname,' ',lastname) AS name"),'id')
            ->get();

        // get qualification types with name, id
        $qualificationtypes = \App\Models\QualificationType::where('company_id', '=', $company->id)->get();

        // get providers with name, id
        if ($request->provider){
            $providers = \App\Models\Provider::where('company_id', '=', $company->id)
                ->where('id', '=', $request->provider)
            ->get();
        } else {
            $providers = \App\Models\Provider::where('company_id', '=', $company->id)->get();
        }

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
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validate([
            'employee_id' => 'required',
            'qualificationtype_id' => 'required',
            'provider_id' => 'required',
            'regno' => 'nullable|string',
            'expiry_date' => 'required|date'

        ]);

        // create qualifications with validated data
        $qualification = $company->qualifications()->create($storeData);

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
    public function show(Qualification $qualification)
    {
        // get current logged in user
        $user = Auth::user();

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
    public function edit(Qualification $qualification)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        if ($user->can('update', $qualification)) {

            // get providers with name, id
            $providers = \App\Models\Provider::where('company_id', '=', $company->id)
                ->get();

            // get employee with concatenated first & last name, id
            $employees = \App\Models\Employee::where('company_id', '=', $company->id)
                ->select(DB::raw("CONCAT(firstname,' ',lastname) AS name"),'id')
                ->get();

            // get qualification types with name, id
            $qualificationtypes = \App\Models\QualificationType::where('company_id', '=', $company->id)
                ->get();

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
    public function update(Request $request, Qualification $qualification)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validate([
            'employee_id' => 'required',
            'qualificationtype_id' => 'required',
            'provider_id' => 'required',
            'expiry_date' => 'required',
            'slug' => 'string',
            'price' => 'numeric',
        ]);

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
    public function destroy(Qualification $qualification)
    {
        // delete employee
        $qualification->delete();

        return redirect('/qualifications')->with('success', 'Qualification has been deleted');
    }
}
